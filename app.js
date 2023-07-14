import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('Index');
});

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));