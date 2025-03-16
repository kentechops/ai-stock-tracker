// Configuration template - Copy this file to config.js and fill in your values
const config = {
    // API Keys
    STOCK_API_KEY: 'your_alphavantage_api_key_here', // Get from https://www.alphavantage.co/support/#api-key
    PERPLEXITY_API_KEY: 'your_perplexity_api_key_here', // Get from Perplexity AI
    
    // API Endpoints
    API_BASE_URL: 'https://www.alphavantage.co', // Alpha Vantage API base URL
    PERPLEXITY_API_URL: 'https://api.perplexity.ai/chat/completions', // Perplexity AI API endpoint
    
    // Other Configuration
    UPDATE_INTERVAL: 60000, // Stock data refresh interval in milliseconds (1 minute)
    MAX_STOCKS: 10,        // Maximum number of stocks that can be tracked
    
    // Feature Flags
    ENABLE_DEBUG: false,   // Enable/disable debug logging
    ENABLE_REAL_TIME: true, // Enable/disable real-time updates
    USE_FAKE_PP: false     // Use fake Perplexity API data for testing
};

// Make config available globally
window.config = config;

export default config; 