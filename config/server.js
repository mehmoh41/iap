module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '04920a13da0075aebf7f3c58172e7e76'),
    },
  },
});
