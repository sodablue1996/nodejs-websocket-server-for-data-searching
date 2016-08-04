var gameID;
var gameName;
var gamePublisher;
var iconImages;
var payLines;
var maxBet;
var released;
var levelUnlocked;
var cashPlayOnly;
var background;
var externalID;
var externalMiniID;
var mobileID;
var showOnHomepage;
var releaseDate;
var width;
var height;
var sortIndex;
var videoID;
var demoMode;

var gameIDset = [ ];
var gameNameset = [ ];
var gamePublisherset = [ ];
var iconImagesset = [ ];
var payLinesset = [ ];
var maxBetset = [ ];
var releasedset = [ ];
var levelUnlockedset = [ ];
var cashPlayOnlyset = [ ];
var backgroundset = [ ];
var externalIDset = [ ];
var externalMiniIDset = [ ];
var mobileIDset = [ ];
var showOnHomepageset = [ ];
var releaseDateset = [ ];
var widthset = [ ];
var heightset = [ ];
var sortIndexset = [ ];
var videoIDset = [ ];
var demoModeset = [ ];

var games = [ ];

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/games.json';
 
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
      sheet = info.worksheets[1];
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


        gameID = rows[i].gameid;
        gameName = rows[i].gamename;
        gamePublisher = rows[i].gamepublisher;
        iconImages = rows[i].iconimages;
        payLines = rows[i].paylines;
        maxBet = rows[i].maxbet;
        released = rows[i].released;
        levelUnlocked = rows[i].levelunlocked;
        cashPlayOnly = rows[i].cashplayonly;
        background = rows[i].background;
        externalID = rows[i].externalid;
        externalMiniID = rows[i].externalminiid;
        mobileID = rows[i].mobileid
        showOnHomepage = rows[i].showonhomepage; 
        releaseDate = rows[i].releasedate;
        width = rows[i].width;
        height = rows[i].height;
        sortIndex = rows[i].sortindex;
        videoID = rows[i].videoid;  
        demoMode = rows[i].demomode;

        gameIDset.push(gameID);
        gameNameset.push(gameName);
        gamePublisherset.push(gamePublisher);
        iconImagesset.push(iconImages);
        payLinesset.push(payLines);
        maxBetset.push(maxBet);
        releasedset.push(released);
        levelUnlockedset.push(levelUnlocked);
        cashPlayOnlyset.push(cashPlayOnly);
        backgroundset.push(background);
        externalIDset.push(externalID);
        externalMiniIDset.push(externalMiniID);
        mobileIDset.push(mobileID);
        showOnHomepageset.push(showOnHomepage);
        releaseDateset.push(releaseDate);
        widthset.push(width);
        heightset.push(height);
        sortIndexset.push(sortIndex);
        videoIDset.push(videoID);
        demoModeset.push(demoMode);
        


      }

      for (var y = 0;y<rows.length;y++){
        var obj1 = {
            gameID: gameIDset[y],
            gameName: gameNameset[y],
            gamePublisher: gamePublisherset[y],
            iconImages: iconImagesset[y],
            payLines: payLinesset[y],
            maxBet: maxBetset[y],
            released: releasedset[y],
            levelUnlocked: levelUnlockedset[y],
            cashPlayOnly: cashPlayOnlyset[y],
            background: backgroundset[y],
            externalID: externalIDset[y],
            externalMiniID: externalMiniIDset[y],
            mobileID: mobileIDset[y],
            showOnHomepage: showOnHomepageset[y],
            releaseDate: releaseDateset[y],
            width: widthset[y],
            height: heightset[y],
            sortIndex: sortIndexset[y],
            videoID: videoIDset[y],
            demoMode: demoModeset[y]
        }
        games.push(obj1);
      }
      jsonfile.writeFileSync(file, games);


      step();
    });
  }
]);