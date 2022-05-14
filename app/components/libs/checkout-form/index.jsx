// Libs
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Styles
import s from "./index.module.scss";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function AppCheckoutForm() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action="/api/checkout" method="POST">
      <section className={s.section}>
        <button type="submit" role="link" className={s.button}>
          Checkout
        </button>
      </section>
    </form>
  );
}
export default AppCheckoutForm;
