const Stripe = require('stripe')

async function checkOutItems(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { amount, email } = req.body; // Get the amount from the client request

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "usd", // Change currency if needed
      payment_method_types: ["card"],
      customer_email: email
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {checkOutItems}