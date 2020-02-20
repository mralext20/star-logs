import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Log = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String },
    ship: { type: ObjectId, ref: "Ship", required: true },
    log: { type: ObjectId, ref: "Log", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;
