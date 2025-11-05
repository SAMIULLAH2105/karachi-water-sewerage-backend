export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://karachi-water-sewerage-backend-production.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'someRandomSecret'),
    },
    // ✅ force non-secure cookies in production
    cookies: {
      secure: false,
    },
  },
  // ✅ also force Strapi to trust proxy (important for Railway)
  proxy: true,
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