import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import { reducer } from "./reducer";
import { actions } from "./actions";

const initialState = {
  client: null,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  isFetching: false,
  isUpdating: false,
};

const StoreContext = createContext(initialState);

export const StoreProvider = ({ storefrontAccessToken, domain, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedActions = useMemo(() => actions(state, dispatch), [
    state,
    dispatch,
  ]);

  useEffect(() => {
    memoizedActions.initializeStore({ storefrontAccessToken, domain });
  }, []);

  return (
    <StoreContext.Provider
      value={useMemo(
        () => ({
          ...state,
          ...memoizedActions,
        }),
        [state, memoizedActions]
      )}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
