// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Testimonials Slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
}
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
setInterval(nextSlide, 5000);

const downloadCVBtn = document.getElementById('downloadCV');
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cvContent = `Akash Kalsariya\nFull Stack Developer\n...`;
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Akash_Kalsariya_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        showNotification('CV downloaded successfully!', 'success');
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.reset();
                showNotification(data.message, 'success');
            } else {
                showNotification(data.message, 'error');
            }
        })
        .catch(error => {
            showNotification('An error occurred. Please try again later.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Mobile Device Detection and Responsive Optimizations
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile device detection
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               window.innerWidth <= 768;
    }
    
    // Touch device detection
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    
    // Apply mobile-specific optimizations
    function applyMobileOptimizations() {
        const body = document.body;
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero');
        const skillCards = document.querySelectorAll('.skill-card');
        const projectCards = document.querySelectorAll('.project-card');
        const buttons = document.querySelectorAll('.btn');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (isMobileDevice()) {
            // Add mobile class to body
            body.classList.add('mobile-device');
            
            // Mobile navbar optimizations
            if (navbar) {
                navbar.classList.add('mobile-navbar');
            }
            
            // Mobile hero optimizations
            if (heroSection) {
                heroSection.classList.add('mobile-hero');
            }
            
            // Mobile skill cards
            skillCards.forEach(card => {
                card.classList.add('mobile-skill-card');
            });
            
            // Mobile project cards
            projectCards.forEach(card => {
                card.classList.add('mobile-project-card');
            });
            
            // Mobile button optimizations
            buttons.forEach(btn => {
                btn.classList.add('mobile-btn');
            });
            
            // Mobile navigation optimizations
            navLinks.forEach(link => {
                link.classList.add('mobile-nav-link');
            });
            
            // Add touch-friendly hover effects
            if (isTouchDevice()) {
                addTouchInteractions();
            }
            
            console.log('Mobile optimizations applied');
        } else {
            // Remove mobile classes for desktop
            body.classList.remove('mobile-device');
            navbar?.classList.remove('mobile-navbar');
            heroSection?.classList.remove('mobile-hero');
            
            skillCards.forEach(card => card.classList.remove('mobile-skill-card'));
            projectCards.forEach(card => card.classList.remove('mobile-project-card'));
            buttons.forEach(btn => btn.classList.remove('mobile-btn'));
            navLinks.forEach(link => link.classList.remove('mobile-nav-link'));
            
            console.log('Desktop optimizations applied');
        }
    }
    
    // Add touch interactions for mobile
    function addTouchInteractions() {
        const interactiveElements = document.querySelectorAll('.skill-card, .project-card, .btn, .nav-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Handle orientation changes
    function handleOrientationChange() {
        setTimeout(() => {
            applyMobileOptimizations();
        }, 100);
    }
    
    // Handle window resize
    function handleResize() {
        applyMobileOptimizations();
    }
    
    // Initialize mobile optimizations
    applyMobileOptimizations();
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Smooth scrolling for mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed for smaller screens)
    function createMobileMenu() {
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navbar && navMenu && window.innerWidth <= 600) {
            // Create hamburger menu
            const hamburger = document.createElement('div');
            hamburger.className = 'mobile-menu-toggle';
            hamburger.innerHTML = '<span></span><span></span><span></span>';
            
            // Add mobile menu styles
            const style = document.createElement('style');
            style.textContent = `
                .mobile-menu-toggle {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                    padding: 10px;
                }
                
                .mobile-menu-toggle span {
                    width: 25px;
                    height: 3px;
                    background: #10B981;
                    margin: 3px 0;
                    transition: 0.3s;
                }
                
                @media (max-width: 600px) {
                    .mobile-menu-toggle {
                        display: flex;
                    }
                    
                    .nav-menu {
                        position: fixed;
                        top: 70px;
                        left: -100%;
                        width: 100%;
                        height: calc(100vh - 70px);
                        background: rgba(255,255,255,0.95);
                        backdrop-filter: blur(12px);
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        padding-top: 2rem;
                        transition: left 0.3s ease;
                        z-index: 999;
                    }
                    
                    .nav-menu.active {
                        left: 0;
                    }
                    
                    .nav-menu li {
                        margin: 1rem 0;
                    }
                    
                    .nav-link {
                        font-size: 1.2rem;
                        padding: 1rem 2rem;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Insert hamburger before nav menu
            navbar.querySelector('.nav-container').insertBefore(hamburger, navMenu);
            
            // Toggle menu
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }
    }
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Recreate mobile menu on resize
    window.addEventListener('resize', function() {
        setTimeout(createMobileMenu, 100);
    });
    
    // Add mobile-specific CSS classes
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        .mobile-device .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
        }
        
        .mobile-device .hero-photo img {
            width: 150px;
            height: 150px;
        }
        
        .mobile-device .about-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
        
        .mobile-device .skills-three-cols {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .mobile-device .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .mobile-device .contact-container {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
        }
        
        .mobile-device .footer-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            text-align: center;
        }
        
        .mobile-skill-card {
            min-height: 80px;
            padding: 1rem 0.5rem;
        }
        
        .mobile-project-card {
            min-height: 180px;
        }
        
        .mobile-btn {
            min-height: 44px;
            min-width: 44px;
            font-size: 1rem;
            padding: 12px 24px;
        }
        
        .mobile-nav-link {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }
        
        /* Mobile-specific animations */
        .mobile-device .skill-card:hover {
            transform: scale(1.02);
        }
        
        .mobile-device .project-card:hover {
            transform: scale(1.02);
        }
        
        /* Mobile scroll behavior */
        .mobile-device {
            scroll-behavior: smooth;
        }
        
        /* Mobile touch feedback */
        .mobile-device .btn:active,
        .mobile-device .nav-link:active,
        .mobile-device .skill-card:active,
        .mobile-device .project-card:active {
            transform: scale(0.95);
            transition: transform 0.1s;
        }
    `;
    document.head.appendChild(mobileStyles);
    
    // Performance optimization: Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
    
    console.log('Mobile detection and optimizations loaded');
}); 
