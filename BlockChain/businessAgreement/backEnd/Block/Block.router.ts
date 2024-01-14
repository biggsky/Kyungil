import express from "express";
import BlockControllers from "./Block.controller";

const router = express.Router();

router.get('/', BlockControllers.ViewAllBlocks);

router.get('/:id', BlockControllers.ViewOneBlock);

router.get('/find/:number', BlockControllers.FindBlockNum);

export default router;