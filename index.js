import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("The port is working")
});

app.post("/solicitacao-estadual", (req, res) => {
    const businessName = data["Business Name"];
    const businessAddress = data["Business Address"];
    console.log("Business name: " + businessName + ", Business Address: " + businessAddress);
    //Store business name later

    //Notify the server the response was successfully received
    res.status(200).send("HTTP request sucessfully received from Pipefy");
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
    //Will finish writing later
});