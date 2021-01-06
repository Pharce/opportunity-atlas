const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/geocoder", 
        createProxyMiddleware({
            target: "https://geocoding.geo.census.gov", 
            secure: false,
            changeOrigin: true
        })
    );
};