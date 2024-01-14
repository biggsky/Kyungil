import express from "express";
import CAControllers from "./CA.controller";

const router = express.Router();

router.get("/:id", CAControllers.ViewOneCA);

router.put("/", CAControllers.UpdateCA);

router.get('/find/:address', CAControllers.FindCA);

export default router;
