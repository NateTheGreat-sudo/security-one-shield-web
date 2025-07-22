<?php
/**
 * The front page template file
 * Security One WordPress Theme
 */

get_header(); ?>

<main id="main" class="site-main front-page">
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1><?php echo get_theme_mod('hero_title', 'Protecting What Matters Most'); ?></h1>
                <p class="hero-subtitle"><?php echo get_theme_mod('hero_subtitle', 'Professional security solutions for residential and commercial properties. 24/7 monitoring, advanced technology, and unmatched reliability.'); ?></p>
                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary">Get Free Quote</a>
                    <a href="tel:<?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>" class="btn btn-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">10,000+</div>
                    <div class="stat-label">Homes Protected</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">4.9/5</div>
                    <div class="stat-label">Customer Rating</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2>Our Security Services</h2>
                <p>Comprehensive security solutions tailored to protect what matters most to you.</p>
            </div>
            
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
                    <ul class="service-features">
                        <li>24/7 Professional Monitoring</li>
                        <li>Smart Home Integration</li>
                        <li>Mobile App Control</li>
                        <li>Emergency Response</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline">Learn More</a>
                </div>

                <!-- Business Security -->
                <div class="service-card featured">
                    <div class="service-badge">Most Popular</div>
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                    </div>
                    <h3>Commercial Security</h3>
                    <p>Advanced security systems for businesses of all sizes, including access control, surveillance, and integrated safety solutions.</p>
                    <ul class="service-features">
                        <li>Access Control Systems</li>
                        <li>CCTV Surveillance</li>
                        <li>Alarm Systems</li>
                        <li>Fire Safety Integration</li>
                    </ul>
                    <a href="#contact" class="btn btn-primary">Get Quote</a>
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
                    <ul class="service-features">
                        <li>Certified Technicians</li>
                        <li>Quality Equipment</li>
                        <li>System Testing</li>
                        <li>Training & Support</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline">Learn More</a>
                </div>

            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Why Choose Security One?</h2>
                    <p class="about-subtitle">With over 15 years of experience in the security industry, we provide reliable, professional, and innovative security solutions that you can trust.</p>
                    
                    <div class="about-features">
                        <div class="about-feature">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                </svg>
                            </div>
                            <div class="feature-content">
                                <h4>Licensed & Certified</h4>
                                <p>Fully licensed and certified security professionals with extensive training and expertise.</p>
                            </div>
                        </div>
                        
                        <div class="about-feature">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                            </div>
                            <div class="feature-content">
                                <h4>24/7 Support</h4>
                                <p>Round-the-clock customer support and monitoring services for complete peace of mind.</p>
                            </div>
                        </div>
                        
                        <div class="about-feature">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                                    <path d="M9 22V12h6v10"/>
                                </svg>
                            </div>
                            <div class="feature-content">
                                <h4>Latest Technology</h4>
                                <p>Cutting-edge security technology and smart home integration for modern protection.</p>
                            </div>
                        </div>
                        
                        <div class="about-feature">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                </svg>
                            </div>
                            <div class="feature-content">
                                <h4>Rapid Response</h4>
                                <p>Fast emergency response times with direct connections to local authorities.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="about-certifications">
                        <h4>Our Certifications</h4>
                        <div class="certifications-list">
                            <span class="certification">Licensed Security Company</span>
                            <span class="certification">SIA Accredited</span>
                            <span class="certification">UL Listed Equipment</span>
                            <span class="certification">BBB A+ Rating</span>
                        </div>
                    </div>
                </div>
                
                <div class="about-image">
                    <div class="image-placeholder">
                        <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
                            <rect width="300" height="400" fill="hsl(var(--muted))" rx="8"/>
                            <text x="150" y="200" text-anchor="middle" fill="hsl(var(--muted-foreground))">Security Team Image</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>What Our Customers Say</h2>
                <p>Don't just take our word for it - hear from our satisfied customers.</p>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <span class="stars">★★★★★</span>
                    </div>
                    <blockquote>
                        "Security One installed our home security system and we couldn't be happier. Professional installation and excellent customer service!"
                    </blockquote>
                    <cite>
                        <strong>Sarah Johnson</strong>
                        <span>Homeowner, Springfield</span>
                    </cite>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <span class="stars">★★★★★</span>
                    </div>
                    <blockquote>
                        "Their 24/7 monitoring service gives us peace of mind. When our alarm went off, they responded immediately and contacted emergency services."
                    </blockquote>
                    <cite>
                        <strong>Mike Chen</strong>
                        <span>Business Owner, Downtown</span>
                    </cite>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <span class="stars">★★★★★</span>
                    </div>
                    <blockquote>
                        "The smart home integration is fantastic. I can control everything from my phone and get instant notifications."
                    </blockquote>
                    <cite>
                        <strong>Emily Rodriguez</strong>
                        <span>Homeowner, Riverside</span>
                    </cite>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Get Your Free Security Consultation</h2>
                <p>Contact us today for a free consultation and personalized security assessment.</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p><a href="tel:<?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?>"><?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?></a></p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p><a href="mailto:<?php echo get_theme_mod('email', 'info@securityone.com'); ?>"><?php echo get_theme_mod('email', 'info@securityone.com'); ?></a></p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <p><?php echo get_theme_mod('address', '123 Security Blvd, Safe City, SC 12345'); ?></p>
                        </div>
                    </div>
                </div>

                <form class="contact-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                    <input type="hidden" name="action" value="contact_form_submission">
                    <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
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
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tell us about your security needs..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-large">Send Message</button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>