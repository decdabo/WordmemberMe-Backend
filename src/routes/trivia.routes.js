import { Router } from 'express';

import { response } from '../controllers/trivia/response.js';
import { verifyToken } from '../controllers/trivia/verify.js';
import { renewToken } from '../controllers/trivia/renew.js';
// import { htmlEmail } from '../utils/email/htmlEmail.js';

const router = Router();

router.put('/api/trivia/response/:token', response);
router.get('/api/trivia/verify/:token', verifyToken);
router.post('/api/trivia/renew/:id/:email', renewToken)

export default router;
