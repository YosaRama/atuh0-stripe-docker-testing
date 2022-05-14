// Libs
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import nextConnect from "next-connect";
const apiHandler = nextConnect();

apiHandler.post(async (req, res) => {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1KzGNpAlYpPtfTL4rE2LbEnB",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/member-page/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

export default apiHandler;
