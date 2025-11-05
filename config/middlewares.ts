export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000', // for local dev
        'https://karachi-water-sewerage-frontend-9g5.vercel.app', // production frontend
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeadersOnError: true,
    },
  },
  'strapi::logger',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  // 👇 Add this middleware at the very end
  async (ctx, next) => {
    // Force Strapi to recognize Railway’s HTTPS proxy
    ctx.request.header['x-forwarded-proto'] = 'https';
    await next();
  },
];

// export default [
//     'strapi::errors',
//   {
//     name: 'strapi::cors',
//     config: {
//       enabled: true,
//       origin: ['http://localhost:3000'], // your Next.js frontend
//       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     },
//   },
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];
