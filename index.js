'use strict'

/**
  * Lesson schedule, serves to see the school lesson schedule
  * made by ibnusyawall
*/

const { Index } = require('./lib/db')
const print     = console.log
const readline  = require('readline')

const main = new Index()

const ask = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

print('\n              [!]  Jadwal Pelajaran  [!] \n')
print(" [×] Usaege : 'view' | 'reset' | 'install' | 'help' [×]\n")

ask.question(' [?] Option : ', (options) => {
  if (options == 'view'.toLowerCase()) {
    ask.question('\n [•] Enter days : ', (day) => {
      if (day == 'SENIN'.toLowerCase().toString()) {
        return main.get_senin()
      } else if (day == 'SELASA'.toLowerCase().toString()) {
        return main.get_selasa()
      } else if (day == 'RABU'.toLowerCase().toString()) {
        return main.get_rabu()
      } else if (day == 'KAMIS'.toLowerCase().toString()) {
        return main.get_kamis()
      } else if (day == 'JUMAT'.toLowerCase().toString()) {
        return main.get_jumat()
      } else if (day == 'ALL'.toLowerCase().toString()) {
        return main.get_all()
      } else {
        console.log('\n [*] Invalid Days, help? ')
      }
    })
  } else if (options == 'install'.toLowerCase()) {
    ask.question('\n [1] Senin  : ', (h1) => {
    ask.question(' [2] Selasa : ', (h2) => {
    ask.question(' [3] Rabu   : ', (h3) => {
    ask.question(' [4] Kamis  : ', (h4) => {
    ask.question(' [5] Jumat  : ', (h5) => {
      return main._install(h1, h2, h3, h4, h5)
    }); }); }); }); })
  } else if (options == 'help'.toLowerCase()) {
    return main._help()
  } else if (options == 'reset'.toLowerCase()) {
    ask.question('\n [•] Hapus semua record [y/N] : ', (del) => {
      if (del == 'Y'.toLowerCase()) {
        return main.reset()
      } else {
        return console.log('\n [*] Exited.')
      }
    })
  } else {
    console.log('\n [!] Exit : true \n'); process.exit()
  }

})
