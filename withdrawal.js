var Nib;
var USD;
var EUR;
var GBP;
var DKK;
var SEK;
var NOK;
var comment;



var Nibset = [ ];
var USDset = [ ];
var EURset = [ ];
var GBPset = [ ];
var DKKset = [ ];
var SEKset = [ ];
var NOKset = [ ];
var commentset = [ ];


var withdrawal = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/withdrawal.json';
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
      sheet = info.worksheets[10];
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
        Nib = rows[i].nib;
        USD = rows[i].usd;
        EUR = rows[i].eur;
        GBP = rows[i].gbp;
        DKK = rows[i].dkk;
        SEK = rows[i].sek;
        NOK = rows[i].nok;
        comment = rows[i]._d180g;


 
        Nibset.push(Nib);
        USDset.push(USD);
        EURset.push(EUR);
        GBPset.push(GBP);
        DKKset.push(DKK);
        SEKset.push(SEK);
        NOKset.push(NOK);
        commentset.push(comment);



      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            Nib : Nibset[y],
            USD: USDset[y],
            EUR: EURset[y],
            GBP: GBPset[y],
            DKK: DKKset[y],
            SEK: SEKset[y],
            NOK: NOKset[y],
            comment: commentset[y]


        }
        withdrawal.push(obj1);
      }
      jsonfile.writeFileSync(file, withdrawal);


      step();
    });
  }
]);