/**
 * app.js - Main application file that initializes all components
 * Kurdish Text Generator - Claude-style interface
 */

/**
 * Main App class - Initializes and coordinates all application components
 */
class App {
    /**
     * Initialize the application by creating instances of all necessary classes
     */
    constructor() {
        // Create an instance of UIManager to handle all UI interactions
        this.uiManager = new UIManager();
        
        // Store reference to the app in the global window object for access from other parts
        window.app = this;
    }
    
    /**
     * Static method to create and return a new App instance
     * @returns {App} New App instance
     */
    static init() {
        return new App();
    }
}

// Initialize the application when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create the app instance
    App.init();
});
