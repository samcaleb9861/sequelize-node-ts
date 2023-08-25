import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/connect';
import userRoutes from './routes/userRoutes';

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.json())

app.use('/check', async (req: express.Request, res: express.Response) => {
    console.log("Hi there, App is running...")
    res.json({ message: "hi there, app is running" })
})
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Listening on port ${PORT}`);
    });
}).catch((error:any) => {
    console.error('Database connection error:', error);
});


