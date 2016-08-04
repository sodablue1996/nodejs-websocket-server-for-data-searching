var level;
var exp;
var unlocks;
var maxPerLine;
var specialBonus;
var topMega;
var levelReward;
var levelset = [ ];
var expset = [ ];
var unlocksset = [ ];
var maxPerLineset = [ ];
var specialBonusset = [ ];
var topMegaset = [ ];
var levelRewardset = [ ];

var levels = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/levels.json';
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
      sheet = info.worksheets[0];
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
        level = rows[i].level;
        exp = rows[i].exp;
        unlocks = rows[i].unlocks;
        maxPerLine = rows[i].maxperline;
        specialBonus = rows[i].specialbonus;
        topMega = rows[i].topmega;
        levelReward = rows[i].levelreward;
 
 
        levelset.push(level);
        expset.push(exp);
        unlocksset.push(unlocks);
        maxPerLineset.push(maxPerLine);
        specialBonusset.push(specialBonus);
        topMegaset.push(topMega);
        levelRewardset.push(levelReward);


      }

      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            level : levelset[y],
            exp: expset[y],
            unlocks: unlocksset[y],
            maxPerLine: maxPerLineset[y],
            specialBonus: specialBonusset[y],
            topMega: topMegaset[y],
            levelReward: levelRewardset[y]
        }
        
        levels.push(obj1);
      }
      jsonfile.writeFileSync(file, levels);



      step();
    });
  }
]);