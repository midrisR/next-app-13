"use client";
import { useEffect, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { GlobalContext } from "@/hooks/useContext";
import DashboardLayout from "@/components/dashboard";
import Table from "@/components/table";
import Pagination from "@/components/Pagination";
import ModalDelete from "@/components/modal/delete";
import Loading from "@/components/loading";

export default function Page() {
  const { id } = useParams();
  const { data: session, status } = useSession();
  const { deleteProduct, getAllProduct, products } = useContext(GlobalContext);
  const [productId, setProductId] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (param) => {
    setProductId(param);
    setOpen((prev) => !prev);
  };

  const handleDete = () => {
    deleteProduct(productId);
    setOpen((prev) => !prev);
    getAllProduct(id);
  };

  useEffect(() => {
    if (status === "authenticated") {
      getAllProduct(id);
    }
  }, [status]);

  return (
    <DashboardLayout>
      {open ? (
        <ModalDelete
          openModal={openModal}
          deleteProduct={handleDete}
          open={open}
        />
      ) : null}
      {products !== null ? (
        <>
          <Table data={products.products} openModal={openModal} />
          <Pagination
            totalItems={products.totalProducts}
            currentPage={products.currentPage}
            itemsPerPage={10}
            renderPageLink={(page) => `/dashboard/products/${page}`}
          />
        </>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
}
