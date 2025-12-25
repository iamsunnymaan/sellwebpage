// --- PRODUCT DATABASE ---
const products = [
    { id: 1, name: "Obsidian Void", price: 3200, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "sculptures", collection: "stone-sculptures-art", material: "basalt" },
    { id: 2, name: "Alabaster Flow", price: 1500, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 3, name: "Basalt Core", price: 2800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "basalt", material: "basalt" },
    { id: 4, name: "Marble Silence", price: 4100, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "wall-murals", material: "marble" },
    { id: 5, name: "Temple Guardian", price: 3800, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "temple", collection: "temple-carvings", material: "sandstone" },
    { id: 6, name: "Fountain Elegance", price: 4500, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "sculptures", collection: "fountains", material: "marble" },
    { id: 7, name: "Limestone Tiles", price: 1800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 8, name: "Sandstone Classic", price: 2200, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" }
];

// --- MAGNETIC SLIDING NAVIGATION ---
function initMagneticNav() {
    const magneticBg = document.getElementById('nav-magnetic-bg');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-item > .nav-link');
    
    if (!magneticBg || navItems.length === 0) return;

    let activeItem = null;

    function updateBackgroundPosition(item) {
        if (!item) {
            magneticBg.classList.remove('active');
            // Remove has-bg from all items when hiding background
            navItems.forEach(navItem => navItem.classList.remove('has-bg'));
            return;
        }

        const link = item.querySelector('.nav-link');
        if (!link) return;

        const rect = link.getBoundingClientRect();
        const navBoxRect = magneticBg.parentElement.getBoundingClientRect();

        const left = rect.left - navBoxRect.left;
        const top = rect.top - navBoxRect.top;
        const width = rect.width;
        const height = rect.height;

        magneticBg.style.left = `${left}px`;
        magneticBg.style.top = `${top}px`;
        magneticBg.style.width = `${width}px`;
        magneticBg.style.height = `${height}px`;
        magneticBg.classList.add('active');
        
        // CRITICAL: Remove has-bg from ALL items first, then add only to current
        navItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    // Hover effect
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(item);
            }
        });
    });

    // Mouse leave - return to active or hide
    const navBox = document.getElementById('nav-box');
    if (navBox) {
        navBox.addEventListener('mouseleave', () => {
            if (window.innerWidth > 900) {
                if (activeItem) {
                    updateBackgroundPosition(activeItem);
                } else {
                    magneticBg.classList.remove('active');
                    navItems.forEach(navItem => navItem.classList.remove('has-bg'));
                }
            }
        });
    }

    // Click to set active state
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            // Remove active from all items
            navItems.forEach(item => item.classList.remove('active'));
            
            // Set current as active
            const parentItem = navItems[index];
            parentItem.classList.add('active');
            activeItem = parentItem;
            
            if (window.innerWidth > 900) {
                updateBackgroundPosition(activeItem);
            }
        });
    });

    // Set Home as default active
    if (navItems[0]) {
        navItems[0].classList.add('active');
        activeItem = navItems[0];
        setTimeout(() => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(activeItem);
            }
        }, 100);
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        if (activeItem && window.innerWidth > 900) {
            updateBackgroundPosition(activeItem);
        } else if (window.innerWidth <= 900) {
            magneticBg.classList.remove('active');
            navItems.forEach(navItem => navItem.classList.remove('has-bg'));
        }
    });
}

