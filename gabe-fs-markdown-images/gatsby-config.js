module.exports = {
  siteMetadata: {
    title: `Gatsby FS Markdown Benchmark for Gabe`,
    description: "A blog like no other blog",
    author: "Bob the Blogger",
  },
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/generated_articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/generated_images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-newrelic-test",
      options: {
        NR_INGEST_KEY: process.env.NEW_RELIC_INSERT_KEY || '',
        NR_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY || '',
        SITE_NAME: process.env.SITE_NAME || '',
        staging: true,
        traces: {
          collectTraces: true,
          tags: {
            "ruairi": "douglas"
          },
        },
        logs: {
          collectLogs: true,
          tags: {
            "ruairi": "douglas"
          },
        },
        metrics: {
          collectMetrics: true,
          tags: {
            "ruairi": "douglas"
          },
        },
      },
    },
  ],
};
