// --- FULL MENU DATABASE FROM IMAGES ---
const menuData = [
    // RICE TOPPINGS
    { id: 101, name: "Chicken", price: 68.00, category: "Rice Toppings" },
    { id: 102, name: "Chicksilog", price: 78.00, category: "Rice Toppings" },
    { id: 103, name: "Porkchop", price: 70.00, category: "Rice Toppings" },
    { id: 104, name: "Porksilog", price: 80.00, category: "Rice Toppings" },
    { id: 105, name: "Litson Kawali", price: 80.00, category: "Rice Toppings" },
    { id: 106, name: "Hotdog", price: 45.00, category: "Rice Toppings" },
    { id: 107, name: "Hotsilog", price: 55.00, category: "Rice Toppings" },
    { id: 108, name: "Chorizo", price: 45.00, category: "Rice Toppings" },
    { id: 109, name: "Chosilog", price: 55.00, category: "Rice Toppings" },
    { id: 110, name: "Corned Beef", price: 55.00, category: "Rice Toppings" },
    { id: 111, name: "Cornsilog", price: 65.00, category: "Rice Toppings" },
    { id: 112, name: "Daing na Bangus", price: 80.00, category: "Rice Toppings" },
    { id: 113, name: "Bangsilog", price: 90.00, category: "Rice Toppings" },
    { id: 114, name: "Pork Binagoongan", price: 80.00, category: "Rice Toppings" },
    { id: 115, name: "Bola-Bola", price: 45.00, category: "Rice Toppings" },
    { id: 116, name: "Lumpiang Shanghai", price: 45.00, category: "Rice Toppings" },
    { id: 117, name: "Beef Brocolli", price: 85.00, category: "Rice Toppings" },
    { id: 118, name: "Chicken Curry", price: 75.00, category: "Rice Toppings" },
    { id: 119, name: "Tapa", price: 75.00, category: "Rice Toppings" },
    { id: 120, name: "Tapsilog", price: 85.00, category: "Rice Toppings" },
    { id: 121, name: "Fish Fillet", price: 75.00, category: "Rice Toppings" },
    { id: 122, name: "Pork Sisig Rice", price: 125.00, category: "Rice Toppings" },
    { id: 123, name: "Tuna Sisig Rice", price: 125.00, category: "Rice Toppings" },
    { id: 124, name: "Beef Sisig Rice", price: 125.00, category: "Rice Toppings" },
    { id: 125, name: "Beef Cauliflower", price: 85.00, category: "Rice Toppings" },
    { id: 126, name: "Beef Ampalaya", price: 85.00, category: "Rice Toppings" },
    { id: 127, name: "Pork Steak", price: 85.00, category: "Rice Toppings" },
    { id: 128, name: "Pork Sweet & Sour", price: 80.00, category: "Rice Toppings" },
    { id: 129, name: "Pork Taosi", price: 80.00, category: "Rice Toppings" },
    { id: 130, name: "Pork Brocolli", price: 80.00, category: "Rice Toppings" },
    { id: 131, name: "Pork Cauliflower", price: 80.00, category: "Rice Toppings" },
    { id: 132, name: "Pork Ampalaya", price: 80.00, category: "Rice Toppings" },
    { id: 133, name: "Meatballs Sweet & Sour", price: 75.00, category: "Rice Toppings" },
    { id: 134, name: "Humba", price: 85.00, category: "Rice Toppings" },
    { id: 135, name: "Chopsuey", price: 80.00, category: "Rice Toppings" },
    { id: 136, name: "Fish Sweet & Sour", price: 75.00, category: "Rice Toppings" },
    { id: 137, name: "Fish Taosi", price: 75.00, category: "Rice Toppings" },
    { id: 138, name: "Grouted Chicken", price: 75.00, category: "Rice Toppings" },
    { id: 139, name: "Grouted Pork", price: 80.00, category: "Rice Toppings" },
    { id: 140, name: "Tocino", price: 75.00, category: "Rice Toppings" },
    { id: 141, name: "Tosilog", price: 85.00, category: "Rice Toppings" },
    { id: 142, name: "Beef Steak", price: 110.00, category: "Rice Toppings" },
    { id: 143, name: "Gulam Rice", price: 105.00, category: "Rice Toppings" },
    { id: 144, name: "Fried Tilapia", price: 85.00, category: "Rice Toppings" },

    // SOUP
    { id: 201, name: "Hototay", price: 85.00, category: "Soup" },
    { id: 202, name: "Tinolang Baboy", price: 90.00, category: "Soup" },
    { id: 203, name: "Sinigang Baboy", price: 95.00, category: "Soup" },
    { id: 204, name: "Tinolang Bangus", price: 80.00, category: "Soup" },
    { id: 205, name: "Sinigang Bangus", price: 85.00, category: "Soup" },
    { id: 206, name: "Egg Soup", price: 70.00, category: "Soup" },
    { id: 207, name: "Sotanghon Soup", price: 80.00, category: "Soup" },
    { id: 208, name: "Soup #5", price: 95.00, category: "Soup" },
    { id: 209, name: "Tinolang Bariles", price: 110.00, category: "Soup" },
    { id: 210, name: "Sinigang Bariles", price: 120.00, category: "Soup" },
    { id: 211, name: "Sinigang Hipon", price: 160.00, category: "Soup" },
    { id: 212, name: "Gulam Soup", price: 95.00, category: "Soup" },
    { id: 213, name: "Gulami", price: 95.00, category: "Soup" },
    { id: 214, name: "Tinolang Manok", price: 250.00, category: "Soup" },
    { id: 215, name: "1/2 Tinolang Manok", price: 150.00, category: "Soup" },
    { id: 216, name: "Balbacua", price: 50.00, category: "Soup" },

    // NOODLES
    { id: 301, name: "Mami", price: 50.00, category: "Noodles" },
    { id: 302, name: "Pancit", price: 130.00, category: "Noodles" },
    { id: 303, name: "Canton", price: 140.00, category: "Noodles" },
    { id: 304, name: "Bam-I", price: 140.00, category: "Noodles" },
    { id: 305, name: "Bihon", price: 130.00, category: "Noodles" },
    { id: 306, name: "Miki Bihon", price: 140.00, category: "Noodles" },
    { id: 307, name: "Lomi", price: 140.00, category: "Noodles" },
    { id: 308, name: "Sotanghon", price: 140.00, category: "Noodles" },
    { id: 309, name: "Satelomi", price: 145.00, category: "Noodles" },
    { id: 310, name: "Satemi", price: 145.00, category: "Noodles" },
    { id: 311, name: "Canton Con", price: 160.00, category: "Noodles" },
    { id: 312, name: "Pancit Con Chopsuey", price: 160.00, category: "Noodles" },
    { id: 313, name: "Sotanghon Con", price: 160.00, category: "Noodles" },
    
    // SEAFOODS
    { id: 401, name: "Adobong Hipon", price: 200.00, category: "Seafoods" },
    { id: 402, name: "Shrimp Omelette", price: 80.00, category: "Seafoods" },
    { id: 403, name: "Crispy Shrimp", price: 80.00, category: "Seafoods" },
    { id: 404, name: "Fish Taosi", price: 200.00, category: "Seafoods" },
    { id: 405, name: "Fish Sweet & Sour", price: 200.00, category: "Seafoods" },
    { id: 406, name: "Fish Fillet", price: 200.00, category: "Seafoods" },
    { id: 407, name: "Hyscian Lomi", price: 160.00, category: "Seafoods" },
    { id: 408, name: "Hyscian Bihon", price: 160.00, category: "Seafoods" },
    { id: 409, name: "Hyscian Bam-I", price: 160.00, category: "Seafoods" },
    { id: 410, name: "Hyscian Canton", price: 160.00, category: "Seafoods" },
    { id: 411, name: "Hyscian Sotanghon", price: 160.00, category: "Seafoods" },
    { id: 412, name: "Hyscian Pancit", price: 160.00, category: "Seafoods" },
    { id: 413, name: "Daing na Bangus (2pcs)", price: 150.00, category: "Seafoods" },

    // HITO/CATFISH
    { id: 501, name: "Fried Hito", price: 300.00, category: "Hito/Catfish" },
    { id: 502, name: "Spicy Hito", price: 300.00, category: "Hito/Catfish" },
    { id: 503, name: "Adobong Hito", price: 300.00, category: "Hito/Catfish" },
    { id: 504, name: "Ginataang Hito", price: 300.00, category: "Hito/Catfish" },
    { id: 505, name: "Curry Hito", price: 300.00, category: "Hito/Catfish" },

    // BEEF
    { id: 601, name: "Gulam Guisado", price: 100.00, category: "Beef" },
    { id: 602, name: "Beef Omelet", price: 90.00, category: "Beef" },
    { id: 603, name: "Beef Torta", price: 90.00, category: "Beef" },
    { id: 604, name: "Beef Curry", price: 220.00, category: "Beef" },
    { id: 605, name: "Beef Brocolli", price: 220.00, category: "Beef" },
    { id: 606, name: "Beef Cauliflower", price: 220.00, category: "Beef" },
    { id: 607, name: "Beef Ampalaya", price: 220.00, category: "Beef" },
    { id: 608, name: "Beef w/ Onion", price: 250.00, category: "Beef" },
    { id: 609, name: "Beef Steak", price: 250.00, category: "Beef" },

    // APPETIZERS
    { id: 701, name: "Pork Sisig", price: 115.00, category: "Appetizers" },
    { id: 702, name: "Beef Sisig", price: 115.00, category: "Appetizers" },
    { id: 703, name: "Tuna Sisig", price: 115.00, category: "Appetizers" },
    { id: 704, name: "Kinilaw", price: 120.00, category: "Appetizers" },
    { id: 705, name: "Calamares", price: 190.00, category: "Appetizers" },
    { id: 706, name: "Spicy Gambas", price: 190.00, category: "Appetizers" },
    { id: 707, name: "Onion Rings", price: 60.00, category: "Appetizers" },
    { id: 708, name: "Camaron Rebosado", price: 190.00, category: "Appetizers" },

    // VEGETABLES
    { id: 801, name: "Chopsuey", price: 150.00, category: "Vegetables" },
    { id: 802, name: "Pinakbet", price: 140.00, category: "Vegetables" },
    { id: 803, name: "Samsi", price: 120.00, category: "Vegetables" },
    { id: 804, name: "Tortang Talong", price: 30.00, category: "Vegetables" },
    
    // RICE
    { id: 901, name: "Plain Cup of Rice", price: 15.00, category: "Rice" },
    { id: 902, name: "Garlic Rice", price: 50.00, category: "Rice" },
    { id: 903, name: "Fried Rice (S)", price: 90.00, category: "Rice" },
    { id: 904, name: "Fried Rice (L)", price: 130.00, category: "Rice" },

    // PORK (Main Dishes)
    { id: 1001, name: "Pork Omelette", price: 80.00, category: "Pork" },
    { id: 1002, name: "Pork Torta", price: 90.00, category: "Pork" },
    { id: 1003, name: "Litson Kawali (Platter)", price: 220.00, category: "Pork" },
    { id: 1004, name: "Lumpiang Shanghai (Platter)", price: 150.00, category: "Pork" },
    { id: 1005, name: "Bola-Bola (Platter)", price: 150.00, category: "Pork" },
    { id: 1006, name: "Porkchop", price: 160.00, category: "Pork" },
    { id: 1007, name: "Pork Binagoongan", price: 180.00, category: "Pork" },
    { id: 1008, name: "Pork Sweet & Sour", price: 180.00, category: "Pork" },
    { id: 1009, name: "Pork Taosi", price: 200.00, category: "Pork" },
    { id: 1010, name: "Pork Adobo", price: 200.00, category: "Pork" },
    { id: 1011, name: "Pork Steak", price: 200.00, category: "Pork" },
    { id: 1012, name: "Pork Brocolli", price: 200.00, category: "Pork" },
    { id: 1013, name: "Pork Cauliflower", price: 200.00, category: "Pork" },
    { id: 1014, name: "Meatballs Sweet & Sour", price: 180.00, category: "Pork" },
    { id: 1015, name: "Pork w/Onion", price: 180.00, category: "Pork" },
    { id: 1016, name: "Grouted Pork", price: 180.00, category: "Pork" },
    { id: 1017, name: "Humba", price: 200.00, category: "Pork" },
    { id: 1018, name: "Crispy Pata", price: 550.00, category: "Pork" },
    { id: 1019, name: "Patatim", price: 550.00, category: "Pork" },

    // CHICKEN (Main Dishes)
    { id: 1101, name: "Chicken Adobo", price: 260.00, category: "Chicken" },
    { id: 1102, name: "Chicken Curry", price: 170.00, category: "Chicken" },
    { id: 1103, name: "Chicken Pork Adobo", price: 260.00, category: "Chicken" },
    { id: 1104, name: "Chicken Omelette", price: 80.00, category: "Chicken" },
    { id: 1105, name: "Chicken Torta", price: 90.00, category: "Chicken" },
    { id: 1106, name: "Fried Chicken", price: 250.00, category: "Chicken" },
    { id: 1107, name: "1/2 Fried Chicken", price: 150.00, category: "Chicken" },
    { id: 1108, name: "Buttered Chicken", price: 250.00, category: "Chicken" },
    { id: 1109, name: "1/2 Buttered Chicken", price: 150.00, category: "Chicken" },
    { id: 1110, name: "Garlic Chicken", price: 250.00, category: "Chicken" },
    { id: 1111, name: "1/2 Garlic Chicken", price: 150.00, category: "Chicken" },
    { id: 1112, name: "Grouted Chicken", price: 160.00, category: "Chicken" }
];

