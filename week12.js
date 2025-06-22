// JavaScript code to dynamically display national parks
// This code creates a simple webpage that lists national parks with images and descriptions
 async function loadParks() {
    // This function will be called when the button is clicked
    const URL = "https://developer.nps.gov/api/v1/multimedia/galleris?parkCode=yellowstone&api_key=" + api_key;
   const response = await fetch(URL);
   console.log(response)};


const parkCode = [
   {
        id: 0,
        title: "Yellowstone National Park",
        description: "America's first national park",

    },
    {
        id: 1,
        title: "Teton National Park",
        description: "A breathtaking national park in Wyoming",
        
    },
    {
        id: 2,
        title: "The Grand Canyon",
        description: "A natural wonder of the world",
  
    },
    {
        id: 3,
        title: "The Great Smoky Mountains",
        description: "A beautiful national park in the Appalachian Mountains",
    }
];
function displayParks() {
    const parksContainer = document.getElementById("parks-container");
    
    // Loop through the parkCode array and create elements for each park

    
    parkCode.forEach(park => {
        const parkDiv = document.createElement("div");
        parkDiv.className = "park";

        const parkImage = document.createElement("img");
        parkImage.src = park.image;
        parkImage.alt = park.title;

        const parkTitle = document.createElement("h2");
        parkTitle.textContent = park.title;

        const parkDescription = document.createElement("p");
        parkDescription.textContent = park.description;

        parkDiv.appendChild(parkImage);
        parkDiv.appendChild(parkTitle);
        parkDiv.appendChild(parkDescription);

        parksContainer.appendChild(parkDiv);
    });
}
// Call the function to display parks
displayParks();
// Add event listener to the button
document.getElementById("load-parks").addEventListener("click", () => {
    displayParks();
});
