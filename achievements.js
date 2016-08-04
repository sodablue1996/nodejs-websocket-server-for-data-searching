var ID;
var Icon;
var Requirement;
var Reward;
var Name;
var Description;
var comment;



var IDset = [ ];
var Iconset = [ ];
var Requirementset = [ ];
var Rewardset = [ ];
var Nameset = [ ];
var Descriptionset = [ ];
var commentset = [ ];


var achievements = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/achievements.json';
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
      sheet = info.worksheets[8];
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
        ID = rows[i].id;
        Icon = rows[i].icon;
        Requirement = rows[i].requirement;
        Reward = rows[i].reward;
        Name = rows[i].name;
        Description = rows[i].description;
        comment= rows[i]._clrrx;


 
        IDset.push(ID);
        Iconset.push(Icon);
        Requirementset.push(Requirement);
        Rewardset.push(Reward);
        Nameset.push(Name);
        Descriptionset.push(Description);
        commentset.push(comment);



      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            ID : IDset[y],
            Icon: Iconset[y],
            Requirement: Requirementset[y],
            Reward: Rewardset[y],
            Name: Nameset[y],
            Description: Descriptionset[y],
            comment: commentset[y]


        }
        achievements.push(obj1);
      }
      jsonfile.writeFileSync(file, achievements);


      step();
    });
  }
]);