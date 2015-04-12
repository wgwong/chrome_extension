// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/
var counter = 0

function expandFullScreen()
{
      chrome.windows.getCurrent(function (window) {
      //console.log(window.id);
      chrome.tabs.create({url: "New_Tab.html" }); 
      chrome.windows.update(window.id, {state:"fullscreen"}, function () {}); 
    });
}

$(document).ready(function() {
  $("#button1").click( function() {
    var frontside = $("#front").val();
    var backside = $("#back").val();
    var temp = {"front": frontside, "back": backside};
    var temp_str = JSON.stringify(temp);
    localStorage.setItem("result", temp_str);
    var temp2 = localStorage.getItem("result");
    var temp3 = JSON.parse(temp2);
    $("#f").replaceWith(temp3.front);
    $("#b").replaceWith(temp3.back);
    console.log(temp2);
    console.log(temp3);
    alert(temp2); //debug
    alert(temp3); //debug
  });
  var temp2 = localStorage.getItem("result");
  var temp3 = JSON.parse(temp2);
  $("#f").replaceWith(temp3.front);
  $("#b").replaceWith(temp3.back);
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