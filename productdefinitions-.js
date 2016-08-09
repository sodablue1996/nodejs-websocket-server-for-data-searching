
var ProductionDefinition = {};

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

var jsonfile = require('jsonfile'); 
var file = '/chat/test0000.json';
// spreadsheet key is the long id in the sheets URL 
var doc = new GoogleSpreadsheet('1rD0iuRSlFSesZs2wjypSNk48XKJWskRb9-2q_rJze50');
var sheets;
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
      sheets = info.worksheets;
     // console.log('sheet levels: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
function workingWithRows0(step) {
    // google provides some query options 
    sheets[0].getRows({
      offset: 1,
      limit: 1000
 
    }, function( err, rows ){
      console.log('sheet info: '+sheets[0].title+' '+sheets[0].rowCount+'x'+sheets[0].colCount);
      console.log('Read '+rows.length+' rows');
      var levels = {};

            for (var i = 0; i < rows.length; i++) {
                
                levels[i] = {};
                levels[i].level = rows[i].level;
                levels[i].exp = rows[i].exp;
                levels[i].unlocks = rows[i].unlocks;
                levels[i].maxperline = rows[i].maxperline;
                levels[i].specialbonus = rows[i].specialbonus;
                levels[i].topmega = rows[i].topmega;
                levels[i].levelreward = rows[i].levelreward;

            }
          ProductionDefinition.levels = levels;
   

            


step();




  
    });
  },
  function workingWithRows1(step) {

  sheets[1].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[1].title+' '+sheets[1].rowCount+'x'+sheets[1].colCount);
      console.log('Read '+rows.length+' rows');
       var games = {};
      for(var i = 0;i<rows.length;i++){
        games[i] = {};

        games[i].gameID = rows[i].gameid;
        games[i].gameName = rows[i].gamename;
        games[i].gamePublisher = rows[i].gamepublisher;
        games[i].iconImages = rows[i].iconimages;
        games[i].payLines = rows[i].paylines;
        games[i].maxBet = rows[i].maxbet;
        games[i].released = rows[i].released;
        games[i].levelUnlocked = rows[i].levelunlocked;
        games[i].cashPlayOnly = rows[i].cashplayonly;
        games[i].background = rows[i].background;
        games[i].externalID = rows[i].externalid;
        games[i].externalMiniID = rows[i].externalminiid;
        games[i].mobileID = rows[i].mobileid
        games[i].showOnHomepage = rows[i].showonhomepage; 
        games[i].releaseDate = rows[i].releasedate;
        games[i].width = rows[i].width;
        games[i].height = rows[i].height;
        games[i].sortIndex = rows[i].sortindex;
        games[i].videoID = rows[i].videoid;  
        games[i].demoMode = rows[i].demomode;
          
        


      }
ProductionDefinition.games = games;

    //  jsonfile.writeFileSync(file, games);

step();
     
    });
},
function workingWithRows2(step) {
  sheets[2].getRows({
      offset: 1,
      limit: 1000,
    }, function( err, rows ){
      console.log('sheet info: '+sheets[2].title+' '+sheets[2].rowCount+'x'+sheets[2].colCount);
      console.log('Read '+rows.length+' rows');
      misc = {};
      for(var i = 0;i<rows.length;i++){
        misc[i] = {};
        misc[i].InformationType = rows[i].informationtype;
        misc[i].Value = rows[i].value;



      }
ProductionDefinition.misc = misc;


step();
      
    });

},
function workingWithRows3(step) {
    // google provides some query options 
    sheets[3].getRows({
      offset: 1,
      limit: 1000,
    }, function( err, rows ){
      console.log('sheet info: '+sheets[3].title+' '+sheets[3].rowCount+'x'+sheets[3].colCount);
      console.log('Read '+rows.length+' rows');
      betLevels = {};
      for(var i = 0;i<rows.length;i++){
        betLevels[i] = {};
        betLevels[i].CHIPS = rows[i].chips;
        betLevels[i].USD = rows[i].usd;
        betLevels[i].EUR = rows[i].eur;
        betLevels[i].GBP = rows[i].gbp;
        betLevels[i].DKK = rows[i].dkk;
        betLevels[i].SEK = rows[i].sek;
        betLevels[i].NOK = rows[i].nok;
      }

      step();
      ProductionDefinition.betLevels = betLevels;
    });
  },

