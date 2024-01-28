import axios from "axios";
import { BASE_URL } from "../constants";

export const getItems = async () => {
  try {
    const { data: items } = await axios.get(`${BASE_URL}/items`);
    if (items.success) {
      return items.data;
    }
  } catch (error) {
    return false;
  }
}

export const getItemById = async (id) => {
  try {
    const { data: item } = await axios.get(`${BASE_URL}/items/${id}`);
    if (item.success) {
      return item.data;
    }
  } catch (error) {
    return false;
  }
}

export const createItem = async (item) => {
  try {
    const { data: newItem } = await axios.post(`${BASE_URL}/items`, item);
    if (newItem.success) {
      return newItem.data;
    }
  } catch (error) {
    return false;
  }
}

export const updateItem = async (id, item) => {
  try {
    const { data: updatedItem } = await axios.patch(`${BASE_URL}/items/${id}`, item);
    if (updatedItem.success) {
      return updatedItem.data;
    }
  } catch (error) {
    return false;
  }
}

export const deleteItem = async (id) => {
  try {
    const { data: deletedItem } = await axios.delete(`${BASE_URL}/items/${id}`);
    if (deletedItem.success) {
      return true;
    }
  } catch (error) {
    return false;
  }
}