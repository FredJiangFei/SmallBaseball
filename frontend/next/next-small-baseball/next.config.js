

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    db: 'mongodb://localhost/small_baseball'
  }
}

module.exports = nextConfig
