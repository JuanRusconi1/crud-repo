const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const ultimaVisita = products.filter(producto => producto.category == "visited");
		const enOferta = products.filter(producto => producto.category == "in-sale")
		res.render("index", {ultimaVisita, enOferta})

	},
	search: (req, res) => {
		const busqueda = req.query.keywords
		const productoABuscar = products.filter(producto => producto.name.toLowerCase().includes(busqueda))
		res.render("results", {productoABuscar, busqueda})
	},
};

module.exports = controller;
