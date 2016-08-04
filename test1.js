var jsonfile = require('jsonfile')

var file1 = '/chat/levels.json'
var levels = jsonfile.readFileSync(file1);

var file2 = '/chat/games.json'
var games = jsonfile.readFileSync(file2);

var file3 = '/chat/misc.json'
var misc = jsonfile.readFileSync(file3);

var file4 = '/chat/betLevels.json'
var betLevels = jsonfile.readFileSync(file4);

var file5 = '/chat/vip.json'
var vip = jsonfile.readFileSync(file5);

var file6 = '/chat/cashSystemAccount.json'
var cashSystemAccount = jsonfile.readFileSync(file6);

var file7 = '/chat/chipPackages.json'
var chipPackages = jsonfile.readFileSync(file7);

var file8 = '/chat/jackpots.json'
var jackpots = jsonfile.readFileSync(file8);

var file9 = '/chat/achievements.json'
var achievements = jsonfile.readFileSync(file9);

var file10 = '/chat/deposits.json'
var deposits = jsonfile.readFileSync(file10);

var file11 = '/chat/withdrawal.json'
var withdrawal = jsonfile.readFileSync(file11);

var file12 = '/chat/avatars.json'
var avatars = jsonfile.readFileSync(file12);

var file13 = '/chat/buychips.json'
var buychips = jsonfile.readFileSync(file13);

var file14 = '/chat/gifts.json'
var gifts = jsonfile.readFileSync(file14);

var file15 = '/chat/paylines.json'
var paylines = jsonfile.readFileSync(file15);

var file16 = '/chat/bonusSystemAccount.json'
var bonusSystemAccount = jsonfile.readFileSync(file16);

var file17 = '/chat/MOTDs.json'
var MOTDs = jsonfile.readFileSync(file17);

var file18 = '/chat/bonusOffers.json'
var bonusOffers = jsonfile.readFileSync(file18);

var file19 = '/chat/emails.json'
var emails = jsonfile.readFileSync(file19);

var file20 = '/chat/wheelValuesNonDeposit.json'
var wheelValuesNonDeposit = jsonfile.readFileSync(file20);

var file21 = '/chat/wheelValuesDeposit.json'
var wheelValuesDeposit = jsonfile.readFileSync(file21);

var file22 = '/chat/countries.json'
var countries = jsonfile.readFileSync(file22);

var file23 = '/chat/currencies.json'
var currencies = jsonfile.readFileSync(file23);

var file24 = '/chat/languages.json'
var languages = jsonfile.readFileSync(file24);

var file25 = '/chat/propmap.json'
var propmap = jsonfile.readFileSync(file25);

var file26 = '/chat/kycLimits.json'
var kycLimits = jsonfile.readFileSync(file26);

var file27 = '/chat/inboxMessages.json'
var inboxMessages = jsonfile.readFileSync(file27);

var file28 = '/chat/banners.json'
var banners = jsonfile.readFileSync(file28);

var file29 = '/chat/timeout.json'
var timeout = jsonfile.readFileSync(file29);

var file30 = '/chat/selfexclusion.json'
var selfexclusion = jsonfile.readFileSync(file30);

var file31 = '/chat/experiments.json'
var experiments = jsonfile.readFileSync(file31);

var file32 = '/chat/featureFlags.json'
var featureFlags = jsonfile.readFileSync(file32);

var file33 = '/chat/promotions.json'
var promotions = jsonfile.readFileSync(file33);

var obj = {
	levels: levels,
	games: games,
	misc: misc,
	betLevels: betLevels,
	vip: vip,
	cashSystemAccount: cashSystemAccount,
	chipPackages: chipPackages,
	jackpots: jackpots,
	achievements: achievements,
	deposits: deposits,
	withdrawal: withdrawal,
	avatars: avatars,
	buychips:buychips,
	gifts: gifts,
	paylines: paylines,
	bonusSystemAccount: bonusSystemAccount,
	MOTDs: MOTDs,
	bonusOffers: bonusOffers,
	emails: emails,
	wheelValuesNonDeposit:wheelValuesNonDeposit,
	wheelValuesDeposit: wheelValuesDeposit,
	countries: countries,
	currencies: currencies,
	languages: languages,
	propmap: propmap,
	kycLimits: kycLimits,
	inboxMessages: inboxMessages,
	banners: banners,
	timeout: timeout,
	selfexclusion: selfexclusion,
	experiments: experiments,
	featureFlags: featureFlags,
	promotions: promotions
}
var file = '/chat/ProductionDefinitions.json';
jsonfile.writeFileSync(file, obj);
