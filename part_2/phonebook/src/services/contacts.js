import axios from 'axios';
const baseUrl = 'http://localhost:3001/contacts';

const getAll = async () => {
  return await axios.get(baseUrl).then((resp) => resp.data);
};

const create = async (newContact) => {
  return await axios.post(baseUrl, newContact).then((resp) => resp.data);
};

const update = async (id, changes) => {
  return await axios.put(`${baseUrl}/${id}`, changes);
};

const destroy = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  destroy,
};
