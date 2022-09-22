export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e5f5dc3c35e081487688c29450a5883'),
  },
});
