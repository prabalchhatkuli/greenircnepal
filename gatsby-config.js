module.exports = {
  siteMetadata: {
    title: 'Green Innovative Research Center (GIRC) Nepal',
    description:'We focus on a green view to develop the socioeconomic status of Nepalese people especially residing in rural area. \
    climate change and environmental protection, high value agriculture products \
    and its marketing, water, sanitation and hygiene (WASH), renewable energy technology, \
    climate change, cooperative management, institutional development, social mobilization, \
    women and child rights and health. \
    Flood, natural, disaster, prevention, forests, green energy, sustainability, gorkha nepal, \
    dhading nepal, Palungtar Gorkha Nepal. \
    GREEN Innovative Research Center ( GIRC Nepal) greenircnepal.org, Kathmandu-14, Kalanki. \
    Kochi University, Japan, JICA, aid, affiliation \
    development, disaster prevention',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        indentedSyntax: true
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Merriweather','Merriweather Sans',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
