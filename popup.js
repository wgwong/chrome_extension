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
      chrome.tabs.create({url: "New_Tab.html"}); 
      chrome.windows.update(window.id, {state:"maximized"}, function () {}); 
    });
}

$(document).ready(function() {
    var fclist_json = [];

  var fclist_str = localStorage.getItem("flashcards");
  var temp = JSON.parse(fclist_str);
  if (temp !== null) {
    fclist_json = temp;
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