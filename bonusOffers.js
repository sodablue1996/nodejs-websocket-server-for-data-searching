var offerID;
var title;
var duration;
var wageringrequirement;
var enabled;
var amount;
var percentage;
var maximum;
var type;
var spins;
var lines;
var cashCap;
var activeDuration;
var game;


var offerIDset = [ ];
var titleset = [ ];
var durationset = [ ];
var wageringrequirementset = [ ];
var enabledset = [ ];
var amountset = [ ];
var percentageset = [ ];
var maximumset = [ ];
var typeset = [ ];
var spinsset = [ ];
var linesset = [ ];
var cashCapset = [ ];
var activeDurationset = [ ];
var gameset = [ ];






var bonusOffers= [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/bonusOffers.json';
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
      sheet = info.worksheets[17];
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

        offerID = rows[i].offerid;
        title = rows[i].title;
        duration = rows[i].durationhours;
        wageringrequirement = rows[i].wageringrequirementx;
        enabled = rows[i].enabled;
        amount = rows[i].amount;
        percentage = rows[i].percentage100;
        maximum = rows[i].maximum;
        type = rows[i].type;
        spins = rows[i].spins;
        lines = rows[i].lines;
        cashCap = rows[i].cashcap;
        activeDuration = rows[i].activedurationhours;
        game = rows[i].game;


        offerIDset.push(offerID);
        titleset.push(title);
        durationset.push(duration);
        wageringrequirementset.push(wageringrequirement);
        enabledset.push(enabled);
        amountset.push(amount);
        percentageset.push(percentage);
        maximumset.push(maximum);
        typeset.push(type);
        spinsset.push(spins);
        linesset.push(lines);
        cashCapset.push(cashCap);
        activeDurationset.push(activeDuration);
        gameset.push(game);


       



      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            offerID : offerIDset[y],
            title: titleset[y],
            duration: durationset[y],
            wageringrequirement: wageringrequirementset[y],
            enabled: enabledset[y],
            amount: amountset[y],
            percentage: percentageset[y],
            maximum: maximumset[y],
            type: typeset[y],
            spins: spinsset[y],
            lines: linesset[y],
            cashCap: cashCapset[y],
            activeDuration: activeDurationset[y],
            game: gameset[y]




        }
        bonusOffers.push(obj1);
      }
      jsonfile.writeFileSync(file, bonusOffers);


      step();
    });
  }
]);