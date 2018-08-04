//Define Global Vars
var endgame = false; // control end/restart
var champ_health = 0;
var champ_attack = 0;
var champ_img;
var champ_sel = false; 
var opp_health = 0;
var opp_attack = 0;
var opp_img;
var opp_sel = false; //opponent selected false
var debug = true; // for console debug output
var log_char = false; // console log characters

// Character Stats
var character = [
    {
        "name":"character1",
		"health":132,
		"attack":25,
		"img": "/path/to/img.jpg"
	},{ 
        "name":"character2",
		"health":150,
		"attack":10,
		"img": "/path/to/img.jpg"
	},{
        "name":"character3",
		"health":122,
		"attack":22,
		"img": "/path/to/img.jpg"
    },{
	    "name":"character4",
		"health":112,
		"attack":30,
		"img": "/path/to/img.jpg"
    }
];

var charString = JSON.stringify(character);
var charObj;

try {
     charObj = JSON.parse(charString); 
} catch (e) {
    charObj = character;
}

// verifying character outputs
if(log_char){
    var i;
    console.log(Object.keys(charObj));
    for (i in charObj){
        console.log("name: " + charObj[i].name);
        console.log("health: " + charObj[i].health);
        console.log("attack: " + charObj[i].attack); //base attack power
        console.log("img: " + charObj[i].img);
    }
}

//Choose a Champion
function champion(cid){
    if(debug){console.log("cid: " + cid)}
    if(!champ_sel){
       champ_health = charObj[cid].health;
       champ_attack = charObj[cid].attack; //base attack power
       champ_img = charObj[cid].img;
       champ_sel = true;
    }
    if(debug){console.log("Champion health: " + champ_health + " Attack Power: " + champ_attack)}
}

//Choose an Opponent 
function opponent(oid){
    if(debug){console.log("oid: " + oid)}
    if (!opp_sel){
    opp_health = charObj[oid].health;
    opp_attack = charObj[oid].attack;
    opp_img = charObj[oid].img;
    opp_sel = true;
    }
    if(debug){console.log("Opponent Health: " + opp_health + " Opponent Attack :" + opp_attack)}
}

//Attack (calculations)
//Opponent Health & Attack
function battle(_champ,_opp){
    //update competitor stats
    champion(_champ);
    opponent(_opp);

    //Battle Calculations
    // Champion's Move
    opp_health = opp_health - champ_attack; //Champion Base Attack on Oppent Health
    champ_attack = champ_attack + charObj[_champ].attack; // Increase base attack
    // Opponent Move
    champ_health = champ_health - opp_attack;    //decrease health by opponent attack
    if(debug){console.log("New Health: " + champ_health + " New Attack: " + champ_attack)}
}

//Score Card?

//Determine Win/Loss
// if health less than 0, LOSE
// if all oppen 


//Restart Game
