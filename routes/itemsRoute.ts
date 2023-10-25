import express from "express";
const router = express.Router();

const items: number[] = [1, 2, 3, 4, 5, 6];

router.get("/", (_, res) => {
  res.json({ items });
});

router.get("/:itemIndex", (req, res) => {
  const index: number = Number(req.params.itemIndex);
  res.json({ items: items[index] });
});

export default router;
