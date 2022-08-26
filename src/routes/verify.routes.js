import { Router } from 'express';
import { notify } from '../controllers/cards/notify.js';

const router = Router();

router.post('/api/verify/', notify);
router.get('/api/verify/:id/:token', (_, res) => {
  return res.send('<h1>Recived!</h1>');
});

export default router;
