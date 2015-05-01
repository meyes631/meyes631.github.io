var actions = ['SELFIE WITH A STRANGER',
            	'EAT A BANANA',
            	'SING OUT LOUD, WITH A BANANA',
            	'PLANT A FLOWER',
            	'BUY COFFE',
            	'ASK A STRANGER TO DANCE WITH YOU',
            	'GO FISHING',
            	'DRAW A DRAWING',
            	'BOW AND ARROW',
            	'FEED THE PIGEONS',
            	'FIND A CAT',
            	'DANCE IN PUBLIC',
            	'PLANT A FLAG',
            	'HAVE A PICNIC',
            	'KNOCK ON A DOOR',
            	'WAVE FOR 5 MINUTES',
            	'SIT DOWN',
            	'BLOW BUBLES',
            	'TAKE OFF YOUR SHOES',
            	'GRAB A SOUVENIR',
            	'LIFT AN OBJECT',
            	'STUMBLE AND FALL',
            	'CONVERSATION WITH YOUR SHOE',
            	'READ A BOOK UPSIDE DOWN',
            	'DEPRIVE YOURSELF OF ALL DISTRACTIONS',
            	'HELP SOMEONE',
            	'ASK WHAT TIME IT IS',
            	'KEEP CALM',
            	'HIGH FIVE A STRANGER',
            	'GET NOTICED',
            	'TELL A STORY',
            	'TAKE A NAP',
            	'LEAVE SOMETHING BEHIND',
            	'HAVE FUN',
            	'STAND ON YOUR HEAD',
            	'CONNECT WITH NATURE',
            	'FIND YOUR CALLING',
            	'CALL YOUR MOTHER',
            	'ESCAPE',
            	'MARK SOMETHING',
            	'WALK BACKWARDS',
            	'TAP AGAIN',
            	'SCREENSHOT',
            	'CLIMB IT'
                         ];


var locations = ['BROOKLYN BRIDGE',
            	'STATEN ISLAND',
            	'THE NEW SCHOOL',
            	'BETHESDA FOUNTAIN',
            	'BETHESDA TERRACE',
            	'MET',
            	'MoMA',
            	'CENTRAL PARK MODEL BOAT SAILING',
            	'ROOSEVELT ISLAND',
            	'WALDORF ASTORIA',
            	'NEW YORK PUBLIC LIBRARY',
            	'GOUND ZERO',
            	'THE HIGH LINE', 
            	'AMC CINEMA',
            	'BROADWAY',
            	'TIMES SQ',
            	'BATTERY PARK',
            	'THE L TRAIN',
            	'RONDALL&rsquo;S ISLAND PARK',
            	'MACY&rsquo;S',
            	'UN HQ',
            	'BAR',
            	'RROCKEFELLER CENTER',
            	'GRAND CENTRAL TERMINAL',
            	'THE METRO',
            	'WHEREVER',
            	'THE SKY',
            	'BEHIND YOU',
            	'CENTRAL PARK ZOO',
            	'WEST VILLAGE',
            	'THE FAT BLACK PUSSYCAT',
            	'WASHINGTON SQUARE ARCH',
            	'WATER',
            	'THE TOILET'
                     ];


var images =    ["images/ny1.png",
                 "images/ny2.png",
                 "images/ny3.png",
                 "images/ny4.png",,
                 "images/ny5.png",
                 "images/ny6.png",
                 "images/ny7.png",
                 "images/ny8.png",
                 "images/ny9.png",
                 "images/ny10.png"
                    ];


var backgrounds = ["color1",
                   "color2",
                   "color3",
                   "color4",
                   "color5",
                   "color6",
                   "color7",
                   "color8",
                   "color9"
                   ];

$('.wrapper').click(function() {
    choose_action();
    choose_location();
    choose_images();
    choose_background();
});
    
    

function choose_background() {
    
  var random_num = Math.floor(Math.random() * backgrounds.length),
      background = backgrounds[random_num];
  
  $('body').addClass(background);
}



    
function choose_images() {
var selectedimage = false;

  
  var nextimage = images[Math.floor(Math.random()*images.length)];
  
  while (selectedimage == nextimage) {
    nextimage = images[Math.floor(Math.random()*images.length)];
  }
  
  selectedimage = nextimage;
  
  $(".circle").html(nextimage);

  $(".circle").html('<img src="' + images[Math.floor(Math.random()*images.length)]+ '">');
  

}




// function choose_body() {
//     var random_num = Math.ceil(Math.random() * body.length)
    
// }

function choose_action() {
    var random_num = Math.ceil(Math.random() * actions.length);
    $('.action h2').html(actions[random_num]);
}

function choose_location() {
    var random_num = Math.ceil(Math.random() * locations.length);
    $('.location h2').html(locations[random_num]);
}


    choose_background()
    
    choose_images();