const categoryData = {
    'mines': {
        title: "Our Private Mines",
        desc: "We source our raw stone directly from premium quarries, ensuring the highest grade of natural marble and sandstone from the very start.",
        img: "img/grungy-gray-marble-textured-background.jpg"
    },
    'manufacturing-units': {
        title: "State-of-the-Art Facilities",
        desc: "Our manufacturing units utilize precision Italian machinery to cut and polish stone to international luxury standards.",
        img: "img/2046556.jpg"
    },
    'quality-control': {
        title: "Rigorous Inspection",
        desc: "Every slab undergoes a 12-point quality check to ensure color consistency, structural integrity, and a flawless finish.",
        img: "img/pastel-purple-marble-background-with-gold-lining.jpg"
    },
    'packaging-unit': {
        title: "Secure Global Shipping",
        desc: "Custom wooden crating and reinforced padding ensure that every masterpiece arrives at your doorstep in perfect condition.",
        img: "img/2046556.jpg"
    }
};

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Initialize Magnetic Sliding Navigation Background
    initMagneticNav();
    
    // Initialize Horizontal Nav Magnetic Effect
    initHorizontalMagneticNav();

    // Initialize mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navBox = document.getElementById('nav-box');
    
    if (mobileMenuToggle && navBox) {
        mobileMenuToggle.addEventListener('click', () => {
            navBox.classList.toggle('active');
            const isActive = navBox.classList.contains('active');
            mobileMenuToggle.textContent = isActive ? '✕' : '☰';
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navBox.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navBox.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a nav link
        const navLinks = navBox.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navBox.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
    
    // Initialize filter dropdown toggles
    const filterDropdownHeaders = document.querySelectorAll('.filter-dropdown-header');
    filterDropdownHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            // Don't toggle if clicking on checkbox
            if (e.target.type === 'checkbox') return;
            
            const dropdownId = header.getAttribute('data-toggle');
            const dropdownContent = document.getElementById(dropdownId);
            
            // Toggle current dropdown
            header.classList.toggle('open');
            dropdownContent.classList.toggle('open');
        });
    });
    
    // Parent checkbox logic - check/uncheck all children
    const parentCheckboxes = document.querySelectorAll('.parent-checkbox');
    parentCheckboxes.forEach(parentCheckbox => {
        parentCheckbox.addEventListener('change', function() {
            const categoryValue = this.value;
            const childCheckboxes = document.querySelectorAll(`input[data-parent="${categoryValue}"]`);
            
            childCheckboxes.forEach(child => {
                child.checked = this.checked;
            });
        });
    });
    
    // Child checkbox logic - update parent if all children are checked/unchecked
    const collectionCheckboxes = document.querySelectorAll('input[name="collection"]');
    collectionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentValue = this.getAttribute('data-parent');
            const parentCheckbox = document.querySelector(`.parent-checkbox[value="${parentValue}"]`);
            const siblings = document.querySelectorAll(`input[data-parent="${parentValue}"]`);
            
            const allChecked = Array.from(siblings).every(cb => cb.checked);
            const anyChecked = Array.from(siblings).some(cb => cb.checked);
            
            if (parentCheckbox) {
                parentCheckbox.checked = allChecked;
                parentCheckbox.indeterminate = anyChecked && !allChecked;
            }
        });
    });
    
    // Apply Filters functionality
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            clearAllFilters();
        });
    }

    // initialize horizontal nav after DOM ready
    if (typeof initHorizontalNav === 'function') initHorizontalNav();
    
    // Logo click - go to hero/home section
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Home link - go to hero/home section
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Gallery link - open all collection section
    const galleryLink = document.getElementById('gallery-link');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Reset to show all products
            renderProducts();
            
            // Remove active class from all nav items in horizontal nav
            document.querySelectorAll('.h-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    // Add event listener for All Collection button
    const allCollectionBtn = document.getElementById('all-collection-btn');
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', () => {
            // Reset to show all products
            renderProducts();
            
            // Remove active class from all nav items
            document.querySelectorAll('.h-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Close any open submenus
            document.querySelectorAll('.h-nav-item.open').forEach(item => {
                item.classList.remove('open', 'on-top');
            });
            document.querySelectorAll('.h-nav-btn').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});

