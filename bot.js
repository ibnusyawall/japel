'use strict'

/**
  * automatic schedule is sent to the mobile during the specified hours and days
  * made by ibnusyawall
*/

const { Module } = require('./lib/custom')
require('dotenv').config()
const client = require('twilio')(process.env.accId, process.env.auth)

const kirim = (ke, dari, data) => {
  client.messages.create({
    body: data,
    from: dari,
    to: ke
  })
}

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
    let days   = ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

    let date = new Date()

    let h1 = date.getDate();
    let h2 = date.getMonth();
    let h3 = days[date.getDay()]
    let h4 = (date.getYear() < 1000) ? date.getYear() + 1900 : date.getYear()

    return `${h3}, ${h1}-${months[h2]}-${h4}`
  }
}

class Index {
  constructor(date, logs) {
    const dt     = new ambilTanggal()
    const _date_ = dt.date_()

    const log = new Date()
    this.logs = log.getHours()+':'+log.getMinutes()+':'+log.getSeconds()

    this.date = _date_

    _.cetak(`\n [${this.logs}] Bot sedang berjalan di latar belakang.`)
  }

  bot_() {
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

      const hari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat']
      const date = new Date()

      if (date.getHours() == 06) {
        if (hari[date.getDay()] == 'senin'.toString()) {
          kirim(process.env.To, process.env.From,
            `[ Jadwal Pelajaran ${process.env.Title} ]\n\n[ tanggal ] : ${this.date}\n\n[•] Senin : ${rh1}\n\n[•] Total : ${rt1} Mata Pelajaran \npowerd by : bot stch`
          )
          _.cetak(`\n [${this.logs}] Message successfully sent`)
        }
        else if (hari[date.getDay()] == 'selasa'.toString()) {
          kirim(process.env.To, process.env.From,
            `[ Jadwal Pelajaran ${process.env.Title} ]\n\n[ tanggal ] : ${this.date}\n\n[•] Selasa : ${rh2}\n\n[•] Total : ${rt2} Mata Pelajaran\npowerd by : bot stch`
          )
          _.cetak(`\n [${this.logs}] Message successfully sent`)
        }
        else if (hari[date.getDay()] == 'rabu'.toString()) {
          kirim(process.env.To, process.env.From,
            `[ Jadwal Pelajaran ${process.env.Title} ]\n\n[ tanggal ] : ${this.date}\n\n[•] Rabu : ${rh3}\n\n[•] Total : ${rt3} Mata Pelajaran\npowerd by : bot stch`
          )
          _.cetak(`\n [*] Message successfully sent`)
        }
        else if (hari[date.getDay()] == 'kamis'.toString()) {
          kirim(process.env.To, process.env.From,
            `[ Jadwal Pelajaran ${process.env.Title} ]\n\n[ tanggal ] : ${this.date}\n\n[•] Kamis : ${rh4}\n\n[•] Total : ${rt4} Mata Pelajaran\npowerd by : bot stch`
          )
          _.cetak(`\n [${this.logs}] Message successfully sent`)
        }
        else if (hari[date.getDay()] == 'jumat'.toString()) {
          kirim(process.env.To, process.env.From,
            `[ Jadwal Pelajaran ${process.env.Title} ]\n\n[ tanggal ] : ${this.date}\n\n[•] Jumat : ${rh5}\n\n[•] Total : ${rt6} Mata Pelajaran\npowerd by : bot stch`
          )
          _.cetak(`\n [${this.logs}] Message successfully sent`)
        }

      }
    })
  }
}

const main = new Index(); main.bot_()
