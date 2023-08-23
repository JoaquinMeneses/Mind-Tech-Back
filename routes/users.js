import { Router } from "express";
let router = Router();

// Controllers
import { readAll, readOne } from "../controllers/users/read.js";

router.get("/all", readAll);
router.get("/one", readOne);

export default router;
