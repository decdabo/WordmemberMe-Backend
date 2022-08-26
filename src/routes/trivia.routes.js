import { Router } from 'express';

import { response } from '../controllers/trivia/response.js';
import { htmlEmail } from '../utils/email/htmlEmail.js';

const router = Router();

router.put('/api/trivia/response/:token', response);
router.get('/api/trivia/verify/:token', (_, res) => {
  return res.send(htmlEmail('sexo'));
});

export default router;
