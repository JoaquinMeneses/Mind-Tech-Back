import Account from "../../models/Account.js";

export let addPoints = async (req, res, next) => {
  try {
    const { one } = req.query;

    let account = await Account.findOne({ id: one });

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    account.puntos += 1;
    await account.save();

    res.status(200).json({
      account: account,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export let subPoints = async (req, res, next) => {
  try {
    const { one } = req.query;

    let account = await Account.findOne({ id: one });

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    account.puntos -= 1;
    await account.save();

    res.status(200).json({
      account: account,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