function workingWithRows4(step) {
    // google provides some query options 
    sheets[4].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[4].title+' '+sheets[4].rowCount+'x'+sheets[4].colCount);
      console.log('Read '+rows.length+' rows');
      vip={};
      for(var i = 0;i<rows.length;i++){
        vip[i]={};
        vip[i].name = rows[i].name;
        vip[i].points = rows[i].points;
        vip[i].coinPackages = rows[i].coinpackages;
        vip[i].vipPoints = rows[i].vippoints;
        vip[i].freeCoinGift = rows[i].freecoingift;
        vip[i].evesDailyGift = rows[i].evesdailygift;
        vip[i].sharedPostGift = rows[i].sharedpostgift;
        vip[i].fanPageGifts = rows[i].fanpagegifts;
        vip[i].inviteFriend = rows[i].invitefriend;
        vip[i].columnJ = rows[i]._cztg3;


      }

ProductionDefinition.vip=vip;

      step();
    });
  },

function workingWithRows5(step) {
    // google provides some query options 
    sheets[5].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[5].title+' '+sheets[5].rowCount+'x'+sheets[5].colCount);
      console.log('Read '+rows.length+' rows');
      cashSystemAccount={};
      for(var i = 0;i<rows.length;i++){
        cashSystemAccount[i]={};
        cashSystemAccount[i].CurrencyISO = rows[i].currencyiso;
        cashSystemAccount[i].ReferenceID = rows[i].referenceid;
      }
      ProductionDefinition.cashSystemAccount = cashSystemAccount;
      step();
    });
  },
function workingWithRows6(step) {
    // google provides some query options 
    sheets[6].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[6].title+' '+sheets[6].rowCount+'x'+sheets[6].colCount);
      console.log('Read '+rows.length+' rows');
      chipPackages = {};
      for(var i = 0;i<rows.length;i++){
        chipPackages[i] = {};
        chipPackages[i].chipPackageID = rows[i].chippackageid;
        chipPackages[i].chips = rows[i].chips;
        chipPackages[i].bonusPercent = rows[i].bonuspercent;
        chipPackages[i].vipPointsEarned = rows[i].vippointsearned;
        chipPackages[i].columnH = rows[i]._clrrx;
        chipPackages[i].columnI = rows[i]._cyevm;
        chipPackages[i].columnJ = rows[i]._cztg3;



      }
  

     


      step();
      ProductionDefinition.chipPackages=chipPackages;
    });
  },
function workingWithRows7(step) {
    // google provides some query options 
    sheets[7].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[7].title+' '+sheets[7].rowCount+'x'+sheets[7].colCount);
      console.log('Read '+rows.length+' rows');
      jackpots={};
      for(var i = 0;i<rows.length;i++){
        jackpots[i]={};
        jackpots[i].level = rows[i].level;
        jackpots[i].amount = rows[i].amount;
      }
ProductionDefinition.jackpots = jackpots;


      step();
    });
  },
function workingWithRows8(step) {
    // google provides some query options 
    sheets[8].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[8].title+' '+sheets[8].rowCount+'x'+sheets[8].colCount);  
      console.log('Read '+rows.length+' rows');
      achievements = {};
      for(var i = 0;i<rows.length;i++){
        achievements[i]={};
        achievements[i].ID = rows[i].id;
        achievements[i].Icon = rows[i].icon;
        achievements[i].Requirement = rows[i].requirement;
        achievements[i].Reward = rows[i].reward;
        achievements[i].Name = rows[i].name;
        achievements[i].Description = rows[i].description;
        achievements[i].comment= rows[i]._clrrx;




      }
      step();
      ProductionDefinition.jackpots= jackpots;
    });
  },

function workingWithRows9(step) {
    // google provides some query options 
    sheets[9].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[9].title+' '+sheets[9].rowCount+'x'+sheets[9].colCount); 
      console.log('Read '+rows.length+' rows');
      deposits={};
      for(var i = 0;i<rows.length;i++){
        deposits[i]={};
        deposits[i].Nib = rows[i].nib;
        deposits[i].USD = rows[i].usd;
        deposits[i].EUR = rows[i].eur;
        deposits[i].GBP = rows[i].gbp;
        deposits[i].DKK = rows[i].dkk;
        deposits[i].SEK = rows[i].sek;
        deposits[i].NOK = rows[i].nok;
      }
     ProductionDefinition.deposits = deposits;
      step();
    });
  },

