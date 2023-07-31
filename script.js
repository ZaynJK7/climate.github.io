// Sample data for global temperature rise
var temperatureData = [
    { year: 1875, temperature: 52.5 },
    { year: 1876, temperature: 51.5 },
    { year: 1877, temperature: 52.0 },
    { year: 1878, temperature: 52.5, note: "something" },
    { year: 1879, temperature: 52.7 },
    { year: 1880, temperature: 48.6 },
    { year: 1881, temperature: 52.3 },
    { year: 1882, temperature: 49.6 },
    { year: 1883, temperature: 50.8 },
    { year: 1884, temperature: 51.0 },
    { year: 1885, temperature: 52.8 },
    { year: 1886, temperature: 52.0 },
    { year: 1887, temperature: 52.6 },
    { year: 1888, temperature: 53.0 },
    { year: 1889, temperature: 52.9 },
    { year: 1890, temperature: 51.4 },
    { year: 1891, temperature: 50.8 },
    { year: 1892, temperature: 51.2 },
    { year: 1893, temperature: 50.3 },
    { year: 1894, temperature: 51.0 },
    { year: 1895, temperature: 50.4 },
    { year: 1896, temperature: 51.6 },
    { year: 1897, temperature: 50.6 },
    { year: 1898, temperature: 49.7 },
    { year: 1899, temperature: 51.0 },
    { year: 1900, temperature: 53.9 },
    { year: 1901, temperature: 53.5 },
    { year: 1902, temperature: 52.1 },
    { year: 1903, temperature: 50.6 },
    { year: 1904, temperature: 51.8 },
    { year: 1905, temperature: 51.7 },
    { year: 1906, temperature: 51.2 },
    { year: 1907, temperature: 52.4 },
    { year: 1908, temperature: 50.1 },
    { year: 1909, temperature: 51.8 },
    { year: 1910, temperature: 54.5 },
    { year: 1911, temperature: 51.2 },
    { year: 1912, temperature: 50.9 },
    { year: 1913, temperature: 51.3 },
    { year: 1914, temperature: 53.2 },
    { year: 1915, temperature: 53.2 },
    { year: 1916, temperature: 51.1 },
    { year: 1917, temperature: 50.7 },
    { year: 1918, temperature: 52.3 },
    { year: 1919, temperature: 52.5 },
    { year: 1920, temperature: 51.3 },
    { year: 1921, temperature: 54.4 },
    { year: 1922, temperature: 51.2 },
    { year: 1923, temperature: 50.8 },
    { year: 1924, temperature: 51.5 },
    { year: 1925, temperature: 53.1 },
    { year: 1926, temperature: 53.9 },
    { year: 1927, temperature: 52.5 },
    { year: 1928, temperature: 50.7 },
    { year: 1929, temperature: 49.3 },
    { year: 1930, temperature: 49.4 },
    { year: 1931, temperature: 49.9 },
    { year: 1932, temperature: 48.2 },
    { year: 1933, temperature: 50.5 },
    { year: 1934, temperature: 55.3 },
    { year: 1935, temperature: 51.9 },
    { year: 1936, temperature: 52.2 },
    { year: 1937, temperature: 51.4 },
    { year: 1938, temperature: 52.0 },
    { year: 1939, temperature: 51.7 },
    { year: 1940, temperature: 53.8 },
    { year: 1941, temperature: 51.5 },
    { year: 1942, temperature: 49.7 },
    { year: 1943, temperature: 52.2 },
    { year: 1944, temperature: 49.4 },
    { year: 1945, temperature: 50.5 },
    { year: 1946, temperature: 52.0 },
    { year: 1947, temperature: 51.6 },
    { year: 1948, temperature: 50.6 },
    { year: 1949, temperature: 50.1 },
    { year: 1950, temperature: 51.6 },
    { year: 1951, temperature: 50.4 },
    { year: 1952, temperature: 51.1 },
    { year: 1953, temperature: 53.2 },
    { year: 1954, temperature: 52.8 },
    { year: 1955, temperature: 49.6 },
    { year: 1956, temperature: 51.5 },
    { year: 1957, temperature: 51.7 },
    { year: 1958, temperature: 53.6 },
    { year: 1959, temperature: 51.7 },
    { year: 1960, temperature: 51.9 },
    { year: 1961, temperature: 52.3 },
    { year: 1962, temperature: 50.6 },
    { year: 1963, temperature: 50.9 },
    { year: 1964, temperature: 48.3 },
    { year: 1965, temperature: 50.5 },
    { year: 1966, temperature: 52.4 },
    { year: 1967, temperature: 51.9 },
    { year: 1968, temperature: 50.3 },
    { year: 1969, temperature: 52.0 },
    { year: 1970, temperature: 51.6 },
    { year: 1971, temperature: 50.5 },
    { year: 1972, temperature: 52.3 },
    { year: 1973, temperature: 51.4 },
    { year: 1974, temperature: 52.9 },
    { year: 1975, temperature: 50.8 },
    { year: 1976, temperature: 51.6 },
    { year: 1977, temperature: 53.2 },
    { year: 1978, temperature: 53.3 },
    { year: 1979, temperature: 52.7 },
    { year: 1980, temperature: 52.8 },
    { year: 1981, temperature: 54.3 },
    { year: 1982, temperature: 51.0 },
    { year: 1983, temperature: 53.5 },
    { year: 1984, temperature: 51.0 },
    { year: 1985, temperature: 51.9 },
    { year: 1986, temperature: 52.7 },
    { year: 1987, temperature: 53.4 },
    { year: 1988, temperature: 53.3 },
    { year: 1989, temperature: 52.2 },
    { year: 1990, temperature: 53.4 },
    { year: 1991, temperature: 51.8 },
    { year: 1992, temperature: 53.6 },
    { year: 1993, temperature: 50.3 },
    { year: 1994, temperature: 54.7 },
    { year: 1995, temperature: 53.9 },
    { year: 1996, temperature: 54.3 },
    { year: 1997, temperature: 53.4 },
    { year: 1998, temperature: 52.9 },
    { year: 1999, temperature: 53.3 },
    { year: 2000, temperature: 53.7 },
    { year: 2001, temperature: 53.8 },
    { year: 2002, temperature: 52.0 },
    { year: 2003, temperature: 55.0 },
    { year: 2004, temperature: 52.1 },
    { year: 2005, temperature: 53.4 },
    { year: 2006, temperature: 53.8 },
    { year: 2007, temperature: 53.8 },
    { year: 2008, temperature: 51.9 },
    { year: 2009, temperature: 52.1 },
    { year: 2010, temperature: 52.7 },
    { year: 2011, temperature: 51.8 },
    { year: 2012, temperature: 56.6 },
    { year: 2013, temperature: 53.3 },
    { year: 2014, temperature: 55.6 },
    { year: 2015, temperature: 56.3 },
    { year: 2016, temperature: 56.2 },
    { year: 2017, temperature: 56.1 },
    { year: 2018, temperature: 56.2 },
    { year: 2019, temperature: 53.6 },
    { year: 2020, temperature: 55.7 },
    { year: 2021, temperature: 56.3 },
    { year: 2022, temperature: 55.9 }
];

  
  // SVG size
  var width = 618;
  var height = 500;
  
  // Create an SVG container for the line graph
  var svg = d3.select("#slide1-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Define scales
  var xScale = d3.scaleLinear()
    .domain([1875, 2022])
    .range([50, width - 50]);
  
  var yScale = d3.scaleLinear()
    .domain([48, 57])
    .range([height - 50, 50]);
  
  // Define line generator
  var line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.temperature));
  
  // Append the line
  svg.append("path")
    .datum(temperatureData)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "blue");

    svg.selectAll("circle")
      .data(temperatureData)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.temperature))
      .attr("r", 5)
      .attr("fill", "transparent")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    // Define the tooltip
    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Function to handle mouseover event
    function handleMouseOver(d) {
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip.html("Year: " + d.year + "<br/>Temperature: " + d.temperature + " °F")
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px");
    }

    // Function to handle mouseout event
    function handleMouseOut() {
      tooltip.transition().duration(200).style("opacity", 0);
    }
  
  // Add axes
  svg.append("g")
    .attr("transform", "translate(0," + (height - 50) + ")")
    .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", "translate(50,0)")
    .call(d3.axisLeft(yScale));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 10)
    .attr("text-anchor", "middle")
    .text("Year")

  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text("Temperature (°F)")

    // Calculate the linear regression line
    var xValues = temperatureData.map(d => d.year);
    var yValues = temperatureData.map(d => d.temperature);
    var regressionLine = linearRegression(xValues, yValues);

    // Function to calculate linear regression
    function linearRegression(x, y) {
      var n = x.length;
      var sumX = d3.sum(x);
      var sumY = d3.sum(y);
      var sumXY = d3.sum(x.map((xi, i) => xi * y[i]));
      var sumX2 = d3.sum(x.map(xi => xi * xi));
      var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      var intercept = (sumY - slope * sumX) / n;

      return [d3.min(x), intercept + d3.min(x) * slope, d3.max(x), intercept + d3.max(x) * slope];
    }

    // Append the trendline
    svg.append("line")
      .attr("x1", xScale(regressionLine[0]))
      .attr("y1", yScale(regressionLine[1]))
      .attr("x2", xScale(regressionLine[2]))
      .attr("y2", yScale(regressionLine[3]))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "5,5");

 





    
    // Slide 2: Example bar chart for demonstration (you will customize this)
