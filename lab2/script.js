document.addEventListener("DOMContentLoaded", function () {
    // Sample data array
    const dataArray = [
        { title: "Card 1", description: "Description 1" },
        { title: "Card 2", description: "Description 2" },
        { title: "Card 3", description: "Description 3" },
        // Add more data as needed
    ];

    // Get the card template
    const cardTemplate = document.getElementById("card-template");

    // Get the card list container
    const cardList = document.getElementById("card-list");

    // Function to create and append cards based on the data array
    function createCards(dataArray) {
        dataArray.forEach(function (data) {
            // Clone the card template content
            const cardClone = document.importNode(cardTemplate.content, true);

            // Update the cloned card content with data
            cardClone.querySelector(".card-title").textContent = data.title;
            cardClone.querySelector(".card-description").textContent = data.description;

            // Append the cloned card to the card list
            cardList.appendChild(cardClone);
        });
    }

    // Call the function to create cards with the provided data array
    createCards(dataArray);
});
