import { Router } from "express";
import AboutController from "../controllers/about_controler";

const router = Router();

router.get("/", AboutController.index);
router.get("/me", AboutController.sayHello);

export default router;
