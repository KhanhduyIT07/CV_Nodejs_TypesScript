import { Router } from 'express';
import WorkController from '../controllers/work_controller';
const router = Router();

router.get('/', WorkController.index);

export default router;
