import express from "express";
import { getShoppingList, postListItem, completedItem } from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/", async (req, res) =>{
  const {ticked} = req.body
  const result = await completedItem(ticked)
  res.status(201).json({ success: true, payload: result });
})

export default router;
