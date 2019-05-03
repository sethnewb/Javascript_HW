// from data.js
var tableData = data;

// YOUR CODE HERE!


// select table body
var tbody = d3.select("tbody");

// loop through each element of the data array
//  append a row to the html table for each element in data array
//  append element data into newly appended row
tableData.forEach(el => {
    var row = tbody.append("tr");
    Object.entries(el).forEach(([key, value]) => {
        row.append("td").text(value);
    });
});


// filter data
//  select the input date
//  filter the tableData to show only dates with those sightings
//  remove old data
//  display newly filtered table
function filterData() {
    var filterDate = d3.select("#datetime").property("value");
    var filterTable = tableData.filter(x => x.datetime === filterDate);
    d3.selectAll("tr").remove();
    
    console.log(filterTable);

    // I'm reusing this code from above...
    // Would it have been better to make it a function and
    // then called it?
    filterTable.forEach(y => {
        var row = tbody.append("tr");
        Object.entries(y).forEach(([key, value]) => {
        row.append("td").text(value);
        });
    });
};