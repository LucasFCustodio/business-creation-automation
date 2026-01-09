import express from "express";
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(express.json({ type: '*/*' }));

app.get("/", (req, res) => {
    res.send("The port is working")
});

app.post("/solicitacao-estadual", (req, res) => {
    console.log("Raw Data received from Pipefy: " + req.body);
    const data = req.body;

    //All variable declarations
    const effectiveDate = data["effectiveDate"];
    const companyType = data["companyType"];
    const businessName = data["businessName"];
    const businessAddress = data["businessAddress"];
    
    //This section of code breaks down the address so each form field can be written correctly in SunBiz
    const addressParts = businessAddress.split(", ");
    const city = addressParts[1];
    const stateAndZip = addressParts[2].split(" ");
    const stateAndZipLength = stateAndZip.length;
    var state;
    var zip;
    if (stateAndZipLength == 3) {
        state = stateAndZip[0] + " " + stateAndZip[1];
        zip = stateAndZip[2];
    }
    else {
        state = stateAndZip[0];
        zip = stateAndZip[1];
    }

    //Checking if the business is in Florida, or in another state
    var businessState;
    if (data["businessState"] === "Florida") {
        businessState = "Florida";
    }
    else {
        businessState = data["differentState"];
    }

    const ownerName = data["clientName"];
    const partnerName = data["partnerName"];
    var partnerAddress;
    if (data["samePartnerAddress"] === "Yes") {
        partnerAddress = businessAddress;
    }
    else {
        partnerAddress = data["differentPartnerAddress"];
    }

    
    console.log(`Effective Date: ${effectiveDate}\nCompany Type: ${companyType}\nBusiness Name: ${businessName}\nBusiness Address: ${businessAddress}`);
    console.log(`Business State: ${businessState}\nOwner Name: ${ownerName}\nPartner Name: ${partnerName}\nPartner Address: ${partnerAddress}`);

    //Notify the server the response was successfully received
    res.status(200).send("HTTP request sucessfully received from Pipefy");
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
    //Will finish writing later
});