// --- HORIZONTAL NAV MAGNETIC SLIDING EFFECT ---
function initHorizontalMagneticNav() {
    const hMagneticBg = document.getElementById('h-nav-magnetic-bg');
    const hNavItems = document.querySelectorAll('.h-nav-item');
    const hNavBtns = document.querySelectorAll('.h-nav-btn');
    
    if (!hMagneticBg || hNavItems.length === 0) return;

    let activeHItem = null;

    function updateHorizontalBgPosition(item) {
        if (!item) {
            hMagneticBg.classList.remove('active');
            // Remove has-bg from all items when hiding background
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
            return;
        }

        const btn = item.querySelector('.h-nav-btn');
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const navRect = hMagneticBg.parentElement.getBoundingClientRect();

        const left = rect.left - navRect.left;
        const top = rect.top - navRect.top;
        const width = rect.width;
        const height = rect.height;

        hMagneticBg.style.left = `${left}px`;
        hMagneticBg.style.top = `${top}px`;
        hMagneticBg.style.width = `${width}px`;
        hMagneticBg.style.height = `${height}px`;
        hMagneticBg.classList.add('active');
        
        // CRITICAL: Remove has-bg from ALL items first, then add only to current
        hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    // Hover effect
    hNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateHorizontalBgPosition(item);
            }
        });
    });

    // Mouse leave - return to active or hide
    const horizontalNav = document.querySelector('.horizontal-nav');
    if (horizontalNav) {
        horizontalNav.addEventListener('mouseleave', () => {
            if (window.innerWidth > 900) {
                if (activeHItem) {
                    updateHorizontalBgPosition(activeHItem);
                } else {
                    hMagneticBg.classList.remove('active');
                    hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
                }
            }
        });
    }

    // Click to set active state
    hNavBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active from all items
            hNavItems.forEach(item => item.classList.remove('active'));
            
            // Set current as active
            const parentItem = hNavItems[index];
            parentItem.classList.add('active');
            activeHItem = parentItem;
            
            if (window.innerWidth > 900) {
                updateHorizontalBgPosition(activeHItem);
            }
        });
    });

    // All Collection button removes active state
    const allCollectionBtn = document.getElementById('all-collection-btn');
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', () => {
            hNavItems.forEach(item => item.classList.remove('active'));
            activeHItem = null;
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        });
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        if (activeHItem && window.innerWidth > 900) {
            updateHorizontalBgPosition(activeHItem);
        } else if (window.innerWidth <= 900) {
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        }
    });
}

// --- Horizontal nav product categories (used by the center long bar) ---


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
            
            // Add active class to clicked item, remove from siblings
            Array.from(li.parentElement.children).forEach(sib => {
                sib.classList.remove('active');
            });
            li.classList.add('active');

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
    const galleryHeader = document.getElementById('gallery-header');
    const categoryNameEl = document.getElementById('category-name');
    const arrowSep = document.getElementById('arrow-separator');
    
    if (!cat || !container) return;

    // Update gallery header background image
    if (galleryHeader && cat.img) {
        galleryHeader.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${cat.img}')`;
    }

    // Update breadcrumb navigation
    if (selectedItem) {
        categoryNameEl.textContent = selectedItem;
        arrowSep.style.display = 'inline';
    } else {
        categoryNameEl.textContent = cat.title;
        arrowSep.style.display = 'inline';
    }

    // Build an array of item objects to render as cards; if selectedItem provided, show only that
    const items = selectedItem ? [selectedItem] : cat.items;

    // Clear existing gallery
    container.innerHTML = '';

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
function renderProducts(filteredProducts = null) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear existing products
    
    const productsToRender = filteredProducts || products;
    
    if (productsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #666; grid-column: 1/-1;">No products found matching your filters.</p>';
        return;
    }
    
    productsToRender.forEach(p => {
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
    alert(`${name} - $${price.toLocaleString()}\n\nClick "Enquire" to get more details about this product.`);
}

// --- VERTICAL NAV LOGIC ---
// --- VERTICAL SHOWROOM AUTO-CYCLE ---
const categories = ['mines', 'manufacturing-units', 'quality-control', 'packaging-unit'];
let currentCategoryIndex = 0;
let categoryAutoplayInterval;

function showCategory(cat, element) {
    // 1. Handle Active Tab Styling
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        // Find and activate the element by category name
        const items = document.querySelectorAll('.v-nav-item');
        items.forEach((item, index) => {
            if (categories[index] === cat) {
                item.classList.add('active');
            }
        });
    }

    const data = categoryData[cat];
    if (!data) return;

    // 2. Update the Center Image with smooth fade and scale transition
    const mediaContainer = document.getElementById('category-media');
    const currentImg = mediaContainer.querySelector('.btw-image');
    
    // Fade out and scale down current image
    if (currentImg) {
        currentImg.style.opacity = '0';
        currentImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
            // Fade in and scale to normal
            setTimeout(() => {
                const newImg = mediaContainer.querySelector('.btw-image');
                if (newImg) {
                    newImg.style.opacity = '1';
                    newImg.style.transform = 'scale(1)';
                }
            }, 50);
        }, 500);
    } else {
        // First load
        mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
        setTimeout(() => {
            const newImg = mediaContainer.querySelector('.btw-image');
            if (newImg) {
                newImg.style.opacity = '1';
                newImg.style.transform = 'scale(1)';
            }
        }, 50);
    }

    // 3. Update the Right Section Content with smooth fade and slide
    const display = document.getElementById('category-display');
    display.style.opacity = '0';
    display.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        display.innerHTML = `
            <div class="category-details">
                <h3 class="v-nav-list" style="border:none; color:#111; font-size: 1.6rem; font-weight: 600;">${data.title}</h3>
                <p class="muted">${data.desc}</p>
                <button class="connect-btn explore-btn">Explore Categories</button>
            </div>
        `;
        setTimeout(() => {
            display.style.opacity = '1';
            display.style.transform = 'translateX(0)';
        }, 50);
    }, 500);
    
    // Update currentCategoryIndex
    currentCategoryIndex = categories.indexOf(cat);
    
    // Reset autoplay timer
    clearInterval(categoryAutoplayInterval);
    startCategoryAutoplay();
}

