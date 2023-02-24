const mongoose = require("mongoose");

if (process.argv.length < 3) {
	console.log("Give password as an argument");
	process.exit(1);
}

const personName = process.argv[2];
const personNumber = process.argv[3];

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
	name: String,
	number: Number,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 2) {
	Person.find({}).then((res) => {
		res.forEach((elem) => {
			console.log(elem);
		});
		mongoose.connection.close();
	});
}

if (process.argv.length > 2) {
	const person = new Person({
		name: personName,
		number: personNumber,
	});
	person.save().then((res) => {
		console.log("Person added to phonebook.");
		mongoose.connection.close();
	});
}
