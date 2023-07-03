"use client";
import { createContext, useReducer, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import AppReducer from "./appReducer";

const initialState = {
  products: null,
  categories: null,
  brands: null,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const { id } = useParams();

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(true);
      getProductById(id);
      getCategorie();
      getBrand();
    }
    setLoading(false);
  }, [session, status, id]);

  async function getProductById(param) {
    const res = await fetch(`http://localhost:5000/api/product/${param}`, {
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const product = await res.json();
    dispatch({
      type: "GET_PRODUCTS",
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

  return (
    <GlobalContext.Provider value={{ ...state, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
