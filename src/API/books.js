import instance from "./axiosIndex";

const getAllBooks = async () => {
  const response = await instance.get("/books");
  return response.data;
};
const getOneBooks = async (id) => {
  const response = await instance.get(`/books/${id}`);
  return response.data;
};
const createBook = async (title, description, price, image) => {
  const response = await instance.post(`/books/${title}`); //complete
  return response.data;
};
