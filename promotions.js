var id;
var type;
var enabled;
var image;
var carouselimage;
var title;
var subtitle;
var description;





var idset = [ ];
var typeset = [ ];
var enabledset = [ ];
var imageset = [ ];
var carouselimageset = [ ];
var titleset = [ ];
var subtitleset = [ ];
var descriptionset = [ ];


var promotions = [ ];



var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/promotions.json';
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
      sheet = info.worksheets[32];
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

        id = rows[i].id;
        type = rows[i].type;
        enabled = rows[i].enabled;
        image = rows[i].image;
        carouselimage = rows[i].carouselimage;
        title = rows[i].title;
        subtitle = rows[i].subtitle;
        description = rows[i].description;
 

        idset.push(id);
        typeset.push(type);
        enabledset.push(enabled);
        imageset.push(image);
        carouselimageset.push(carouselimage);
        titleset.push(title);
        subtitleset.push(subtitle);
        descriptionset.push(description);
      
       

    
      }
  
      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            id :idset[y],
            type: typeset[y],
            enabled: enabledset[y],
            image :imageset[y],
            carouselimage: carouselimageset[y],
            title: titleset[y],
            subtitle :subtitleset[y],
            description: descriptionset[y]
 



        }
        promotions.push(obj1);
      }
      jsonfile.writeFileSync(file, promotions);


      step();
    });
  }
]);