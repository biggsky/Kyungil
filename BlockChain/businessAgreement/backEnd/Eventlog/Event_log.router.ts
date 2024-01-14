import express from "express";
import Event_logController from "./Event_log.controller";
const router = express.Router();

router.get("/:id", Event_logController.ViewOneEventlog);

router.get("/find/:address", Event_logController.ViewAllEventlog);

export default router;
