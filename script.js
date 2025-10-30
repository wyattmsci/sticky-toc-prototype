// Sticky TOC Prototype - JavaScript
// Phases 2-7 Complete ✅
// Phase 8: Skipped (accessibility handled by developers)
// Phase 9: Polish & Testing ✅

console.log('Sticky TOC Prototype loaded');

// Phase 2 ✅: Static structure complete
// Phase 3 ✅: Sticky positioning complete (CSS-based)
// Phase 4 ✅: Active state styling & click handling complete
// Phase 5 ✅: Click-to-anchor navigation (360ms ease-in-out)
// Phase 6 ✅: Scroll-sync active state with IntersectionObserver
// Phase 7 ✅: Primary nav slide-on-scroll-up (220ms ease-out)

// TOC Click Handler - Update active state and anchor navigation
document.addEventListener('DOMContentLoaded', function() {
    const tocItems = document.querySelectorAll('.toc-item');
    
    tocItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Get target section from href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Update active state immediately on click (instant, no delay)
                tocItems.forEach(tocItem => {
                    tocItem.classList.remove('active');
                    tocItem.removeAttribute('aria-current');
                });
                this.classList.add('active');
                this.setAttribute('aria-current', 'page');
                
                // Smooth scroll to section using native smooth scroll (super smooth, hardware-accelerated)
                const tocHeight = 96; // TOC height is 96px
                const targetRect = targetSection.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = scrollTop + targetRect.top - tocHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus management (minimal delay for screen reader accessibility)
                const heading = targetSection.querySelector('h2, h3');
                if (heading) {
                    setTimeout(() => {
                        heading.setAttribute('tabindex', '-1');
                        heading.focus();
                    }, 100);
                }
                
                console.log('Active TOC item changed to:', this.dataset.section);
            }
        });
    });
});

// Phase 6: Scroll-Sync Active State with IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'overview', tocItem: document.querySelector('[data-section="overview"]') },
        { id: 'challenge', tocItem: document.querySelector('[data-section="challenge"]') },
        { id: 'action', tocItem: document.querySelector('[data-section="action"]') },
        { id: 'impact', tocItem: document.querySelector('[data-section="impact"]') }
    ];
    
    const tocItems = document.querySelectorAll('.toc-item');
    const tocHeight = 96; // TOC height in pixels
    
    // Function to update active TOC item
    function updateActiveTOC(sectionId) {
        sections.forEach(section => {
            if (section.tocItem) {
                if (section.id === sectionId) {
                    section.tocItem.classList.add('active');
                    section.tocItem.setAttribute('aria-current', 'page');
                } else {
                    section.tocItem.classList.remove('active');
                    section.tocItem.removeAttribute('aria-current');
                }
            }
        });
    }
    
    // IntersectionObserver setup - using threshold: top of section ≤ 120px from viewport top
    // This accounts for sticky TOC height (96px) + small buffer (24px)
    const observerOptions = {
        root: null, // viewport
        rootMargin: `${tocHeight + 24}px 0px -60% 0px`, // 120px top offset, 40% visible threshold
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };
    
    let activeSectionId = null;
    let debounceTimeout = null;
    
    // Map to store observed elements to their section IDs
    const elementToSectionMap = new Map();
    
    const observer = new IntersectionObserver((entries) => {
        // Debounce updates by 50ms to prevent jitter
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            // Find the section that's most visible in the viewport
            let maxRatio = 0;
            let mostVisibleSectionId = null;
            
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    // Get section ID from the map
                    const sectionId = elementToSectionMap.get(entry.target);
                    if (sectionId) {
                        mostVisibleSectionId = sectionId;
                    }
                }
            });
            
            // Update active state only if a different section is now most visible
            if (mostVisibleSectionId && mostVisibleSectionId !== activeSectionId) {
                activeSectionId = mostVisibleSectionId;
                updateActiveTOC(activeSectionId);
            }
        }, 50); // 50ms debounce per spec
    }, observerOptions);
    
    // Observe all section headings
    sections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
            // Observe the section heading for better accuracy
            const heading = sectionElement.querySelector('h2.section-title-primary');
            if (heading) {
                elementToSectionMap.set(heading, section.id);
                observer.observe(heading);
            } else {
                // Fallback: observe the section itself
                elementToSectionMap.set(sectionElement, section.id);
                observer.observe(sectionElement);
            }
        }
    });
    
    // Initial active state - Overview section
    updateActiveTOC('overview', true);
});

// Phase 7: Primary Navigation Slide-on-Scroll-Up
document.addEventListener('DOMContentLoaded', function() {
    const primaryNav = document.querySelector('.primary-nav');
    const body = document.body;
    let lastScrollTop = 0;
    let isNavVisible = true;
    let ticking = false;
    
    // Get nav height from computed styles (140px per CSS variable)
    const navHeight = primaryNav ? primaryNav.offsetHeight : 140;
    
    // Function to handle scroll direction detection and nav visibility
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Detect scroll direction
        if (scrollTop > lastScrollTop && scrollTop > navHeight) {
            // Scrolling down - hide nav
            if (isNavVisible) {
                primaryNav.classList.add('hidden');
                body.classList.remove('nav-visible');
                isNavVisible = false;
            }
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up - show nav
            if (!isNavVisible) {
                primaryNav.classList.remove('hidden');
                body.classList.add('nav-visible');
                isNavVisible = true;
            }
        }
        
        // At top of page, always show nav
        if (scrollTop <= 0) {
            primaryNav.classList.remove('hidden');
            body.classList.add('nav-visible');
            isNavVisible = true;
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        ticking = false;
    }
    
    // Throttle scroll events using requestAnimationFrame
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });
    
    // Initialize: nav visible at page load
    body.classList.add('nav-visible');
    isNavVisible = true;
});

// Phase 8-10 will add:
// - Accessibility enhancements
