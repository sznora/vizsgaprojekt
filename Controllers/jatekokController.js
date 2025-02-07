const bcrypt = require('bcrypt');
const Jatekok = require('../Models/jatekokModel'); 

exports.OsszesJatekok = async function JatekKereses(req, res) {
    try {
        let jatekok = await Jatekok.findAll({
            attributes: ['id', 'jatek_nev', 'leiras', 'kategoria_id']
        });
        res.render('index',{jatekok}); 
    } catch (err) {
        res.status(500).send('Hiba történt a játékok lekérésekor.');
    }
};

exports.JatekLetrehozas = async function JatekKereses(req, res) {
    const { jatek_neve, leirasa, kategoria } = req.body;
        try {
            await Jatekok.create({
                jatek_nev: jatek_neve,
                leiras: leirasa,
                kategoria_id: kategoria
            });
            res.redirect('/'); 
        } catch (error) {
            console.error('Hiba történt a játék létrehozása közben:', error);
            res.status(500).send('Hiba történt a játék létrehozása során.');
        }
    
};