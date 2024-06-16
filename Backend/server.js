
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
const recordRoutes = require('./routes/routes');
const {createUser} = require('./controller/userController');
const {connectToDatabase} = require('./config/database');
const {generateWalletAddress} = require('./utils/walletutil');
const User = require('./models/user')
const cors = require('cors');
const {fundAccount} = require('./utils/fundAccount');


const app = express();

app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use(cors());
app.use('/api/auth', authRoutes);

app.post("/register", async(req, res) => {
    const { userID, password, role, phoneNumber} = req.body;
    try {
    const {walletAddress, privateKey} = generateWalletAddress();
    await fundAccount(walletAddress,'5');

        await createUser(userID, password, role, phoneNumber, walletAddress, privateKey);

        const token = jwt.sign(
            { userID: user.userID, role: user.role, walletAddress:user.walletAddress, phone: user.phoneNumber,  },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } 
        );

        res.json({ token });
        res.status(201).json({ message: 'User created successfully' });
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));