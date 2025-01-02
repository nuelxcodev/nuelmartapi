const Stripe = require('stripe');

async function checkOutItems(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // Validate environment variable
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({
      message: "Stripe secret key is not set",
    });
  }

  try {
    const { amount, email } = req.body;

    // Validate inputs
    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({
        message: "Invalid amount",
      });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "usd", // Change currency if needed
      payment_method_types: ["card"],
      metadata: { email }, // Store email in metadata
    });

    res.status(200).send({
      message: "Order has been placed successfully",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({
      message: "An error occurred during the payment. Please try again.",
      error: error.message,
    });
  }
}

module.exports = { checkOutItems };
