"use client";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/lib/getProduct";
import { Table, Input, message } from "antd";
import { deleteProduct, getBrands, getCategories } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import { useSession } from "next-auth/react";
import Create from "./components/create";
export default function Products() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Categorie",
      dataIndex: "Categorie",
      key: "categorie",
      render: (Categorie) => Categorie?.name,
    },
    {
      title: "Brand",
      dataIndex: "Brand",
      key: "brand",
      render: (Brand) => Brand?.name,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ModalDelete
          handleDelete={() =>
            removeProduct({ id: record.id, token: session?.accessToken })
          }
        />
      ),
    },
  ];

  // Fetch function
  const getAllData = async () => {
    const [products, brands, categories] = await Promise.all([
      getProducts({
        page,
        perPage,
        search: debouncedSearch, // gunakan debounced keyword
      }),
      getBrands(),
      getCategories(),
    ]);
    return { ...products, brands, categories };
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allData", page, perPage, debouncedSearch], // tambahkan ke queryKey
    queryFn: getAllData,
    keepPreviousData: true,
  });

  const { mutate: removeProduct } = useMutation({
    mutationFn: ({ id, token }) => deleteProduct(id, token),
    onSuccess: () => {
      message.success("Produk berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["allData"] });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4 px-4">
      <div className="flex justify-between mb-4">
        <Create
          categories={data?.categories}
          brands={data?.brands}
          accessToken={session?.accessToken}
        />
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data?.products || []}
        loading={isLoading}
        rowKey="id"
        onRow={() => {
          return {
            className: "hover:bg-gray-100 text-sm lowercase",
          };
        }}
        pagination={{
          position: ["bottomCenter"],
          total: data?.totalProducts,
          current: page,
          pageSize: perPage,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50", "100"],
          onChange: (newPage, newPageSize) => {
            setPage(newPage);
            setPerPage(newPageSize);
          },
        }}
      />
    </div>
  );
}
