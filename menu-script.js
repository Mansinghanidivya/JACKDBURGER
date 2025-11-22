// Full Menu Data
const fullMenuData = {
    burgers: [
        { id: 1, name: "McAloo Tikki Burger", price: 39, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", description: "India's favorite potato patty burger", veg: true },
        { id: 2, name: "McSpicy Chicken Burger", price: 189, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", description: "Spicy crispy chicken fillet burger", veg: false },
        { id: 3, name: "McSpicy Paneer Burger", price: 179, image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400", description: "Spicy paneer patty burger", veg: true },
        { id: 4, name: "Maharaja Mac", price: 219, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", description: "Double layered chicken burger", veg: false },
        { id: 5, name: "Big Spicy Chicken Wrap", price: 199, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400", description: "Spicy chicken wrap", veg: false },
        { id: 6, name: "McVeggie Burger", price: 89, image: "https://images.unsplash.com/photo-1585238341710-4a85ff3199ba?w=400", description: "Classic veggie patty burger", veg: true },
        { id: 7, name: "Chicken Maharaja Mac", price: 239, image: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=400", description: "Premium double chicken burger", veg: false },
        { id: 8, name: "McChicken Burger", price: 119, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400", description: "Classic chicken burger", veg: false }
    ],
    sides: [
        { id: 9, name: "French Fries (Medium)", price: 99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", description: "Crispy golden fries", veg: true },
        { id: 10, name: "Piri Piri Fries", price: 109, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400", description: "Spicy seasoned fries", veg: true },
        { id: 11, name: "Chicken McNuggets (6 pc)", price: 149, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400", description: "Crispy chicken nuggets", veg: false },
        { id: 12, name: "Veg Pizza McPuff", price: 49, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", description: "Crispy puff pastry", veg: true },
        { id: 13, name: "Chicken Nuggets (9 pc)", price: 199, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400", description: "9 piece chicken nuggets", veg: false },
        { id: 14, name: "Corn & Cheese Nuggets", price: 119, image: "https://images.unsplash.com/photo-1619740455993-557c40b1ca88?w=400", description: "Veg nuggets with corn and cheese", veg: true }
    ],
    beverages: [
        { id: 15, name: "Coca Cola (Medium)", price: 89, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400", description: "Refreshing Coke", veg: true },
        { id: 16, name: "Fanta (Medium)", price: 89, image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400", description: "Orange flavored drink", veg: true },
        { id: 17, name: "Sprite (Medium)", price: 89, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400", description: "Lemon lime drink", veg: true },
        { id: 18, name: "McCafe Cappuccino", price: 129, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400", description: "Premium coffee", veg: true },
        { id: 19, name: "McCafe Latte", price: 149, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400", description: "Smooth latte", veg: true },
        { id: 20, name: "Mango Smoothie", price: 119, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400", description: "Fresh mango smoothie", veg: true }
    ],
    desserts: [
        { id: 21, name: "McFlurry Oreo (M)", price: 129, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400", description: "Ice cream with Oreo", veg: true },
        { id: 22, name: "Soft Serve (Small)", price: 39, image: "https://images.unsplash.com/photo-1597041244360-610744e65cdd?w=400", description: "Vanilla soft serve", veg: true },
        { id: 23, name: "Hot Fudge Sundae", price: 89, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400", description: "Ice cream with hot fudge", veg: true },
        { id: 24, name: "Strawberry Shake", price: 119, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400", description: "Creamy strawberry shake", veg: true },
        { id: 25, name: "Chocolate Shake", price: 119, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", description: "Rich chocolate shake", veg: true },
        { id: 26, name: "Apple Pie", price: 59, image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400", description: "Warm apple pie", veg: true }
    ],
    combos: [
        { id: 27, name: "McSaver Combo", price: 149, image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400", description: "Burger + Fries + Drink", veg: true },
        { id: 28, name: "McChicken Meal", price: 219, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400", description: "Chicken burger meal", veg: false },
        { id: 29, name: "Happy Meal", price: 189, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400", description: "Kids meal with toy", veg: true },
        { id: 30, name: "Maharaja Meal", price: 329, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", description: "Premium burger meal", veg: false }
    ]
};

let currentCategory = 'burgers';
let cart = [];

function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const items = fullMenuData[category];
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.veg !== undefined ? `
                <div class="veg-indicator">
                    <div class="veg-box" style="border-color: ${item.veg ? '#228B22' : '#8B0000'}">
                        <div class="veg-dot" style="background: ${item.veg ? '#228B22' : '#8B0000'}"></div>
                    </div>
                </div>
                ` : ''}
            </div>
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-card-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="add-btn" onclick="addToCart(${item.id}, '${item.name}')">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterMenu(category) {
    currentCategory = category;
    renderMenu(category);
    
    // Update active tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

function addToCart(itemId, itemName) {
    cart.push(itemId);
    updateCart();
    alert(`${itemName} added to cart!`);
}

function updateCart() {
    const cartFloat = document.getElementById('cartFloat');
    const cartCount = document.getElementById('cartCount');
    
    if (cart.length > 0) {
        cartFloat.style.display = 'flex';
        cartCount.textContent = cart.length;
    } else {
        cartFloat.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('burgers');
});
