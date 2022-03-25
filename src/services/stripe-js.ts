// parte fronte end
//yarn add @stripe/stripe-js

import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  //pegar a chave publica no stripe
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJs;
}
