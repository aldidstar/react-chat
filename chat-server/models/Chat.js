const { Schema, model } = require("mongoose");

const chatSchema = new Schema(
  {
    description: {
      type: String,
    },
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Chat", chatSchema);
