/**
 * TextGenerator.js - Handles text generation logic
 * Kurdish Text Generator - Claude-style interface
 */

/**
 * TextGenerator class - Manages text generation process
 */
class TextGenerator {
    /**
     * Initialize the text generator with necessary services and configuration
     */
    constructor() {
        // Create an instance of the API service for communication
        this.apiService = new ApiService();
        
        // Define the system prompt for Kurdish text generation
        this.systemPrompt = "تۆ نووسەرێکی کوردی لێهاتوویت. داواکارییەکە بخوێنەوە و وەڵامێکی گونجاو بە زمانی کوردی بنووسەوە.";
    }
    
    /**
     * Generate text based on the provided prompt
     * @param {string} prompt - The user's input prompt
     * @returns {Promise<string>} - The generated text
     * @throws {Error} - If text generation fails
     */
    async generate(prompt) {
        try {
            // Call the API service to generate text
            return await this.apiService.callApi(this.systemPrompt, prompt);
        } catch (error) {
            // Re-throw any errors that occur during API call
            throw error;
        }
    }
    
    /**
     * Set a custom system prompt (optional feature for future expansion)
     * @param {string} prompt - The new system prompt to use
     */
    setSystemPrompt(prompt) {
        if (prompt && prompt.trim() !== '') {
            this.systemPrompt = prompt;
        }
    }
}

// Make the class available globally
window.TextGenerator = TextGenerator;
