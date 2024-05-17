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

app.post('/kanbans', (req, res) => {
    try {
        if(!req.body){
            new Error('No data provided');
        }

        const kanbanModel = mongoose.model('Kanban', KanbanSchema);
        const kanban = new kanbanModel(req.body);
        kanban.save();

        res.status(200).json(req.body);
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/kanbans', async (req, res) => {
    try {
        const kanbanModel = mongoose.model('Kanban', KanbanSchema);
        const kanbans = await kanbanModel.find();

        res.status(200).json(kanbans);
    } catch (error) {
        console.error(error.message);
    }
});