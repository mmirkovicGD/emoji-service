const express = require("express");
const EmojiController = require("../controllers/emoji.controller");
const emojiRouter = express.Router();

emojiRouter
  .route("/getEmojis")
  .get((_, res) => new EmojiController().getEmojis(res));

module.exports = emojiRouter;
