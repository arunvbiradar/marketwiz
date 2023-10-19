import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.post('/create', async (req, res) => {
  const data = req.body;
  console.log(data);

  res.send({message: "User added"});
})

app.listen(port || 5000, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});