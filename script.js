// --- PRODUCT DATABASE ---
// Products are now loaded directly from products.js - no server required!
let products = [];

// Initialize products from the global productsData
function loadProducts() {
    try {
        if (typeof productsData !== 'undefined' && productsData.products) {
            products = productsData.products;
            console.log('Products loaded successfully:', products.length);
            return products;
        } else {
            console.error('productsData not found. Make sure products.js is loaded before script.js');
            return [];
        }
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

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
        
        navItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(item);
            }
        });
    });

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

    if (navItems[0]) {
        navItems[0].classList.add('active');
        activeItem = navItems[0];
        setTimeout(() => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(activeItem);
            }
        }, 100);
    }

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
        img: "img/pastel-purple-marble-background-with-gold-lining.jpg"
    },
    'manufacturing-units': {
        title: "State-of-the-Art Facilities",
        desc: "Our manufacturing units utilize precision Italian machinery to cut and polish stone to international luxury standards.",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200"
    },
    'quality-control': {
        title: "Rigorous Inspection",
        desc: "Every slab undergoes a 12-point quality check to ensure color consistency, structural integrity, and a flawless finish.",
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200"
    },
    'packaging-unit': {
        title: "Secure Global Shipping",
        desc: "Custom wooden crating and reinforced padding ensure that every masterpiece arrives at your doorstep in perfect condition.",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200"
    }
};

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    renderProducts();
    initInfiniteCarousel();
    initGalleryFilters();
    
    const categoryNameEl = document.getElementById('category-name');
    const arrowSep = document.getElementById('arrow-separator');
    if (categoryNameEl) categoryNameEl.textContent = '';
    if (arrowSep) arrowSep.style.display = 'none';

    initMagneticNav();
    initHorizontalMagneticNav();

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navBox = document.getElementById('nav-box');
    
    if (mobileMenuToggle && navBox) {
        mobileMenuToggle.addEventListener('click', () => {
            navBox.classList.toggle('active');
            const isActive = navBox.classList.contains('active');
            mobileMenuToggle.textContent = isActive ? '✕' : '☰';
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
        });

        document.addEventListener('click', (e) => {
            if (!navBox.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navBox.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });

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
    
    const filterDropdownHeaders = document.querySelectorAll('.filter-dropdown-header');
    filterDropdownHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') return;
            
            const dropdownId = header.getAttribute('data-toggle');
            const dropdownContent = document.getElementById(dropdownId);
            
            header.classList.toggle('open');
            dropdownContent.classList.toggle('open');
        });
    });
    
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

    if (typeof initHorizontalNav === 'function') initHorizontalNav();
    
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const galleryLink = document.getElementById('gallery-link');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            renderProducts();
            
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            const galleryBackBtn = document.getElementById('gallery-back-btn');
            if (categoryNameEl) categoryNameEl.textContent = '';
            if (arrowSep) arrowSep.style.display = 'none';
            if (galleryBackBtn) galleryBackBtn.style.display = 'none';
            
            document.querySelectorAll('.h-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    const allCollectionBtn = document.getElementById('all-collection-btn');
    const galleryBackBtn = document.getElementById('gallery-back-btn');
    
    const resetToAllCollections = () => {
        renderProducts();
        
        const categoryNameEl = document.getElementById('category-name');
        const arrowSep = document.getElementById('arrow-separator');
        if (categoryNameEl) categoryNameEl.textContent = '';
        if (arrowSep) arrowSep.style.display = 'none';
        
        if (galleryBackBtn) galleryBackBtn.style.display = 'none';
        
        document.querySelectorAll('.h-nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
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
    };
    
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', resetToAllCollections);
    }
    
    if (galleryBackBtn) {
        galleryBackBtn.addEventListener('click', resetToAllCollections);
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
        
        hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    hNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateHorizontalBgPosition(item);
            }
        });
    });
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

    const allCollectionBtn = document.getElementById('all-collection-btn');
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', () => {
            hNavItems.forEach(item => item.classList.remove('active'));
            activeHItem = null;
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        });
    }

    window.addEventListener('resize', () => {
        if (activeHItem && window.innerWidth > 900) {
            updateHorizontalBgPosition(activeHItem);
        } else if (window.innerWidth <= 900) {
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        }
    });
}

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

            // Filter and render products for this category
            const filteredProducts = products.filter(p => p.category === cat);
            renderProducts(filteredProducts);
            
            // Update breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            const galleryBackBtn = document.getElementById('gallery-back-btn');
            if (categoryNameEl && arrowSep) {
                const categoryNames = {
                    'le-luxe': 'Le Luxe',
                    'surface': 'Surface',
                    'temple': 'Temple',
                    'sculptures': 'Sculptures'
                };
                categoryNameEl.textContent = categoryNames[cat] || cat;
                arrowSep.style.display = 'inline';
            }
            // Show back button
            if (galleryBackBtn) galleryBackBtn.style.display = 'flex';
            
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
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Subitem clicks render right-side details and gallery filtered to the item
    nav.querySelectorAll('.h-submenu a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = a.dataset.cat;
            const item = a.dataset.item;
            
            // Convert item name to collection value
            // "Gajebo / Pergola" -> "gajebo-pergola"
            // "Stone Basin" -> "stone-basin"
            const collectionValue = item.toLowerCase()
                .replace(/\s*\/\s*/g, '-')  // Replace " / " with "-"
                .replace(/\s+/g, '-')        // Replace spaces with "-"
                .replace(/&/g, '')           // Remove ampersands
                .replace(/-+/g, '-');        // Replace multiple dashes with single dash
            
            // Filter products by both category and collection
            const filteredProducts = products.filter(p => {
                return p.category === cat && p.collection === collectionValue;
            });
            
            renderProducts(filteredProducts);
            
            // Update breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            const galleryBackBtn = document.getElementById('gallery-back-btn');
            if (categoryNameEl && arrowSep) {
                categoryNameEl.textContent = item;
                arrowSep.style.display = 'inline';
            }
            // Show back button
            if (galleryBackBtn) galleryBackBtn.style.display = 'flex';

            // Close any open submenu on click (mobile expectation)
            Array.from(nav.querySelectorAll('.h-nav-item.open')).forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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
                    <button class="connect-btn" style="flex:1" onclick="viewProductDetails(${p.id})">View Product</button>
                </div>
            </div>`;
    });
}

// Navigate to product details page
function viewProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// --- FILTER FUNCTIONALITY ---
function initGalleryFilters() {
    const filterSidebar = document.getElementById('gallery-filter-sidebar');
    const resetBtn = document.getElementById('filter-reset-btn');
    const toggleBtn = document.getElementById('filter-toggle-btn');
    const checkboxes = filterSidebar.querySelectorAll('input[type="checkbox"]');
    
    // Handle category toggle buttons
    const categoryToggles = filterSidebar.querySelectorAll('.category-toggle');
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryGroup = toggle.closest('.filter-category-group');
            categoryGroup.classList.toggle('expanded');
        });
    });
    
    // Handle category checkbox - auto check/uncheck subcategories
    const categoryCheckboxes = filterSidebar.querySelectorAll('.category-checkbox');
    categoryCheckboxes.forEach(catCheckbox => {
        catCheckbox.addEventListener('change', (e) => {
            const categoryGroup = catCheckbox.closest('.filter-category-group');
            const subcategoryCheckboxes = categoryGroup.querySelectorAll('.subcategory input[type="checkbox"]');
            
            // If category is checked, expand the group and check all subcategories
            if (catCheckbox.checked) {
                categoryGroup.classList.add('expanded');
                subcategoryCheckboxes.forEach(subCb => {
                    subCb.checked = true;
                });
            } else {
                // If category is unchecked, uncheck all subcategories
                subcategoryCheckboxes.forEach(subCb => {
                    subCb.checked = false;
                });
            }
            
            applyFilters();
        });
    });
    
    // Handle subcategory checkbox - auto check parent category
    const subcategoryCheckboxes = filterSidebar.querySelectorAll('.subcategory input[type="checkbox"]');
    subcategoryCheckboxes.forEach(subCheckbox => {
        subCheckbox.addEventListener('change', () => {
            const categoryGroup = subCheckbox.closest('.filter-category-group');
            const categoryCheckbox = categoryGroup.querySelector('.category-checkbox');
            const anySubcategoryChecked = Array.from(categoryGroup.querySelectorAll('.subcategory input[type="checkbox"]')).some(cb => cb.checked);
            
            // Auto-check parent category if any subcategory is checked
            if (anySubcategoryChecked && !categoryCheckbox.checked) {
                categoryCheckbox.checked = true;
            }
            
            applyFilters();
        });
    });
    
    // Apply filters
    const applyFilters = () => {
        const selectedCategories = Array.from(filterSidebar.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
        const selectedSubcategories = Array.from(filterSidebar.querySelectorAll('input[name="subcategory"]:checked')).map(cb => cb.value);
        const selectedPrices = Array.from(filterSidebar.querySelectorAll('input[name="price"]:checked')).map(cb => cb.value);
        const selectedMaterials = Array.from(filterSidebar.querySelectorAll('input[name="material"]:checked')).map(cb => cb.value);
        
        let filtered = products;
        
        // Filter by category and subcategory
        if (selectedCategories.length > 0 || selectedSubcategories.length > 0) {
            filtered = filtered.filter(p => {
                // Map subcategory filter values to product collection values
                const subcategoryMap = {
                    'le-luxe-pergola': 'gajebo-pergola',
                    'le-luxe-basin': 'stone-basin',
                    'le-luxe-murals': 'wall-murals',
                    'le-luxe-hardscape': 'hardscape',
                    'le-luxe-inlay': 'inlay',
                    'surface-sandstone': 'sandstone-tiles',
                    'surface-limestone': 'limestone-tiles',
                    'surface-salestone': 'salestone-tiles',
                    'surface-basalt': 'basalt',
                    'surface-porcelain': 'porcelain-tiles',
                    'temple-carvings': 'temple-carvings',
                    'temple-pillars': 'pillars-torans',
                    'sculptures-stone': 'stone-sculptures',
                    'sculptures-fountains': 'fountains'
                };
                
                // Check if product matches selected categories
                const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
                
                // Check if product matches selected subcategories
                let matchesSubcategory = selectedSubcategories.length === 0;
                if (selectedSubcategories.length > 0 && p.collection) {
                    matchesSubcategory = selectedSubcategories.some(sub => {
                        const mappedCollection = subcategoryMap[sub];
                        return p.collection === mappedCollection;
                    });
                }
                
                // If both filters are active, product must match both
                // If only one is active, product must match that one
                if (selectedCategories.length > 0 && selectedSubcategories.length > 0) {
                    return matchesCategory && matchesSubcategory;
                } else if (selectedCategories.length > 0) {
                    return matchesCategory;
                } else if (selectedSubcategories.length > 0) {
                    return matchesSubcategory;
                }
                
                return true;
            });
        }
        
        // Filter by price range
        if (selectedPrices.length > 0) {
            filtered = filtered.filter(p => {
                return selectedPrices.some(range => {
                    if (range === '0-5000') return p.price < 5000;
                    if (range === '5000-15000') return p.price >= 5000 && p.price < 15000;
                    if (range === '15000-30000') return p.price >= 15000 && p.price < 30000;
                    if (range === '30000-plus') return p.price >= 30000;
                    return false;
                });
            });
        }
        
        // Filter by material
        if (selectedMaterials.length > 0) {
            filtered = filtered.filter(p => {
                const productMaterial = p.material ? p.material.toLowerCase() : '';
                return selectedMaterials.some(mat => productMaterial.includes(mat));
            });
        }
        
        renderProducts(filtered);
    };
    
    // Add change listeners to price and material checkboxes
    const otherCheckboxes = filterSidebar.querySelectorAll('input[name="price"], input[name="material"]');
    otherCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Reset filters
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            checkboxes.forEach(cb => cb.checked = false);
            
            // Collapse all category groups
            const categoryGroups = filterSidebar.querySelectorAll('.filter-category-group');
            categoryGroups.forEach(group => group.classList.remove('expanded'));
            
            renderProducts();
            
            // Reset breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            const galleryBackBtn = document.getElementById('gallery-back-btn');
            if (arrowSep) arrowSep.style.display = 'none';
            if (categoryNameEl) categoryNameEl.textContent = '';
            if (galleryBackBtn) galleryBackBtn.style.display = 'none';
        });
    }
    
    // Toggle filter sidebar on mobile
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            filterSidebar.classList.toggle('active');
        });
    }
}

// --- PRODUCT INTERACTIONS ---
function enquireProduct(encodedName) {
    const name = decodeURIComponent(encodedName);
    openContactModal();
}

function viewProduct(encodedName, price) {
    const name = decodeURIComponent(encodedName);
    alert(`${name} - $${price.toLocaleString()}\n\nClick "Enquire" to get more details about this product.`);
}

// --- INFINITE SCROLL CAROUSEL ---
function initInfiniteCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    if (!carouselTrack) {
        console.error('Carousel track element not found');
        return;
    }
    
    if (products.length === 0) {
        console.warn('No products loaded for carousel.');
        carouselTrack.innerHTML = `
            <div style="width: 100%; padding: 40px; text-align: center; color: #666;">
                <p style="font-size: 1.1rem; margin-bottom: 10px;">Products could not be loaded</p>
                <p style="font-size: 0.9rem;">Please ensure products.js is loaded correctly</p>
            </div>
        `;
        return;
    }

    const featuredProducts = products.slice(0, 12);
    
    const createCarouselItem = (product) => {
        return `
            <div class="carousel-item">
                <img src="${product.img}" alt="${product.name}">
                <div class="carousel-item-info">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toLocaleString()}</p>
                </div>
            </div>
        `;
    };
    
    const productHTML = featuredProducts.map(createCarouselItem).join('');
    carouselTrack.innerHTML = productHTML + productHTML;

    const leftBtn = document.getElementById('scroll-left-btn');
    const rightBtn = document.getElementById('scroll-right-btn');
    const carouselWrapper = document.getElementById('carousel-wrapper');
    let isScrolling = false;
    let isAnimationPaused = false;

    // Pause animation on hover or scroll
    const pauseAnimation = () => {
        carouselTrack.style.animationPlayState = 'paused';
        isAnimationPaused = true;
    };

    const resumeAnimation = () => {
        if (!isScrolling) {
            carouselTrack.style.animationPlayState = 'running';
            isAnimationPaused = false;
        }
    };

    // Left button click
    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            if (isScrolling) return;
            isScrolling = true;
            pauseAnimation();
            
            const scrollAmount = 250;
            carouselWrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isScrolling = false;
            }, 500);
        });
    }

    // Right button click
    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            if (isScrolling) return;
            isScrolling = true;
            pauseAnimation();
            
            const scrollAmount = 250;
            carouselWrapper.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isScrolling = false;
            }, 500);
        });
    }

    // Pause animation on mouse enter
    carouselWrapper.addEventListener('mouseenter', () => {
        pauseAnimation();
    });

    // Resume animation on mouse leave
    carouselWrapper.addEventListener('mouseleave', () => {
        setTimeout(resumeAnimation, 300);
    });

    // Pause animation when user manually scrolls
    let scrollTimeout;
    carouselWrapper.addEventListener('scroll', () => {
        pauseAnimation();
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            resumeAnimation();
        }, 1500);
    });
}

// --- CONTACT MODAL ---
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
        document.body.style.overflow = '';
    }
}

// Initialize contact modal handlers
document.addEventListener('DOMContentLoaded', function() {
    // Close button
    const closeBtn = document.getElementById('closeContactModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeContactModal);
    }
    
    // All "Let's Connect" buttons
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.classList.contains('explore-btn')) {
                e.preventDefault();
                openContactModal();
            }
        });
    });
    
    // Click outside modal to close
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeContactModal();
            }
        });
    }
    
    // Close modal when clicking showroom link
    const visitShowroom = document.getElementById('visitShowroom');
    if (visitShowroom) {
        visitShowroom.addEventListener('click', function() {
            closeContactModal();
        });
    }
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeContactModal();
        }
    });
});

// --- VERTICAL SHOWROOM AUTO-CYCLE ---
const categories = ['mines', 'manufacturing-units', 'quality-control', 'packaging-unit'];
let currentCategoryIndex = 0;
let categoryAutoplayInterval;

function showCategory(cat, element) {
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        const items = document.querySelectorAll('.v-nav-item');
        items.forEach((item, index) => {
            if (categories[index] === cat) {
                item.classList.add('active');
            }
        });
    }

    const data = categoryData[cat];
    if (!data) return;

    const mediaContainer = document.getElementById('category-media');
    const currentImg = mediaContainer.querySelector('.btw-image');
    
    if (currentImg) {
        currentImg.style.opacity = '0';
        currentImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
            setTimeout(() => {
                const newImg = mediaContainer.querySelector('.btw-image');
                if (newImg) {
                    newImg.style.opacity = '1';
                    newImg.style.transform = 'scale(1)';
                }
            }, 50);
        }, 500);
    } else {
        mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
        setTimeout(() => {
            const newImg = mediaContainer.querySelector('.btw-image');
            if (newImg) {
                newImg.style.opacity = '1';
                newImg.style.transform = 'scale(1)';
            }
        }, 50);
    }

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
    
    currentCategoryIndex = categories.indexOf(cat);
    
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
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    showCategory('mines');
    startCategoryAutoplay();
});

// --- HERO SLIDER WITH LUXURY BLACKOUT FADE ---
const slides = document.querySelectorAll('.slide');
const bulletNav = document.getElementById('bullet-nav');
let currentSlide = 0;
let sliderInterval;

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

    nav.querySelectorAll('li').forEach(li => {
        const link = li.querySelector(':scope > a');
        if (link && li.querySelector('ul')) {
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.nav-box a');
        if (!toggle) {
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
            return;
        }

        const parentLi = toggle.parentElement;
        if (!parentLi) return;

        if (parentLi.querySelector('ul')) {
            e.preventDefault();
            const opened = parentLi.classList.toggle('open');
            toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');

            Array.from(parentLi.parentElement.children).forEach(sib => {
                if (sib !== parentLi) sib.classList.remove('open');
            });
        } else {
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
        }
    });

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
            applyFilters();
        };
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.onclick = () => {
            clearAllFilters();
        };
    }
});

// --- FILTER FUNCTIONS ---
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.parent-checkbox:checked')).map(el => el.value);
    
    const selectedCollections = Array.from(document.querySelectorAll('input[name="collection"]:checked')).map(el => el.value);
    
    const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
    
    const selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value);
    
    let filteredProducts = products.filter(product => {
        let categoryMatch = true;
        if (selectedCategories.length > 0) {
            categoryMatch = selectedCategories.includes(product.category);
        }
        
        let collectionMatch = true;
        if (selectedCollections.length > 0) {
            collectionMatch = selectedCollections.includes(product.collection);
        }
        
        let priceMatch = true;
        if (selectedPrice && selectedPrice !== 'all') {
            if (selectedPrice === 'low') {
                priceMatch = product.price < 2000;
            } else if (selectedPrice === 'mid') {
                priceMatch = product.price >= 2000 && product.price <= 4000;
            } else if (selectedPrice === 'high') {
                priceMatch = product.price > 4000;
            }
        }
        
        let materialMatch = true;
        if (selectedMaterials.length > 0) {
            materialMatch = selectedMaterials.includes(product.material);
        }
        
        return categoryMatch && collectionMatch && priceMatch && materialMatch;
    });
    
    renderProducts(filteredProducts);
    updateBreadcrumb(selectedCategories, selectedCollections);
}

function clearAllFilters() {
    document.querySelectorAll('.parent-checkbox').forEach(el => {
        el.checked = false;
        el.indeterminate = false;
    });
    
    document.querySelectorAll('input[name="collection"]').forEach(el => el.checked = false);
    
    document.querySelectorAll('input[name="material"]').forEach(el => el.checked = false);
    
    const allPriceRadio = document.querySelector('input[name="price"][value="all"]');
    if (allPriceRadio) allPriceRadio.checked = true;
    
    renderProducts();
    
    const categoryName = document.getElementById('category-name');
    const arrowSeparator = document.getElementById('arrow-separator');
    if (categoryName) categoryName.textContent = '';
    if (arrowSeparator) arrowSeparator.style.display = 'none';
}

function updateBreadcrumb(categories, collections) {
    const categoryName = document.getElementById('category-name');
    const arrowSeparator = document.getElementById('arrow-separator');
    
    if (!categoryName || !arrowSeparator) return;
    
    if (categories.length > 0 || collections.length > 0) {
        let breadcrumbText = '';
        
        if (categories.length > 0) {
            breadcrumbText = categories.map(cat => {
                return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }).join(', ');
        }
        
        if (collections.length > 0) {
            if (breadcrumbText) breadcrumbText += ' > ';
            breadcrumbText += collections.map(col => {
                return col.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }).join(', ');
        }
        
        categoryName.textContent = breadcrumbText;
        arrowSeparator.style.display = 'inline';
    } else {
        categoryName.textContent = '';
        arrowSeparator.style.display = 'none';
    }
}

