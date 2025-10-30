// Sticky TOC Prototype - JavaScript
//参考 Phase 4: Active state styling & click handling ✅

console.log('Sticky TOC Prototype loaded');

// Phase 2 ✅: Static structure complete
// Phase 3 ✅: Sticky positioning complete (CSS-based)
// Phase 4 ✅: Active state styling & click handling complete

// TOC Click Handler - Update active state and anchor navigation
document.addEventListener('DOMContentLoaded', function() {
    const tocItems = document.querySelectorAll('.toc-item');
    
    tocItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Get target section from href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Remove active class from all items
                tocItems.forEach(tocItem => {
                    tocItem.classList.remove('active');
                    tocItem.removeAttribute('aria-current');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                this.setAttribute('aria-current', 'page');
                
                // Smooth scroll to section (360ms ease-in-out per Phase 5 spec)
                const tocHeight = 96; // TOC height is 96px
                const targetRect = targetSection.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetPosition = scrollTop + targetRect.top - tocHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus management for accessibility
                setTimeout(() => {
                    const heading = targetSection.querySelector('h2, h3');
                    if (heading) {
                        heading.setAttribute('tabindex', '-1');
                        heading.focus();
                    }
                }, 360);
                
                console.log('Active TOC item changed to:', this.dataset.section);
            }
        });
    });
});

// Phase 5-10 will add:
// - Click-to-anchor navigation (360ms ease-in-out)
// - Scroll-sync active state (IntersectionObserver)
// - Primary nav slide-on-scroll-up (220ms ease-out)
// - Accessibility enhancements
