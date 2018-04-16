"use strict"

alert("Choose your faction!");

function rollDice(sideAmount)
{
	let rollOutcome 
	rollOutcome = 1+Math.floor(Math.random() * sideAmount);
	return rollOutcome
}

function coinToss(tossResult1)
{
switch(tossResult1)
{
case 1:
alert("You give the Galaxy hope, welcome to the Rebellion. Prepare for battle")
break;
case 2:
alert("We are proud to have you serve the Emperor. Prepare for battle!")
break;
}}

function rollTwoActions (tossResult2)
{
	if (tossResult2 === 1)
	    {	
	 	alert("Our spies are searching for information. At ease, soldier.")
		let tossResult2 = rollDice(4)	 
		return rollTwoActions(tossResult2)
		}
	
	else if (tossResult2 > 1)
		{
		let randomResponse = pickAResponse(["We are ready to attack! They won't ever see it coming.","We are under attack! Battle stations!","Defenses are prepped, we are prepared for battle."])
		alert(randomResponse)
		return tossResult2
		}
}
function pickAResponse (ResponseChoiceArray) // this is a function that randomly selects a response from the inputed array
{
	let randonResponse = ResponseChoiceArray[Math.floor(Math.random() * ResponseChoiceArray.length)];
	return randonResponse
}

function rollThreeActions (tossResult3)
{
 	if (tossResult3 <= 10)
 	{
 		 
 		alert("Their defenses were stronger than we anticipated. Calling for reinforcements....")
 		let randomGoodResponse = pickAResponse(["The local population is sympathetic to our effort. Hold the line!","Multiple enemy leaders have bounties on their heads. Funds are of no concern at the moment. End them.","The planetary floral and fauna is disadvanentageous to our enemy. Use it against them!","Orbital bombing is available. Call in the strike!","Hero has arrived on the Battle field..stay clear of that lightsaber","If the enemy does not surrendor within the next rotaion, form a blockaide. We shall starve them out!","Our force outnumbers theirs 2 to 1, they will soon perish!","Forces engaged in a nearby system has emerged victorious! They will be arriving soon with renforcements.","Special Froces team has arrived. They will lead you to victory!","We have hired snugglers to sneak forces behind enemy lines. Do not fail us."])
 		alert(randomGoodResponse)
 		return tossResult3
 	}
 	else (tossResult3 >=10)
 	{
 		 alert("Their defenses were stronger than we anticipated. Calling for reinforcements....")
 		let randomBadResponse = pickAResponse(["The local population is resisting our effort. Break their line!","Some of our leaders have bounties on their heads. Protect them at all costs.","The planetary floral and fauna is trecherous. Do not let the enemy use it against us!","Enemy capital ships have entered planitary airspace. Beware of orbital strike!","Ememy Hero has arrived on the Battle field! Stay clear of that lightsaber","We must break then emeny lines before the next rotation. We cannot survive a blockaide!","Our forces are out numbered 1 to 2. We must not persh!","Forces engaged in a nearby system have been defeated! Retreating forces must receive medical attention.","Enemy Special Froces team has arrived. Odds of survival are slim","Smuggler ships were spotted entering the orbit. Do not allow enemy forces to sneek behind our lines!"])
 		alert(randomBadResponse)
 		return tossResult3
 	}}

function rollFourActions (tossResult4)
{

let randomResponse = pickAResponse(["Victory is in our grasp!","Their forces have already began to fall back, do not let up!","We broke the line!","The line is being held, attempt to advance forces!","We cannot withstand their defenses for much longer. Retreat is imminent","The losses we are receiving are too high! We must surrendor soon!"])
alert(randomResponse)
return tossResult4
}

function rollFiveActions (tossResult5)
{
alert ("What should we do with the survivors??")
let randomResponse = pickAResponse(["Leave them to perish.","Dead men tell no tales","Bring them in for interoggation","Our cause is short on credits...sell them to the Hutts."])
alert(randomResponse)
return tossResult5
}

function rollSixActions(tossResult6)
{
alert("Zone clear: Commanding Officers have arrived. Prepare for evaluation.")
return tossResult6
}

function getScoreTotal (tossResult1,tossResult2,tossResult3,tossResult4,tossResult5,tossResult6)
{
let score = (tossResult1 + tossResult2 + tossResult3 + tossResult4 + tossResult5 + tossResult6)
if (score > 20)
{
	alert("PASS: Congradulations on completeing your first battle.")
}
else
{
	alert("FAIL: A dissapointment to be sure.")
}
}

function runGame(){
let tossResult1 = rollDice(2)
coinToss(tossResult1)

let tossResult2 = rollDice(4)
rollTwoActions(tossResult2)

let tossResult3 = rollDice(20)
rollThreeActions (tossResult3)

let tossResult4 = rollDice(12) 
rollFourActions(tossResult4)

let tossResult5 = rollDice(8)
rollFiveActions(tossResult5)

let tossResult6 = rollDice(10) 
rollSixActions(tossResult6)

let score = getScoreTotal(tossResult1,tossResult2,tossResult3,tossResult4,tossResult5,tossResult6)
}

runGame()














// LAST ROLL Functions for picking a number guesss -- picking the side of the dice you think it'll lad on. If you guesss correctly, your score is divided by 2. if wrong, you get that number added to score.