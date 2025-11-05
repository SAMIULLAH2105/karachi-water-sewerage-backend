export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'default_jwt_secret'),
    },
    // 👇 Disable secure cookies and force non-https mode for Railway
    url: '/admin',
    serveAdminPanel: true,
    cookies: {
      secure: false,
    },
  },
  url: env('PUBLIC_URL', 'http://0.0.0.0:1337'),
});


// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', 'default_jwt_secret'),
//       options: {
//         secure: false, // 👈 Add this line
//       },
//     },
//   },
// });

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });