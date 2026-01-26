// --- MENU DATABASE ---
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
    // PORK
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
    // CHICKEN
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

// --- INVENTORY DATABASE ---
const inventoryData = menuData.map(item => ({
    inventory_id: `INV-${item.id}`,
    menu_id: item.id,
    name: item.name,
    quantity_on_hand: 50,
    expiration_date: "2026-12-31"
}));

// --- PAYMENT METHODS ---
let paymentMethods = [
    { id: 'cash', name: 'Cash', active: true },
    { id: 'gcash', name: 'GCash', active: true },
    { id: 'maya', name: 'Maya', active: false },
    { id: 'card', name: 'Credit/Debit Card', active: false }
];

// --- DATABASES ---
let allOrders = [];
let customers = [];
let orderIdCounter = 1;
let cart = [];

// --- INITIALIZATION ---

function initCategories() {
    const categories = ["All", ...new Set(menuData.map(item => item.category))];
    const tabContainer = document.getElementById('category-tabs');
    tabContainer.innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat === 'All' ? 'active' : ''}" onclick="filterMenu('${cat}')">${cat}</button>
    `).join('');
}

function displayMenu(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = items.map(item => {
        const inv = inventoryData.find(i => i.menu_id === item.id);
        const stock = inv ? inv.quantity_on_hand : 0;
        
        return `
        <div class="menu-card" onclick="addToCart(${item.id})">
            <div>
                <h3>${item.name}</h3>
                <p class="price">₱${item.price.toFixed(2)}</p>
            </div>
            <span class="stock-badge ${stock < 5 ? 'low' : ''}">Stock: ${stock}</span>
        </div>
    `}).join('');
}

function filterMenu(category) {
    const filtered = category === 'All' ? menuData : menuData.filter(i => i.category === category);
    displayMenu(filtered);
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === category) btn.classList.add('active');
    });
}

// --- CART LOGIC ---

function addToCart(id) {
    const inv = inventoryData.find(i => i.menu_id === id);
    if(inv.quantity_on_hand <= 0) {
        return showCustomModal("Out of Stock", `<p>Sorry, <b>${inv.name}</b> is currently unavailable.</p>`, false);
    }
    
    const inCart = cart.filter(i => i.id === id).length;
    if(inCart + 1 > inv.quantity_on_hand) {
        return showCustomModal("Low Stock", `<p>Only ${inv.quantity_on_hand} available.</p>`, false);
    }

    const item = menuData.find(i => i.id === id);
    
    const htmlContent = `
        <p style="margin-bottom:10px;">Price: <b>₱${item.price.toFixed(2)}</b></p>
        <p style="font-size:0.9rem; color:#555;">Special Requests / Allergies:</p>
        <textarea id="item-request-${id}" class="request-input" placeholder="e.g. No onions, less spicy..."></textarea>
    `;

    showCustomModal(`Add ${item.name}`, htmlContent, true, () => confirmAddToCart(id));
    
    const confirmBtn = document.getElementById('dynamic-confirm-btn');
    if(confirmBtn) confirmBtn.innerText = "Add to Order";
}

function confirmAddToCart(id) {
    const item = menuData.find(i => i.id === id);
    const requestBox = document.getElementById(`item-request-${id}`);
    const notes = requestBox ? requestBox.value.trim() : "";

    cart.push({ ...item, notes: notes });
    
    renderCart();
    closeModal();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Cart is empty</p>';
        totalDisplay.innerText = '₱0.00';
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => {
        const noteHtml = item.notes ? `<span class="item-note">Note: ${item.notes}</span>` : '';
        return `
            <div class="cart-item">
                <div style="flex:1">
                    <span>${item.name}</span>
                    ${noteHtml}
                </div>
                <span style="font-weight:bold; margin:0 10px;">₱${item.price.toFixed(2)}</span>
                <span style="color:var(--accent); cursor:pointer;" onclick="removeFromCart(${index})">✕</span>
            </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// --- PAYMENT SETTINGS ---

