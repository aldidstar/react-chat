const Chat = require("../models/Chat");

module.exports = {

chatRead: async (req, res) => {
    try {
      const chat = await Chat.find();
      res.status(200).json(chat);
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  chatCreate: async (req, res) => {
    try {
      const chat = await Chat.create(req.body);
      res.status(201).json({
        success: true,
        message: "chat have been added",
        chat,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  chatDelete: async (req, res) => {
    try {
      const chat = await Chat.findByIdAndRemove(req.params.id);
      res.status(201).json({
        success: true,
        message: "chat have been deleted",
        chat,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  chatUpdate: async (req, res) => {
    try {
      const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json({
        success: true,
        message: "chat have been updated",
        chat,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

}