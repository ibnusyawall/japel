'use strict'

/* made by ibnusyawall */

class Module {
  constructor (user, pass, host, db, get) {
    this.user = user
    this.pass = pass
    this.host = host
    this.db   = db
    const mysql = require('mysql')
    this.get    = mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.pass,
        database: this.db
    })
  }
  senin (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        data: results[0]['senin']
      })
    })
  }

  selasa (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        data: results[0]['selasa']
      })
    })
  }

  rabu (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        data: results[0]['rabu']
      })
    })
  }

  kamis (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        data: results[0]['kamis']
      })
    })
  }

  jumat (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        data: results[0]['jumat']
      })
    })
  }

  all (callback) {
    this.get.query("SELECT * FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {
        code: 200,
        senin: results[0]['senin'],
        selasa: results[0]['selasa'],
        rabu: results[0]['rabu'],
        kamis: results[0]['kamis'],
        jumat: results[0]['jumat']
      })
    })
  }

  hapus (callback) {
    this.get.query("DELETE FROM hari WHERE 1", (err, results, fields) => {
      callback(undefined, {code: 200, message: 'table has deleted!'})
    })
  }

  install (h1, h2, h3, h4, h5, callback) {
    let data = {senin: h1, selasa: h2, rabu: h3, kamis: h4, jumat: h5}
    let sql  = "INSERT INTO hari SET ?"
    let query= this.get.query(sql, data, (err, resulta) => {
      if (err) throw err
      callback(undefined, {
        code: 200,
        message: 'success'
      })
    })
  }

  help (callback) {
    let data  = "\n [-] JaPel Help Infomation [-]\n\n [*] Fiture : \n  - View Jadwal per Hari\n  - Reset Jadwal\n  - Install Jadwal\n  - Terintegrasi via Live SMS\n  - Bot Otomatis \n\n [1] Setup Config in File .env\n [2] Fisrt choice option 'install'\n [3] If success, next choice option 'view' for view jadwal\n [#] This tools using sms broadcast Twilio\n"
    let _data = "\n View Day : \n  -- senin (view jadwal senin)\n  -- selasa (view jadwal selasa)\n  -- rabu (view jadwal rabu)\n  -- kamis (view jadwal kamis)\n  -- jumat (view jadwal jumat)\n  -- all (view all jadwal)\n"
    let copyright = "\n Running bot : \n  $ node bot & \n\n [+] Coded By: ibnusyawall [+]\n [i] 082299265151\n\n [!] How to exit ? stuck ? enter : 'CTRL + C'"
    callback(undefined, {
      code: 200,
      d1: data,
      d2: _data,
      d3: copyright
    })
  }

}

module.exports = { Module }
	
