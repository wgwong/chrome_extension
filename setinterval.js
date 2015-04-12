function expandFullScreen()
{
      chrome.windows.getCurrent(function (window) {
      //console.log(window.id);
      chrome.tabs.create({url: "New_Tab.html" }); 
      chrome.windows.update(window.id, {state:"fullscreen"}, function () {}); 
    });
}

setInterval(function() { expandFullScreen(); }, 120000);