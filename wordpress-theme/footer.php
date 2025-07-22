    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                
                <!-- Company Info -->
                <div class="footer-section company-info">
                    <div class="footer-logo">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                        </svg>
                        <div>
                            <h3><?php bloginfo('name'); ?></h3>
                            <p><?php bloginfo('description'); ?></p>
                        </div>
                    </div>
                    <p>Your trusted partner in comprehensive security solutions. Protecting homes and businesses with advanced technology and professional service.</p>
                </div>
                
                <!-- Contact Info -->
                <div class="footer-section contact-info">
                    <h4>Contact Information</h4>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <a href="tel:<?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>"><?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?></a>
                    </div>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <a href="mailto:<?php echo get_theme_mod('email', 'info@securityone.com'); ?>"><?php echo get_theme_mod('email', 'info@securityone.com'); ?></a>
                    </div>
                    <div class="contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span><?php echo get_theme_mod('address', '123 Security Blvd, Safe City, SC 12345'); ?></span>
                    </div>
                </div>
                
                <!-- Services -->
                <div class="footer-section services-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#services">Home Security Systems</a></li>
                        <li><a href="#services">Commercial Security</a></li>
                        <li><a href="#services">Professional Installation</a></li>
                        <li><a href="#services">24/7 Monitoring</a></li>
                        <li><a href="#services">Smart Home Integration</a></li>
                        <li><a href="#services">Emergency Response</a></li>
                    </ul>
                </div>
                
                <!-- Company Links -->
                <div class="footer-section company-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/support">Support Center</a></li>
                    </ul>
                </div>
                
            </div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                    <div class="footer-credentials">
                        <span>Licensed Security Company #SEC-12345</span>
                        <span>Accredited by Security Industry Association</span>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.main-navigation');
    
    if (mobileToggle && navigation) {
        mobileToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            navigation.classList.toggle('toggled');
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
</script>

</body>
</html>