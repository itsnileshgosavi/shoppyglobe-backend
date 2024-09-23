// List of allowed origins
const allowedOrigins = ['https://shoppyglobe.nileshgosavi.tech', 'https://shoppyglobe-frontend.vercel.app', 'http://localhost:5173'];

export const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin of the request is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);  // Allow the request
    } else {
      callback(new Error('Not allowed by CORS'));  // Reject the request
    }
  },
  credentials: true  // Allow credentials (cookies, HTTP authentication)
};