function nextCategory() {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    showCategory(categories[currentCategoryIndex]);
}

function startCategoryAutoplay() {
    categoryAutoplayInterval = setInterval(() => {
        nextCategory();
    }, 5000); // Change category every 5 seconds
}

// Initialize autoplay and display first category on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show initial category (mines) with image
    showCategory('mines');
    // Start autoplay
    startCategoryAutoplay();
});

// --- HERO SLIDER WITH LUXURY BLACKOUT FADE ---
const slides = document.querySelectorAll('.slide');
const bulletNav = document.getElementById('bullet-nav');
let currentSlide = 0;
let sliderInterval;

// Create bullet points
function initBullets() {
    slides.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.classList.add('bullet');
        if (index === 0) bullet.classList.add('active');
        bullet.setAttribute('aria-label', `Go to slide ${index + 1}`);
        bullet.onclick = () => goToSlide(index);
        bulletNav.appendChild(bullet);
    });
}

function updateBullets() {
    document.querySelectorAll('.bullet').forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(step) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateBullets();
    resetSliderInterval();
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    updateBullets();
    resetSliderInterval();
}

function resetSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => moveSlide(1), 6000);
}

// Initialize bullets on startup
document.addEventListener('DOMContentLoaded', () => {
    initBullets();
    resetSliderInterval();
    document.getElementById('next-btn').onclick = () => moveSlide(1);
    document.getElementById('prev-btn').onclick = () => moveSlide(-1);
});

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

// --- FILTER FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.onclick = () => {
            const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
            const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
            const selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value);
            
            console.log('Filters applied:', { selectedCategories, selectedPrice, selectedMaterials });
            alert(`Filters Applied:\n\nCategories: ${selectedCategories.join(', ') || 'All'}\nPrice: ${selectedPrice}\nMaterials: ${selectedMaterials.join(', ') || 'All'}`);
        };
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.onclick = () => {
            document.querySelectorAll('input[name="category"]').forEach(el => el.checked = false);
            document.querySelectorAll('input[name="material"]').forEach(el => el.checked = false);
            document.querySelector('input[name="price"][value="all"]').checked = true;
            console.log('Filters cleared');
        };
    }
});
