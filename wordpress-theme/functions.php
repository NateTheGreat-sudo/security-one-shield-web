<?php
/**
 * Security One Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function security_one_setup() {
    // Add theme support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'security-one'),
    ));
}
add_action('after_setup_theme', 'security_one_setup');

/**
 * Enqueue scripts and styles
 */
function security_one_scripts() {
    // Main stylesheet
    wp_enqueue_style('security-one-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom JavaScript
    wp_enqueue_script('security-one-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Smooth scroll for anchor links
    wp_add_inline_script('security-one-script', '
        jQuery(document).ready(function($) {
            $("a[href^=\'#\']").on("click", function(e) {
                e.preventDefault();
                var target = $(this.getAttribute("href"));
                if (target.length) {
                    $("html, body").stop().animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                }
            });
        });
    ');
}
add_action('wp_enqueue_scripts', 'security_one_scripts');

/**
 * Customizer settings
 */
function security_one_customize_register($wp_customize) {
    
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'security-one'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Protecting What Matters Most',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'security-one'),
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Professional security solutions for residential and commercial properties. 24/7 monitoring, advanced technology, and unmatched reliability.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'security-one'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => __('Contact Information', 'security-one'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('phone_number', array(
        'default' => '(555) 123-SECURE',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('phone_number', array(
        'label' => __('Phone Number', 'security-one'),
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('email', array(
        'default' => 'info@securityone.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('email', array(
        'label' => __('Email Address', 'security-one'),
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('address', array(
        'default' => '123 Security Blvd, Safe City, SC 12345',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('address', array(
        'label' => __('Address', 'security-one'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'security_one_customize_register');

/**
 * Handle contact form submission
 */
function handle_contact_form_submission() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['contact_nonce'], 'contact_form_nonce')) {
        wp_die('Security check failed');
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $service = sanitize_text_field($_POST['service']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($email)) {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
        exit;
    }
    
    // Prepare email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - Security One';
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service Interest: $service\n";
    $body .= "Message:\n$message";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    // Send email
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_contact_form_submission', 'handle_contact_form_submission');
add_action('admin_post_nopriv_contact_form_submission', 'handle_contact_form_submission');

/**
 * Add custom body classes
 */
function security_one_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    return $classes;
}
add_filter('body_class', 'security_one_body_classes');

/**
 * Custom excerpt length
 */
function security_one_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'security_one_excerpt_length');

/**
 * Widget areas
 */
function security_one_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'security-one'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in your footer.', 'security-one'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'security_one_widgets_init');

/**
 * Add smooth scrolling and mobile menu functionality
 */
function security_one_admin_scripts() {
    if (is_customize_preview()) {
        wp_enqueue_script('security-one-customizer', get_template_directory_uri() . '/js/customizer.js', array('jquery', 'customize-preview'), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'security_one_admin_scripts');