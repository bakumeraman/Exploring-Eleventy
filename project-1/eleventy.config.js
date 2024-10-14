module.exports = async function(eleventyConfig) {
    // Add assets to output folders
    eleventyConfig.addPassthroughCopy("assets");
}

// Path settings
module.exports.config = {
    dir: {
        input: "src",
        output: "_site",
        layouts: "_templates/layouts/",
        includes: "_templates/includes/"
    }
}

