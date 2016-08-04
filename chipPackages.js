var chipPackageID;
var chips;
var bonusPercent;
var vipPointsEarned;
var columnH;
var columnI;
var columnJ;


var chipPackageIDset = [ ];
var chipsset = [ ];
var bonusPercentset = [ ];
var vipPointsEarnedset = [ ];
var columnHset = [ ];
var columnIset = [ ];
var columnJset = [ ];

var chipPackages = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/chipPackages.json';
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
      sheet = info.worksheets[6];
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
        chipPackageID = rows[i].chippackageid;
        chips = rows[i].chips;
        bonusPercent = rows[i].bonuspercent;
        vipPointsEarned = rows[i].vippointsearned;
        columnH = rows[i]._clrrx;
        columnI = rows[i]._cyevm;
        columnJ = rows[i]._cztg3;

 
        chipPackageIDset.push(chipPackageID);
        chipsset.push(chips);
        bonusPercentset.push(bonusPercent);
        vipPointsEarnedset.push(vipPointsEarned);
        columnHset.push(columnH);
        columnIset.push(columnI);
        columnJset.push(columnJ);


      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            chipPackageID : chipPackageIDset[y],
            chips: chipsset[y],
            bonusPercent : bonusPercentset[y],
            vipPointsEarned : vipPointsEarnedset[y],
            columnH : columnHset[y],
            columnI : columnIset[y],
            columnJ : columnJset[y]



        }
        chipPackages.push(obj1);
      }
      jsonfile.writeFileSync(file, chipPackages);


      step();
    });
  }
]);