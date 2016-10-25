var webPage = require('webpage');
var page = webPage.create();

var regions = [
  "ARK", "KIE", "SEV", "VIN", "VOL", "DNE", "DON", "ZIT", "ZAK", "ZAP", "I-F",
  "KIO", "KIR", "LUG", "LVO", "NIK", "ODE", "POL", "ROV", "SUM", "TER", "HAR",
  "HER", "HME", "CRK", "CNI", "CNO"
];

var check = "";
var names = [
  "АР Крим",
  "м.Київ",
  "м. Севастополь",
  "Вінницька",
  "Волинська ",
  "Дніпропетровська",
  "Донецька",
  "Житомирська",
  "Закарпатська ",
  "Запорізька ",
  "Івано-Франківська",
  "Київська",
  "Кіровоградська",
  "Луганська",
  "Львівська",
  "Миколаївська",
  "Одеська",
  "Полтавська",
  "Рівненська",
  "Сумська",
  "Тернопільська",
  "Харківська",
  "Херсонська",
  "Хмельницька",
  "Черкаськая",
  "Чернігівська",
  "Чернівецька"
];

var i = 0;
var KMC = 0;
var baseURL = 'http://ukrchess.org.ua/kvalif/1610/REGION/';

function handle_page(file){
      var playersWithTitle = 0;
    page.open(file,function(){
        if (page.content.match(/кмс/g)) {
          playersWithTitle = page.content.match(/кмс/g).length;
        } else {
          playersWithTitle = 0;
        }

        KMC += playersWithTitle;
      //  check +=  playersWithTitle + " + ";
        console.log(names[i++] + ": " + playersWithTitle);
        setTimeout(next_page, 100);
    });
}
function next_page(){
    var region = regions[i];
    // console.log(region);
    if (!region) {
      console.log('\nTOTAL: ' + KMC);
      console.log(check);
      phantom.exit(0);
    }
    handle_page(baseURL + region + '.TXT');
}
next_page();


// phantom.exit();
//
// АР Крим: 104
// м.Київ: 255
// м. Севастополь: 32
// Вінницька: 91
// Волинська : 8
// Дніпропетровська: 194
// Донецька: 259
// Житомирська: 72
// Закарпатська : 64
// Запорізька : 148
// Івано-Франківська: 60
// Київська: 53
// Кіровоградська: 12
// Луганська: 150
// Львівська: 176
// Миколаївська: 98
// Одеська: 139
// Полтавська: 90
// Рівненська: 37
// Сумська: 48
// Тернопільська: 44
// Харківська: 294
// Херсонська: 83
// Хмельницька: 25
// Черкаськая: 46
// Чернігівська: 84
// Чернівецька: 46
//
// TOTAL: 2712 // 25.10.2016 20:08
