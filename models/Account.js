import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    main: {
      type: String,
      required: true,
    },
    alters: {
      type: Array,
      required: true,
    },
    puntos: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account = model("Account", schema);

export default Account;
