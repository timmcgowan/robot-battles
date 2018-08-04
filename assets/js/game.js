//Define Global Vars
var endgame = false; // control end/restart
var champ_health = 0;
var champ_attack = 0;
var champ_img;
var champ_sel = false; 
var opp_health = 0;
var opp_attack = 0;
var charType = "notselected"
var wins;
var looses;
var opp_sel = false; //opponent selected false
var debug = true; // for console debug output
var log_char = false; // console log characters

// Character Stats
var character = [
    {
        "name":"The Terminator",
		"health":132,
		"attack":25,
		"img": "./assets/img/terminator-img.jpg"
	},{ 
        "name":"Gallaxhar Robot",
		"health":150,
		"attack":10,
		"img": "./assets/img/gallaxhar-img.jpg"
	},{
        "name":"The MIP",
		"health":122,
		"attack":22,
		"img": "./assets/img/mip-img.jpg"
    },{
	    "name":"Marty",
		"health":112,
		"attack":30,
		"img": "./assets/img/marty-img.jpg"
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
function selectPlayer (id){
    if (!champ_sel){
        champ_sel = true;
        renderHtml.player(id,"champion");
    } else if (!opp_sel){
        opp_sel = true;
        renderHtml.player(id,"opponent");
        renderHtml.battleButton();
    } else {
        if(debug){console.log("Both Players already selected")}
        return
    }
    return

}
var renderHtml = {
        //Choose a Champion
        player: function(cid,charType){
            var hidespan = "C" + cid;
            console.log(hidespan);
            $("#" + hidespan + "").hide();
            let _div = $("<div class='character' data-name='" + charObj[cid].name + "'>");
            let _name = $("<span class='character-name'>").text(charObj[cid].name);
            let _img = $("<img class='character-img'>").attr("src", charObj[cid].img);
            let _health = $("<p class='character-health'>").text(charObj[cid].health);
            if (charType==="champion"){
                $(_div).attr('id','champion');
            } else if (charType==="opponent"){
                $(_div).attr('id','opponent');
            } else {
                $(_div).addClass('contestant');
            }
            _div.append(_name).append(_img).append(_health);
            $("#gamearea").append(_div);
        },
        battleButton: function (){
            let _bbutton = $('<button/>', {
                text: "Attack",
                id: 'attack_button',
                click: function () { battle(); }
            });
            //_bbutton.addClass('atttack_button')
            $("#gamearea").append(_bbutton);
        }
}

// stats *may no longer need..  
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
    //opp_img = charObj[oid].img;
    opp_sel = true;
    }
    if(debug){console.log("Opponent Health: " + opp_health + " Opponent Attack :" + opp_attack)}
}

//Attack (calculations)
//Opponent Health & Attack
function battle(_champ,_opp){
    //update competitor stats
   // renderHtml.player(_champ,"champion")
    champion(_champ);
    opponent(_opp);
//renderHtml.player(_opp,"opponent")

    //Battle Calculations
    // Champion's Move
    opp_health = opp_health - champ_attack; //Champion Base Attack on Oppent Health
    champ_attack = champ_attack + charObj[_champ].attack; // Increase base attack
    // Opponent Move
    if (opp_health <= 0){
        //opponent loses
        console.log("You win!, Your oppenent lost.");
        wins++;
    } else {
        champ_health = champ_health - opp_attack;    //decrease health by opponent attack
    }
    if(debug){console.log("New Health: " + champ_health + " New Attack: " + champ_attack)}
}

//Score Card?

//Determine Win/Loss
// if health less than 0, LOSE
// if all oppen 


//Restart Game