let cart = [];

// Initialize Categories
function initCategories() {
    // Unique categories including "All"
    const categories = ["All", ...new Set(menuData.map(item => item.category))];
    const tabContainer = document.getElementById('category-tabs');
    
    tabContainer.innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat === 'All' ? 'active' : ''}" 
        onclick="filterMenu('${cat}')">${cat}</button>
    `).join('');
}

// Display Items
function displayMenu(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = items.map(item => `
        <div class="menu-card" onclick="addToCart(${item.id})">
            <h3>${item.name}</h3>
            <p class="price">₱${item.price.toFixed(2)}</p>
        </div>
    `).join('');
}

// Filter Function
function filterMenu(category) {
    const filtered = category === 'All' ? menuData : menuData.filter(i => i.category === category);
    displayMenu(filtered);
    
    // Update active tab UI
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === category) btn.classList.add('active');
    });
}

// Cart Logic
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg" style="text-align:center; opacity:0.6; margin-top:20px;">Cart is empty</p>';
        totalDisplay.innerText = '₱0.00';
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span style="flex:1">${item.name}</span>
            <span style="font-weight:bold">₱${item.price.toFixed(2)}</span>
            <span style="color:red; cursor:pointer; margin-left:10px;" onclick="removeFromCart(${index})">✕</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// --- CUSTOM MODAL LOGIC ---

// Helper to show the modal
function showCustomModal(title, htmlContent, isConfirmType, callback) {
    const modal = document.getElementById('custom-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');
    const actionsEl = document.getElementById('modal-actions');

    titleEl.innerText = title;
    contentEl.innerHTML = htmlContent;

    if (isConfirmType) {
        // Show Cancel and Confirm buttons
        actionsEl.innerHTML = `
            <button class="modal-btn cancel" onclick="closeModal()">Edit Order</button>
            <button class="modal-btn confirm" id="dynamic-confirm-btn">Confirm Order</button>
        `;
        document.getElementById('dynamic-confirm-btn').onclick = callback;
    } else {
        // Show only OK button for errors/alerts
        actionsEl.innerHTML = `
            <button class="modal-btn only-ok" onclick="closeModal()">Okay</button>
        `;
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('active');
}

// Overwritten Checkout Function
function checkout() {
    const tableNum = document.getElementById('table-num').value;
    const custName = document.getElementById('cust-name').value;
    const custPhone = document.getElementById('cust-phone').value;
    const totalText = document.getElementById('total-price').innerText;

    // Validation using Custom Modal
    if(cart.length === 0) {
        return showCustomModal("Oops!", "<p style='text-align:center'>Your cart is empty.</p>", false);
    }
    if(!tableNum || !custName) {
        return showCustomModal("Missing Info", "<p style='text-align:center'>Please fill in <b>Table Number</b> and <b>Customer Name</b>.</p>", false);
    }

    // Build Receipt Preview for the Modal
    let receiptHTML = `
        <div style="text-align:center; margin-bottom:10px;">
            <p><strong>Table:</strong> ${tableNum}</p>
            <p><strong>Customer:</strong> ${custName}</p>
        </div>
        <div class="review-list">
    `;

    cart.forEach(item => {
        receiptHTML += `
            <div class="review-item">
                <span>${item.name}</span>
                <span>₱${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    receiptHTML += `
        </div>
        <div class="review-total">
            <span>TOTAL</span>
            <span>${totalText}</span>
        </div>
    `;

    // Show the Confirmation Screen
    showCustomModal("Review Order", receiptHTML, true, () => {
        // Only executes if user clicks "Confirm"
        finalizeOrder(custName, tableNum, custPhone, totalText);
    });
}

function finalizeOrder(name, table, phone, total) {
    const orderDetails = {
        customer: name,
        table: table,
        phone: phone,
        items: cart,
        total: total,
        date: new Date().toLocaleString()
    };

    console.log("Order Finalized:", orderDetails);
    
    // Close the review modal
    closeModal();

    // Show Success Modal
    setTimeout(() => {
        showCustomModal("Success!", `
            <div style="text-align:center">
                <p>Order sent to kitchen!</p>
                <h2 style="color:var(--primary); margin:10px 0;">Table ${table}</h2>
                <p>Thank you, ${name}</p>
            </div>
        `, false);
    }, 300);
    
    // Reset Data
    cart = [];
    renderCart();
    document.getElementById('table-num').value = '';
    document.getElementById('cust-name').value = '';
    document.getElementById('cust-phone').value = '';
}

// Start
initCategories();
displayMenu(menuData);
