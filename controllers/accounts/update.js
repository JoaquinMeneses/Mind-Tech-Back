import Account from "../../models/Account.js";

export let addPoints = async (req, res, next) => {
  try {
    const id = req.body._id;

    let account = await Account.findOne({ id: id });

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
    const id = req.body._id;

    let account = await Account.findOne({ id: id });

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