var emissionData = [
  { country: "USA", emissions: 5000 },
  { country: "China", emissions: 8000 },
  { country: "India", emissions: 3000 },
];

var svg2 = d3.select("#slide2-graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var xScale2 = d3.scaleBand()
  .domain(emissionData.map(d => d.country))
  .range([50, width - 50])
  .padding(0.1);

var yScale2 = d3.scaleLinear()
  .domain([0, 9000])
  .range([height - 50, 50]);

svg2.selectAll("rect")
  .data(emissionData)
  .enter()
  .append("rect")
  .attr("x", d => xScale2(d.country))
  .attr("y", d => yScale2(d.emissions))
  .attr("width", xScale2.bandwidth())
  .attr("height", d => height - 50 - yScale2(d.emissions))
  .attr("fill", "green")


// Add axes for Slide 2
svg2.append("g")
  .attr("transform", "translate(0," + (height - 50) + ")")
  .call(d3.axisBottom(xScale2));

svg2.append("g")
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(yScale2));

// Navigation buttons
// Define the current view
let currentView = 1;

// Function to update the view
function updateView(increment) {
  // Hide the current view
  d3.select("#slide" + currentView).style("display", "none");

  // Change the current view according to the increment value
  currentView += increment;
  if (currentView < 1) currentView = 2; // Modify if you have more than two slides
  if (currentView > 2) currentView = 1; // Modify if you have more than two slides

  // Show the next view
  d3.select("#slide" + currentView).style("display", "block");
}

// Add event listener to the next button
d3.select("#nextButton").on("click", function() {
  updateView(1);
});

// Add event listener to the previous button
d3.select("#prevButton").on("click", function() {
  updateView(-1);
});

// Initially hide slide 2, assuming that slide 1 is visible at the start
d3.select("#slide2").style("display", "none");


  