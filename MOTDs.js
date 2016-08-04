var ID;
var name;
var enabled;
var xPosPercent;
var yPosPercent;
var colors;
var viewCount;
var startDate;
var duration;
var depositCount;
var CTA;
var language;



var IDset = [ ];
var nameset = [ ];
var enabledset = [ ];
var xPosPercentset = [ ];
var yPosPercentset = [ ];
var colorsset = [ ];
var viewCountset = [ ];
var startDateset = [ ];
var durationset = [ ];
var depositCountset = [ ];
var CTAset = [ ];
var languageset = [ ];






var MOTDs= [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/MOTDs.json';
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
      sheet = info.worksheets[16];
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
        name = rows[i].name;
        enabled = rows[i].enabled;
        xPosPercent = rows[i].xpospercent;
        yPosPercent = rows[i].ypospercent;
        colors = rows[i].colors;
        viewCount = rows[i].viewcount;
        startDate = rows[i].startdate;
        duration = rows[i].durationdays;
        depositCount = rows[i].depositcount;
        CTA = rows[i].cta;
        language = rows[i].language;

        IDset.push(ID);
        nameset.push(name);
        enabledset.push(enabled);
        xPosPercentset.push(xPosPercent);
        yPosPercentset.push(yPosPercent);
        colorsset.push(colors);
        viewCountset.push(viewCount);
        startDateset.push(startDate);
        durationset.push(duration);
        depositCountset.push(depositCount);
        CTAset.push(CTA);
        languageset.push(language);


       



      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            ID : IDset[y],
            name: nameset[y],
            enabled: enabledset[y],
            xPosPercent: xPosPercentset[y],
            yPosPercent: yPosPercentset[y],
            colors: colorsset[y],
            viewCount: viewCountset[y],
            startDate: startDateset[y],
            duration: durationset[y],
            depositCount: depositCountset[y],
            CTA: CTAset[y],
            language: languageset[y]




        }
        MOTDs.push(obj1);
      }
      jsonfile.writeFileSync(file, MOTDs);


      step();
    });
  }
]);