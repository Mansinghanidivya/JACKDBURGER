// Mock Data
const menuData = {
    burgers: [
        { id: 1, name: "Jack Tikki Burger", price: 138, image: "uploads/WhatsApp Image 2025-11-19 at 21.55.47.jpeg", description: "India's Healthiest Jackfruit patty burger", veg: true },
        { id: 2, name: "Plantin Tikki Burger", price: 78, image: "uploads/WhatsApp Image 2025-11-19 at 21.55.47 (1).jpeg", description: "Spicy Plantin Patty burger", veg: true },
        { id: 3, name: " Sweet Potato Fries", price: 64, image: "uploads/WhatsApp Image 2025-11-19 at 21.14.47.jpeg", description: "Blessed Fittest Sweet Potato Firez", veg: true },
        { id: 4, name: " Plantin Fries", price: 62, image: "uploads/Untitled design (3).png", description: "Tasty with Vibe Friezz", veg: true }
    ]
};

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    
    slides[currentSlide].classList.add('active');
    updateDots();
}

function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function currentSlideIndex(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Create dots
function createDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => currentSlideIndex(i);
            dotsContainer.appendChild(dot);
        }
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto slide
function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

let slideInterval = setInterval(autoSlide, 5000);

// Reset interval on manual navigation
document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 5000);
    });
});

// Load featured items
function loadFeaturedItems() {
    const container = document.getElementById('featuredItems');
    if (!container) return;
    
    const featured = menuData.burgers.slice(0, 4);
    
    container.innerHTML = featured.map(item => `
        <div class="menu-card">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.veg ? `
                <div class="veg-indicator">
                    <div class="veg-box">
                        <div class="veg-dot"></div>
                    </div>
                </div>
                ` : ''}
            </div>
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-card-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="add-btn" onclick="addToCart('${item.name}')">Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart function
function addToCart(itemName) {
    alert(`${itemName} added to cart!`);
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createDots();
    loadFeaturedItems();
});
