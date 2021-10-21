var express = require("express");
var router = express.Router();

let messages = [
	{
		text: "Hi you!",
		user: "Landa",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/", (req, res) => {
	messages.push({
		text: req.body.mainContent,
		user: req.body.author,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
