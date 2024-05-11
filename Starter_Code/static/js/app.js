function bigNumbers(number) {
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
    console.log("names:", names);        
    
  let samples = data.samples;
    console.log("samples:", samples);   


  } );      

 setTimeout(function() {
  console.log("Executed after 5 seconds");
}, 5000);
 
//  let mapSimpleArray = data.map(function(item) {
//   return item;
// });

// // Make the demographics panel
// function demo(selectedValue) {
//   // Fetch the JSON data and console log it
//   d3.json(url).then((data) => {
//       console.log(`Data: ${data}`);

//       // An array of metadata objects
//       let metadata = data.metadata;
      
//       // Filter data where id = selected value after converting their types 
//       // (bc meta.id is in integer format and selectValue from is in string format)
//       let filteredData = metadata.filter((meta) => meta.id == selectedValue);
    
//       // Assign the first object to obj variable
//       let obj = filteredData[0]
      
//       // Clear the child elements in div with id sample-metadata
//       d3.select("#sample-metadata").html("");

//       // Object.entries() is a built-in method in JavaScript 
//       // This returns an array of a given object's own enumerable property [key, value]
//       let entries = Object.entries(obj);
      
//       // Iterate through the entries array
//       // Add a h5 child element for each key-value pair to the div with id sample-metadata
//       entries.forEach(([key,value]) => {
//           d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
//       });

//       // Log the entries Array
//       console.log(entries);
//   });
// }

// /// Create an array of metadata key
// // let id = Object.values(metadata.id);
// let ethnicity = Object.values(metadata.ethnicity);
// let gender = Object.values(metadata.gender);
// let age = Object.values(metadata.age);
// let location = Object.values(metadata.location);
// let wfreq = Object.values(metadata.wfreq);
// console.log(data);// 

//  get the metadata field

///// create a custom filtering function

// // Display the default plot
// function init() {
//   let data = [{
//     values: australia,
//     labels: labels,
//     type: "pie"
//   }];

//   let layout = {
//     height: 600,
//     width: 800
//   };

//   Plotly.newPlot("pie", data, layout);
// }})

// function selectTop10;



    // Filter the metadata for the object with the desired sample number


    // Use d3 to select the panel with id of `#sample-metadata`


    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  // });
// }

// function to build both charts
// function buildCharts(sample) {
  // d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


//     // Render the Bar Chart

//   });
// }

// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field


//     // Use d3 to select the dropdown with id of `#selDataset`


//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
// //   // Build charts and metadata panel each time a new sample is selected

// // }

// // Initialize the dashboard
// init()
//}
