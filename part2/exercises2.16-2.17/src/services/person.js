import axios from "axios";

const URL = "api/persons";

const getPerson = () => {
	const req = axios.get(URL);
	return req.then((res) => res.data);
};

const createPerson = (newPerson) => {
	const req = axios.post(URL, newPerson);
	return req.then(response => response.data)

};

const updatePerson = (id, newPerson) => {
	const req = axios.put(`${URL}/${id}`, newPerson);
	return req.then(response => response.data)
};

const deletePerson = (id) => {
	const req = axios.delete(`${URL}/${id}`);
	return req.then(response => response.data)
};

export default { getPerson, createPerson, updatePerson, deletePerson };
