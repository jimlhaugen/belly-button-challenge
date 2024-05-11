function otu(number) {
  return otu__ids > 1000;
}
  
  
// Build the metadata panel
// function buildMetadata(sample) {.the
  const dataPromise = d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json");
    console.log(dataPromise);


  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(function(data) {
    console.log("Data:", data);
 //} );

       // An array of metadata objects
  let metadata = data.metadata;
    console.log("metadata: ", metadata);    
      
  let names = data.names;
    console.log("names: ", names);        
    
  let samples = data.samples;
    console.log("samples: ", samples);   

  let id = samples.id;
    console.log("id: ", id);   

  // let selDataset = d3.select("#selDataset").text("Jim");
  //   console.log("selDataset says: ", selDataset);   


  let desiredSampleNumber = metadata.filter(sample =>
    sample.id.toString() == id)[0];
    console.log("desiredSampleNumber says: ", desiredSampleNumber);
  
    
    //** Select an existing container (e.g., an SVG or HTML element) **//
  let sample_metadata = d3.select("#sample-metadata");
  //  sample_metadata.html('');
    console.log("sample-metadata says: ", sample_metadata);

    //**  Bind data to selection of sample-metadata **//
  const selection = sample_metadata.selectAll('div')
    .data(metadata, d => d.keys);
    console.log("selection says: ", selection);    

    //** Enter selection: append new div elements for data not yet bound **//
  const enterSelection = selection.enter()
    .append('div')
    .text(d => `$(d.key):${d.value}`);
    console.log("enterSelection says: ", enterSelection);    

    //** Update selection (if needed): update existing elements **//
  const updateSelection =   selection
     .text(d=> `${d.key}:${d.value}`);
     console.log("updateSelection says: ", updateSelection);    

    //** Exit selection: remove and extra elements not bound to data **//
  const exitSelection =   selection.exit().remove();
  console.log("exitSelection says: ", exitSelection);    
  } );      

 setTimeout(function() {
  console.log("Executed after 5 seconds");
}, 5000);
 
  // get the metadata field


    // Filter the metadata for the object with the desired sample number


    // Use d3 to select the panel with id of `#sample-metadata`
  

    // Use `.html("") to clear any existing metadata
  

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

//   });
// }

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    let selDataset = d3.select("#selDataset").text("Jim");
    console.log("selDataset says: ", selDataset);   

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();