function workingWithRows10(step) {
    // google provides some query options 
    sheets[10].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[10].title+' '+sheets[10].rowCount+'x'+sheets[10].colCount);
      console.log('Read '+rows.length+' rows');
      withdrawal={};
      for(var i = 0;i<rows.length;i++){
        withdrawal[i]={};
        withdrawal[i].Nib = rows[i].nib;
        withdrawal[i].USD = rows[i].usd;
        withdrawal[i].EUR = rows[i].eur;
        withdrawal[i].GBP = rows[i].gbp;
        withdrawal[i].DKK = rows[i].dkk;
        withdrawal[i].SEK = rows[i].sek;
        withdrawal[i].NOK = rows[i].nok;
        withdrawal[i].comment = rows[i]._d180g;
      }
     ProductionDefinition.withdrawal = withdrawal;

      step();
    });
  },
function workingWithRows11(step) {
    // google provides some query options 
    sheets[11].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[11].title+' '+sheets[11].rowCount+'x'+sheets[11].colCount);
      console.log('Read '+rows.length+' rows');
      avatars={};
      for(var i = 0;i<rows.length;i++){
        avatars[i]={};
        avatars[i].AvatarID = rows[i].avatarid;
        avatars[i].AvatarURL = rows[i].avatarurl;
        avatars[i].comment = rows[i]._cpzh4;

      }
  ProductionDefinition.avatars = avatars;

     


      step();
    });
  },
function workingWithRows12(step) {
    // google provides some query options 
    sheets[12].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[12].title+' '+sheets[12].rowCount+'x'+sheets[12].colCount);
      console.log('Read '+rows.length+' rows');
      buychips = {};
      for(var i = 0;i<rows.length;i++){
        buychips[i]={};
        buychips[i].BundleID = rows[i].bundleid;
        buychips[i].Chips = rows[i].chips;
        buychips[i].Cost = rows[i].cost;
        buychips[i].Bonus = rows[i].bonus;
        buychips[i].PopularStar = rows[i].popularstar;
        buychips[i].AmountOfChipsRewardedToPlayer = rows[i].amountofchipsrewardedtoplayer;
        buychips[i].columnJ = rows[i]._cztg3;

      }
     ProductionDefinition.buychips=buychips;

    


      step();
    });
  },
function workingWithRows13(step) {
    // google provides some query options 
    sheets[13].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[13].title+' '+sheets[13].rowCount+'x'+sheets[13].colCount);
      console.log('Read '+rows.length+' rows');
      gifts={};
      for(var i = 0;i<rows.length;i++){
        gifts[i]={};
        gifts[i].GiftID = rows[i].giftid;
        gifts[i].Type = rows[i].type;
        gifts[i].AmountCouponID = rows[i].amountcouponid;
        gifts[i].Description = rows[i].descriptionappearsintransactionhistory;
        gifts[i].Types = rows[i].types;

      }
ProductionDefinition.gifts=gifts;



      step();
    });
  },
function workingWithRows14(step) {
    // google provides some query options 
    sheets[14].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[14].title+' '+sheets[14].rowCount+'x'+sheets[14].colCount);
      console.log('Read '+rows.length+' rows');
      paylines={};
      for(var i = 0;i<rows.length;i++){
        paylines[i]={};
        paylines[i].ineID = rows[i].lineid;
        paylines[i].Pattern = rows[i].pattern;


      }
ProductionDefinition.paylines=paylines;
   


      step();
    });
  },
  function workingWithRows15(step) {
    // google provides some query options 
    sheets[15].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[15].title+' '+sheets[15].rowCount+'x'+sheets[15].colCount);
      console.log('Read '+rows.length+' rows');
      bonusSystemAccount={};
      for(var i = 0;i<rows.length;i++){
        bonusSystemAccount[i]={};
        bonusSystemAccount[i].CurrencyISO = rows[i].currencyiso;
        bonusSystemAccount[i].ReferenceID = rows[i].referenceid;
      }
     ProductionDefinition.bonusSystemAccount=bonusSystemAccount;

      step();
    });
  },
