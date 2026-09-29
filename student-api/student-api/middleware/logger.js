// Simple custom logger middleware
// Logs the HTTP method, URL, and time of every request

function logger(req, res, next) {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next(); // move on to the next middleware/route
}

module.exports = logger;
