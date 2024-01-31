import express from "express";
import multer from "multer";
import fs from "fs";

const PORT = 8080;
const imageDB = [];
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));
app.use(express.static("uploads"));

app.post("/image", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  console.log("Filename", req.file.filename);
  console.log("Req body", req.body);
  fs.rename(
    `uploads/${req.file.filename}`,
    `uploads/${req.body.fullname}`,
    (err) => {
      if (err) {
        throw err;
      } else {
        imageDB.push(req.body.fullname);
        res.send(`<image width="50%" src='/${req.body.fullname}'></image>`);
      }
    }
  );
});

app.get('/images', (req, res) => {
    let html = "";
    imageDB.forEach(image => {
        html += `<image width="50%" src='/${image}'></image>`
    });
    res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
