import {
  FaBasketShopping,
  FaTags,
  FaQrcode,
  FaUserGroup,
  FaUsers,
  FaUserTag,
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
    title: "client",
    icon: <FaUsers />,
    link: "/dashboard/client",
  },
  {
    title: "vendor",
    icon: <FaUserTag />,
    link: "/dashboard/vendor",
  },
  {
    title: "user",
    icon: <FaUserGroup />,
    link: "/dashboard/user",
  },
];
export default data;
