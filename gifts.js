var GiftID;
var Type;
var AmountCouponID;
var Description;
var Types;
var columnG;




var GiftIDset = [ ];
var Typeset = [ ];
var AmountCouponIDset = [ ];
var Descriptionset = [ ];
var Typesset = [ ];
var columnGset = [ ];





var gifts= [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/gifts.json';
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
      sheet = info.worksheets[13];
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
        GiftID = rows[i].giftid;
        Type = rows[i].type;
        AmountCouponID = rows[i].amountcouponid;
        Description = rows[i].descriptionappearsintransactionhistory;
        Types = rows[i].types;
        columnG = rows[i]._ckd7g;
  




 
        GiftIDset.push(GiftID);
        Typeset.push(Type);
        AmountCouponIDset.push(AmountCouponID);
        Descriptionset.push(Description);
        Typesset.push(Types);
        columnGset.push(columnG);
       



      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            GiftID : GiftIDset[y],
            Type: Typeset[y],
            AmountCouponID: AmountCouponIDset[y],
            Description: Descriptionset[y],
            Types: Typesset[y],
            columnG: columnGset[y]




        }
        gifts.push(obj1);
      }
      jsonfile.writeFileSync(file, gifts);


      step();
    });
  }
]);