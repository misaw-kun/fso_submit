import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = async () => {
  const resp = await axios.get(baseUrl);
  return resp.data;
};

const create = async (newContact) => {
  const resp = await axios.post(baseUrl, newContact);
  return resp.data;
};

const update = (id, changes) => {
  return axios.put(`${baseUrl}/${id}`, changes);
};

const destroy = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  destroy,
};
