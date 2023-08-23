import express from "express";
let router = express.Router();

import usersRouter from "./users.js";
import accountsRouter from "./accounts.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "CheckWOW API",
    subtitle: "Endpoints of CheckWOW",
  });
});

router.use("/users", usersRouter);
router.use("/accounts", accountsRouter);

export default router;
