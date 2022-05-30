export type boxListType = {
  image: string;
  title?: string;
  name: string;
  sub: string;
  priceOld?: number;
  priceNew?: number;
};

export const boxList: boxListType[] = [
  {
    image:
      "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/09/banner-32.jpg",
    title: "Smart phone",
    name: "Samsung note 21",
    sub: "Discounted Price",
    priceOld: 390,
    priceNew: 490,
  },
  {
    image:
      "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/09/banner-33.jpg",
    title: "Power bank",
    name: "New power double",
    sub: "Discounted Price",
    priceOld: 190,
    priceNew: 290,
  },
  {
    image:
      "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/09/banner-31.jpg",
    title: "Headphone",
    name: "Harman Cardon",
    sub: "Discounted Price",
    priceOld: 390,
    priceNew: 590,
  },
];

export const boxListDiscount: boxListType[] = [
  {
    image:
      "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/06/banner-2.jpg",
    name: "Smart Telephones",
    sub: "%10 Discount",
  },
  {
    image:
      "https://ninetheme.com/themes/venam/v1/wp-content/uploads/2021/08/banner-1.jpg",
    name: "Smart Televisons",
    sub: "%10 Discount",
  },
];
