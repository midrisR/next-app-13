"use client";
import { createContext, useReducer, useMemo } from "react";
import { useSession } from "next-auth/react";
import AppReducer from "./appReducer";
const initialState = {
  products: null,
  product: null,
  categories: null,
  brands: null,
  users: null,
  open: false,
};

const PER_PAGE = 10;

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { data: session } = useSession();

  const handleModal = () => {
    dispatch({
      type: "HANDLE_MODAL",
      payload: !state.open,
    });
  };

  async function getAllProduct({
    page = 1,
    perPage = 10,
    categories = "",
    brands = "",
    token,
  }) {
    const data = await fetch(
      `http://localhost:5000/apiproduct?categories=${categories}&brands=${brands}&page=${page}&perPage=${perPage}`,
      {
        headers: {
          Authorization: session?.accessToken,
        },
      }
    );
    const res = await data.json();
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: { products: res.products, total: res.products.totalProducts },
    });
  }

  async function getProductById(param) {
    const res = await fetch(`http://localhost:5000/apiproduct/${param}`, {
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
    const res = await fetch(`http://localhost:5000/apicategorie`, {
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
    const res = await fetch(`http://localhost:5000/apibrand`, {
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

  async function deleteProduct(id, token) {
    await fetch(`http://localhost:5000/apiproduct/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
  }
  async function deleteImage(id, token) {
    const res = await fetch(`http://localhost:5000/apiimage/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    const result = await res.json();
    return result;
  }

  async function deleteCategorie(id) {
    await fetch(`http://localhost:5000/apicategorie/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: session?.accessToken,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleModal,
        getAllProduct,
        getProductById,
        getCategorie,
        getBrand,
        deleteProduct,
        deleteImage,
        deleteCategorie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
