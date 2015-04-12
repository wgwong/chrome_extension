// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/

function expandFullScreen() {
      chrome.windows.getCurrent(function (window) {
      //console.log(window.id);
        chrome.tabs.create({url: "New_Tab.html"}); 

        //chrome.windows.create({url: "New_Tab.html", type: "popup"});

        chrome.windows.update(window.id, {state:"fullscreen"}, function () {}); 
    });
}

$(document).ready(function() {
    var fclist_json = [];

  var fclist_str = localStorage.getItem("flashcards");
  var temp = JSON.parse(fclist_str);
  if (temp !== null) {
    fclist_json = temp;
    $("#f").replaceWith(fclist_json[fclist_json.length-1].front);
    $("#b").replaceWith(fclist_json[fclist_json.length-1].back);
  }
  else {
    console.log("Error: Nothing found in localstorage!"); //debug
  }

  $("#studyMode_button").click( function() {
    expandFullScreen();
  });

  $("#manage_button").click( function() {
    chrome.tabs.create({url: "Manage_Flash_Cards.html"});
  });

  $("#createfc_button").click( function() {
    var front_text = $("#fronttext").val();
    var back_text = $("#backtext").val();
    fclist_json.push({"front": front_text, "back": back_text});
    fclist_str = JSON.stringify(fclist_json);
    localStorage.setItem("flashcards", fclist_str);
  });
});
 
/*
document.getElementById('button1').addEventListener('click', function(){
  var frontside = document.getElementById('front').value;
  var backside = document.getElementById('back').value;
  var temp = {front: frontside, back: backside};
  localStorage.setItem("result", temp);
  var temp2 = localStorage.getItem("result");
  document.getElementById('f').innerHTML = "arbitrarystring"; //debug
  //document.getElementById('f').innerHTML = temp2.back;
});

  function partb() {

  }*/
