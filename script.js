// Sample data for global temperature rise
var temperatureData = [
    { year: 1875, temperature: 52.5 },
    { year: 1876, temperature: 51.5 },
    { year: 1877, temperature: 52.0 },
    { year: 1878, temperature: 52.5, note: "US Industrialization Ramps Up" },
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
    { year: 1929, temperature: 49.3,note:"Great Depression begins" },
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
    { year: 1945, temperature: 50.5, note: "Post WW2 Industrialization Begins" },
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
    { year: 1970, temperature: 51.6, note: "First Earth Day" },
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
    { year: 1987, temperature: 53.4,note:"Montreal Protocol Approved" },
    { year: 1988, temperature: 53.3,note: "Ozone Hole Found" },
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
    { year: 2016, temperature: 56.2, note:"Paris Climate Agreement Effective" },
    { year: 2017, temperature: 56.1 },
    { year: 2018, temperature: 56.2 },
    { year: 2019, temperature: 53.6 },
    { year: 2020, temperature: 55.7, note:"COVID-19 Pandemic" },
    { year: 2021, temperature: 56.3 },
    { year: 2022, temperature: 55.9 }
];


var emissionsData = [
    { year: 1940, emissions: 4.85 },
    { year: 1941, emissions: 4.97 },
    { year: 1942, emissions: 4.95 },
    { year: 1943, emissions: 5.04 },
    { year: 1944, emissions: 5.11 },
    { year: 1945, emissions: 4.25,note: "Post WW2 Industrialization Begins" },
    { year: 1946, emissions: 4.64 },
    { year: 1947, emissions: 5.14 },
    { year: 1948, emissions: 5.42 },
    { year: 1949, emissions: 5.25 },
    { year: 1950, emissions: 6.00 },
    { year: 1951, emissions: 6.38 },
    { year: 1952, emissions: 6.47 },
    { year: 1953, emissions: 6.65 },
    { year: 1954, emissions: 6.79 },
    { year: 1955, emissions: 7.44 },
    { year: 1956, emissions: 7.92 },
    { year: 1957, emissions: 8.19 },
    { year: 1958, emissions: 8.42 },
    { year: 1959, emissions: 8.86 },
    { year: 1960, emissions: 9.39 },
    { year: 1961, emissions: 9.42 },
    { year: 1962, emissions: 9.75 },
    { year: 1963, emissions: 10.27 },
    { year: 1964, emissions: 10.83 },
    { year: 1965, emissions: 11.32 },
    { year: 1966, emissions: 11.87 },
    { year: 1967, emissions: 12.24 },
    { year: 1968, emissions: 12.91 },
    { year: 1969, emissions: 13.77 },
    { year: 1970, emissions: 14.90, note:"First Earth Day" },
    { year: 1971, emissions: 15.51 },
    { year: 1972, emissions: 16.23 },
    { year: 1973, emissions: 17.09 },
    { year: 1974, emissions: 17.02 },
    { year: 1975, emissions: 17.05 },
    { year: 1976, emissions: 17.99 },
    { year: 1977, emissions: 18.50 },
    { year: 1978, emissions: 19.08 },
    { year: 1979, emissions: 19.62 },
    { year: 1980, emissions: 19.50 },
    { year: 1981, emissions: 19.04 },
    { year: 1982, emissions: 18.88 },
    { year: 1983, emissions: 19.01 },
    { year: 1984, emissions: 19.66 },
    { year: 1985, emissions: 20.33 },
    { year: 1986, emissions: 20.63 },
    { year: 1987, emissions: 21.27,note:"Montreal Protocol Approved" },
    { year: 1988, emissions: 22.11,note: "Ozone Hole Found" },
    { year: 1989, emissions: 22.41 },
    { year: 1990, emissions: 22.76 },
    { year: 1991, emissions: 23.24 },
    { year: 1992, emissions: 22.58 },
    { year: 1993, emissions: 22.81 },
    { year: 1994, emissions: 22.97 },
    { year: 1995, emissions: 23.46 },
    { year: 1996, emissions: 24.16 },
    { year: 1997, emissions: 24.30 },
    { year: 1998, emissions: 24.21 },
    { year: 1999, emissions: 24.73 },
    { year: 2000, emissions: 25.45 },
    { year: 2001, emissions: 25.67 },
    { year: 2002, emissions: 26.28 },
    { year: 2003, emissions: 27.65 },
    { year: 2004, emissions: 28.64 },
    { year: 2005, emissions: 29.61 },
    { year: 2006, emissions: 30.59 },
    { year: 2007, emissions: 31.51 },
    { year: 2008, emissions: 32.09 },
    { year: 2009, emissions: 31.56 },
    { year: 2010, emissions: 33.36 },
    { year: 2011, emissions: 34.49 },
    { year: 2012, emissions: 35.01 },
    { year: 2013, emissions: 35.32 },
    { year: 2014, emissions: 35.58 },
    { year: 2015, emissions: 35.56 },
    { year: 2016, emissions: 35.52, note:"Paris Climate Agreement Effective" },
    { year: 2017, emissions: 36.10 },
    { year: 2018, emissions: 36.83 },
    { year: 2019, emissions: 37.08 },
    { year: 2020, emissions: 35.26, note:"COVID-19 Pandemic" },
    { year: 2021, emissions: 37.12 },
    { year: 2022, emissions: 37.49 }
];

