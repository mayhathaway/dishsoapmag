module.exports = {
  siteMetadata: {
      title: 'dishsoap quarterly',
      author: 'Jeremy Nguyen'
  },
  plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Cabin`,
            `Montserrat\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
          endpoint: 'https://wixsite.us10.list-manage.com/subscribe/post?u=d9d70f1c2c150859df696a4c7&amp;id=4076846979',
          timeout: 3500,
        },
      },
  ]
}