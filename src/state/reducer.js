export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "initializeStore":
      return { ...state, ...payload, isFetching: false };
    case "addVariantToCart":
      return {
        ...state,
        checkout: payload,
        isCartOpen: true,
        isUpdating: false,
      };
    case "updateQuantityInCart":
      return { ...state, checkout: payload, isUpdating: false };
    case "removeLineItemInCart":
      return { ...state, checkout: payload, isUpdating: false };
    case "openCart":
      return { ...state, isCartOpen: true };
    case "closeCart":
      return { ...state, isCartOpen: false };
    case "fetching":
      return { ...state, isFetching: true };
    case "updating":
      return { ...state, isUpdating: true };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