var carbonData = [
    { "year": 1980, "mean": 0.0936 },
    { "year": 1981, "mean": 0.0913 },
    { "year": 1982, "mean": 0.0895 },
    { "year": 1983, "mean": 0.0968 },
    { "year": 1984, "mean": 0.0881 },
    { "year": 1985, "mean": 0.0879 },
    { "year": 1986, "mean": 0.0869 },
    { "year": 1987, "mean": 0.0915, note:"Montreal Protocol Approved" },
    { "year": 1988, "mean": 0.1013, note: "Ozone Hole Found" },
    { "year": 1989, "mean": 0.0859 },
    { "year": 1990, "mean": 0.0874 },
    { "year": 1991, "mean": 0.0875 },
    { "year": 1992, "mean": 0.0810 },
    { "year": 1993, "mean": 0.0829 },
    { "year": 1994, "mean": 0.0840 },
    { "year": 1995, "mean": 0.0892 },
    { "year": 1996, "mean": 0.0848 },
    { "year": 1997, "mean": 0.0846 },
    { "year": 1998, "mean": 0.0896 },
    { "year": 1999, "mean": 0.0884 },
    { "year": 2000, "mean": 0.0809 },
    { "year": 2001, "mean": 0.0833 },
    { "year": 2002, "mean": 0.0890 },
    { "year": 2003, "mean": 0.0826 },
    { "year": 2004, "mean": 0.0740 },
    { "year": 2005, "mean": 0.0801 },
    { "year": 2006, "mean": 0.0783 },
    { "year": 2007, "mean": 0.0792 },
    { "year": 2008, "mean": 0.0738 },
    { "year": 2009, "mean": 0.0687 },
    { "year": 2010, "mean": 0.0725 },
    { "year": 2011, "mean": 0.0738 },
    { "year": 2012, "mean": 0.0762 },
    { "year": 2013, "mean": 0.0667 },
    { "year": 2014, "mean": 0.0670 },
    { "year": 2015, "mean": 0.0677 },
    { "year": 2016, "mean": 0.0688, note:"Paris Climate Agreement Effective" },
    { "year": 2017, "mean": 0.0678 },
    { "year": 2018, "mean": 0.0692 },
    { "year": 2019, "mean": 0.0652 },
    { "year": 2020, "mean": 0.0654,note:"COVID-19 Pandemic" },
    { "year": 2021, "mean": 0.0667 },
    { "year": 2022, "mean": 0.0667 }
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


      var specificYears = [1878,1970,1988];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) - 200)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year))
            .attr("y", yScale(dataPoint.temperature) - 200)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [1929];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) - 270)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year))
            .attr("y", yScale(dataPoint.temperature) - 330)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [2020];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) - 50)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 9))
            .attr("y", yScale(dataPoint.temperature) - 70)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });

      var specificYears = [2016];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) + 200)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 6))
            .attr("y", yScale(dataPoint.temperature) + 230)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [1945];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) - 150)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 6))
            .attr("y", yScale(dataPoint.temperature) - 190)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [1987];
      specificYears.forEach(year => {
        var dataPoint = temperatureData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.temperature))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.temperature))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.temperature) + 150)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 5))
            .attr("y", yScale(dataPoint.temperature) + 160)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });

      function wrapText(text, width) {
        text.each(function() {
          var text = d3.select(this);
          var words = text.text().split(/\s+/).reverse();
          var word;
          var line = [];
          var lineNumber = 0;
          var lineHeight = 1; 
          var x = text.attr("x");
          var y = text.attr("y");
          var dy = parseFloat(text.attr("dy") || 0);
          var tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }
 




//slide 2

  // SVG size
  var width = 618;
  var height = 500;
  
  // Create an SVG container for the line graph
  var svg = d3.select("#slide2-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Define scales
  var xScale = d3.scaleLinear()
    .domain([1940, 2022])
    .range([50, width - 50]);
  
  var yScale = d3.scaleLinear()
    .domain([0, 45])
    .range([height - 50, 50]);
  
  // Define line generator
  var line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.emissions));
  
  // Append the line
  svg.append("path")
    .datum(emissionsData)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "blue");

    svg.selectAll("circle")
      .data(emissionsData)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.emissions))
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
      tooltip.html("Year: " + d.year + "<br/>Emissions: " + d.emissions + " °F")
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
      .text("Emissions (Metric Tons)")

    // Calculate the linear regression line
    var xValues = emissionsData.map(d => d.year);
    var yValues = emissionsData.map(d => d.emissions);
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
      


      var specificYears = [2020,1970,1988];
      specificYears.forEach(year => {
        var dataPoint = emissionsData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.emissions))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.emissions))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.emissions) - 80)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 8))
            .attr("y", yScale(dataPoint.emissions) - 100)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [2016,1987];
      specificYears.forEach(year => {
        var dataPoint = emissionsData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.emissions))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.emissions))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.emissions) + 110)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 5))
            .attr("y", yScale(dataPoint.emissions) + 130)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [1945];
      specificYears.forEach(year => {
        var dataPoint = emissionsData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.emissions))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.emissions))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.emissions) - 80)
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year - 3 ))
            .attr("y", yScale(dataPoint.emissions) - 120)
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });

      function wrapText(text, width) {
        text.each(function() {
          var text = d3.select(this);
          var words = text.text().split(/\s+/).reverse();
          var word;
          var line = [];
          var lineNumber = 0;
          var lineHeight = 1; 
          var x = text.attr("x");
          var y = text.attr("y");
          var dy = parseFloat(text.attr("dy") || 0);
          var tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }



//slide 3

  // SVG size
  var width = 618;
  var height = 500;
  
  // Create an SVG container for the line graph
  var svg = d3.select("#slide3-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Define scales
  var xScale = d3.scaleLinear()
    .domain([1980, 2022])
    .range([50, width - 50]);
  
  var yScale = d3.scaleLinear()
    .domain([.06, .11])
    .range([height - 50, 50]);
  
  // Define line generator
  var line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.mean));
  
  // Append the line
  svg.append("path")
    .datum(carbonData)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "blue");

    svg.selectAll("circle")
      .data(carbonData)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.mean))
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
      tooltip.html("Year: " + d.year + "<br/>Average PPM: " + d.mean + " °F")
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
      .text("Mean Ozone Concentration (PPM)")

    // Calculate the linear regression line
    var xValues = carbonData.map(d => d.year);
    var yValues = carbonData.map(d => d.mean);
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
      


      var specificYears = [2020,1988];
      specificYears.forEach(year => {
        var dataPoint = carbonData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.mean))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.mean))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.mean + .008))
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year ))
            .attr("y", yScale(dataPoint.mean + .01))
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });
      var specificYears = [2016];
      specificYears.forEach(year => {
        var dataPoint = carbonData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.mean))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.mean))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.mean + .016))
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year ))
            .attr("y", yScale(dataPoint.mean + .02))
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });

      var specificYears = [1987];
      specificYears.forEach(year => {
        var dataPoint = carbonData.find(d => d.year === year);
        if (dataPoint) {
          svg.append("circle")
            .attr("cx", xScale(dataPoint.year))
            .attr("cy", yScale(dataPoint.mean))
            .attr("r", 3)
            .attr("fill", "black");
        
          svg.append("line")
            .attr("x1", xScale(dataPoint.year))
            .attr("y1", yScale(dataPoint.mean))
            .attr("x2", xScale(dataPoint.year))
            .attr("y2", yScale(dataPoint.mean - .016))
            .attr("stroke", "black");
  
          svg.append("text")
            .attr("x", xScale(dataPoint.year ))
            .attr("y", yScale(dataPoint.mean - .02))
            .text(dataPoint.note)
            .attr("fill", "black")
            .call(wrapText, 100)
        }
      });

      function wrapText(text, width) {
        text.each(function() {
          var text = d3.select(this);
          var words = text.text().split(/\s+/).reverse();
          var word;
          var line = [];
          var lineNumber = 0;
          var lineHeight = 1; 
          var x = text.attr("x");
          var y = text.attr("y");
          var dy = parseFloat(text.attr("dy") || 0);
          var tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }
  
        

// Navigation buttons
// Define the current view
let currentView = 1;

// Function to update the view
function updateView(increment) {
  // Hide the current view
  d3.select("#slide" + currentView).style("display", "none");

  // Change the current view according to the increment value
  currentView += increment;
  if (currentView < 1) currentView = 3; // Modify if you have more than two slides
  if (currentView > 3) currentView = 1; // Modify if you have more than two slides

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
d3.select("#slide3").style("display", "none");


  