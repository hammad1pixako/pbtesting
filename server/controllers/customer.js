const Customer = require('../models/customer');

const saveCustomerData = async (req, res) => {
    const data = req.body;
    const info = new Customer({
        name: data.customerName,
        email: data.customerEmail,
        dob: data.dob,
        idNumber: data.idNumber,
        idType: data.idType,
        idIssuer: data.idIssuer,
        idIssueDate: data.idIssueDate,
        idExpiryDate: data.idExpiryDate,
        address: data.address,
        phoneNumber: data.phoneNumber,
        occupation: data.occupation,
    });

    try {
        const saveData = await info.save();
        res.json(saveData);
    } catch (error) {
        res.status(500).json({error: 'Error saving customer'});
    }

}

module.exports = {
    saveCustomerData,
}