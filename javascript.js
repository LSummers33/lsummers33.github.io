/*function calculate() {
    var age = 26;
    var maxage = 99;
    var dailyrate = 5;
    var lifetimeneed = (maxage - age) * dailyrate * 365;
    alert("You will need " + lifetimeneed + " mangoes to last you until your old age of " + maxage + ".");
}*/ 
//commented out to use calculate for DOM practice
/*$(document).ready(function(){
$('.box').bind({
	click: function(){
		$(this).css('background-color', 'green')
		$(this).html('Hi')
	},
	mouseenter: function(){}
})
}*/

function magic() {
	var addition = document.body.innerHTML += "Wow so cool, right?"; //adds to end of the page
	var newDiv = document.createElement('div')
	document.body.appendChild(newDiv);
	newDiv.innerHTML = list; //the create a list to appear
}
function calculate() {
	var newParagraph = document.createElement('p');
	var paragraphText = document.createTextNode('You did it!');
	newParagraph.appendChild(paragraphText);
	document.body.appendChild(newParagraph);

	var newImg = document.createElement('img');
	newImg.src = 'http://girldevelopit.com/assets/pink-logo.png';
	document.body.appendChild(newImg);
}

function favoriteThings() {
    var things = ["cheese", "chocolate", "beer", "bread", "Will"];
    var alertString = "My favorite things are ";
    for (var i = 0; i < things.length; i++) {
        alertString = alertString + things[i];
        if (i !== things.length - 1) {
            alertString += ", ";
        };

        if (i === things.length - 2) {
            alertString += "and ";
        };

        if (i === things.length - 1) {
            alertString += "!";
        };
    };
    alert(alertString);
}

function myFriends() {
    var friends = [
    {name: "Cindy",
        hairColor: "brown"}, 
    {name: "Will",
        hairColor: "black"}
     ];

    var description = "My friend ";
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        description += friend.name + " has beautiful " + friend.hairColor + " hair. ";
    }
    alert(description);
}
$(document).ready(function(){
    $("js.click").on("click", function)
    	alert("hi");      
        });