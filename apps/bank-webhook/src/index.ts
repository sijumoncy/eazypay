import express from "express";
import db from "@repo/db/client";
import * as path from "path";

const app = express();

app.use(express.json());
const BASE_TEMPLATE_PATH = path.join(__dirname, "template");
app.use(express.static(__dirname + "/template"));

// simulation bankwebhook endpoint ( this is actually provided or handled by original bank : now this is for demo / simulate)
app.get("/", async (req, res) => {
  res.sendFile(path.join(BASE_TEMPLATE_PATH, "hdfc", "index.html"));
});

/**
 * Currently using same /bankWebhook for all banks to simulate
 * this will be replace with multiple bank web hooks endpoints like /hdfcWebhook
 */
app.post("/bankWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  // TODO : Check the request exactly come from HDFC , by checking secret
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_id,
    amount: req.body.amount,
    status: req.body.status,
  };

  try {
    // Check if the onRamp is processing or not => only process if onRamp is inprocess
    const inProcessTransaction = await db.onRampTransaction.findFirst({
      where: {
        token: paymentInformation.token,
        userId: Number(paymentInformation.userId),
        status: "Processing",
      },
    });

    if (!inProcessTransaction) {
      res.status(409).json({
        message: "Invalid request.No transaction is initiated for the request",
      });
    }

    if (paymentInformation.status === "success") {
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

        db.onRampTransaction.update({
          where: {
            token: paymentInformation.token,
          },
          data: {
            status: "Success",
          },
        }),
      ]);
    } else {
      // mark the onRamp transaction to failure
      await db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Failure",
        },
      });
    }

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

app.listen(8003);
