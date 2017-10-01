var http = require('http');

var options = {
  host: '195.149.70.31',
  path: '/cart/add/',
  method: 'POST',
  port: 80,
  headers: {
    Host: 'booking.uz.gov.ua',
    Connection: 'keep-alive',
    'Content-Length': 410,
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    Origin: 'http://booking.uz.gov.ua',
    'GV-Ajax': 1,
    'GV-Screen': '1366x768',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
    Referer: 'http://booking.uz.gov.ua/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
    // Cookie: '_ga=GA1.3.316038752.1506798168; _gid=GA1.3.999552475.1506798168; _uz_cart_personal_email=qwe%40qwe.qwe; _gv_sessid=ccv3vl937arkkqmklr9o23hsa5; HTTPSERVERID=server2; _gv_lang=uk; _uz_cart_personal_email=qwe%40qwe.qwe; _gv_sessid=8i90gnrvtcs6untf8il8j85sk2; HTTPSERVERID=server1; _gv_lang=uk',
    // Cookie: '_ga=GA1.3.316038752.1506798168; _gid=GA1.3.999552475.1506798168; _uz_cart_personal_email=qwe%40qwe.qwe; _gv_sessid=ccv3vl937arkkqmklr9o23hsa5; HTTPSERVERID=server2; _gv_lang=uk; _uz_cart_personal_email=qwe%40qwe.qwe; _gv_sessid=8i90gnrvtcs6untf8il8j85sk2; HTTPSERVERID=server1; _gv_lang=uk'
    Cookie: '_gv_sessid=g7b1ebseg0g40ill89afcpkin4; HTTPSERVERID=server1; _gv_lang=uk'
  }
};

callback = function(response) {
  let str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
};

const req = http.request(options, callback);
req.write('from=2200001&to=2218000&train=715%D0%9A&date=2017-11-23&round_trip=0&places[0][ord]=0&places[0][charline]=%D0%91&places[0][wagon_num]=4&places[0][wagon_class]=2&places[0][wagon_type]=%D0%A1&places[0][firstname]=%D0%92%D1%8B%D0%B2%D1%84&places[0][lastname]=%D0%90%D0%B2%D0%B2%D0%B0&places[0][bedding]=0&places[0][child]=&places[0][stud]=&places[0][transportation]=0&places[0][reserve]=0&places[0][place_num]=064');
// req.write('from=2200001&to=2218000&train=715%D0%9A&date=2017-11-29&round_trip=0&places[0][ord]=0&places[0][charline]=%D0%91&places[0][wagon_num]=4&places[0][wagon_class]=2&places[0][wagon_type]=%D0%A1&places[0][firstname]=%D0%B2%D0%B2%D0%B2&places[0][lastname]=%D0%B0%D0%B0%D0%B0&places[0][bedding]=0&places[0][child]=&places[0][stud]=&places[0][transportation]=0&places[0][reserve]=0&places[0][place_num]=020');
req.end();