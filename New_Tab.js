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

    $("#f2").text(fclist_json[currentNoteCard].front); //Alabama
    $("#b2").text("");


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
    	
    	$("#f2").text(fclist_json[currentNoteCard].front);
    	$("#b2").text("");
    }

    if (code == 39) //right arrow
    {
    	console.log("Right Arrow");
    	
    	currentNoteCard = currentNoteCard + 1
    	
    	if(currentNoteCard > lengthFlashCardList - 1)
    	{
    		currentNoteCard = currentNoteCard % lengthFlashCardList;
    	}
    	
    	
		$("#f2").text(fclist_json[currentNoteCard].front);
    	$("#b2").text("");
    }

    if (code == 40) //down arrow
    {
    	console.log("Down Arrow");
        $("#f2").text("");
    	$("#b2").text(fclist_json[currentNoteCard].back);
    }

    if (code == 38) //up arrow
    {
        console.log("Up Arrow");
        $("#f2").text(fclist_json[currentNoteCard].front);
        $("#b2").text("");
    }
    };
  }
  else {
    console.log("nothing found in localstorage!");
  }

});