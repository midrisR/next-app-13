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
    title: "merk",
    icon: <FaTags />,
    link: "/dashboard/merk",
  },
  {
    title: "type",
    icon: <FaQrcode />,
    link: "/dashboard/type",
  },
  {
    title: "user",
    icon: <FaUserGroup />,
    link: "/dashboard/user",
  },
];
export default data;
