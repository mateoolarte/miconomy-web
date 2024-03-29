const securityHeaders = [
  {
    // Allow DNS Prefetch resolution of Links, assets (JS, CSS, etc)
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    // Protect agaings cross-site scripting (XSS) attacks
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    // Avoid to insert the website as a iframe in other websites
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true, // TODO: Remove after I typed the whole app
  },
  async redirects() {
    return [
      {
        source: '/(login|signup)',
        has: [
          {
            type: 'cookie',
            key: 'userToken',
            value: undefined,
          },
        ],
        permanent: false,
        destination: '/',
      },
      {
        source: '/',
        missing: [
          {
            type: 'cookie',
            key: 'userToken',
          },
        ],
        permanent: false,
        destination: '/login',
      },
      {
        source: '/(categories|savings|entry|budgets)',
        missing: [
          {
            type: 'cookie',
            key: 'userToken',
          },
        ],
        permanent: false,
        destination: '/login',
      },
      {
        source: '/(budgets|entry/categories)/:id',
        missing: [
          {
            type: 'cookie',
            key: 'userToken',
          },
        ],
        permanent: false,
        destination: '/login',
      },
    ];
  },
};
