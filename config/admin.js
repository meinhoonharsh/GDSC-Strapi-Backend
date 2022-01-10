module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6dd03e782ce78f868b8b92b206af7945'),
  },
});
