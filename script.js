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
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function callSearch() {
    apiSearch()
}

function changeBackground() {
    document.body.style.backgroundImage = "url('C:\Users\jaehe\source\repos\mis-421-assignment-2-jquery-and-ajax-jaeheekim01\Images\esther-gorlee--uGmFjqkHFU-unsplash.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

function getCurrentTime() {
    var date = new Date();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    HHmm = hour + ":" + minutes; var time = document.getElementById("time");
    time.innerHTML = HHmm$("#time").dialog({
        modal: true,
        autoOpen: false,
        title: "Current Time",
        width: 300,
        height: 150
    });
    $("#btnTime").click(function () {
        $('#time').dialog('open');
    });
}