const PORT = 3001;

const express = require("express");
const app = express();
const morgan = require("morgan");

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

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (req, res) => {
	res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id);
	const person = persons.find((person) => person.id === id);

	if (person) res.json(person);
	else res.status(404).end();
});

app.get("/info", (req, res) => {
	const currentDate = new Date().toLocaleString();
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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

app.post("/api/persons", (req, res) => {
	const id = Math.floor(Math.random() * 123987456);

	if (!req.body.name || !req.body.number) {
		return res.status(400).json({
			error: "person missing",
		});
	} else if (persons.some((e) => e.name === req.body.name)) {
		return res.status(400).json({
			error: "person already exists",
		});
	}

	const person = {
		id: id,
		name: req.body.name,
		number: req.body.number,
	};

	persons = persons.concat(person);

	res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id);
	persons = persons.filter((person) => person.id !== id);

	res.status(204).end();
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
