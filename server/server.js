import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://user:user@cluster0.9iltbkg.mongodb.net/vira?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => console.error(e));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const KanbanSchema = new mongoose.Schema({
  title: String,
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
})

const TaskSchema = new mongoose.Schema({
  title: String,
})

app.post('/kanbans', async (req, res) => {
  if (!req.body) {
    new Error('No data provided');
  }

  try {
    const kanbanModel = mongoose.model('Kanban', KanbanSchema);
    const kanban = new kanbanModel(req.body);
    await kanban.save();

    // TODO: При добавлении нового товара долже возвращаться полный массив канбанов, или сам канбан?
    const kanbans = await kanbanModel.find();

    res.status(200).json(kanbans);
  } catch (error) {
    res.status(400).json(error.message)
  }
});
app.get('/kanbans', async (req, res) => {
  try {
    const kanbanModel = mongoose.model('Kanban', KanbanSchema);
    const kanbans = await kanbanModel.find();

    res.status(200).json(kanbans);
  } catch (error) {
    res.status(400).json(error.message)
  }
});
app.delete('/kanbans/:id', async (req, res) => {
  try {
    const kanbanModel = mongoose.model('Kanban', KanbanSchema);
    await kanbanModel.findByIdAndDelete(req.params.id);

    // TODO: При добавлении нового товара долже возвращаться полный массив канбанов, или сам канбан?
    const kanbans = await kanbanModel.find();

    res.status(200).json(kanbans);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.post('/kanbans/:id/tickets', async (req, res) => {
});
app.delete('/tickets/:taskId', async (req, res) => {
});

app.post('/auth/login', async (req, res) => {
  if (!req.body) {
    new Error('No data provided');
  }

  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.post('/auth/register', async (req, res) => {
  if (!req.body) {
    new Error('No data provided');
  }

  try {
    const userModel = mongoose.model('Users', UserSchema);
    const user = new userModel(req.body);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

app.post('/auth/recovery', async (req, res) => {
})
