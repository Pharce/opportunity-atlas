const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/geocoder", 
        createProxyMiddleware({
            target: "https://geocoding.geo.census.gov", 
            secure: false,
            changeOrigin: true
        })
    );

    app.use("/atlas_screenshots", 
        createProxyMiddleware({
            target: "https://ng-atlas.s3.ca-central-1.amazonaws.com", 
            secure: false,
            changeOrigin: false
        })
    );
};