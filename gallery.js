// Gallery data
const galleryData = [
    {
        title: "Premium White Marble",
        description: "Italian Carrara marble with distinctive veining. Perfect for luxury interiors, flooring, and countertops. Known for its timeless elegance and durability.",
        category: "marble",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format"
    },
    {
        title: "Rajasthan Sandstone",
        description: "High-quality textured sandstone from Rajasthan. Ideal for exterior cladding, paving, and architectural elements. Weather-resistant and naturally beautiful.",
        category: "sandstone",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format"
    },
    {
        title: "Classical Sculpture",
        description: "Handcrafted stone sculpture by master artisans. Each piece is unique and tells its own story. Perfect for gardens, lobbies, and luxury spaces.",
        category: "sculptures",
        image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&q=80&auto=format"
    },
    {
        title: "Absolute Black Granite",
        description: "Premium black granite with polished finish. Excellent for countertops, flooring, and modern interiors. Highly resistant to scratches and heat.",
        category: "granite",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1200&q=80&auto=format"
    },
    {
        title: "Grand Fountain",
        description: "Luxury water feature crafted from natural stone. Custom designs available. Creates a stunning focal point for any outdoor or indoor space.",
        category: "fountains",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format"
    },
    {
        title: "French Limestone",
        description: "Premium French limestone with honed surface. Elegant and versatile for both modern and classic designs. Excellent for flooring and wall cladding.",
        category: "limestone",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80&auto=format"
    },
    {
        title: "Verde Guatemala Marble",
        description: "Exotic green marble with unique patterns. Rare and luxurious choice for statement pieces. Perfect for feature walls and high-end applications.",
        category: "marble",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80&auto=format"
    },
    {
        title: "Modern Art Sculpture",
        description: "Contemporary stone sculpture with abstract design. Museum-quality craftsmanship. Perfect for modern interiors and corporate spaces.",
        category: "sculptures",
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=80&auto=format"
    },
    {
        title: "Red Agra Sandstone",
        description: "Natural cleft red sandstone from Agra region. Rich color and texture. Ideal for traditional architecture and heritage projects.",
        category: "sandstone",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format"
    },
    {
        title: "Silver Cloud Granite",
        description: "Gray granite with flamed texture. Slip-resistant surface perfect for outdoor applications. Durable and weather-resistant.",
        category: "granite",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80&auto=format"
    },
    {
        title: "Garden Fountain",
        description: "Classic stone fountain design for gardens. Three-tier design with intricate detailing. Creates a peaceful atmosphere with flowing water.",
        category: "fountains",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80&auto=format"
    },
    {
        title: "Jerusalem Limestone",
        description: "Tumbled Jerusalem limestone with authentic patina. Historical aesthetic meets modern durability. Perfect for Mediterranean-style projects.",
        category: "limestone",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format"
    }
];

let currentImageIndex = 0;

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add image error handling
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach((img, index) => {
        img.addEventListener('error', function() {
            console.log(`Image ${index} failed to load`);
            this.style.backgroundColor = '#e0e0e0';
            this.alt = 'Image loading error';
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '0';
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                item.classList.remove('show', 'hide');
                
                if (filterValue === 'all') {
                    item.classList.add('show');
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.classList.add('show');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });
    
    // Show all items initially
    galleryItems.forEach(item => item.classList.add('show'));
});

// Lightbox functionality
function openLightbox(index) {
    currentImageIndex = index;
    const modal = document.getElementById('lightboxModal');
    const image = document.getElementById('lightboxImage');
    const title = document.getElementById('lightboxTitle');
    const description = document.getElementById('lightboxDescription');
    
    if (!modal || !image || !title || !description) {
        console.error('Lightbox elements not found');
        return;
    }
    
    const data = galleryData[index];
    
    // Show loading state
    image.style.opacity = '0.5';
    
    // Create new image to preload
    const tempImg = new Image();
    tempImg.onload = function() {
        image.src = data.image;
        image.alt = data.title;
        image.style.opacity = '1';
    };
    tempImg.onerror = function() {
        console.error('Failed to load lightbox image');
        image.style.opacity = '1';
    };
    tempImg.src = data.image;
    
    title.textContent = data.title;
    description.textContent = data.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const image = document.getElementById('lightboxImage');
    const title = document.getElementById('lightboxTitle');
    const description = document.getElementById('lightboxDescription');
    
    const data = galleryData[currentImageIndex];
    
    image.style.opacity = '0';
    
    // Preload new image
    const tempImg = new Image();
    tempImg.onload = function() {
        setTimeout(() => {
            image.src = data.image;
            image.alt = data.title;
            title.textContent = data.title;
            description.textContent = data.description;
            image.style.opacity = '1';
        }, 200);
    };
    tempImg.onerror = function() {
        console.error('Failed to load next image');
        setTimeout(() => {
            title.textContent = data.title;
            description.textContent = data.description;
            image.style.opacity = '1';
        }, 200);
    };
    tempImg.src = data.image;
}

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// Close lightbox when clicking outside content
const lightboxModal = document.getElementById('lightboxModal');
if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
} else {
    console.warn('Lightbox modal not found in DOM');
}

// Video Showcase Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    const videoBoxes = document.querySelectorAll('.video-box');
    const videos = document.querySelectorAll('.video-box video');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Play video when in view
                const video = entry.target.querySelector('video');
                if (video && video.paused) {
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            console.log('Video playing in view');
                        }).catch(err => {
                            console.log('Video play error in observer:', err);
                        });
                    }
                }
            } else {
                // Pause video when out of view to save resources
                const video = entry.target.querySelector('video');
                if (video && !video.paused) {
                    video.pause();
                }
            }
        });
    }, observerOptions);

    videoBoxes.forEach(box => {
        observer.observe(box);
    });

    // Parallax scroll effect for video boxes
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                applyParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    function applyParallax() {
        const scrolled = window.pageYOffset;
        
        videoBoxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            const boxTop = rect.top + scrolled;
            const speed = parseFloat(box.getAttribute('data-scroll-speed')) || 0.5;
            
            // Only apply parallax if box is near viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled - boxTop) * (speed - 0.5) * 0.3;
                box.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // Ensure all videos autoplay and loop
    videos.forEach((video, index) => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute('preload', 'metadata');
        
        // Add error handler
        video.addEventListener('error', function(e) {
            console.log(`Video ${index} load error:`, e);
            // Hide broken video container
            const container = this.closest('.video-box');
            if (container) {
                container.style.opacity = '0.5';
            }
        });

        // Add loaded handler
        video.addEventListener('loadedmetadata', function() {
            console.log(`Video ${index} loaded successfully`);
        });
        
        // Attempt to play
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log(`Video ${index} playing`);
            }).catch(err => {
                console.log(`Autoplay prevented for video ${index}:`, err);
                // Fallback: play on user interaction
                const playOnInteraction = () => {
                    video.play().catch(e => console.log('Play error:', e));
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('scroll', playOnInteraction);
                };
                document.addEventListener('click', playOnInteraction, { once: true });
                document.addEventListener('scroll', playOnInteraction, { once: true });
            });
        }

        // Handle video end (backup for loop)
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });
    });

    // Stagger animation on load
    videoBoxes.forEach((box, index) => {
        box.style.transitionDelay = `${index * 0.1}s`;
    });

    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (target === 98 ? '%' : '+');
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

