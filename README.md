# japel

## Manage Jadwal Pelajaran

### Screenshot
<p align="center">
  <img alt="screenshot1" src="https://github.com/ibnusyawall/japel/blob/master/screenshot/japel1.jpg"/>
  <img alt="screenshot1" src="https://github.com/ibnusyawall/japel/blob/master/screenshot/japel2.jpg"/>
</p>

### requirements
```
  - NodeJS
  - MySQL
  - Twilio Account
```

### install
```
  $ git clone https://github.com/ibnusyawall/japel
  $ cd japel
  $ npm i
```

### Setup
```
  1) create database name 'japel' and create table name 'hari'
  2) create 5 row named : 'senin' type VARCHAR, 'selasa' type VARCHAR, dst .. 
  3) $ node index
      - choice option 'install'
      - if succes, choice option 'view' untuk melihat jadwal
```

### Menjalankan bot
```
  $ node bot &
    - diperlukan auth id dan account id dari 'Twilio.com' sebagai broadcaat message
    - set auth id dan account id di file '.env'
    - biarkan berjalan di background, jika waktu menunjukan jam 06.00 dan hari (otomatis), 
      Bot akan mengirim notifikasi(sms) 
```

### Melihat Jadwal
```
  $ node index
```

### help ?
```
WhatsApp: 082299265151
```

