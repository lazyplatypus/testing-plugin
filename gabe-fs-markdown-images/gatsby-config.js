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
        NR_KEY: process.env.NEW_RELIC_INSERT_KEY || '',
        NR_LICENSE: process.env.NEW_RELIC_LICENSE_KEY || '',
        SITE_NAME: process.env.SITE_NAME || '',
        traces: {
          collectTraces: true,
          tags:{
            'tracetest': 'ruairi',
          }
        },
        logs: {
          collectLogs: true,
          tags: {
            'logtest': 'gabe',
          }
        },
        metrics: {
          collectMetrics: true,
          tags: {
            'logtest': 'gabe',
          }
        },
        nrAgent: {
          collectApm: true,
        },
      },
    },
  ],
};
