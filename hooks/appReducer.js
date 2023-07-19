export default (state, action) => {
  switch (action.type) {
    case "HANDLE_MODAL":
      return {
        ...state,
        open: action.payload,
      };
    case "GET_ALL_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCTS_BY_ID":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_BRANDS":
      return {
        ...state,
        brands: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
