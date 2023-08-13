import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.send('バックエンドからきました');
});

router.get('/message', (req: any, res: any) => {
  res.send('Hello World! Hello tmux!');
});

module.exports = router;
