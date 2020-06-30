import Client from "shopify-buy";

export const actions = (state, dispatch) => ({
  async initializeStore(config) {
    dispatch({ type: "fetching" });
    const client = Client.buildClient(config);
    const checkout = await client.checkout.create();
    const products = await client.product.fetchAll();
    const shop = await client.shop.fetchInfo();
    dispatch({
      type: "initializeStore",
      payload: { client, checkout, products, shop },
    });
  },
  async addVariantToCart(variantId, quantity) {
    dispatch({ type: "updating" });
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;
    const checkout = await state.client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    );
    dispatch({ type: "addVariantToCart", payload: checkout });
  },
  async updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    const checkout = await state.client.checkout.updateLineItems(
      checkoutId,
      lineItemsToUpdate
    );
    dispatch({ type: "updateQuantityInCart", payload: checkout });
  },
  async removeLineItemInCart(lineItemId) {
    const checkoutId = state.checkout.id;
    const checkout = await state.client.checkout.removeLineItems(checkoutId, [
      lineItemId,
    ]);
    dispatch({ type: "removeLineItemInCart", payload: checkout });
  },
  openCart() {
    dispatch({ type: "openCart" });
  },
  closeCart() {
    dispatch({ type: "closeCart" });
  },
});
