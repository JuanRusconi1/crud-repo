const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products", {products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = req.params.id;
		const productoEncontrado = products.find(producto => producto.id == id)
		res.render("detail", {producto: productoEncontrado, toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		console.log(req.body)
		res.redirect("/")
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render("product-edit-form")
	},
	// Update - Method to update
	update: (req, res) => {
		console.log(req.body);
		res.redirect("/")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.redirect("/");
	}
};

module.exports = controller;