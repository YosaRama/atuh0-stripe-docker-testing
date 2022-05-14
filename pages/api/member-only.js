// Libs
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
const apiHandler = nextConnect();

apiHandler.get(async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.status(200).json({
      message: "This is page only for member",
      details: session,
    });
  } else {
    res.status(401).json({
      message: "Please login first and then request this API!",
    });
  }
});

export default apiHandler;
