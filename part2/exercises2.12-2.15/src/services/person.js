import axios from "axios";

const URL = "http://localhost:3001/persons";

const getPerson = () => {
	const req = axios.get(URL);
	return req.then((res) => res.data);
};

const createPerson = (newPerson) => {
	return axios.post(URL, newPerson);
};

const updatePerson = (id, newPerson) => {
	return axios.put(`${URL}/${id}`, newPerson)
};

const deletePerson = (id) => {
	return axios.delete(`${URL}/${id}`);
};

export default { getPerson, createPerson, updatePerson, deletePerson };
