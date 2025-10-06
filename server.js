const express = require("express");
const app = express();
const { EMOJI_PORT } = require("../../common/constants");
const emojiRouter = require("./routes/emoji.route");

const cors = require("cors");
const bodyParser = require("body-parser");
const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/emojis", emojiRouter);

app.listen(EMOJI_PORT, () => {
  console.log(`Emoji service is running on port ${EMOJI_PORT}`);
});
