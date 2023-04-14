import { Router } from 'express';
import ContactController from '../controllers/contact_contoller';

const router = Router();

router.get('/', ContactController.index);

export default router;
