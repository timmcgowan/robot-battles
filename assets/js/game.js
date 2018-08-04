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

// Character Stats
var character = {
	"character1": {
		"health": "132",
		"attack": "25",
		"img": "/path/to/img.jpg"
	},
	"character2": {
		"health": "150",
		"attack": "10",
		"img": "/path/to/img.jpg"
	},
	"character3": {
		"health": "122",
		"attack": "22",
		"img": "/path/to/img.jpg"
	},
	"character4": {
		"health": "112",
		"attack": "30",
		"img": "/path/to/img.jpg"
	}
}

try {
    var charOjb = JSON.parse(character); 
} catch (e) {
    // You can read e for more info
    // Let's assume the error is that we already have parsed the payload
    // So just return that
    charOjb = character;
}

function getCharacterById(id) {
    return character.filter(
      function(character) {
        return character.code == code
      }
    );
}

console.log(charOjb);

//Choose a Champion
function champion(id){
    if (!champ_sel){

    console.log(id);
    champ_health = charOjb[id].health;
    champ_attack = charOjb[id].attack;
    champ_img = charOjb[id].img;
    champ_sel = true;
    }
    if(debug){console.log("champ_health" + champ_health + " champ_attack" + champ_attack)}
}

//Choose an Opponent 
//if no oponent, no play notice
function opponent(id){
    if (!opp_sel){
    opp_health = character[id].health;
    opp_attack = character[id].attack;
    opp_img = character[id].img;
    opp_sel = true;
    }
    if(debug){console.log("opp_health" + opp_health + " opp_attack" + opp_attack)}
}

//Attack (calculations)
//Opponent Health & Attack
function battle(cid,oid){
    //update competitor stats
    champion(cid);
    opponent(oid);
    
    //Battle Calculations
    //champion Health & Attack (compound each round)
    var attack = champ_attack + attack;
    //decrease health by opponent attack
    var health_loss = champ_health - opp_attack;
    if(debug){console.log("at" + attack + " hit" + health_loss)}
}


//Score Card?

//Determine Win/Loss
// if health less than 0, LOSE
// if all oppen 


//Restart Game

