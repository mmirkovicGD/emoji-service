const { EMOJI_API_KEY } = require("../../../common/constants");
const fetch = require("node-fetch");

class EmojiController {
  getEmojis = async (res) => {
    try {
      const response = await fetch(
        `https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`
      );
      const emojis = await response.json();
      return res.status(200).json(emojis);
    } catch (error) {
      res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
    }
  };
}

module.exports = EmojiController;
