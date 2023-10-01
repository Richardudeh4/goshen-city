/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['goshencityschools.com', 'images.unsplash.com']
},
typescript:{
ignoreBuildErrors: true,
}
}

module.exports = nextConfig
