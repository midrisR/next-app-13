import {
  FaBasketShopping,
  FaTags,
  FaQrcode,
  FaUserGroup,
} from "react-icons/fa6";

const data = [
  {
    title: "products",
    icon: <FaBasketShopping />,
    link: "/dashboard/products",
  },
  {
    title: "categorie",
    icon: <FaQrcode />,
    link: "/dashboard/categorie",
  },
  {
    title: "brand",
    icon: <FaTags />,
    link: "/dashboard/brand",
  },
  {
    title: "user",
    icon: <FaUserGroup />,
    link: "/dashboard/user",
  },
];
export default data;
