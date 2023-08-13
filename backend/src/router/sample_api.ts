const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.send('バックエンドからきました');
});

module.exports = router;
