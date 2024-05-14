// Build the metadata panel
    //// As employed in the following function, "sample" is either the initial sample
    //// (i.e., firstSample) or user-selected smaple (i.e., newSample) from dropsown box.
function buildMetadata(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  
      // get the metadata field
      let metadata = data.metadata;
  
      // Filter the metadata for the object with the desired sample number
        //// "desiredObject" is set equal to the firstSample or newSample of the key of metadata[0]
        //// which is "id"
      let desiredObject = metadata.filter(sampleObj => sampleObj.id == sample)[0];
  
      // Use d3 to select the panel with id of `#sample-metadata`
        //// The <div id="sample-metadata" class="card card-body bg-light""></div>
      let panel = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
        //// Removes existing info in "Test Subject ID Number:" box
        //// from previous user-clicked sample.
      panel.html("");
  
      // Inside a loop, you will need to use d3 to append new
      // tags for each key-value in the filtered metadata.
        //// Object.entries method buolt in JavaScript returns an array of a given object's 
        //// own enumerable string-keyed property [key, value] pair.
        //// D3 includes the .append() function to add a new element to the HTML tag
        //// Hence, the key-value of the object defined by desiredObject is returned
        //// to the h6 heading tag.
      Object.entries(desiredObject).
            forEach(([key, value]) => {
                panel.append("h6")
                .text(`${key}: ${value}`);
      });
    });
  }
  
  // function to build both charts
     //// As employed in the following function, "sample" is either the initial sample
    //// (i.e., firstSample) or user-selected smaple (i.e., newSample) from dropsown box.
function buildCharts(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  
      // Get the samples field
      let samples = data.samples;
  
      // Filter the samples for the object with the desired sample number
        //// desired sample number
        //// "desiredObject" is set equal to the firstSample or newSample of the key of metadata[0]
        //// which is "id"
      let desiredObject = samples.filter(sampleObj => sampleObj.id == sample)[0];
  
      // Get the otu_ids, otu_labels, and sample_values
      let otu_ids = desiredObject.otu_ids;
      let otu_labels = desiredObject.otu_labels;
      let sample_values = desiredObject.sample_values;

                    /////////////   BUBBLE CHART  /////////////     
  
      // Build a Bubble Chart


      let bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Number of Bacteria" },
        margin: { t: 30}
      };


      let bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Viridis"},
          text: otu_labels,
          mode: "markers"
        }   
      ];
  
      // Render the Bubble Chart
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
 
                    /////////////   BAR CHART  /////////////

      // For the Bar Chart, map the otu_ids to a list of strings for your yticks
        //// Format for y labels is 'OTU ####', where #### is one of otu_ids  
      let yticks = otu_ids.map(each_otu_id => `OTU ${each_otu_id}`).slice(0, 10).reverse();
  
      // Build a Bar Chart
      // Don't forget to slice and reverse the input data appropriately
        //// Sliced and reversed above
      let barData = [
        {
            x: sample_values.slice(0, 10).reverse(),  //// reverse puts longer bars on top
            y: yticks,
            type: "bar",
            orientation: "h"
        }
      ];
  
      let barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: {title: "Number of Bacteria"},
        margin: { t: 50, l: 100 }
      };
  
      // Render the Bar Chart
      Plotly.newPlot("bar", barData, barLayout);
    });
  }
  
  // Function to run on page load
    //// Called by "init()"; appearing below
  function init() {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  
      // Get the names field
      let names = data.names;
  
      // Use d3 to select the dropdown with id of `#selDataset`
        //// The <select id="selDataset" onchange="optionChanged(this.value)"></select>
        //// onChange is a function called when a user changed the selected option
        //// of a <select> element.
        //// optionChanged is a function defined below.
      let selector = d3.select("#selDataset");
  
      // Use the list of sample names to populate the select options
      // Hint: Inside a loop, you will need to use d3 to append a new
      // option for each sample name.

      names.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Get the first sample from the list
        //// This is the initial sample shown in the "Test Subject ID Number"
        //// when webpage initially displayed.
      let firstSample = names[0];
  
      // Build charts and metadata panel with the first sample
        //// These are the initial bar and bubble charts shown 
        //// when webpage initially displayed.    
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Function for event listener
  function optionChanged(newSample) {
    // Build charts and metadata panel each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Initialize the dashboard
    //// Calls the "init" function defined above
  init();