function showPaymentSettings() {
    let html = `<div style="text-align:left;">`;
    
    paymentMethods.forEach(method => {
        const isChecked = method.active ? 'checked' : '';
        html += `
            <div class="payment-row">
                <span>${method.name}</span>
                <label class="switch">
                    <input type="checkbox" onchange="togglePaymentMethod('${method.id}')" ${isChecked}>
                    <span class="slider"></span>
                </label>
            </div>
        `;
    });
    
    html += `</div>`;
    
    showCustomModal("Payment Methods", html, false);
    
    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn only-ok" onclick="closeModal()">Close</button>
    `;
}

function togglePaymentMethod(id) {
    const method = paymentMethods.find(m => m.id === id);
    if(method) method.active = !method.active;
}

// --- CUSTOMER HISTORY ---

function showCustomers() {
    let html = `
        <input type="text" id="cust-search" class="search-bar" placeholder="Search customer name..." oninput="searchCustomers()">
        <div id="cust-results" style="max-height:300px; overflow-y:auto; text-align:left;">
            <p style="color:#888; text-align:center;">Type to search or view recent.</p>
        </div>
    `;
    showCustomModal("Customer Database", html, false);
    
    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn only-ok" onclick="closeModal()">Close</button>
    `;
    
    searchCustomers();
}

function searchCustomers() {
    const query = document.getElementById('cust-search') ? document.getElementById('cust-search').value.toLowerCase() : '';
    const resultsContainer = document.getElementById('cust-results');
    
    const matches = customers.filter(c => c.name.toLowerCase().includes(query));
    
    if(matches.length === 0) {
        resultsContainer.innerHTML = '<p style="color:#888; text-align:center; margin-top:20px;">No customers found.</p>';
        return;
    }

    let html = '';
    matches.forEach(c => {
        html += `
            <div class="customer-list-item" onclick="selectCustomer('${c.name}')">
                <div>
                    <b>${c.name}</b><br>
                    <span style="font-size:0.8rem; color:#666;">${c.phone || 'No Phone'} • Visits: ${c.visits}</span>
                </div>
                <span>➡️</span>
            </div>
        `;
    });
    resultsContainer.innerHTML = html;
}

