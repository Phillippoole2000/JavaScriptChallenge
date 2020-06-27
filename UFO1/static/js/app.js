// from data.js
var tableData = data;
var tbody = d3.select("tbody");

d3.select("#filter-btn").on("click",buttonclick)
function buttonclick(){
let UFODate = d3.select("#datetime").property("value")
let UFOCity = d3.select("#city").property("value")
let UFOState = d3.select("#state").property("value")
let UFOCountry = d3.select("#country").property("value")
let UFOShape = d3.select("#shape").property("value")
console.log(UFODate)
console.log(UFOCity)
tbody.html("")
filterdata = data
// if(UFODate){
//     filterdata = filterdata.filter(r=>r.datetime==UFODate)
// }
// if(UFOCity){
//     filterdata = filterdata.filter(r=>r.city==UFOCity)  
// }
// if(UFOState){
//     filterdata = filterdata.filter(r=>r.state==UFOState) 
// }
// if(UFOCountry){
//     filterdata = filterdata.filter(r=>r.country==UFOCountry)  
// }
// if(UFOShape){
//     filterdata = filterdata.filter(r=>r.shape==UFOShape)  
// }

filterdata = data.filter(
    function(r) {
        let keep = true;
        if(!!UFODate){
            keep = keep && r.datetime==UFODate;
        }
        if(keep && !!UFOCity){
            keep = keep && r.city==UFOCity;
        }
        if(keep && !!UFOState){
            keep = keep && r.state==UFOState;
        }
        if(keep && !!UFOCountry){
            keep = keep && r.country==UFOCountry;
        }
        if(keep && !!UFOShape){
            keep = keep && r.shape==UFOShape;
        }
        return keep;
    }
);


filterdata.forEach((UFOInfo) => {
    var row = tbody.append("tr");
    Object.entries(UFOInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});






}

// Console.log the weather data from data.js
console.log(data);
// YOUR CODE HERE!


data.forEach((UFOInfo) => {
    var row = tbody.append("tr");
    Object.entries(UFOInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


