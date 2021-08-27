var express = require("express");
var volleyball = require("volleyball");

var app = express();

// app.use(morgan("dev"));
app.use(volleyball);
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.send("index.html");
});

const PORT = 3000;
const init = async () => {
	//   await db.sync();
	//   await db.sync({ force: true });
	// make sure that you have a PORT constant
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}!`);
	});
};

init();
