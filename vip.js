var name;
var points;
var coinPackages;
var vipPoints;
var freeCoinGift;
var evesDailyGift;
var sharedPostGift;
var fanPageGifts;
var inviteFriend;
var columnJ;

var nameset = [ ];
var pointsset = [ ];
var coinPackagesset = [ ];
var vipPointsset = [ ];
var freeCoinGiftset = [ ];
var evesDailyGiftset = [ ];
var sharedPostGiftset = [ ];
var fanPageGiftsset = [ ];
var inviteFriendset = [ ];
var columnJset = [ ];

var vip = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/vip.json';
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
      sheet = info.worksheets[4];
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
        name = rows[i].name;
        points = rows[i].points;
        coinPackages = rows[i].coinpackages;
        vipPoints = rows[i].vippoints;
        freeCoinGift = rows[i].freecoingift;
        evesDailyGift = rows[i].evesdailygift;
        sharedPostGift = rows[i].sharedpostgift;
        fanPageGifts = rows[i].fanpagegifts;
        inviteFriend = rows[i].invitefriend;
        columnJ = rows[i]._cztg3;
 
 
        nameset.push(name);
        pointsset.push(points);
        coinPackagesset.push(coinPackages);
        vipPointsset.push(vipPoints);
        freeCoinGiftset.push(freeCoinGift);
        evesDailyGiftset.push(evesDailyGift);
        sharedPostGiftset.push(sharedPostGift);
        fanPageGiftsset.push(fanPageGifts);
        inviteFriendset.push(inviteFriend);
        columnJset.push(columnJ);

      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            name : nameset[y],
            points: pointsset[y],
            coinPackages: coinPackagesset[y],
            vipPoints: vipPointsset[y],
            freeCoinGift: freeCoinGiftset[y],
            evesDailyGift: evesDailyGiftset[y],
            sharedPostGift: sharedPostGiftset[y],
            fanPageGifts: fanPageGiftsset[y],
            inviteFriend: inviteFriendset[y],
            columnJ: columnJset[y]

        }
        vip.push(obj1);
      }
      jsonfile.writeFileSync(file, vip);


      step();
    });
  }
]);