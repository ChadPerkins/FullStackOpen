const express = require("express");
const app = express();
const morgan = require("morgan");
const Person = require("./models/person");

const PORT = process.env.PORT || 3001;

app.use(express.static("build"));
app.use(express.json());
app.use(
	morgan(function (tokens, req, res) {
		console.log(req);
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, "content-length"),
			"-",
			tokens["response-time"](req, res),
			"ms",
			JSON.stringify(req.body),
		].join(" ");
	})
);

app.get("/api/persons", (req, res) => {
	Person.find({}).then((persons) => {
		res.json(persons.map((person) => person.toJSON()));
	});
});

app.get("/api/persons/:id", (req, res, next) => {
	Person.findById(req.params.id)
		.then((person) => {
			if (person) {
				res.json(person.toJSON());
			} else {
				res.status(404).end();
			}
		})
		.catch((error) => next(error));
});

app.get("/info", (req, res) => {
	const currentDate = new Date().toLocaleString();
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	Person.find({}).then((persons) => {
		res.send(
			`
            <div>
                <p>Phonebook has info for ${persons.length} people</p>
            </div>
            <div>
                <p>${currentDate} (${timeZone})</p>
            </div>`
		);
	});
});

app.post("/api/persons", (req, res, next) => {
	const body = req.body;

	const personName = body.name;
	const personNumber = body.number;

	if (Object.keys(body).length === 0) {
		return res.status(400).json({
			error: "content missing",
		});
	}

	const person = new Person({
		name: personName,
		number: personNumber,
	});

	person
		.save()
		.then((savedPerson) => savedPerson.toJSON())
		.then((savedAndFormattedPerson) => {
			console.log(
				`added ${person.name} number ${person.number} to phonebook`
			);
			res.json(savedAndFormattedPerson);
		})
		.catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
	Person.findByIdAndRemove(req.params.id)
		.then(() => {
			res.status(204).end();
		})
		.catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
	const body = req.body;

	const person = {
		name: body.name,
		number: body.number,
	};

	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then((updatedPerson) => {
			res.json(updatedPerson.toJSON());
		})
		.catch((error) => next(error));
});

const errorHandler = (error, req, res, next) => {
	console.error(error.message);

	if (error.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	} else if (error.name === "ValidationError") {
		return res.status(400).json({ error: error.message });
	}
	next(error);
};

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
