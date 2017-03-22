module.exports = function(options) {

  options = options || {};

  return function(req, res, next) {

    res.header("Access-Control-Allow-Origin", options.origin || "*");
    res.header("Access-Control-Allow-Methods",  options.methods || "POST, GET, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", options.headers || "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", options.credentials || false);
    res.header("Access-Control-Max-Age", options.maxAge || "86400"); // 24 hours
    
    if (req.method === "OPTIONS") {
      res.status(200).end();
    } else {
      next();  
    }

  };

};