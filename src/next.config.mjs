import nextra from 'nextra'
 
const withNextra = nextra({
  // ... Other Nextra config options
  // You can include other Next.js configuration options here, in addition to Nextra settings:
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.postimg.cc',
          port: '',
          pathname: '/**/**/',
          search: '',
        },
      ],
    },
  }
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
})