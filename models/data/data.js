import "dotenv/config.js";
import "../../config/database.js";

import { users } from "./users.js";
import User from "../User.js";
import { accounts } from "./accounts.js";
import Account from "../Account.js";

async function loadData() {
  try {
    await User.insertMany(users);
    console.log(`\x1b[32m%s\x1b[0m`, `=> Users loaded`);

    await Account.insertMany(accounts);
    console.log(`\x1b[32m%s\x1b[0m`, `=> Accounts loaded`);
  } catch (error) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      "=> An error occurred while uploading data"
    );
    console.error(error);
  }
}

loadData();
