// var player = videojs('content_video');

// var options = {
//   id: 'content_video',
//   adTagUrl: 'http://localhost:8001/ads/vmap.xml'
// };

// player.ima(options);

// Initialize the video player
var player = videojs('content_video');

// Define the adTagUrl and the POST request payload
var adTagUrl = '/ads/vmap.xml';

// fetch(adTagUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Credentials': 'include'
//   },
// })
// .then(response => response.text())
// .then(responseText => {
//   const parser = new DOMParser();
//   const xmlDoc = parser.parseFromString(responseText, "application/xml");
//   console.log(xmlDoc)
//   // Initialize the IMA plugin
//   player.ima({
//     adTagUrl: xmlDoc,
//     vpaidMode: google.ima.ImaSdkSettings.VpaidMode.ENABLED
//   });
// })
// .catch(error => console.error('Error:', error));

player.ima({
  adTagUrl: "http://localhost:5501/ads/vmap.xml",
  vpaidMode: google.ima.ImaSdkSettings.VpaidMode.ENABLED
});

// Add event listeners for better debugging
// player.on('adsready', function() {
// console.log('Ads are ready.');
// });

// player.on('adstart', function() {
// console.log('Ad started.');
// });

// player.on('adend', function() {
// console.log('Ad ended.');
// });

// player.on('adskip', function() {
// console.log('Ad skipped.');
// });

// player.on('adserror', function() {
// console.error('Ad error.');
// });

// // Event listener for when the ads manager is loaded
// player.on('ima3-loaded', function() {
// console.log('IMA3 ads manager loaded.');
// });

// Initialize the player and request ads
player.ima.initializeAdDisplayContainer();
player.ima.requestAds();

// Log the current time to check when the second ad break should trigger
player.on('timeupdate', function() {
console.log('Current time: ' + player.currentTime());
});