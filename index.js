const http = require('http');
const request = require('request');

const host        = 'http://booking.uz.gov.ua';
const pathBook    = '/cart/add/';
const pathCoaches = '/purchase/coaches/';
const pathSearch  = '/purchase/search/';

const bookData = {

};

const searchData  = {
    station_id_from: 2218000,
    station_id_till: 2200001,
    station_from: 'Львів',
    station_till: 'Київ',
    date_dep: '30.11.2017',
    time_dep: '00:00',
    time_dep_till: '',
    another_ec:0,
    search: ''
};

const searchOptions = {
  uri: host + pathSearch,
  method: 'POST',
  headers: {
    // Host: 'booking.uz.gov.ua',
    // Connection: 'keep-alive',
    // 'Content-Length': 410,
    // Pragma: 'no-cache',
    // 'Cache-Control': 'no-cache',
    // Origin: 'http://booking.uz.gov.ua',
    // 'GV-Ajax': 1,
    // 'GV-Screen': '1366x768',
    // 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // Accept: '*/*',
    // Referer: 'http://booking.uz.gov.ua/',
    // 'Accept-Encoding': 'gzip, deflate',
    // 'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
    // Cookie: '_gv_sessid=g7b1ebseg0g40ill89afcpkin4; HTTPSERVERID=server1; _gv_lang=uk'
  },
  form: searchData
};

request(options,  (err, res, body) => {
  if (err) { return console.log(err); }
  console.dir(body);
});


// const req = http.request(options, callback);
// req.write(searchData);
// req.write('from=2200001&to=2218000&train=715%D0%9A&date=2017-11-23&round_trip=0&places[0][ord]=0&places[0][charline]=%D0%91&places[0][wagon_num]=4&places[0][wagon_class]=2&places[0][wagon_type]=%D0%A1&places[0][firstname]=%D0%92%D1%8B%D0%B2%D1%84&places[0][lastname]=%D0%90%D0%B2%D0%B2%D0%B0&places[0][bedding]=0&places[0][child]=&places[0][stud]=&places[0][transportation]=0&places[0][reserve]=0&places[0][place_num]=062');
// req.end();