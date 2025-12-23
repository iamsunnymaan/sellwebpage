// --- PRODUCT DATABASE ---
const products = [
    { id: 1, name: "Obsidian Void", price: 3200, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800" },
    { id: 2, name: "Alabaster Flow", price: 1500, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800" },
    { id: 3, name: "Basalt Core", price: 2800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800" },
    { id: 4, name: "Marble Silence", price: 4100, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800" }
];

const categoryData = {
    sculptures: {
        title: "Masterpiece Sculptures",
        desc: "Hand-carved centerpieces that capture the soul of Indian natural stone.",
        img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1000"
    },
    flooring: {
        title: "Bespoke Flooring",
        desc: "Seamless luxury flooring designed with premium marble and granite.",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000"
    },
    murals: {
        title: "Artistic Wall Murals",
        desc: "Exquisite stone carvings that transform walls into storytelling canvases.",
        img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1000"
    },
    fountains: {
        title: "Architectural Fountains",
        desc: "Elegant water features custom-crafted for grand landscapes.",
        img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=1000"
    },

    /* Infrastructure sections used by the left vertical nav */
    "mines": {
        title: "Mines",
        desc: "Sustainably sourced quarries where high-quality natural stone is extracted and assessed.",
        img: "img/2046556.jpg"
    },
    "manufacturing-units": {
        title: "Manufacturing Units",
        desc: "State-of-the-art fabrication units where stone blocks are cut, finished, and polished.",
        img: "img/grungy-gray-marble-textured-background.jpg"
    },
    "quality-control": {
        title: "Quality Control",
        desc: "Rigorous inspection and testing ensure each product meets our premium standards.",
        img: "https://images.unsplash.com/photo-1542736667-069246bdbc9d?w=1000"
    },
    "packaging-unit": {
        title: "Packaging Unit",
        desc: "Protective, eco-conscious packaging processes that keep products safe during transport.",
        img: "img/pastel-purple-marble-background-with-gold-lining.jpg"
    }
};

let cart = [];

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    // show first infrastructure section by default (first .v-nav-item)
    showCategory('mines', document.querySelector('.v-nav-item'));

    // initialize horizontal nav after DOM ready
    if (typeof initHorizontalNav === 'function') initHorizontalNav();
});

// --- Horizontal nav product categories (used by the center long bar) ---

// Updated: showCategory now updates the middle visual panel and the right-side details
function showCategory(cat, element) {
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');

    const data = categoryData[cat];
    if (!data) return;

    // Middle image panel
    const media = document.getElementById('category-media');
    if (media) {
        media.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}">`;
    }

    // Right details panel
    const display = document.getElementById('category-display');
    if (display) {
        display.innerHTML = `
            <div class="category-details">
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
                <button class="connect-btn explore-btn">Explore Categories</button>
            </div>
        `;

        const btn = display.querySelector('.explore-btn');
        if (btn) btn.onclick = () => {
            const target = document.querySelector('.unified-gallery-wrapper');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        };
    }
}
const productCategories = {
    'le-luxe': {
        title: 'Le Luxe',
        desc: 'Premium outdoor & hardscape solutions — pergolas, basins, murals, and curated hardscape.',
        img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200',
        items: [ 'Gajebo / Pergola', 'Stone Basin', 'Wall Murals', 'Stone Sculptures', 'Stone Fountains', 'Counter Top', 'Inlay' ]
    },
    'surface': {
        title: 'Surface',
        desc: 'Sandstone, Limestone, Salestone, Basalt and Porcelain tile collections.',
        img: 'https://images.unsplash.com/photo-1548095115-45697e7a3e6b?w=1200',
        items: [ 'Sandstone Tiles', 'Limestone Tiles', 'Salestone Tiles', 'Basalt', 'Porcelain Tiles' ]
    },
    'temple': {
        title: 'Temple',
        desc: 'Traditional and custom temple elements and carvings.',
        img: 'https://images.unsplash.com/photo-1582719478171-ff6b80a7b1f7?w=1200',
        items: [ 'Temple Carvings', 'Pillars & Torans' ]
    },
    'sculptures': {
        title: 'Sculptures',
        desc: 'Hand-carved centerpieces that define a space.',
        img: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=1200',
        items: [ 'Stone Sculptures', 'Fountains' ]
    }
};

function initHorizontalNav() {
    const nav = document.querySelector('.horizontal-nav');
    if (!nav) return;

    // Close sibling menus on hover, force-hide their submenus, and bring current submenu to top
    nav.querySelectorAll('.h-nav-item').forEach(li => {
        li.addEventListener('mouseenter', () => {
            Array.from(li.parentElement.children).forEach(sib => {
                if (sib !== li) {
                    sib.classList.remove('open', 'on-top');
                    const sibBtn = sib.querySelector('.h-nav-btn');
                    if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
                    // Force-hide sibling submenu immediately (overrides :hover)
                    const sibSub = sib.querySelector('.h-submenu');
                    if (sibSub) {
                        sibSub.style.opacity = '0';
                        sibSub.style.visibility = 'hidden';
                        sibSub.style.pointerEvents = 'none';
                    }
                }
            });
            // Add on-top so the submenu appears above any siblings
            li.classList.add('on-top');
            // Ensure current submenu inline styles are cleared so it can show normally
            const curSub = li.querySelector('.h-submenu');
            if (curSub) {
                curSub.style.opacity = '';
                curSub.style.visibility = '';
                curSub.style.pointerEvents = '';
            }
        });
        li.addEventListener('mouseleave', () => {
            // Remove on-top when leaving unless it's explicitly open (user clicked it)
            if (!li.classList.contains('open')) li.classList.remove('on-top');
        });
    });

    // Remove any forced inline hiding when the mouse leaves the whole nav area
    nav.addEventListener('mouseleave', () => {
        nav.querySelectorAll('.h-submenu').forEach(s => {
            s.style.opacity = '';
            s.style.visibility = '';
            s.style.pointerEvents = '';
        });
    });

    // Toggle on button click (helpful for touch) and also render category gallery
    nav.querySelectorAll('.h-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const li = btn.closest('.h-nav-item');
            const cat = li.dataset.cat;

            // Render gallery for this category
            renderCategoryGallery(cat);

            const isOpen = li.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            // ensure correct stacking
            if (isOpen) li.classList.add('on-top'); else li.classList.remove('on-top');

            // close siblings and remove their on-top
            Array.from(li.parentElement.children).forEach(sib => {
                if (sib !== li) {
                    sib.classList.remove('open', 'on-top');
                    const sibBtn = sib.querySelector('.h-nav-btn');
                    if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });

    // Subitem clicks render right-side details and gallery filtered to the item
    nav.querySelectorAll('.h-submenu a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = a.dataset.cat;
            const item = a.dataset.item;
            // Render details and gallery
            if (typeof showProductCategory === 'function') showProductCategory(cat, item);
            renderCategoryGallery(cat, item);

            // Close any open submenu on click (mobile expectation)
            Array.from(nav.querySelectorAll('.h-nav-item.open')).forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        });
    });

    // close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.horizontal-nav-container')) {
            nav.querySelectorAll('.h-nav-item.open').forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            nav.querySelectorAll('.h-nav-item.open').forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });
}

