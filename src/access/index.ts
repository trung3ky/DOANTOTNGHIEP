export const QueryApi = {
  host2: "https://357a-2402-800-620e-2000-9a0-faa1-dd06-a24c.ap.ngrok.io/",
  host1: "https://4ff5-2402-800-620e-2000-9a0-faa1-dd06-a24c.ap.ngrok.io/",
};

export const productAPI = () => QueryApi.host1 + "product";
export const productDetail = (id: any) =>
  QueryApi.host1 + `productDetail&id=${id}`;
export const productRecommended = (id: any) =>
  QueryApi.host2 + `recomender&id=${id}`;
