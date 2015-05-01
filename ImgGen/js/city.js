console.log("Hello world");

// var images = ["http://40.media.tumblr.com/dfb694a9441369587fa6fbace7f1300a/tumblr_nlhadzYa621qgn992o1_500.jpg",
//             "http://41.media.tumblr.com/e7d92bf9ff7e7bd6a398c21e1bd0eb2a/tumblr_nlhabwKYO11qgn992o1_500.jpg",
//             "http://41.media.tumblr.com/9a1f93e7a5574adbfdd8151c8848eced/tumblr_njvspjar0q1qgn992o1_500.jpg",
//             "http://40.media.tumblr.com/3e358654d9b38fea7dcffd686a3a9c90/tumblr_nhx1zlburL1qgn992o1_500.jpg",
//             "http://40.media.tumblr.com/61309db165a9712fa6338cb72d02c25c/tumblr_ngdoqcpnqm1qgn992o1_500.jpg"];


var images = ["images/ny.png",
              "images/ny2.png",
              "images/ny3.png",
              "images/ny4.png",
              "images/ny5.png",
              "images/ny6.png",
              "images/ny7.png",
              "images/ny8.png"
];


var selectedimage = false;

$(".h2").click(function() {
  
  var nextimage = images[Math.floor(Math.random()*images.length)];
  
  while (selectedimage == nextimage) {
    nextimage = images[Math.floor(Math.random()*images.length)];
  }
  
  selectedimage = nextimage;
  
  $(".h2").html(nextimage);

  $(".h2").html('<img src="' + images[Math.floor(Math.random()*images.length)]+ '">');
  
});