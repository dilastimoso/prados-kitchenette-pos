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

// --- ORDERS DATABASE ---
let allOrders = [];
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
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Cart is empty</p>';
        totalDisplay.innerText = '₱0.00';
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span style="flex:1">${item.name}</span>
            <span style="font-weight:bold">₱${item.price.toFixed(2)}</span>
            <span style="color:var(--accent); cursor:pointer; margin-left:10px;" onclick="removeFromCart(${index})">✕</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
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

function checkExpirations() {
    const today = new Date().toISOString().split('T')[0];
    const expired = inventoryData.filter(i => i.expiration_date <= today);
    
    if(expired.length > 0) {
        let html = `<p>The following items have expired:</p><ul style="text-align:left; margin-top:10px;">`;
        expired.forEach(item => {
            html += `<li style="color:red; margin-bottom:5px;"><b>${item.name}</b> (Exp: ${item.expiration_date})</li>`;
        });
        html += `</ul>`;
        setTimeout(() => showCustomModal("⚠️ Inventory Alert", html, false), 1000);
    }
}

// --- ORDER MANAGEMENT (NEW FEATURE) ---

function showOrders() {
    let pendingHTML = '';
    let completedHTML = '';

    const pendingOrders = allOrders.filter(o => o.status === 'Pending');
    const completedOrders = allOrders.filter(o => o.status !== 'Pending').reverse(); // Newest first

    // Build Pending List
    if(pendingOrders.length === 0) {
        pendingHTML = '<p style="color:#888; text-align:center; padding:10px;">No pending orders.</p>';
    } else {
        pendingOrders.forEach(order => {
            let itemsList = order.items.map(i => `${i.name}`).join(', ');
            pendingHTML += `
                <div class="order-card">
                    <div class="order-header">
                        <span>#${order.id} - Table ${order.table}</span>
                        <span class="status-badge status-pending">Pending</span>
                    </div>
                    <div class="order-details">
                        <b>${order.customer}</b><br>
                        Items: ${itemsList}<br>
                        Total: ${order.total}
                    </div>
                    <div class="order-actions">
                        <button class="action-btn btn-cancel" onclick="updateOrderStatus(${order.id}, 'Cancelled')">Cancel</button>
                        <button class="action-btn btn-complete" onclick="updateOrderStatus(${order.id}, 'Completed')">Complete</button>
                    </div>
                </div>
            `;
        });
    }

    // Build History List
    if(completedOrders.length === 0) {
        completedHTML = '<p style="color:#888; text-align:center; padding:10px;">No history.</p>';
    } else {
        completedOrders.forEach(order => {
            let statusClass = order.status === 'Completed' ? 'status-completed' : 'status-cancelled';
            let itemsList = order.items.map(i => `${i.name}`).join(', ');
            completedHTML += `
                <div class="order-card" style="opacity:0.8; background:#f9f9f9;">
                    <div class="order-header">
                        <span>#${order.id} - Table ${order.table}</span>
                        <span class="status-badge ${statusClass}">${order.status}</span>
                    </div>
                    <div class="order-details">
                        <b>${order.customer}</b><br>
                        ${itemsList}<br>
                        ${order.total}
                    </div>
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
    
    // Add a simple Close button
    document.getElementById('modal-actions').innerHTML = `
        <button class="modal-btn only-ok" onclick="closeModal()">Close</button>
    `;
}

function updateOrderStatus(id, newStatus) {
    const order = allOrders.find(o => o.id === id);
    if (!order) return;

    order.status = newStatus;

    if (newStatus === 'Cancelled') {
        // Return items to stock
        order.items.forEach(orderItem => {
            const invItem = inventoryData.find(i => i.menu_id === orderItem.id);
            if (invItem) {
                invItem.quantity_on_hand += 1;
            }
        });
        
        // Refresh Stock View if open
        const activeBtn = document.querySelector('.tab-btn.active');
        const activeTab = activeBtn ? activeBtn.innerText : 'All';
        filterMenu(activeTab);
    }

    // Re-render the orders modal to show changes immediately
    showOrders();
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
            <button class="modal-btn cancel" onclick="closeModal()">Edit</button>
            <button class="modal-btn confirm" id="dynamic-confirm-btn">Confirm Order</button>
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
    const totalEl = document.getElementById('total-price');

    if (!tableNumEl || !custNameEl || !totalEl) {
        alert("Error: Missing input fields in HTML. Please verify index.html.");
        return;
    }

    const tableNum = tableNumEl.value;
    const tableStatus = tableStatusEl ? tableStatusEl.value : "Occupied"; 
    const custName = custNameEl.value;
    const totalText = totalEl.innerText;

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

    showCustomModal("Review Order", receiptHTML, true, () => {
        finalizeOrder(custName, tableNum, totalText);
    });
}

function finalizeOrder(name, table, total) {
    // 1. Create Order Object
    const newOrder = {
        id: orderIdCounter++,
        customer: name,
        table: table,
        items: [...cart], // Copy cart
        total: total,
        status: 'Pending',
        timestamp: new Date().toLocaleString()
    };
    
    // 2. Add to Orders Array
    allOrders.push(newOrder);

    // 3. Deduct Stock
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
                <p>Total: ${total}</p>
            </div>
        `, false);
    }, 300);
    
    cart = [];
    renderCart();
    document.getElementById('table-num').value = '';
    document.getElementById('cust-name').value = '';
}

// Start
initCategories();
displayMenu(menuData);
checkExpirations();
