//instalar a Stripe CLI
// ./stripe login
//./stripe listen --forward-to localhosost:3000/api/webhooks

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("evento recebido");

  res.status(200).json({ ok: true });
};
