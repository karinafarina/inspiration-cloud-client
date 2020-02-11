export default {
  PORT: process.env.PORT || 8000,
  API_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://fierce-coast-06372.herokuapp.com/api' : "http://localhost:8000/api",
}