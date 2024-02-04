// Add your JavaScript code here
document.getElementById('searchButton').addEventListener('click', function() {
  // Implement search functionality or simply alert for now
  alert('Search clicked!');
});

document.getElementById('loginButton').addEventListener('click', function() {
  // Implement login functionality or simply alert for now
  alert('Login clicked!');
});

// Continue adding event listeners and functionality for other buttons
document.getElementById('sellButton').addEventListener('click', function() {
    window.location.href = 'sell.html';
});

document.getElementById('buyButton').addEventListener('click', function() {
    window.location.href = 'buy.html';
});

document.body.style.backgroundColor = "#f0f0f0"; // Sets the background color of the body

document.querySelector('.sellbutton').addEventListener('click', function() {
    window.location.href = 'sell.html'; // Redirects to sell.html when the Sell button is clicked
});

document.querySelector('.buybutton').addEventListener('click', function() {
    window.location.href = 'buy.html'; // Redirects to buy.html when the Buy button is clicked
});

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup, load products, etc.
});


function filterItems() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const itemsContainer = document.getElementById('itemsContainer');
  const items = itemsContainer.getElementsByClassName('item');

  for (let i = 0; i < items.length; i++) {
    let title = items[i].getAttribute('data-name');
    if (title.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
