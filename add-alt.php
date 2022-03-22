<?php
/**
* Plugin Name: Add-Alt
* Plugin URI:
* Description: A plugin to add alt tag in images by using filenames for SEO
* Version: 1.0.0
 * Author: Wajahat Mubashir
 */

 // Exit if accessed directly
 if( !defined( 'ABSPATH' ) ) exit; 

 // Hook For StyleSheet
add_action( 'wp_enqueue_scripts', 'altAdd_load_js' );

 // Load JS
    function altAdd_load_js() {
        wp_enqueue_script('JS-load', plugin_dir_url(__FILE__).'add-alt.js');
    }

