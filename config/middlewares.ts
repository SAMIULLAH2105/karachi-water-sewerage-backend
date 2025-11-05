export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://karachi-water-sewerage-frontend-9g5.vercel.app'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
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
