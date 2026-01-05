// Store all products globally
let allProductsData = [];
let currentFilter = 'all';

// Load and display all products
async function loadAllProducts() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        allProductsData = data.products;
        
        displayProducts(allProductsData);
    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('products-grid').innerHTML = 
            '<p class="loading">Error loading products. Please try again later.</p>';
    }
}

function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    
    if (products && products.length > 0) {
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-card-img">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-card-info">
                    <h3>${product.name}</h3>
                    <div class="price">$${product.price.toLocaleString()}</div>
                    <div class="category">${formatCategory(product.category)}</div>
                    <div class="product-card-actions">
                        <button class="product-btn enquire-btn" onclick="event.stopPropagation(); openContactModal()">Enquire</button>
                        <button class="product-btn view-btn" onclick="window.location.href='product-details.html?id=${product.id}'">View Product</button>
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    } else {
        productsGrid.innerHTML = '<p class="loading">No products found in this category.</p>';
    }
}

function filterProducts(category) {
    currentFilter = category;
    
    if (category === 'all') {
        displayProducts(allProductsData);
    } else {
        const filtered = allProductsData.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

function formatCategory(category) {
    return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Filter button functionality
document.addEventListener('DOMContentLoaded', () => {
    loadAllProducts();

    // Add click handlers to filter buttons
    const filterButtons = document.querySelectorAll('.filter-nav-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter products
            const filter = button.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navBox = document.getElementById('nav-box');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navBox.classList.toggle('active');
            mobileMenuToggle.textContent = navBox.classList.contains('active') ? '✕' : '☰';
        });
    }
});

// Contact Modal Functions
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closeContactModal');
    const overlay = document.querySelector('.contact-modal-overlay');
    const visitShowroom = document.getElementById('visitShowroom');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeContactModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeContactModal);
    }

    if (visitShowroom) {
        visitShowroom.addEventListener('click', closeContactModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeContactModal();
        }
    });
});
