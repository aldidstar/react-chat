const { Schema, model } = require("mongoose");

const chatSchema = new Schema(
  {
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Chat", chatSchema);