// --- Render gallery for given category or item ---
function renderCategoryGallery(catId, selectedItem) {
    const cat = productCategories[catId];
    const container = document.getElementById('product-container');
    if (!cat || !container) return;

    // Build an array of item objects to render as cards; if selectedItem provided, show only that
    const items = selectedItem ? [selectedItem] : cat.items;

    // Clear existing gallery
    container.innerHTML = '';

    // Render heading above gallery to show current category
    const heading = document.querySelector('#gallery .section-title');
    if (heading) heading.textContent = cat.title;

    // Populate gallery with cards for each item
    items.forEach(name => {
        const imgUrl = `https://source.unsplash.com/600x400/?${encodeURIComponent(name)}`;
        const price = Math.floor(500 + Math.random() * 5000);
        container.innerHTML += `
            <div class="card">
                <img src="${imgUrl}" alt="${name}">
                <h3 style="margin-top:20px">${name}</h3>
                <p style="color: #888; margin: 10px 0">$${price.toLocaleString()}</p>
                <div style="display:flex; gap:10px; margin-top:12px">
                    <button class="connect-btn" style="flex:1" onclick="enquireProduct('${encodeURIComponent(name)}')">Enquire</button>
                    <button class="connect-btn" style="flex:1" onclick="viewProduct('${encodeURIComponent(name)}', ${price})">View Product</button>
                </div>
            </div>
        `;
    });

    // Scroll to gallery for visibility on mobile
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}



