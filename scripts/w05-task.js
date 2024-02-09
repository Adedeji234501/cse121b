/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create article element
        const article = document.createElement("article");

        // Create h3 element for temple name
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        // Create img element for temple image
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append h3 and img to article
        article.appendChild(h3);
        article.appendChild(img);

        // Append article to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error("Failed to fetch temple data");
        }
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ""; // Clear templesElement
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Clear displayed temples
    const filter = document.querySelector("#filtered").value; // Get filter value
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});