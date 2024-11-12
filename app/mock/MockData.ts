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
    url: "/v1731353179/p-24-sm.webp",
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
    url: "/v1731353182/p-27-sm.webp",
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
    url: "/v1731353185/p-29-sm.webp",
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
    url: "/v1731353147/p-1.webp",
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
    url: "/v1731353149/p-2.webp",
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
    url: "/v1731353167/p-8.webp",
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
    url: "/v1731353155/p-4.webp",
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
    url: "/v1731353158/p-5.webp",
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
    url: "/v1731353161/p-6.webp",
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
    url: "/v1731353164/p-7.webp",
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
    url: "/v1731353152/p-3.webp",
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
    url: "/v1731353169/p-9.webp",
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
    url: "/v1731353172/p-10.webp",
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

const newArrivalsProducts: IProductCardDetails[] = [
  {
    url: "/v1731353910/1.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353913/2.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353917/3.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353920/4.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353923/5.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353927/6.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353931/7.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353934/8.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353938/9.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
  {
    url: "/v1731353941/10.webp",
    title: "Roadster Women Round Neck",
    description:
      "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
    price: 18.59,
    oldPrice: 0,
    soldQuantity: 10,
    soldPercentage: 10,
    available: 100,
  },
];

const brands = [
  {
    name: "Hunter Shoes",
    url: "/v1731353092/hunter-shoes.webp",
  },
  {
    name: "Club Shoes",
    url: "/v1731353080/club-shoes.webp",
  },
  {
    name: "Hoppister",
    url: "/v1731353090/hoppister.webp",
  },
  {
    name: "Blaze Fashion",
    url: "/v1731353078/blaze-fashion.webp",
  },
  {
    name: "Elegance",
    url: "/v1731353082/elegance.webp",
  },
  {
    name: "Fashadil",
    url: "/v1731353085/fashadil.webp",
  },
  {
    name: "Shovia",
    url: "/v1731353095/shovia.webp",
  },
  {
    name: "Fusion",
    url: "/v1731353087/fusion.webp",
  },
  {
    name: "Hunter Shoes",
    url: "/v1731353092/hunter-shoes.webp",
  },
  {
    name: "Club Shoes",
    url: "/v1731353080/club-shoes.webp",
  },
  {
    name: "Hoppister",
    url: "/v1731353090/hoppister.webp",
  },
  {
    name: "Blaze Fashion",
    url: "/v1731353078/blaze-fashion.webp",
  },
  {
    name: "Elegance",
    url: "/v1731353082/elegance.webp",
  },
  {
    name: "Fashadil",
    url: "/v1731353085/fashadil.webp",
  },
  {
    name: "Shovia",
    url: "/v1731353095/shovia.webp",
  },
  {
    name: "Fusion",
    url: "/v1731353087/fusion.webp",
  },
];

const categories = [
  {
    name: "Woman",
    url: "/v1731352837/woman.webp",
  },
  {
    name: "Man",
    url: "/v1731352830/man.webp",
  },
  {
    name: "Watch",
    url: "/v1731352836/watch.webp",
  },
  {
    name: "Kids",
    url: "/v1731352828/kid.webp",
  },
  {
    name: "Sports",
    url: "/v1731352833/sports.webp",
  },
  {
    name: "Sunglass",
    url: "/v1731352834/sunglass.webp",
  },
  {
    name: "Bags",
    url: "/v1731352827/bags.webp",
  },
  {
    name: "Sneakers",
    url: "/v1731352831/sneakers.webp",
  },
  {
    name: "Woman",
    url: "/v1731352837/woman.webp",
  },
  {
    name: "Man",
    url: "/v1731352830/man.webp",
  },
  {
    name: "Watch",
    url: "/v1731352836/watch.webp",
  },
  {
    name: "Kids",
    url: "/v1731352828/kid.webp",
  },
  {
    name: "Sports",
    url: "/v1731352833/sports.webp",
  },
  {
    name: "Sunglass",
    url: "/v1731352834/sunglass.webp",
  },
  {
    name: "Bags",
    url: "/v1731352827/bags.webp",
  },
  {
    name: "Sneakers",
    url: "/v1731352831/sneakers.webp",
  },
];

export {
  bestSellersProducts,
  brands,
  categories,
  flashSaleProducts,
  navBarItems,
  newArrivalsProducts,
};
