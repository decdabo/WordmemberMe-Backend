import { Router } from 'express';

import { getCards } from '../controllers/cards/getCards.js';
import { createCard } from '../controllers/cards/createCard.js';
import { editCard } from '../controllers/cards/editCard.js';
import { deleteCard } from '../controllers/cards/deleteCard.js';
import warningRoutes from '../controllers/warningRoutes.js';

const router = Router();

router.get('/api/cards/:userId', getCards);
router.get('/api/cards/', warningRoutes);
router.post('/api/cards/:userId', createCard);
router.post('/api/cards/', warningRoutes);
router.put('/api/cards/:id', editCard);
router.put('/api/cards/', warningRoutes);
router.delete('/api/cards/:id', deleteCard);

export default router;
