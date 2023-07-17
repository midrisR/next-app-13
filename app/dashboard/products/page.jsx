"use client";
import { useEffect, useState, useContext, useCallback } from "react";
import Table from "@/components/table";
import Pagination from "@/components/Pagination";
import DashboardLayout from "@/components/dashboard";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading";
import ModalDelete from "@/components/modal/delete";
import { GlobalContext } from "@/hooks/useContext";
import { useRouter } from "next/navigation";
function Products() {
  const { deleteProduct, getAllProduct, products } = useContext(GlobalContext);
  const { data: session, status } = useSession();
  const [productId, setProductId] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const openModal = (param) => {
    setProductId(param);
    setOpen((prev) => !prev);
  };

  const handleDete = async () => {
    await deleteProduct(productId);
    setOpen((prev) => !prev);
    getAllProduct(1);
  };

  useEffect(() => {
    if (status === "authenticated") {
      getAllProduct(1);
    }
  }, [status]);

  return (
    <DashboardLayout>
      <button onClick={() => router.refresh(window.location.href)}>
        reload
      </button>
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

export default Products;