function workingWithRows16(step) {
    // google provides some query options 
    sheets[16].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[16].title+' '+sheets[16].rowCount+'x'+sheets[16].colCount);
      console.log('Read '+rows.length+' rows');
      MOTDs={};
      for(var i = 0;i<rows.length;i++){
        MOTDs[i]={};
        MOTDs[i].ID = rows[i].id;
        MOTDs[i].name = rows[i].name;
        MOTDs[i].enabled = rows[i].enabled;
        MOTDs[i].xPosPercent = rows[i].xpospercent;
        MOTDs[i].yPosPercent = rows[i].ypospercent;
        MOTDs[i].colors = rows[i].colors;
        MOTDs[i].viewCount = rows[i].viewcount;
        MOTDs[i].startDate = rows[i].startdate;
        MOTDs[i].duration = rows[i].durationdays;
        MOTDs[i].depositCount = rows[i].depositcount;
        MOTDs[i].CTA = rows[i].cta;
        MOTDs[i].language = rows[i].language;

      }
ProductionDefinition.MOTDs=MOTDs;
      step();
    });
  },
function workingWithRows17(step) {
    // google provides some query options 
    sheets[17].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[17].title+' '+sheets[17].rowCount+'x'+sheets[17].colCount);
      console.log('Read '+rows.length+' rows');
      bonusOffers={};
      for(var i = 0;i<rows.length;i++){
        bonusOffers[i]={};
        bonusOffers[i].offerID = rows[i].offerid;
        bonusOffers[i].title = rows[i].title;
        bonusOffers[i].duration = rows[i].durationhours;
        bonusOffers[i].wageringrequirement = rows[i].wageringrequirementx;
        bonusOffers[i].enabled = rows[i].enabled;
        bonusOffers[i].amount = rows[i].amount;
        bonusOffers[i].percentage = rows[i].percentage100;
        bonusOffers[i].maximum = rows[i].maximum;
        bonusOffers[i].type = rows[i].type;
        bonusOffers[i].spins = rows[i].spins;
        bonusOffers[i].lines = rows[i].lines;
        bonusOffers[i].cashCap = rows[i].cashcap;
        bonusOffers[i].activeDuration = rows[i].activedurationhours;
        bonusOffers[i].game = rows[i].game;


      }
      ProductionDefinition.bonusOffers=bonusOffers;



      step();
    });
  },
function workingWithRows18(step) {
    // google provides some query options 
    sheets[18].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[18].title+' '+sheets[18].rowCount+'x'+sheets[18].colCount);
      console.log('Read '+rows.length+' rows');
      emails={};
      for(var i = 0;i<rows.length;i++){
        emails[i]={};
        emails[i].emailID = rows[i].emailid;
        emails[i].emailType = rows[i].emailtype;
        emails[i].fileName = rows[i].filename;
        emails[i].subject = rows[i].subject;
        emails[i].content = rows[i].content;

      }

      ProductionDefinition.emails=emails;
      step();
    });
  },
  function workingWithRows19(step) {
    // google provides some query options 
    sheets[19].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[19].title+' '+sheets[19].rowCount+'x'+sheets[19].colCount);
      console.log('Read '+rows.length+' rows');
      wheelValuesNonDeposit={};
      for(var i = 0;i<rows.length;i++){
        wheelValuesNonDeposit[i]={};
        wheelValuesNonDeposit[i].ID = rows[i]._cn6ca;
        wheelValuesNonDeposit[i].wedge1 = rows[i].wedge1;
        wheelValuesNonDeposit[i].wedge2 = rows[i].wedge2;
        wheelValuesNonDeposit[i].wedge3 = rows[i].wedge3;
        wheelValuesNonDeposit[i].wedge4 = rows[i].wedge4;
        wheelValuesNonDeposit[i].wedge5 = rows[i].wedge5;
        wheelValuesNonDeposit[i].wedge6 = rows[i].wedge6;
        wheelValuesNonDeposit[i].wedge7 = rows[i].wedge7;
        wheelValuesNonDeposit[i].wedge8 = rows[i].wedge8;
        wheelValuesNonDeposit[i].wedge9 = rows[i].wedge9;
        wheelValuesNonDeposit[i].wedge10 = rows[i].wedge10;
        wheelValuesNonDeposit[i].wedge11 = rows[i].wedge11;
        wheelValuesNonDeposit[i].wedge12 = rows[i].wedge12;
        wheelValuesNonDeposit[i].wedge13 = rows[i].wedge13;
        wheelValuesNonDeposit[i].wedge14 = rows[i].wedge14;

      }

    
      ProductionDefinition.wheelValuesNonDeposit=wheelValuesNonDeposit;

      step();
    });
  },
  function workingWithRows20(step) {
    // google provides some query options 
    sheets[20].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[20].title+' '+sheets[20].rowCount+'x'+sheets[20].colCount);
      console.log('Read '+rows.length+' rows');
      wheelValuesDeposit={};
      for(var i = 0;i<rows.length;i++){
        wheelValuesDeposit[i]={};

        wheelValuesDeposit[i].ID = rows[i].level;
        wheelValuesDeposit[i].wedge1 = rows[i].wedge1;
        wheelValuesDeposit[i].wedge2 = rows[i].wedge2;
        wheelValuesDeposit[i].wedge3 = rows[i].wedge3;
        wheelValuesDeposit[i].wedge4 = rows[i].wedge4;
        wheelValuesDeposit[i].wedge5 = rows[i].wedge5;
        wheelValuesDeposit[i].wedge6 = rows[i].wedge6;
        wheelValuesDeposit[i].wedge7 = rows[i].wedge7;
        wheelValuesDeposit[i].wedge8 = rows[i].wedge8;
        wheelValuesDeposit[i].wedge9 = rows[i].wedge9;
        wheelValuesDeposit[i].wedge10 = rows[i].wedge10;
        wheelValuesDeposit[i].wedge11 = rows[i].wedge11;
        wheelValuesDeposit[i].wedge12 = rows[i].wedge12;
        wheelValuesDeposit[i].wedge13 = rows[i].wedge13;
   
    
      }

    
      ProductionDefinition.wheelValuesDeposit=wheelValuesDeposit;

      step();
    });
  },
  function workingWithRows21(step) {
    // google provides some query options 
    sheets[21].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      
      console.log('sheet info: '+sheets[21].title+' '+sheets[21].rowCount+'x'+sheets[21].colCount);
      console.log('Read '+rows.length+' rows');
      Countries={};
      for(var i = 0;i<rows.length;i++){
        Countries[i]={};
        Countries[i].countries = rows[i].countries;
        Countries[i].CountryCode = rows[i].countrycode;
        Countries[i].CountryName = rows[i].countryname;
        Countries[i].Enabled = rows[i].enabled;

      }
 

     ProductionDefinition.Countries=Countries;

      step();
    });
  },
