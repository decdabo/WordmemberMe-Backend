import { Router } from 'express';

import login from '../controllers/auth/login.js';
import register from '../controllers/auth/register.js';
import editUser from '../controllers/auth/editUser.js';

const router = Router();

router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.put('/api/auth/:id', editUser);

export default router;
