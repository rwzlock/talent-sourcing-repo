
var XMLHttpRequest = require('xhr2');
var test = require('tape');
var port = 5019;
var endpoint = '/jobs/Healthcare_Representative';
console.log("Hi")

var jobresponse = {
  "0": {
        "labels": ["Male","Female"],
        "type": "pie",
        "values": [80,51]
      },
  "1": {
        "type": "bar",
        "x": ["0-19","20-27","28-35","36-43","44-51","52-60"],
        "y": [0,4,42,44,28,13]
       },
  "2": {
        "labels": ['Research & Development'],
        "type": "pie",
        "values": [131]
       }
  }


function handleEvent(event) {
  //console.log(event)
  //console.log(event.target.response)
  var result = event.target.response;
  var result1 = result.replace(/\n/g, "");
  var jsonresult1 = JSON.parse(result1)
  console.log(jsonresult1);
  //console.log(result);
  test('test equality of jsons', function (t) {
    t.equal(jsonresult1, jobresponse)
    t.end();
  });
};



var xhr = new XMLHttpRequest();
xhr.addEventListener("load", handleEvent);
//xhr.addEventListener("progress", handleEvent);
//xhr.addEventListener("error", handleEvent);
//xhr.addEventListener("abort", handleEvent);
xhr.open('GET', 'http://localhost:'+port+endpoint, true);
xhr.send(null);