// --- RENDER SHOP ---
function renderProducts() {
    const container = document.getElementById('product-container');
    products.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3 style="margin-top:20px">${p.name}</h3>
                <p style="color: #888; margin: 10px 0">$${p.price.toLocaleString()}</p>
                <div style="display:flex; gap:10px; margin-top:12px">
                    <button class="connect-btn" style="flex:1" onclick="enquireProduct('${encodeURIComponent(p.name)}')">Enquire</button>
                    <button class="connect-btn" style="flex:1" onclick="viewProduct('${encodeURIComponent(p.name)}', ${p.price})">View Product</button>
                </div>
            </div>`;
    });
}

// --- PRODUCT INTERACTIONS ---
function enquireProduct(encodedName) {
    const name = decodeURIComponent(encodedName);
    alert(`Enquiry submitted for ${name}. Our team will contact you shortly.`);
}

function viewProduct(encodedName, price) {
    const name = decodeURIComponent(encodedName);
    const imgUrl = `https://source.unsplash.com/900x600/?${encodeURIComponent(name)}`;
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    modal.querySelector('.modal-image').src = imgUrl;
    modal.querySelector('.modal-image').alt = name;
    modal.querySelector('.modal-title').textContent = name;
    modal.querySelector('.modal-price').textContent = `$${price.toLocaleString()}`;

    // set modal action buttons
    const enquireBtn = document.getElementById('modal-enquire-btn');
    const addCartBtn = document.getElementById('modal-addcart-btn');
    enquireBtn.onclick = () => enquireProduct(encodeURIComponent(name));
    addCartBtn.onclick = () => { alert(`${name} added to your collection.`); };

    modal.style.display = 'block';
}

// close product modal
document.addEventListener('DOMContentLoaded', () => {
    const pModal = document.getElementById('product-modal');
    if (!pModal) return;
    document.getElementById('product-modal-close').onclick = () => pModal.style.display = 'none';
    window.addEventListener('click', (e) => { if (e.target == pModal) pModal.style.display = 'none'; });
});

// --- VERTICAL NAV LOGIC ---
function showCategory(cat, element) {
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const display = document.getElementById('category-display');
    const data = categoryData[cat];
    
    display.innerHTML = `
        <div class="category-content">
            <img src="${data.img}" class="category-image" alt="${data.title}">
            <div class="category-info">
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
                <button class="connect-btn">Explore Category</button>
            </div>
        </div>
    `;
}

// --- HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function moveSlide(step) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(() => moveSlide(1), 6000);
document.getElementById('next-btn').onclick = () => moveSlide(1);
document.getElementById('prev-btn').onclick = () => moveSlide(-1);

// --- CART LOGIC ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${product.name} added to your selection.`);
}

const modal = document.getElementById("cart-modal");
document.getElementById("cart-btn").onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    renderCart();
};
function renderCart() {
    const itemsDiv = document.getElementById('cart-items');
    itemsDiv.innerHTML = cart.map(item => `<div style="padding:10px 0; border-bottom:1px solid #eee">${item.name} - $${item.price.toLocaleString()}</div>`).join('');
    document.getElementById('cart-total').innerText = cart.reduce((s, i) => s + i.price, 0).toLocaleString();
}
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

// --- DROPDOWN TOUCH/CLICK SUPPORT & ACCESSIBILITY ---
(function() {
    const nav = document.querySelector('.nav-box');
    if (!nav) return;

    // Add ARIA attributes to items with submenus
    nav.querySelectorAll('li').forEach(li => {
        const link = li.querySelector(':scope > a');
        if (link && li.querySelector('ul')) {
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle clicks: toggle submenu for items that contain a submenu
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.nav-box a');
        if (!toggle) {
            // Click outside nav: close any open menus
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
            return;
        }

        const parentLi = toggle.parentElement;
        if (!parentLi) return;

        // If this item contains a submenu, toggle it instead of following the link
        if (parentLi.querySelector('ul')) {
            e.preventDefault();
            const opened = parentLi.classList.toggle('open');
            toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');

            // Close sibling menus
            Array.from(parentLi.parentElement.children).forEach(sib => {
                if (sib !== parentLi) sib.classList.remove('open');
            });
        } else {
            // clicking a normal nav link: close menus
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
        }
    });

    // Close menus with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
    });
})();

