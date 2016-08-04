var BundleID;
var Chips;
var Cost;
var Bonus;
var PopularStar;
var AmountOfChipsRewardedToPlayer;
var columnJ;



var BundleIDset = [ ];
var Chipsset = [ ];
var Costset = [ ];
var Bonusset = [ ];
var PopularStarset = [ ];
var AmountOfChipsRewardedToPlayerset = [ ];
var columnJset = [ ];




var buychips= [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/buychips.json';
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
      sheet = info.worksheets[12];
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
        BundleID = rows[i].bundleid;
        Chips = rows[i].chips;
        Cost = rows[i].cost;
        Bonus = rows[i].bonus;
        PopularStar = rows[i].popularstar;
        AmountOfChipsRewardedToPlayer = rows[i].amountofchipsrewardedtoplayer;
        columnJ = rows[i]._cztg3;




 
        BundleIDset.push(BundleID);
        Chipsset.push(Chips);
        Costset.push(Cost);
        Bonusset.push(Bonus);
        PopularStarset.push(PopularStar);
        AmountOfChipsRewardedToPlayerset.push(AmountOfChipsRewardedToPlayer);
        columnJset.push(columnJ);




      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            BundleID : BundleIDset[y],
            Chips: Chipsset[y],
            Cost: Costset[y],
            Bonus: Bonusset[y],
            PopularStar: PopularStarset[y],
            AmountOfChipsRewardedToPlayer: AmountOfChipsRewardedToPlayerset[y],
            columnJ: columnJset[y]




        }
        buychips.push(obj1);
      }
      jsonfile.writeFileSync(file, buychips);


      step();
    });
  }
]);