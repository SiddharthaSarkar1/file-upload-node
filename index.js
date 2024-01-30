import express from 'express';
import multer from 'multer';
import fs from 'fs';


const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});