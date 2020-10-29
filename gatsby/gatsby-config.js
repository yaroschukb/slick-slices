import dotenv from 'dotenv'

dotenv.config({path: '.env'})

export default {
    siteMetadata: {
        title: `Slicks Slices`,
        siteUrl: 'https://gatsby.pizza',
        description: 'The best pizza place in NY',
        twitter: '@slickSlices',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve:'gatsby-source-sanity',
            options: {
                projectId: '6ddved7t',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
}