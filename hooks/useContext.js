"use client";
import { createContext, useReducer } from "react";
import { useSession } from "next-auth/react";
import AppReducer from "./appReducer";

const initialState = {
  products: null,
  product: null,
  categories: null,
  brands: null,
};

const PER_PAGE = 10;

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { data: session } = useSession();

  async function getAllProduct(page) {
    const data = await fetch(
      `http://localhost:5000/api/product?page=${page}&perPage=${PER_PAGE}`,
      {
        headers: {
          Authorization: session?.accessToken,
        },
      },
      { next: { revalidate: 10 } }
    );
    const { products } = await data.json();
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: products,
    });
  }

  async function getProductById(param) {
    const res = await fetch(`http://localhost:5000/api/product/${param}`, {
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const product = await res.json();
    dispatch({
      type: "GET_PRODUCTS_BY_ID",
      payload: product,
    });
  }

  async function getCategorie() {
    const res = await fetch(`http://localhost:5000/api/categorie`, {
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const categorie = await res.json();
    dispatch({
      type: "GET_CATEGORIES",
      payload: categorie,
    });
  }

  async function getBrand() {
    const res = await fetch(`http://localhost:5000/api/brand`, {
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const brand = await res.json();
    dispatch({
      type: "GET_BRANDS",
      payload: brand,
    });
  }

  async function deleteProduct(id) {
    const res = await fetch(`http://localhost:5000/api/product/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const result = await res.json();
    return result;
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getAllProduct,
        getProductById,
        getCategorie,
        getBrand,
        deleteProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
