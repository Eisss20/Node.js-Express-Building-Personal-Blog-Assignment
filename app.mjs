import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  return res.json({
    data: "testing",
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});