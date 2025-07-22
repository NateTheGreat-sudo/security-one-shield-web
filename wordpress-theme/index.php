<?php
/**
 * The main template file
 * Security One WordPress Theme
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1><?php echo get_theme_mod('hero_title', 'Protecting What Matters Most'); ?></h1>
            <p><?php echo get_theme_mod('hero_subtitle', 'Professional security solutions for residential and commercial properties. 24/7 monitoring, advanced technology, and unmatched reliability.'); ?></p>
            <div class="hero-actions">
                <a href="#contact" class="btn btn-primary">Get Free Quote</a>
                <a href="tel:<?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>" class="btn btn-secondary">
                    <?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2>Our Security Services</h2>
            <p>Comprehensive security solutions tailored to protect what matters most to you.</p>
            
            <div class="services-grid">
                
                <!-- Home Security -->
                <div class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                    </div>
                    <h3>Home Security Systems</h3>
                    <p>Comprehensive home security solutions with 24/7 monitoring, smart technology integration, and rapid emergency response.</p>
                    <ul>
                        <li>24/7 Professional Monitoring</li>
                        <li>Smart Home Integration</li>
                        <li>Mobile App Control</li>
                        <li>Emergency Response</li>
                    </ul>
                </div>

                <!-- Business Security -->
                <div class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                    </div>
                    <h3>Commercial Security</h3>
                    <p>Advanced security systems for businesses of all sizes, including access control, surveillance, and integrated safety solutions.</p>
                    <ul>
                        <li>Access Control Systems</li>
                        <li>CCTV Surveillance</li>
                        <li>Alarm Systems</li>
                        <li>Fire Safety Integration</li>
                    </ul>
                </div>

                <!-- Installation -->
                <div class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                    </div>
                    <h3>Professional Installation</h3>
                    <p>Expert installation and setup by certified technicians, ensuring optimal system performance and reliability.</p>
                    <ul>
                        <li>Certified Technicians</li>
                        <li>Quality Equipment</li>
                        <li>System Testing</li>
                        <li>Training & Support</li>
                    </ul>
                </div>

                <!-- Monitoring -->
                <div class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect width="20" height="14" x="2" y="5" rx="2"/>
                            <line x1="2" x2="22" y1="10" y2="10"/>
                        </svg>
                    </div>
                    <h3>24/7 Monitoring</h3>
                    <p>Round-the-clock professional monitoring with immediate response to alerts and emergency situations.</p>
                    <ul>
                        <li>24/7 Professional Monitoring</li>
                        <li>Immediate Alert Response</li>
                        <li>Emergency Dispatch</li>
                        <li>Mobile Notifications</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>Why Choose Security One?</h2>
            <p>With over 15 years of experience in the security industry, we provide reliable, professional, and innovative security solutions.</p>
            
            <div class="about-grid">
                <div class="about-feature">
                    <h4>Licensed & Certified</h4>
                    <p>Fully licensed and certified security professionals with extensive training and expertise.</p>
                </div>
                <div class="about-feature">
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock customer support and monitoring services for complete peace of mind.</p>
                </div>
                <div class="about-feature">
                    <h4>Latest Technology</h4>
                    <p>Cutting-edge security technology and smart home integration for modern protection.</p>
                </div>
                <div class="about-feature">
                    <h4>Rapid Response</h4>
                    <p>Fast emergency response times with direct connections to local authorities.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Get Your Free Security Consultation</h2>
            <p>Contact us today for a free consultation and personalized security assessment.</p>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <h4>Phone</h4>
                        <p><a href="tel:<?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>"><?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?></a></p>
                    </div>
                    <div class="contact-item">
                        <h4>Email</h4>
                        <p><a href="mailto:<?php echo get_theme_mod('email', 'info@securityone.com'); ?>"><?php echo get_theme_mod('email', 'info@securityone.com'); ?></a></p>
                    </div>
                    <div class="contact-item">
                        <h4>Address</h4>
                        <p><?php echo get_theme_mod('address', '123 Security Blvd, Safe City, SC 12345'); ?></p>
                    </div>
                </div>

                <form class="contact-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                    <input type="hidden" name="action" value="contact_form_submission">
                    <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
                    
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    
                    <div class="form-group">
                        <label for="service">Service Interest</label>
                        <select id="service" name="service">
                            <option value="">Select a service</option>
                            <option value="home-security">Home Security</option>
                            <option value="business-security">Business Security</option>
                            <option value="installation">Installation Service</option>
                            <option value="monitoring">24/7 Monitoring</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>