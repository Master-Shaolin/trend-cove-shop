import { IProductCardDetails, NavBarItem } from "@/types";

const navBarItems: NavBarItem[] = [
  {
    id: "42814926-3205-46b2-9b95-cf33cb24d4f2",
    title: "Men Wear",
    url: "/",
    hasMenu: true,
    menus: [
      {
        submenus: [
          {
            id: "79d70edd-ee36-40b9-9796-55445b7a7983",
            title: "Top Wear",
            url: "",
            childs: [
              {
                id: "c2e196b7-4355-4616-8553-8a75d4c7e24d",
                title: "T-Shirt",
                url: "/",
              },
              {
                id: "7fb9f2ec-f3ce-4071-8094-6882de338598",
                title: "Casual Shirts",
                url: "/",
              },
              {
                id: "44dcf2be-ae68-4e3d-9605-0c29f4bc9ba6",
                title: "Formal Shirts",
                url: "/",
              },
              {
                id: "f30ec831-1fb1-4024-88ea-a7dd57ac8091",
                title: "Blazwers & Coats",
                url: "/",
              },
              {
                id: "3e5ba974-bbfb-40c4-9f4b-17ab8b9b9b2a",
                title: "Suits",
                url: "/",
              },
              {
                id: "3e5ba974-bbfb-40c4-9f4b-17ab8b9b9b2a",
                title: "Jackets",
                url: "/",
              },
            ],
          },
          {
            id: "0ff7ed27-7709-42dc-b30a-cd611a166053",
            title: "Belt, Scarves & More",
            url: "",
            childs: undefined,
          },
          {
            id: "0c4eac4f-4975-43a2-9c65-6e733a8ccf37",
            title: "Watches & Wearables",
            url: "",
            childs: undefined,
          },
        ],
      },
      {
        submenus: [
          {
            id: "79d70edd-ee36-40b9-9796-55445b7a7983",
            title: "Western Wear",
            url: "",
            childs: [
              {
                id: "c2e196b7-4355-4616-8553-8a75d4c7e24d",
                title: "Dresses",
                url: "/",
              },
              {
                id: "7fb9f2ec-f3ce-4071-8094-6882de338598",
                title: "Jumpsuits",
                url: "/",
              },
              {
                id: "4ec5db6f-e5bc-4c15-9139-96083a2108fd",
                title: "Tops, T-Shirts & Shirts",
                url: "/",
              },
              {
                id: "98de2d49-c578-4d56-8176-c6b70ff1f56f",
                title: "Shorts & Skirts",
                url: "/",
              },
              {
                id: "9538800c-720d-4d79-8b3f-edc52c90dc53",
                title: "Shrugs",
                url: "/",
              },
              {
                id: "282b1812-5595-4f50-bdc0-4b71025d098d",
                title: "Blazers",
                url: "/",
              },
            ],
          },
          {
            id: "09af88cb-ee50-4740-a816-e799fc63d03c",
            title: "Plus size",
            url: "",
            childs: undefined,
          },
          {
            id: "56f67b45-3af7-4b90-b936-d6234dbc6741",
            title: "Sunglasses & Frames",
            url: "",
            childs: undefined,
          },
        ],
      },
    ],
  },
  {
    id: "47db2d1e-694e-4f33-9884-291fd13035c5",
    title: "Women Wear",
    url: "/",
    hasMenu: true,
  },
  {
    id: "80d154ea-e18c-490e-80f1-73f8c7180083",
    title: "Search",
    url: "/search",
    hasMenu: false,
  },
  {
    id: "d02e5ae1-d1c1-4ad4-a81e-addaaaaae42e",
    title: "Shops",
    url: "/shops",
    hasMenu: false,
  },
  {
    id: "c2c6a3e9-1942-4430-977b-32592355d116",
    title: "Pages",
    url: "/",
    hasMenu: true,
  },
];

const flashSaleProducts: IProductCardDetails[] = [
  {
    url: "/products/p-24-sm-2WHOqtA7lEf2aYTpDRD5bql1QWQNCF.png",
    title: "NIKE Shoes",
    description:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: 50.0,
    oldPrice: 80.0,
    soldQuantity: 180,
    soldPercentage: 56,
    available: 140,
  },
  {
    url: "/products/p-27-sm-S6vjZrKsq4T4a2AgPBvARQud7TABVl.png",
    title: "Wayfarer Sunglasses",
    description:
      "Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.",
    price: 20.0,
    oldPrice: 25.0,
    soldQuantity: 120,
    soldPercentage: 45,
    available: 147,
  },
  {
    url: "/products/p-29-sm-XU04uHFoEL1BqEKNqUVRL775bvZDgY.png",
    title: "REDQ Steel Watch",
    description:
      "The Black Bay celebrates 60 years of diving watches with extraordinary heritage. The iconic model inherits the general lines.",
    price: 80.0,
    oldPrice: 120.0,
    soldQuantity: 180,
    soldPercentage: 56,
    available: 140,
  },
];

const bestSellersProducts: IProductCardDetails[] = [
  {
    url: "/products/p-1-RWoVJTXXdjVGrk8flWCpvbPBgqLN9g.png",
    title: "Nike Black",
    description:
      "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world",
    price: 11.0,
    oldPrice: 15.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-2-LpzwF94CXrBDgQ15AR9UcY1rVFA25x.png",
    title: "Hermes  Carlton London",
    description:
      "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: 12.3,
    oldPrice: 16.38,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-8-8rleWtcjtDSwVQFoPMjQ3ajlXdwepv.png",
    title: "Zara Shoes Green",
    description:
      "Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
    price: 50.0,
    oldPrice: 0.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-4-LnfKuGSJI2S12x9WOzqpk22ppCEPVw.png",
    title: "Regular Fit Flannel Shirt",
    description:
      "The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment.",
    price: 8,
    oldPrice: 0.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-5-20mLMbjRe5vn6HbTal8TwjM79nyy9f.png",
    title: "12 Eco-Friendly Clothing Brands That",
    description:
      "12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
    price: 20.0,
    oldPrice: 28.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-6-pTbT4in9YY8UjSXyznj3PsxN17FwdA.png",
    title: "Oversized W Sweater",
    description:
      "Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante.",
    price: 55.0,
    oldPrice: 70.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-7-iT7PJ8ZQS74IytBohMsyruHNPB99FL.png",
    title: "Regular Fit Crew-neck T-shirt",
    description:
      "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
    price: 12.3,
    oldPrice: 16.38,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-3-k2v25ziCDGcJqBXjFUmfXWU2ud2WrJ.png",
    title: "Gucci Carlton UK",
    description:
      "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
    price: 14.99,
    oldPrice: 19.99,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },

  {
    url: "/products/p-9-FUM6BZ4j9C3lM2miku2j6Sa1FqOlUa.png",
    title: "Women Fitted Neck T-Shirt",
    description:
      "All about the crisp cut and exceptional quality of the cotton, the Women Fitted V Neck Rib L/S T-Shirt won’t be one you’ll be tossing away ever.",
    price: 28.0,
    oldPrice: 30.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/products/p-10-km3yUXQNJC3izEQajOnW68pw0jCvVO.png",
    title: "NIKE Shoes",
    description:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",
    price: 39.99,
    oldPrice: 0.0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
];

export { bestSellersProducts, flashSaleProducts, navBarItems };
