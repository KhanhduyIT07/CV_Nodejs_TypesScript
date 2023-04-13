import { Router } from 'express';
import SkillController from '../controllers/skill_controller';

const router = Router();

router.get('/', SkillController.index);

export default router;
