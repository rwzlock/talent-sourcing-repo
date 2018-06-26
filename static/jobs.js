var dropdown_url = "/jobrole";
//Select the dropdown
var selector = document.getElementById('selDataset');
//Creating Dropdown
Plotly.d3.json(dropdown_url, function(error, response) {
    if (error) return console.warn(error);
    var data = [response];
    console.log(data)
    console.log(data[0]["x"])
    //Jobs contains a list of all job names in the data
    var jobs = data[0]["x"]
    for(var i=0;i<jobs.length-1;i++) {
        //Create a dropdown option for each job name in the data, if it has a space, replace with underscore
        var currentOption = document.createElement('option');
        currentOption.text = jobs[i];
        currentOption.value = "/jobs/"+jobs[i].replace(" ", "_");
        selector.appendChild(currentOption);
    }


    //Layouts for plotting all four graphs
    var layout1 = { margin: { t: 30, b:100 },
                   title: "Gender by Job Role",
                   xaxis: { title: "Gender"},
                   yaxis: { title: "Number of Employees"}            
    }
    var layout2 = { margin: { t: 30, b:100 },
                   title: "Age by Job Role",
                   xaxis: { title: "Age Range"},
                   yaxis: { title: "Number of Employees"}            
    }
    var layout3 = { margin: { t: 30, b:100 },
                   title: "Department by Job Role",
                   xaxis: { title: "Department"},
                   yaxis: { title: "Number of Employees"}            
    }
    var layout4 = { margin: { t: 30, b:100 },
                   title: "Department by Job Role",
                   xaxis: { title: "Department"},
                   yaxis: { title: "Number of Employees"}            
    }
    Plotly.plot("pie", data[0], layout1)
    Plotly.plot("bar", data[1], layout2)
    Plotly.plot("pie", data[2], layout3)
    Plotly.plot("pie", data[3], layout4)
})