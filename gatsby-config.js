/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-sass",
        {
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
            resolve: "gatsby-source-filesystem",
        },
        "gatsby-transformer-remark",
    ],
    siteMetadata: {
        title: "Gatsby Basics",
        author: "Evan Llew",
    },
}
