import { Router } from "express";
let router = Router();

// Controllers
import { readAll, readOne } from "../controllers/accounts/read.js";
import { addPoints, subPoints } from "../controllers/accounts/update.js";

router.get("/all", readAll);
router.get("/one", readOne);

router.get("/add", addPoints);
router.get("/sub", subPoints);

export default router;
