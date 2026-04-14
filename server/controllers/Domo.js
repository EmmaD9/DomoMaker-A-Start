const models = require('../models');
const Domo = models.Domo;

const makerPage = (req, res) => {
    res.render('app');
}

const makeDomo = async (req, res) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).json({ error: 'Bothname and age are required!' });
    }

    const domoData = {
        name: req.body.name,
        age: req.body.age,
        owner: req.session.account._id,
    };

    try{
        const newDomo = new Domo(domoData);
        await newDomo.save();
        return res.json({redirect: '/maker'});
    } catch (err){
        console.log(err);
        if(err.code === 11000){
            return res.status(400).json({ error: 'Domo already exists!' });
        }
        return res.status(500).json({ error: 'An error occurred making the Domo.' });

    }
}
    
module.exports = {
    makerPage,
    makeDomo,
}