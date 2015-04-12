window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 8) { //backspace key

        chrome.windows.getCurrent(function (window) {
      	chrome.windows.update(window.id, {state:"maximized"}, function () {}); 
      	chrome.tabs.getSelected(null, function(tab) {chrome.tabs.remove(tab.id, function(){});});
      	
    	});
    	
    	/*
    	chrome.tabs.getCurrent(function(tab) {
  		  chrome.tabs.remove(tab.id, function(){});
		};
		*/

    }  
};