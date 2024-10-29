const images = [
    "images/1.jpg",
    "images/2.jpeg",
    "images/3.jfif",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.png",
    "images/12.jpeg",
];

const names = []; 
let usedImages = [];

// Function to get a random image
function randomImages() {
    if (usedImages.length === images.length) {
        alert('All images have been used');
        return null;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (usedImages.includes(images[randomIndex]));

    usedImages.push(images[randomIndex]);
    return images[randomIndex];
}

// Function to add a name to the list
function addName() {
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList');
    const itemContainer = document.querySelector('.itemContainer'); 
    const name = nameInput.value.trim();

    if (name) {
        const randomImage = randomImages();
        if (randomImage) {
            names.push(name); // Store the name in the names array
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `<img src="${randomImage}" alt="Random Image"> <span>${name}</span>`;
            nameList.appendChild(item);

            // Show the container when an item is added
            itemContainer.style.display = 'block'; 

            // Clear input field after adding
            nameInput.value = ''; 
        }
    } else {
        alert('Please enter a name');
    }
}

// Function to choose a random winner
function chooseRandomWinner() {
    const items = document.querySelectorAll('#nameList .item');
    const winnerDisplay = document.getElementById('winnerDisplay');

    if (items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const winnerName = items[randomIndex].querySelector('span').textContent;
        const winnerImage = items[randomIndex].querySelector('img').src; 

        // Display winner name and image
        winnerDisplay.innerHTML = `<img src="${winnerImage}" alt="Winner Image" class="winnerImage"> 🎉 The winner is: ${winnerName}! 🎉`;
        winnerDisplay.style.display = 'flex'; // Show the winner display
    } else {
        alert("No names in the list to choose a winner.");
    }
}
