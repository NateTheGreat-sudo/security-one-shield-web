<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-content">
                
                <!-- Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <div class="site-logo">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                            <!-- Shield Icon SVG -->
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                            </svg>
                            <div>
                                <h1><?php bloginfo('name'); ?></h1>
                                <p><?php bloginfo('description'); ?></p>
                            </div>
                        </a>
                    <?php endif; ?>
                </div>
                
                <!-- Navigation -->
                <nav id="site-navigation" class="main-navigation" role="navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id' => 'primary-menu',
                        'menu_class' => 'main-nav',
                        'container' => false,
                        'fallback_cb' => 'security_one_fallback_menu',
                    ));
                    ?>
                </nav>
                
                <!-- Header Actions -->
                <div class="header-actions">
                    <div class="phone-number">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span><?php echo get_theme_mod('phone_number', '(555) 123-SECURE'); ?></span>
                    </div>
                    <a href="#contact" class="btn btn-primary">Free Quote</a>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="screen-reader-text"><?php esc_html_e('Main Menu', 'security-one'); ?></span>
                    <span class="hamburger"></span>
                </button>
                
            </div>
        </div>
    </header>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function security_one_fallback_menu() {
    echo '<ul class="main-nav">';
    echo '<li><a href="#services">Services</a></li>';
    echo '<li><a href="#about">About</a></li>';
    echo '<li><a href="#contact">Contact</a></li>';
    echo '</ul>';
}
?>