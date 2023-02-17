console.log("Made It")

var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "e5a9667d23f449778e9c1c176da6351a");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').css("visibility", "visible")
      document.getElementById("searchResults").innerHTML = results
      $('#searchResults').dialog({
        width: 1000,
        height: 600,
        title: "Fresh Search Results"
      });
    })
    .fail(function () {
      alert("error");
    });
}

// Calling the apiSearch function on a click of my search button
$("#searchButton").click(function () {
  apiSearch()
})

// Getting current time + displaying as a JQuery UI dialog
function getCurrentTime() {
  var rightNow = new Date()
  var time = rightNow.getHours() + ":" + rightNow.getMinutes()
  $('#time').css("visibility", "visible")
  $("#time").html(time)
  $('#time').dialog({
    modal: true,
    dialogClass: 'timeDialog',
    title: "Current Time",
    width: 300,
    height: 130
  })
}

$("#timeButton").click(function () {
  console.log("Time check")
  getCurrentTime()
})

// EXTRA: "I'm feeling lucky" button
function feelingLucky() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
    url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
    beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "e5a9667d23f449778e9c1c176da6351a");
    },
    type: "GET",
  })
  .done((data) => {
    window.open(data.webPages.value[0].url, "_blank")
  })
  .fail(function () {
    alert("error");
  });
}

$("#luckyButton").click(function() {
  feelingLucky()
})

// EXTRA: Changing background image; each click cycles through 2 images w/o refreshing page (tried)
function changeBackgroundPicture() {
    document.body.style.backgroundImage = "url('./Images/tulip-2.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}
// function changeBackgroundPicture() {
//   console.log("picpic")
//   var pictures = ["./Images/tulip-1.jpg", "./Images/tulip-2.jpg"]
//   var currentPicture = 0;
//   $('row').click(function() {
//     currentPicture = (currentPicture + 1) % pictures.length;
//     $('body').css('background-image', 'url(' + pictures[currentPicture] + ')');
//   });
// }