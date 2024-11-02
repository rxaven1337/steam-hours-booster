const steamUser = require('steam-user');
const steamTotp = require('steam-totp');

let username = ''; // steam username
let password = ''; // steam password
let secret = ''; // steam shared secret key

let games = [730];
let status = 1;

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(secret)});
user.on('loggedOn', () => {
    if (user.steamID != null) console.log(user.steamID + ' - Sucessfully logged on.');
    user.setPersona(status);
    user.gamesPlayed(games);
});

console.log('https://github.com/rxaven1337/steam-hours-booster - rxaven1337.');