import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
const items = [
  {
    key: "1",
    icon: <ShoppingCartOutlined />,
    label: <Link href="/dashboard/products">Products</Link>,
  },

  {
    key: "2",
    label: <Link href="/dashboard/categorie">Categories</Link>,
  },

  {
    key: "3",
    label: <Link href="/dashboard/brand">Brands</Link>,
  },

  {
    key: "4",
    label: <Link href="/dashboard/client">Client</Link>,
  },
];

export default items;
