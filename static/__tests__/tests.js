var test = require('tape')
var jobsendpoint = "/jobsummary"
var joburl = "/jobs/Healthcare_Representative"

httpGetAsync(joburl);
//testFunc(joburl);

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function testFunc(joburl) {

  var jobresponse = {
  "0": {
        "labels": ["Male","Female"],
        "type": "pie",
        "values": [0,0]
      },
  "1": {
        "type": "bar",
        "x": ["0-19","20-27","28-35","36-43","44-51","52-60"],
        "y": [0,0,0,0,0,0]
       },
  "2": {
        "labels": [],
        "type": "pie",
        "values": []
       }
  }

  test('should return -1 when the value is not present in Array', function (t) {
    t.equal(joburl, jobresponse)
    t.end();
  });
}






