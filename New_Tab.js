var currentNoteCard = 0;
var lengthFlashCardList = [];
var fclist_json = [];
var currentIsFront = true;

$(document).ready(function() {
  var fclist_json = [];
  var flashcardsList = localStorage.getItem("flashcards");
  
  var temp = JSON.parse(flashcardsList);
  if (temp !== null) {
    fclist_json = temp;
    console.log(fclist_json);

    currentNoteCard = 0;
    lengthFlashCardList = fclist_json.length;

    $("#f2").text(fclist_json[currentNoteCard].front);
    $("#b2").text("");
    currentIsFront = true;

    jQuery("#f2").fitText(1);
    jQuery("#b2").fitText(1);

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
    	currentNoteCard = currentNoteCard + 1
    	
    	if(currentNoteCard > lengthFlashCardList - 1)
    	{
    		currentNoteCard = currentNoteCard % lengthFlashCardList;
    	}
    	
    	
		$("#f2").text(fclist_json[currentNoteCard].front);
    	$("#b2").text("");
    }

    if (code == 38 || code == 40) //up or down arrow respectively
    {
        if (currentIsFront)
        {
            currentIsFront = false
            //not the front, so we display the back
            $("#f2").text("");
            $("#b2").text(fclist_json[currentNoteCard].back);
        }
        else
        {
            currentIsFront = true   
            //is the front, so we don't display the back
            $("#f2").text(fclist_json[currentNoteCard].front);
            $("#b2").text("");
        }
        
    }
    };
  }
  else {
    console.log("nothing found in localstorage!");
  }

});