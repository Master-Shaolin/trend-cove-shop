import { NavBarItem } from "@/types";

const navBarItems: NavBarItem[] = [
  {
    id: "42814926-3205-46b2-9b95-cf33cb24d4f2",
    title: "Men Wear",
    url: "/",
    hasMenu: true,
    menus: [
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

export { navBarItems };