function workingWithRows22(step) {
    // google provides some query options 
    sheets[22].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[22].title+' '+sheets[22].rowCount+'x'+sheets[22].colCount);
      console.log('Read '+rows.length+' rows');
      currencies={};
      for(var i = 0;i<rows.length;i++){
        currencies[i]={};
        currencies[i].ID = rows[i].id;
        currencies[i].Currency = rows[i].currency;
        currencies[i].Enabled = rows[i].enabled;
        currencies[i].DefaultCountry= rows[i].defaultcountry;
        currencies[i].Mutliplier=rows[i].mutliplier;

    
      }

      ProductionDefinition.currencies=currencies;
      step();
    });
  },
  function workingWithRows23(step) {
    // google provides some query options 
    sheets[23].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[23].title+' '+sheets[23].rowCount+'x'+sheets[23].colCount);
      console.log('Read '+rows.length+' rows');
      languages={};
      for(var i = 0;i<rows.length;i++){
        languages[i]={};
        languages[i].languageID = rows[i].languageid;
        languages[i].name = rows[i].name;
        languages[i].extension = rows[i].extension;

    
      }
    ProductionDefinition.languages=languages;
    step();
    });
  },
  function workingWithRows24(step) {
    // google provides some query options 
    sheets[24].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[24].title+' '+sheets[24].rowCount+'x'+sheets[24].colCount);
      console.log('Read '+rows.length+' rows');
      propmap={};
      for(var i = 0;i<rows.length;i++){
        propmap[i]={};
        propmap[i].key = rows[i].key;
        propmap[i].map = rows[i].map;

    
      }


      ProductionDefinition.propmap=propmap;
      step();
    });
  },
  function workingWithRows25(step) {
    // google provides some query options 
    sheets[25].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
       console.log('sheet info: '+sheets[25].title+' '+sheets[25].rowCount+'x'+sheets[25].colCount);
      console.log('Read '+rows.length+' rows');
      kycLimits={};
      for(var i = 0;i<rows.length;i++){
        kycLimits[i]={};
        kycLimits[i].ID = rows[i].id;
        kycLimits[i].Currency = rows[i].currency;
        kycLimits[i].Enabled = rows[i].enabled;
        kycLimits[i].Amount = rows[i].amount;
        kycLimits[i].Period = rows[i].period;

      }

     

      ProductionDefinition.kycLimits=kycLimits;
      step();
    });
  },
  function workingWithRows26(step) {
    // google provides some query options 
    sheets[26].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[26].title+' '+sheets[26].rowCount+'x'+sheets[26].colCount);
      console.log('Read '+rows.length+' rows');
      inboxMessages={};
      for(var i = 0;i<rows.length;i++){
        inboxMessages[i]={};
        inboxMessages[i].messageid = rows[i].messageid;
        inboxMessages[i].ype = rows[i].type;
        inboxMessages[i].payload = rows[i].payload;

      }


      ProductionDefinition.inboxMessages=inboxMessages;
      step();
    });
  },
  function workingWithRows27(step) {
    // google provides some query options 
    sheets[27].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[27].title+' '+sheets[27].rowCount+'x'+sheets[27].colCount);
      console.log('Read '+rows.length+' rows');
      banners={};
      for(var i = 0;i<rows.length;i++){
        banners[i]={};
        banners[i].id = rows[i].id;
        banners[i].url = rows[i].url;
        banners[i].enabled = rows[i].enabled;
        banners[i].type = rows[i].type;
        banners[i].payload = rows[i].payload;
        banners[i].Description = rows[i].description;

    
      }
  

      ProductionDefinition.banners=banners;
      step();
    });
  },
  function workingWithRows28(step) {
    // google provides some query options 
    sheets[28].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[28].title+' '+sheets[28].rowCount+'x'+sheets[28].colCount);
      console.log('Read '+rows.length+' rows');
      timeout={};
      for(var i = 0;i<rows.length;i++){
        timeout[i]={};
        timeout[i].id = rows[i].id;
        timeout[i].duration = rows[i].duration;
        timeout[i].description = rows[i].description;
 


    
      }

     ProductionDefinition.timeout=timeout;

      step();
    });
  },
  function workingWithRows29(step) {
    // google provides some query options 
    sheets[29].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[29].title+' '+sheets[29].rowCount+'x'+sheets[29].colCount);
      console.log('Read '+rows.length+' rows');
      selfexclusion={};
      for(var i = 0;i<rows.length;i++){
        selfexclusion[i]={};
        selfexclusion[i].id = rows[i].id;
        selfexclusion[i].duration = rows[i].duration;
        selfexclusion[i].description = rows[i].description;

    
      }

      ProductionDefinition.selfexclusion=selfexclusion;

      step();
    });
  },
  function workingWithRows30(step) {
    // google provides some query options 
    sheets[30].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[30].title+' '+sheets[30].rowCount+'x'+sheets[30].colCount);
      console.log('Read '+rows.length+' rows');
      experiments={};
      for(var i = 0;i<rows.length;i++){
        experiments[i]={};
        experiments[i].name = rows[i].name;
        experiments[i].alternatives = rows[i].alternatives;
        experiments[i].enabled = rows[i].enabled;

    
      }

 
      ProductionDefinition.experiments=experiments;

      step();
    });
  },
  function workingWithRows31(step) {
    // google provides some query options 
    sheets[31].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[31].title+' '+sheets[31].rowCount+'x'+sheets[31].colCount);
      console.log('Read '+rows.length+' rows');
      featureFlags={};
      for(var i = 0;i<rows.length;i++){
        featureFlags[i]={};
        featureFlags[i].name = rows[i].name;
    
        featureFlags[i].enabled = rows[i].enabled;
 


    
      }
  
 
      ProductionDefinition.featureFlags=featureFlags;

      step();
    });
  },
  function workingWithRows32(step) {
    // google provides some query options 
    sheets[32].getRows({
      offset: 1,
      limit: 1000
    }, function( err, rows ){
      console.log('sheet info: '+sheets[32].title+' '+sheets[32].rowCount+'x'+sheets[32].colCount);
      console.log('Read '+rows.length+' rows');
      promotions={};
      for(var i = 0;i<rows.length;i++){
        promotions[i]={};
        promotions[i].id = rows[i].id;
        promotions[i].type = rows[i].type;
        promotions[i].enabled = rows[i].enabled;
        promotions[i].image = rows[i].image;
        promotions[i].carouselimage = rows[i].carouselimage;
        promotions[i].title = rows[i].title;
        promotions[i].subtitle = rows[i].subtitle;
        promotions[i].description = rows[i].description;

      }
  

    ProductionDefinition.promotions=promotions;


      step();
    });
  },
  function write(step) {


jsonfile.writeFileSync(file, ProductionDefinition);
step();
  }
]);