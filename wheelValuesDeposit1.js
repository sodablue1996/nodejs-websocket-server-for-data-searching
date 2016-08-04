var ID;
var wedge1;
var wedge2;
var wedge3;
var wedge4;
var wedge5;
var wedge6;
var wedge7;
var wedge8;
var wedge9;
var wedge10;
var wedge11;
var wedge12;
var wedge13;
var wedge14;

var IDset = [ ];
var wedge1set = [ ];
var wedge2set = [ ];
var wedge3set = [ ];
var wedge4set = [ ];
var wedge5set = [ ];
var wedge6set = [ ];
var wedge7set = [ ];
var wedge8set = [ ];
var wedge9set = [ ];
var wedge10set = [ ];
var wedge11set = [ ];
var wedge12set = [ ];
var wedge13set = [ ];
var wedge14set = [ ];






var wheelValuesDeposit= [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/wheelValuesDeposit.json';
// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet('1rD0iuRSlFSesZs2wjypSNk48XKJWskRb9-2q_rJze50');
var sheet;
async.series([
  function setAuth(step) {
    // see notes below for authentication instructions! 
    var creds = require('./My Project-a10dce2f4b65.json');
    // OR, if you cannot save the file locally (like on heroku) 
   // var creds_json = {
     // client_email: 'yourserviceaccountemailhere@google.com',
     // private_key: 'your long private key stuff here'
   // }
 
    doc.useServiceAccountAuth(creds, step);
  },
    function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[20];
      console.log('sheet levels: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
function workingWithRows(step) {
    // google provides some query options 
    sheet.getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      
      console.log('Read '+rows.length+' rows');
      for(var i = 0;i<rows.length;i++){

        ID = rows[i].level;
        wedge1 = rows[i].wedge1;
        wedge2 = rows[i].wedge2;
        wedge3 = rows[i].wedge3;
        wedge4 = rows[i].wedge4;
        wedge5 = rows[i].wedge5;
        wedge6 = rows[i].wedge6;
        wedge7 = rows[i].wedge7;
        wedge8 = rows[i].wedge8;
        wedge9 = rows[i].wedge9;
        wedge10 = rows[i].wedge10;
        wedge11 = rows[i].wedge11;
        wedge12 = rows[i].wedge12;
        wedge13 = rows[i].wedge13;
        wedge14 = rows[i].wedge14;

        IDset.push(ID);
        wedge1set.push(wedge1);
        wedge2set.push(wedge2);
        wedge3set.push(wedge3);
        wedge4set.push(wedge4);
        wedge5set.push(wedge5);
        wedge6set.push(wedge6);
        wedge7set.push(wedge7);
        wedge8set.push(wedge8);
        wedge9set.push(wedge9);
        wedge10set.push(wedge10);
        wedge11set.push(wedge11);
        wedge12set.push(wedge12);
        wedge13set.push(wedge13);
        wedge14set.push(wedge14);
    
      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            ID :IDset[y],
            wedge1: wedge1set[y],
            wedge2: wedge2set[y],
            wedge3: wedge3set[y],
            wedge4: wedge4set[y],
            wedge5: wedge5set[y],
            wedge6: wedge6set[y],
            wedge7: wedge7set[y],
            wedge8: wedge8set[y],
            wedge9: wedge9set[y],
            wedge10: wedge10set[y],
            wedge11: wedge11set[y],
            wedge12: wedge12set[y],
            wedge13: wedge13set[y],
            wedge14: wedge14set[y],



        }
        wheelValuesDeposit.push(obj1);
      }
      jsonfile.writeFileSync(file, wheelValuesDeposit);


      step();
    });
  }
]);