var AvatarID;
var AvatarURL;
var comment;




var AvatarIDset = [ ];
var AvatarURLset = [ ];
var commentset = [ ];



var avatars = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/avatars.json';
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
      sheet = info.worksheets[11];
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
        AvatarID = rows[i].avatarid;
        AvatarURL = rows[i].avatarurl;
        comment = rows[i]._cpzh4;



 
        AvatarIDset.push(AvatarID);
        AvatarURLset.push(AvatarURL);
        commentset.push(comment);




      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            AvatarID : AvatarIDset[y],
            AvatarURL: AvatarURLset[y],
            comment: commentset[y]


        }
        avatars.push(obj1);
      }
      jsonfile.writeFileSync(file, avatars);


      step();
    });
  }
]);