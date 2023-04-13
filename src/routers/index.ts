import { Router } from 'express';
import UserController from '../controllers/user_controller';

const router = Router();

router.get('/', UserController.index);
export default router;
