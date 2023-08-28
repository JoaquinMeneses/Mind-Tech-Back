import Account from "../../models/Account.js";

export let readAll = async (req, res, next) => {
  try {
    let all = await Account.find();
    res.status(200).json({
      accounts: all,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export let readOne = async (req, res, next) => {
  try {
    const { one } = req.query;

    let account = await Account.findOne({ id: one });

    res.status(200).json({
      account: account,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
