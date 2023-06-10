const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://burak:burak123.@suber.nqzo9fx.mongodb.net/suber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });


// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());







// User modeli
const User = mongoose.model('user', {
  name: String,
  lastName: String,
  imageURL: String,
  email: String,
  username: String,
  password: String,
  confirm_password: String
},'users');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
// Sayfa yönlendirmeleri
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
0

app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: 'Invalid blog User.' });
    return;
  }

  try {
    const blog = await User.findById(id);
    if (!blog) {
      res.status(404).send({ error: 'User not found.' });
      return;
    }
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while querying the database.' });
  }
});




app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});


app.put('/api/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    mongoose.Types.ObjectId.isValid(userId)
    await Operation.findByIdAndUpdate(userId, updatedUser);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});




const loginRouter = require('./routers/login');
app.use('/api/login', loginRouter);



// Sunucu dinlemesi
app.listen(port, function () {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında çalışıyor.`);
});