function selectCustomer(name) {
    const customer = customers.find(c => c.name === name);
    if(!customer) return;

    let historyHTML = '';
    const customerOrders = allOrders.filter(o => o.customer === name).reverse();

    customerOrders.forEach(o => {
        let items = o.items.map(i => i.name).join(', ');
        historyHTML += `
            <div class="history-card">
                <div style="display:flex; justify-content:space-between; font-weight:bold;">
                    <span>${o.timestamp.split(',')[0]}</span>
                    <span>${o.finalTotal}</span>
                </div>
                <p style="margin:5px 0; color:#555;">${items}</p>
                <span class="status-badge ${o.status === 'Completed' ? 'status-completed' : 'status-pending'}" style="font-size:0.7rem;">${o.status}</span>
            </div>
        `;
    });

    let html = `
        <div style="text-align:left;">
            <p><strong>Phone:</strong> ${customer.phone || 'N/A'}</p>
            <p><strong>Email:</strong> ${customer.email || 'N/A'}</p>
            <hr style="margin:15px 0; border-top:1px dashed #ccc;">
            <h4 style="margin-bottom:10px;">Order History</h4>
            <div style="max-height:200px; overflow-y:auto;">
                ${historyHTML || '<p>No history found.</p>'}
            </div>
        </div>
    `;

    showCustomModal(customer.name, html, false);

    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn cancel" onclick="showCustomers()">Back</button>
        <button class="modal-btn confirm" onclick="useCustomer('${name}')">Start New Order</button>
    `;
}

function useCustomer(name) {
    const customer = customers.find(c => c.name === name);
    if(customer) {
        document.getElementById('cust-name').value = customer.name;
        document.getElementById('cust-phone').value = customer.phone;
        document.getElementById('cust-email').value = customer.email;
    }
    closeModal();
}

// --- SALES REPORT (FIXED LOGIC) ---

function showSales() {
    // 1. Calculate Stats safely
    const completedOrders = allOrders.filter(o => o.status === 'Completed');
    
    // Total Revenue (Using numericTotal for reliability)
    let totalRevenue = completedOrders.reduce((sum, o) => sum + (o.numericTotal || 0), 0);

    // Today's Sales (Robust Date Check)
    const today = new Date();
    const todayOrders = completedOrders.filter(o => {
        const orderDate = new Date(o.timestamp);
        return orderDate.toDateString() === today.toDateString();
    });
    
    let todayRevenue = todayOrders.reduce((sum, o) => sum + (o.numericTotal || 0), 0);

    // Payment Breakdown
    let breakdown = { 'Cash': 0, 'GCash': 0, 'Others': 0 };
    completedOrders.forEach(o => {
        let method = o.paymentMethod || 'Cash';
        let val = o.numericTotal || 0;
        
        if (method === 'Cash' || method === 'Unknown/Cash') breakdown['Cash'] += val;
        else if (method === 'GCash') breakdown['GCash'] += val;
        else breakdown['Others'] += val;
    });

    // 2. Build HTML
    let historyRows = completedOrders.slice().reverse().map(o => `
        <tr>
            <td>${o.id}</td>
            <td>${o.customer}</td>
            <td>${o.paymentMethod}</td>
            <td style="text-align:right;">${o.finalTotal}</td>
        </tr>
    `).join('');

    let html = `
        <div class="sales-dashboard">
            <div class="summary-grid">
                <div class="summary-card">
                    <h5>Total Revenue</h5>
                    <h2>₱${totalRevenue.toLocaleString(undefined, {minimumFractionDigits:2})}</h2>
                </div>
                <div class="summary-card">
                    <h5>Today's Sales</h5>
                    <h2>₱${todayRevenue.toLocaleString(undefined, {minimumFractionDigits:2})}</h2>
                </div>
                <div class="summary-card">
                    <h5>Total Orders</h5>
                    <h2>${completedOrders.length}</h2>
                </div>
                <div class="summary-card">
                    <h5>Cash vs GCash</h5>
                    <p style="font-size:0.8rem; margin-top:5px;">
                        Cash: ₱${breakdown['Cash'].toLocaleString()}<br>
                        GCash: ₱${breakdown['GCash'].toLocaleString()}
                    </p>
                </div>
            </div>

            <h5 style="border-bottom:1px solid #ddd; padding-bottom:5px; margin-bottom:5px;">Recent Transactions</h5>
            <div style="max-height:150px; overflow-y:auto;">
                <table class="sales-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Method</th>
                            <th style="text-align:right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${historyRows || '<tr><td colspan="4" style="text-align:center;">No data</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    showCustomModal("Sales Report", html, false);
    
    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn only-ok" onclick="closeModal()">Close</button>
    `;
}

// --- INVENTORY MANAGEMENT ---

function showInventory() {
    let html = `
        <div style="max-height:300px; overflow-y:auto; padding-right:5px;">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
                <thead>
                    <tr style="text-align:left; border-bottom:2px solid #ddd;">
                        <th>Item</th>
                        <th style="width:50px">Qty</th>
                        <th>Exp Date</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    inventoryData.forEach(item => {
        html += `
            <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;">${item.name}</td>
                <td><input type="number" id="qty-${item.menu_id}" value="${item.quantity_on_hand}" style="width:50px; padding:5px; border:1px solid #ccc; border-radius:5px;"></td>
                <td><input type="date" id="date-${item.menu_id}" value="${item.expiration_date}" style="padding:5px; border:1px solid #ccc; border-radius:5px;"></td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;
    
    showCustomModal("Manage Stock", html, false);
    
    const actionsEl = document.getElementById('modal-actions');
    actionsEl.innerHTML = `
        <button class="modal-btn cancel" onclick="closeModal()">Close</button>
        <button class="modal-btn confirm" onclick="saveInventoryChanges()">Save Changes</button>
    `;
}

function saveInventoryChanges() {
    inventoryData.forEach(item => {
        const qtyInput = document.getElementById(`qty-${item.menu_id}`);
        const dateInput = document.getElementById(`date-${item.menu_id}`);
        
        if(qtyInput && dateInput) {
            item.quantity_on_hand = parseInt(qtyInput.value) || 0;
            item.expiration_date = dateInput.value;
        }
    });

    const activeBtn = document.querySelector('.tab-btn.active');
    const activeTab = activeBtn ? activeBtn.innerText : 'All';
    filterMenu(activeTab);
    
    closeModal();
    setTimeout(() => showCustomModal("Success", "<p>Inventory updated successfully.</p>", false), 300);
}

// --- ORDER MANAGEMENT ---

function showOrders() {
    let pendingHTML = '';
    let completedHTML = '';

    const pendingOrders = allOrders.filter(o => o.status !== 'Completed' && o.status !== 'Cancelled');
    const completedOrders = allOrders.filter(o => o.status === 'Completed' || o.status === 'Cancelled').reverse();

    if(pendingOrders.length === 0) {
        pendingHTML = '<p style="color:#888; text-align:center; padding:10px;">No active orders.</p>';
    } else {
        pendingOrders.forEach(order => {
            let itemsList = order.items.map(i => {
                return i.notes ? `${i.name} <i>(${i.notes})</i>` : i.name;
            }).join(', ');

            let nextActionBtn = '';
            let nextStatus = '';
            let badgeClass = 'status-pending';

            if(order.status === 'Pending') { 
                nextStatus = 'Preparing'; 
                nextActionBtn = `<button class="action-btn btn-progress" onclick="updateOrderStatus(${order.id}, '${nextStatus}')">Start Preparing</button>`;
                badgeClass = 'status-pending';
            } else if(order.status === 'Preparing') {
                nextStatus = 'Cooking';
                nextActionBtn = `<button class="action-btn btn-progress" onclick="updateOrderStatus(${order.id}, '${nextStatus}')">Start Cooking</button>`;
                badgeClass = 'status-preparing';
            } else if(order.status === 'Cooking') {
                nextStatus = 'Served';
                nextActionBtn = `<button class="action-btn btn-progress" onclick="updateOrderStatus(${order.id}, '${nextStatus}')">Mark Served</button>`;
                badgeClass = 'status-cooking';
            } else if(order.status === 'Served') {
                nextActionBtn = `<button class="action-btn btn-complete" onclick="openPaymentModal(${order.id})">Bill & Pay</button>`;
                badgeClass = 'status-served';
            }

            let payBadge = order.paymentStatus === 'Paid' 
                ? `<span class="pay-badge pay-paid">PAID</span>` 
                : `<span class="pay-badge pay-unpaid">UNPAID</span>`;

            pendingHTML += `
                <div class="order-card">
                    <div class="order-header">
                        <span>#${order.id} - Table ${order.table}</span>
                        <div>
                            <span class="status-badge ${badgeClass}">${order.status}</span>
                            ${payBadge}
                        </div>
                    </div>
                    <div class="order-details">
                        <b>${order.customer}</b><br>
                        ${itemsList}<br>
                        Total: <b>${order.finalTotal || order.rawTotal}</b>
                    </div>
                    <div class="order-actions">
                        <button class="action-btn btn-cancel" onclick="updateOrderStatus(${order.id}, 'Cancelled')">Cancel</button>
                        ${nextActionBtn}
                    </div>
                </div>
            `;
        });
    }

    if(completedOrders.length === 0) {
        completedHTML = '<p style="color:#888; text-align:center; padding:10px;">No history.</p>';
    } else {
        completedOrders.forEach(order => {
            let statusClass = order.status === 'Completed' ? 'status-completed' : 'status-cancelled';
            let itemsList = order.items.map(i => i.name).join(', ');
            let payInfo = order.status === 'Completed' ? `• <i>Paid via ${order.paymentMethod}</i>` : '';
            let printBtn = order.status === 'Completed' ? `<button class="action-btn btn-print" onclick="printReceipt(${order.id})">🖨️ Print</button>` : '';
            
            completedHTML += `
                <div class="order-card" style="opacity:0.8; background:#f9f9f9;">
                    <div class="order-header">
                        <span>#${order.id} - Table ${order.table}</span>
                        <span class="status-badge ${statusClass}">${order.status}</span>
                    </div>
                    <div class="order-details">
                        <b>${order.customer}</b><br>
                        ${itemsList}<br>
                        <b>${order.finalTotal || order.rawTotal}</b> ${payInfo}
                    </div>
                    ${printBtn}
                </div>
            `;
        });
    }

    let fullHTML = `
        <h4 style="margin-bottom:10px; color:var(--primary);">Active Kitchen Orders</h4>
        <div style="margin-bottom:20px;">${pendingHTML}</div>
        <h4 style="margin-bottom:10px; color:#666; border-top:1px solid #ddd; padding-top:10px;">Order History</h4>
        <div style="max-height:200px; overflow-y:auto;">${completedHTML}</div>
    `;

    showCustomModal("Orders", fullHTML, false);
    
    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn only-ok" onclick="closeModal()">Close</button>
    `;
}

// --- PAYMENT MODAL with Discount Toggle ---
function openPaymentModal(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if(!order) return;

    const activeMethods = paymentMethods.filter(m => m.active);
    let paymentSelectHTML = '';
    
    if(activeMethods.length === 0) {
         paymentSelectHTML = `<p style="color:red;">No payment methods active!</p>`;
    } else {
        paymentSelectHTML = `
            <div style="margin:15px 0;">
                <label style="font-weight:bold;">Select Payment Method:</label>
                <select id="final-payment-select" class="form-input" style="margin-top:5px;">
                    ${activeMethods.map(m => `<option value="${m.name}">${m.name}</option>`).join('')}
                </select>
            </div>
        `;
    }

    let baseAmount = order.rawTotal || parseFloat(order.total.replace('₱',''));
    let defaultTotal = order.finalTotal || order.total;

    let html = `
        <div style="text-align:center;">
            <p>Total Amount Due</p>
            <h2 id="modal-total-display" style="color:var(--accent); font-size:2rem; margin:10px 0;">${defaultTotal}</h2>
            
            <div class="payment-row" style="border-top:1px solid #eee; border-bottom:1px solid #eee; padding:10px 0; margin-bottom:10px;">
                <span style="font-size:0.9rem; font-weight:bold; color:var(--primary);">PWD/Senior Discount (20%)</span>
                <label class="switch">
                    <input type="checkbox" id="modal-discount-toggle" onchange="recalculateModalTotal(${baseAmount})">
                    <span class="slider"></span>
                </label>
            </div>

            ${paymentSelectHTML}
        </div>
    `;

    showCustomModal(`Bill: Table ${order.table}`, html, false);

    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn cancel" onclick="showOrders()">Back</button>
        <button class="modal-btn confirm" onclick="confirmPayment(${order.id})">Confirm Payment</button>
    `;
}

function recalculateModalTotal(baseAmount) {
    const toggle = document.getElementById('modal-discount-toggle');
    const display = document.getElementById('modal-total-display');
    
    if(toggle && display) {
        let finalAmt = baseAmount;
        if(toggle.checked) {
            finalAmt = baseAmount * 0.8; // 20% off
        }
        display.innerText = `₱${finalAmt.toFixed(2)}`;
    }
}

function confirmPayment(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    const select = document.getElementById('final-payment-select');
    const display = document.getElementById('modal-total-display');
    
    if(order && select && display) {
        order.paymentMethod = select.value;
        order.paymentStatus = 'Paid';
        order.finalTotal = display.innerText; 
        
        // STORE EXACT NUMBER FOR SALES REPORT
        order.numericTotal = parseFloat(display.innerText.replace('₱','').replace(',',''));
        
        updateOrderStatus(orderId, 'Completed');
    }
}

function updateOrderStatus(id, newStatus) {
    const order = allOrders.find(o => o.id === id);
    if (!order) return;

    order.status = newStatus;

    if (newStatus === 'Cancelled') {
        order.items.forEach(orderItem => {
            const invItem = inventoryData.find(i => i.menu_id === orderItem.id);
            if (invItem) {
                invItem.quantity_on_hand += 1;
            }
        });
        
        const activeBtn = document.querySelector('.tab-btn.active');
        const activeTab = activeBtn ? activeBtn.innerText : 'All';
        filterMenu(activeTab);
    }

    showOrders();
}

function printReceipt(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if(!order) return;

    let itemsList = order.items.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
            <span>${i.name}</span>
            <span>${i.price.toFixed(2)}</span>
        </div>
    `).join('');

    let discountRow = '';
    let numericFinal = parseFloat(order.finalTotal.replace('₱',''));
    let numericRaw = order.rawTotal;

    if(numericRaw > numericFinal) {
        let discountAmt = numericRaw - numericFinal;
        discountRow = `
            <div style="display:flex; justify-content:space-between; color:red;">
                <span>Discount (PWD/Senior)</span>
                <span>-${discountAmt.toFixed(2)}</span>
            </div>
        `;
    }

    let receiptContent = `
        <div style="font-family: monospace; padding: 20px; max-width: 300px; margin: 0 auto;">
            <h2 style="text-align:center; margin:0;">Prado's Kitchenette</h2>
            <p style="text-align:center; font-size:0.8rem; margin:5px 0;">Official Receipt</p>
            <hr style="border-top: 1px dashed black;">
            <p>Order #${order.id}<br>Date: ${order.timestamp}</p>
            <p>Customer: ${order.customer}</p>
            <p>Phone: ${order.phone || 'N/A'}<br>Email: ${order.email || 'N/A'}</p>
            <hr style="border-top: 1px dashed black;">
            ${itemsList}
            <hr style="border-top: 1px dashed black;">
            <div style="display:flex; justify-content:space-between;">
                <span>Subtotal</span>
                <span>${order.rawTotal.toFixed(2)}</span>
            </div>
            ${discountRow}
            <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.2rem; margin-top:5px;">
                <span>TOTAL</span>
                <span>${order.finalTotal}</span>
            </div>
            <p style="text-align:center; margin-top:20px;">Paid via ${order.paymentMethod}</p>
            <p style="text-align:center; margin-top:10px;">Thank you for dining!</p>
        </div>
    `;

    const printWindow = window.open('', '', 'width=400,height=600');
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write(receiptContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// --- MODAL & CHECKOUT ---

function showCustomModal(title, htmlContent, isConfirmType, callback) {
    const modal = document.getElementById('custom-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');
    const actionsEl = document.getElementById('modal-actions');

    titleEl.innerText = title;
    contentEl.innerHTML = htmlContent;

    if (isConfirmType) {
        actionsEl.innerHTML = `
            <button class="modal-btn cancel" onclick="closeModal()">Cancel</button>
            <button class="modal-btn confirm" id="dynamic-confirm-btn">Confirm</button>
        `;
        document.getElementById('dynamic-confirm-btn').onclick = callback;
    } else {
        actionsEl.innerHTML = `
            <button class="modal-btn only-ok" onclick="closeModal()">Okay</button>
        `;
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('active');
}

function checkout() {
    const tableNumEl = document.getElementById('table-num');
    const tableStatusEl = document.getElementById('table-status');
    const custNameEl = document.getElementById('cust-name');
    const discountEl = document.getElementById('discount-toggle');
    const totalEl = document.getElementById('total-price');

    if (!tableNumEl || !custNameEl || !totalEl) {
        alert("Error: Missing input fields.");
        return;
    }

    const tableNum = tableNumEl.value;
    const tableStatus = tableStatusEl ? tableStatusEl.value : "Occupied"; 
    const custName = custNameEl.value;
    let rawTotal = parseFloat(totalEl.innerText.replace('₱', ''));
    
    // Apply Discount Logic
    let isDiscounted = discountEl && discountEl.checked;
    let discountAmount = isDiscounted ? rawTotal * 0.20 : 0;
    let finalTotal = rawTotal - discountAmount;
    let finalTotalStr = `₱${finalTotal.toFixed(2)}`;

    if(cart.length === 0) return showCustomModal("Cart Empty", "<p>Please add items.</p>", false);
    if(!tableNum || !custName) return showCustomModal("Missing Info", "<p>Enter Table # and Name.</p>", false);

    let receiptHTML = `
        <div style="text-align:center; margin-bottom:10px; font-size:0.9rem;">
            <p><strong>Table:</strong> ${tableNum} (${tableStatus})</p>
            <p><strong>Customer:</strong> ${custName}</p>
        </div>
        <div class="review-list">
    `;

    cart.forEach(item => {
        const noteHtml = item.notes ? `<br><i style="font-size:0.8rem; color:#666;">Note: ${item.notes}</i>` : '';
        receiptHTML += `
            <div class="review-item">
                <span>${item.name} ${noteHtml}</span>
                <span>₱${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    if(isDiscounted) {
        receiptHTML += `
            <div class="review-item" style="color:var(--primary); font-weight:bold;">
                <span>PWD/Senior Discount (20%)</span>
                <span>-₱${discountAmount.toFixed(2)}</span>
            </div>
        `;
    }

    receiptHTML += `
        </div>
        <div class="review-total">
            <span>TOTAL</span>
            <span>${finalTotalStr}</span>
        </div>
        <p style="font-size:0.8rem; color:#666; text-align:center; margin-top:10px;">Payment collected AFTER dining.</p>
    `;

    showCustomModal("Review Order", receiptHTML, true, () => {
        finalizeOrder(custName, tableNum, finalTotalStr, rawTotal);
    });
}

function finalizeOrder(name, table, finalTotal, rawTotal) {
    const custPhone = document.getElementById('cust-phone').value;
    const custEmail = document.getElementById('cust-email').value;

    const newOrder = {
        id: orderIdCounter++,
        customer: name,
        phone: custPhone,
        email: custEmail,
        table: table,
        items: [...cart],
        rawTotal: rawTotal,
        finalTotal: finalTotal,
        paymentMethod: 'Pending',
        paymentStatus: 'Unpaid', 
        status: 'Pending', 
        timestamp: new Date().toLocaleString()
    };
    
    allOrders.push(newOrder);

    // Save/Update Customer Info
    const existingCust = customers.find(c => c.name === name);
    if(existingCust) {
        existingCust.visits += 1;
        existingCust.phone = custPhone || existingCust.phone;
        existingCust.email = custEmail || existingCust.email;
    } else {
        customers.push({
            name: name,
            phone: custPhone,
            email: custEmail,
            visits: 1
        });
    }

    cart.forEach(cartItem => {
        const invItem = inventoryData.find(i => i.menu_id === cartItem.id);
        if(invItem) {
            invItem.quantity_on_hand -= 1;
        }
    });

    closeModal();
    
    const activeBtn = document.querySelector('.tab-btn.active');
    const activeTab = activeBtn ? activeBtn.innerText : 'All';
    filterMenu(activeTab);

    setTimeout(() => {
        showCustomModal("Order Placed!", `
            <div style="text-align:center">
                <p>Order #${newOrder.id} sent to kitchen!</p>
                <h2 style="color:var(--primary); margin:15px 0;">Table ${table}</h2>
                <p>Total: ${finalTotal}</p>
            </div>
        `, false);
    }, 300);
    
    cart = [];
    renderCart();
    document.getElementById('table-num').value = '';
    document.getElementById('cust-name').value = '';
    document.getElementById('cust-phone').value = '';
    document.getElementById('cust-email').value = '';
    if(document.getElementById('discount-toggle')) document.getElementById('discount-toggle').checked = false;
}

// Start
initCategories();
displayMenu(menuData);
checkExpirations();
