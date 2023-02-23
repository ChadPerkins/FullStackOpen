const mongoose = require("mongoose");

if (process.argv.length < 3) {
	console.log("Give password as an argument");
	process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personNumber = process.argv[4];

const url = ``;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
	name: String,
	number: Number,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
	Person.find({}).then((res) => {
		res.forEach((elem) => {
			console.log(elem);
		});
		mongoose.connection.close();
	});
}

if (process.argv.length > 3) {
	const person = new Person({
		name: personName,
		number: personNumber,
	});
	person.save().then((res) => {
		console.log("Person added to phonebook.");
		mongoose.connection.close();
	});
}
