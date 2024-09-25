import express from 'express';
import FriendsRouter from './routes/friends.router.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use('/site', express.static('public'));
app.use(express.json());
app.use('/friends', FriendsRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My friends are very clever',
    paragraph: "Let's do great things",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
