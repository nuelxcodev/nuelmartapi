const { OTPverification } = require("../controllers/opt.js");
const{ checkOutItems } =require("../controllers/stripe");

const { Router } = require("express");
const { register, login, resetpassword } = require('../controllers/auth.js')

const router = Router();

// authentication
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/resetpassword").post(resetpassword);

// OTP
router.route("/Otpverification").post(OTPverification);

// items
router.route("/item").post(controller.items);
router.route("/getitem").get(controller.getitems);

// checkout stripe
router.route("/checkout").post(checkOutItems);

// Wrap the Express app with the Netlify handler
module.exports = router
