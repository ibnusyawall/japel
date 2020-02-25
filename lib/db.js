'use strict'

/* made by ibnusyawall */

const { Module } = require('./custom')
require('dotenv').config()
const Table  = require('cli-table')

const perH = new Table({
  head: ['Hari', 'Mapel', 'Total'],
  colWidths: [10, 40, 8]
})

const col2 = new Table({
  head: ['Status', 'Message'],
  colWidths: [20, 20]
})

class M {
  cetak(data) {
    return console.log(data)
  }
}

const use = new Module(process.env.USER, process.env.PASS, process.env.HOST, process.env.DB, 'get')
const _   = new M()

class ambilTanggal {
  date_ () {
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let days   = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

    let date = new Date()

    let h1 = date.getDate();
    let h2 = date.getMonth();
    let h3 = days[date.getDay()]
    let h4 = (date.getYear() < 1000) ? date.getYear() + 1900 : date.getYear()

    return `${h3}, ${h1}-${months[h2]}-${h4}`
  }
}

class Index {
  constructor(date) {
    const dt     = new ambilTanggal()
    const _date_ = dt.date_()

    this.date = _date_
  }
  get_senin() {
    use.senin((error, {code, data} = {} ) => {
      const res = data.split(',').join(' ')
      const len = data.split(' ').length
        perH.push(['SENIN', res, len])
      _.cetak('\n' + perH.toString())
    })
  }
  get_selasa() {
    use.selasa((error, {code, data} = {} ) => {
      const res = data.split(',').join(' ')
      const len = data.split(' ').length
        perH.push(['SELASA', res, len])
      _.cetak('\n' +  perH.toString())
    })
  }
  get_rabu() {
    use.rabu((error, {code, data} = {} ) => {
      const res = data.split(',').join(' ')
      const len = data.split(' ').length
        perH.push(['RABU', res, len])
      _.cetak('\n' + perH.toString())
    })
  }
  get_kamis() {
    use.kamis((error, {code, data} = {} ) => {
      const res = data.split(',').join(' ')
      const len = data.split(' ').length
        perH.push(['KAMIS', res, len])
      _.cetak('\n' + perH.toString())
    })
  }
  get_jumat() {
    use.jumat((error, {code, data} = {} ) => {
      const res = data.split(',').join(' ')
      const len = data.split(' ').length
        perH.push(['JUMAT', res, len])
      _.cetak('\n' + perH.toString())
    })
  }
  get_all() {
    use.all((error, {code, senin, selasa, rabu, kamis, jumat} = {} ) => {
      const rh1 = senin.split(',').join(' ')
      const rh2 = selasa.split(',').join(' ')
      const rh3 = rabu.split(',').join(' ')
      const rh4 = kamis.split(',').join(' ')
      const rh5 = jumat.split(',').join(' ')

      const rt1 = senin.split(' ').length
      const rt2 = selasa.split(' ').length
      const rt3 = rabu.split(' ').length
      const rt4 = kamis.split(' ').length
      const rt5 = jumat.split(' ').length

      const rth = rt1+rt2+rt3+rt4+rt5
        perH.push(
          ['SENIN', rh1, rt1],
          ['SELASA', rh2, rt2],
          ['RABU', rh3, rt3],
          ['KAMIS', rh4, rt4],
          ['JUMAT', rh5, rt5]
        );  _.cetak('\n' + perH.toString())
    })
  }

  reset() {
    use.hapus((error, {code, message} = {} ) => {
      col2.push(
        [code, message]
      ); _.cetak('\n' + col2.toString()); ; _.cetak("\n [√] Next, input option 'install' for install jadwal")
    })
  }

  _install(h1, h2, h3, h4, h5) {
    use.install(h1, h2, h3, h4, h5, (error, {code, message} = {} ) => {
      col2.push(
        [code, message]
      ); _.cetak('\n' + col2.toString()); _.cetak("\n [√] Next, input option 'view' for view jadwal")
    })
  }

  _help () {
    use.help((error, {d1, d2, d3} = {} ) => {
      _.cetak(d1); _.cetak(d2); _.cetak(d3)
    })
  }
}

module.exports = { Index }

