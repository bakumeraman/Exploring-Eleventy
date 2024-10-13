module.exports = function(eleventyConfig) {
    // copy `assets/` to `_site/assets`
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_templates/includes",
            layouts: "_templates/layouts"
        }
    }
}