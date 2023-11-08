import axios from "axios";

export async function getCrayons() {
  const { data } = await axios.get("/api/crayon");
  return data;
}

export async function createCrayon(crayon) {
  const { data } = await axios.post("/api/crayon", crayon);
  return data;
}

export async function updateCrayon(id, crayon) {
  const { data } = await axios.put(`/api/crayon/${id}`,  crayon);
  return data;
}

export async function deleteCrayon(id) {
  const { data } = await axios.delete(`/api/crayon/${id}`);
  return data;
}

export async function getBoxes() {
  const { data } = await axios.get("/api/box");
  return data;
}

export async function createBox(box) {
  const { data } = await axios.post("/api/box", box);
  return data;
}

export async function updateBox(id, box) {
  const { data } = await axios.put(`/api/box/${id}`, box);
  return data;
}

export async function deleteBox(id) {
  const { data } = await axios.delete(`/api/box/${id}`);
  return data;
}
