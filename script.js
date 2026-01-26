const menuData = [
    { id: 1, name: "Litson Kawali", price: 220, category: "Pork" },
    { id: 2, name: "Humba", price: 200, category: "Pork" },
    { id: 3, name: "Chicken Adobo", price: 260, category: "Chicken" },
    { id: 4, name: "Fried Chicken", price: 250, category: "Chicken" },
    { id: 5, name: "Sinigang Bangus", price: 85, category: "Soup" },
    { id: 6, name: "Hyscian Lomi", price: 160, category: "Seafoods" },
    { id: 7, name: "Chicksilog", price: 78, category: "Rice Toppings" },
    { id: 8, name: "Tapsilog", price: 85, category: "Rice Toppings" },
    { id: 9, name: "Pork Sisig", price: 115, category: "Appetizers" }
];

let cart = [];

// Initialize Menu
function displayMenu(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = items.map(item => `
        <div class="menu-card" onclick="addToCart(${item.id})">
            <h3>${item.name}</h3>
            <p class="price">₱${item.price.toFixed(2)}</p>
        </div>
    `).join('');
}

function filterMenu(category) {
    const filtered = category === 'all' ? menuData : menuData.filter(i => i.category === category);
    displayMenu(filtered);
    
    // Update active tab UI
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === category) btn.classList.add('active');
    });
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Your cart is empty</p>';
        totalDisplay.innerText = '₱0.00';
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₱${item.price.toFixed(2)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `₱${total.toFixed(2)}`;
}

function checkout() {
    if(cart.length === 0) return alert("Cart is empty!");
    alert("Order Placed Successfully!");
    cart = [];
    renderCart();
}

// Load all items on start
displayMenu(menuData);
