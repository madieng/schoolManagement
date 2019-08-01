import Axios from "axios";

function findAll() {
  return Axios.get("http://localhost:8000/api/schools");
}

function remove(id) {
  return Axios.delete(`http://localhost:8000/api/schools/${id}`);
}

export default {
  findAll,
  remove
};
