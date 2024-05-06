import express from "express";
import db from "@repo/db/client";

const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  // TODO : Check the request exactly come from HDFC , by checking secret
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_id,
    amount: req.body.amount,
  };

  try {
    // Check if the onRamp is processing or not => only process if onRamp is inprocess
    const inProcessTransaction = await db.onRampTransaction.findFirst({
      where: {
        token: paymentInformation.token,
        userId: paymentInformation.userId,
        status: "Processing",
      },
    });

    if (!inProcessTransaction) {
      return {
        message: "Invalid request.No transaction is initiated for the request",
      };
    }

    await db.$transaction([
      // update the balance
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),

      // update the transaction status
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.status(200).json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(8003)