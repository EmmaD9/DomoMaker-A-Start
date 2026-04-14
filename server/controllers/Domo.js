const models = require('../models');
const Domo = models.Domo;

const makerPage = (req, res) => {
    res.render('app');
}

module.exports = {
    makerPage,
};