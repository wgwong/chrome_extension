var currentNoteCard = 0;
var lengthFlashCardList = [];
var fclist_json = [];

$(document).ready(function() {
  var fclist_json = [];
  var flashcardsList = localStorage.getItem("flashcards");
  
  var temp = JSON.parse(flashcardsList);
  if (temp !== null) {
    fclist_json = temp;
    console.log(fclist_json);

    currentNoteCard = 0;
    lengthFlashCardList = fclist_json.length;

    $("#f2").replaceWith(fclist_json[currentNoteCard].front);

    $("#b2").replaceWith(fclist_json[currentNoteCard].back);

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (code === 8) { //backspace key

        chrome.windows.getCurrent(function (window) {
      	chrome.windows.update(window.id, {state:"maximized"}, function () {}); 
      	chrome.tabs.getSelected(null, function(tab) {chrome.tabs.remove(tab.id, function(){});});
      	
    	});
    }

    if (code == 37) //left arrow
    {
    	console.log("Left Arrow");
    	
    	currentNoteCard = currentNoteCard-1;

    	if(currentNoteCard < 0)
    	{
    		currentNoteCard = currentNoteCard + lengthFlashCardList;
    	}
    	console.log(currentNoteCard);
    	console.log(fclist_json[currentNoteCard].front);
    	console.log(fclist_json[currentNoteCard].back);
    	//$("#f2").replaceWith(fclist_json[currentNoteCard].front);
    	$("#f2").replaceWith("fghfghfghf");
    	//$("#b2").replaceWith(fclist_json[(currentNoteCard-1)%lengthFlashCardList].back);
    }

    if (code == 39) //right arrow
    {
    	console.log("Right Arrow");
    	
    	currentNoteCard = currentNoteCard + 1
    	
    	if(currentNoteCard > lengthFlashCardList - 1)
    	{
    		currentNoteCard = currentNoteCard % lengthFlashCardList;
    	}
    	
    	console.log(currentNoteCard);
    	console.log(fclist_json[currentNoteCard].front);
    	console.log(fclist_json[currentNoteCard].back);
		//$("#f2").replaceWith(fclist_json[currentNoteCard].front);
		$("#f2").replaceWith("fghfghfghf");
    	//$("#b2").replaceWith(fclist_json[(currentNoteCard+1)%lengthFlashCardList].back);
    }

    if (code == 38 || code == 40) //up arrow and down arrow respectively
    {
    	console.log("Up or down Arrow");
    	console.log(currentNoteCard);
    	console.log(fclist_json[currentNoteCard].front);
    	console.log(fclist_json[currentNoteCard].back);
    	//$("#b2").replaceWith(fclist_json[currentNoteCard].back);
    	$("#b2").replaceWith("fghfghfghf");
    }
    };

  }
  else {
    console.log("nothing found in localstorage!");
  }

});