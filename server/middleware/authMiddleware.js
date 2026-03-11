const jwt = require("jsonwebtoken");

const SECRET = "estate_secret_key";

// middleware to verify JWT and attach user info to request
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // { id, role, churchId, ... }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// allow only admins to proceed
const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  res.status(403).json({ message: "Admin privileges required" });
};

/**
 * pastors may only access resources belonging to their own church.
 * admins bypass this check.
 *
 * The middleware looks for churchId in either params or body.  Adjust as
 * necessary depending on your route design.  It is common for list
 * endpoints (e.g. `/lands`) to be filtered in the controller itself using
 * `req.user.churchId` rather than via middleware, but this helper still
 * enforces that a pastor cannot request another church's id explicitly.
 */
const requireOwnChurch = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }

  if (req.user && req.user.role === "pastor") {
    const churchId = req.params.churchId || req.body.churchId;
    if (churchId && churchId.toString() === req.user.churchId?.toString()) {
      return next();
    }

    return res.status(403).json({ message: "Access denied for this church" });
  }

  res.status(403).json({ message: "Insufficient permissions" });
};

module.exports = {
  verifyToken,
  requireAdmin,
  requireOwnChurch,
};
