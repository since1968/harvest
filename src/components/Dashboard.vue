<template>
  <div>
    <!-- <input type="text" v-model="addr"> -->
    <!-- <button v-on:click="polling = !polling">{{polling}}</button> -->
    <gauge
      v-if="user"
      title="Hashrate"
      width="235"
      height="246"
      unit="sol/s"
      :value="user.hashrate"
    />
    <gauge
      v-if="stats"
      title="windspeed"
      width="235"
      height="246"
      unit="m/s"
      :value="stats.windspeed"
    />
   <!--  <gauge
      v-if="stats"
      title="GPU temperature"
      width="255"
      height="246"
      unit="°C"
      :value="stats.gputemp"
    />
    <gauge
      v-if="stats"
      title="GPU LOAD"
      width="255"
      height="246"
      unit="W"
      :value="stats.load"
    /> -->
    <panel
      v-if="user"
      title="address"
      unit=""
      :value="user.account"
    />
    <panel
      v-if="user"
      title="Unconfirmed Balance"
      unit="zec"
      :value="user.unconfirmed_balance"
    />
    <panel
      v-if="user"
      title="Balance"
      unit="zec"
      :value="user.balance"
    />
    <panel
      v-if="stats"
      title="outside temperature"
      unit="°C"
      :value="stats.outsidetemp"
    />
    <panel
      v-if="stats"
      title="GPU load"
      unit="W"
      :value="stats.load"
    />
    <panel
      v-if="stats"
      title="GPU temp"
      unit="°C"
      :value="stats.gputemp"
    />
    <panel
      v-if="payments"
      title="payouts"
      unit=""
      :value="payments.length"
    />
    <panel
      v-if="lastblocknumber"
      title="last block number"
      unit=""
      :value="lastblocknumber"
    />
    <panel
      v-if="avgblocktime"
      title="avg blocktime"
      unit="sec"
      :value="avgblocktime"
    />
    <panel
      v-if="prices"
      title="zec Price"
      unit="btc"
      :value="prices.price_btc"
    />
    <panel
      v-if="prices"
      title="zec Price"
      unit="€"
      :value="prices.price_eur"
    />
    <panel
      v-if="prices"
      title="zec Price"
      unit="$"
      :value="prices.price_usd"
    />
    <panel
      v-if="totalpayout"
      title="total mined"
      unit="zec"
      :value="totalpayout"
    />
    <panel
      v-if="totalpayout"
      title="total mined"
      unit="$"
      :value="totalpayout"
    />
    <list
      v-if="lastblocks"
      title="Last block"
      :data="lastblocks"
    />
    <linechartsmall
      v-if="history"
      title="ZEC price history"
      width="550"
      height="173"
      unit="$"
      :data="priceHistory"
      :margin="{top: 0, right: 45, bottom: 20, left: 15}"
    />
  </div>
</template>

<script>
import { json, csvParseRows, text } from 'd3'
import Linechartsmall from './Linechartsmall'
import Gauge from './Gauge'
import Panel from './Panel'
import List from './List'
import Rx from 'rxjs/Rx'

const parseDate = (date) => new Date(date * 1000)

export default {
  name: 'dashboard',
  components: { Gauge, Panel, List, Linechartsmall },
  props: ['polling', 'pollingTime', 'addr'],
  data () {
    return {
      url: 'https://api.nanopool.org/v1/zec',
      csvUrl: 'https://julianoliver.com/harvest/nodes/node1.csv',
      stats: null,
      priceUrl: 'https://min-api.cryptocompare.com/data/histoday?fsym=ZEC&tsym=EUR&limit=200&aggregate=1',
      priceHistory: null
    }
  },
  subscriptions () {
    return {
      timepoll: Rx.Observable
        .timer(0, this.pollingTime)
        .takeWhile((v) => this.polling ? true : v === 0)
        .map((a) => +new Date())
        .do(a => { this.getStats() }) // super hacky
      ,
      lastblocknumber: this.$reactivelyFetchData(() =>
        `${this.url}/network/lastblocknumber/?${this.timepoll}`
      ),
      lastblocks: this.$reactivelyFetchData(() =>
        `${this.url}/blocks/${this.lastblocknumber}/100`
      ),
      history: this.$reactivelyFetchData(() =>
        `${this.url}/history/${this.addr}?${this.timepoll}`
        )
        .map(data => {
          data.sort((a,b) => a.date - b.date)
          return data.map(d => {
            return {
              date: parseDate(d.date),
              value: d.hashrate
            }
          })
        })
      ,
      user: this.$reactivelyFetchData(() =>
        `${this.url}/user/${this.addr}?${this.timepoll}`
      ),
      payments: this.$reactivelyFetchData(() =>
        `${this.url}/payments/${this.addr}?${this.timepoll}`
      ),
      avgblocktime: this.$reactivelyFetchData(() =>
        `${this.url}/network/avgblocktime?${this.timepoll}`
      ),
      prices: this.$reactivelyFetchData(() =>
        `${this.url}/prices?${this.timepoll}`
      ),
      totalpayout: this.$watchAsObservable(() => this.payments)
        .pluck('newValue')
        .map(payouts => payouts.reduce((a,c) => a + c.amount, 0))
        .map(amount => (amount * (this.prices ? this.prices.price_eur : 271)))
      // ,
      // stats: this.$watchAsObservable(() => this.timepoll)
      //   .pluck('newValue')
      //   // .switchMap(Rx.Observable.fromPromise(this.getStats()))
      //   .do(d => { console.log(d)})
    }
  },
  methods: {
    getStats: function(){
      const header = ['timestamp', 'windspeed','outsidetemp','gputemp','load']
      text(this.csvUrl, text => {
        const parsed = csvParseRows(text)[0]
        if(parsed.length) {
          const data = {}
          header.forEach((name, i) => {
            data[name] = parsed[i]
          })
          data.date = new Date(data.timestamp*1000)
          this.stats = data
          // console.log(data)
          // this.history.push(data)
        }
      })
    },
    getPriceHistory: function(){
      json(this.priceUrl, data => {
        if(data && data.Data){
          this.priceHistory = data.Data.map(d => {
            return {
              date: new Date(d.time*1000),
              value: d.close
            }
          })
        }

      })
    }
  },
  created () {
    this.getPriceHistory()
  }
}
</script>

<style scoped>
  input {
    background: none;
    color: #999;
    font-family: 'Titillium Web';
    display: block;
    font-size: 1.2em;
    border:0;

  }

  body {
    overflow: hidden;
  }
</style>
