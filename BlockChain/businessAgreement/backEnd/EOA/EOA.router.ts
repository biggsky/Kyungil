import express from "express";
import EOAControllers from "./EOA.controller";

const router = express.Router();

router.get('/:id', EOAControllers.ViewOneEOA);

router.get('/find/:address', EOAControllers.FindEOA);

export default router;
