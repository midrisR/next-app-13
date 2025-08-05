"use client";
import { useState } from "react";
import { message, Table, Flex } from "antd";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getClient, deleteClient } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import Update from "./components/update";
import Create from "./components/create";
export default function Brand() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading } = useQuery({
    queryKey: ["client"], // tambahkan ke queryKey
    queryFn: getClient,
    keepPreviousData: true,
  });

  const { mutate: removeBanner } = useMutation({
    mutationFn: ({ id, accessToken }) => deleteClient({ id, accessToken }),
    onSuccess: () => {
      message.success("client berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["client"] });
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Flex gap="small">
          <ModalDelete
            handleDelete={() =>
              removeBanner({
                id: record.id,
                accessToken: session?.accessToken,
              })
            }
          />
          <Update id={record.id} accessToken={session?.accessToken} />
        </Flex>
      ),
    },
  ];

  return (
    <div className="bg-white rounded p-8">
      <Create accessToken={session?.accessToken} />
      <Table
        columns={columns}
        dataSource={data || []}
        loading={isLoading}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          position: ["bottomCenter"],
          pageSize: perPage,
          onChange: (newPage, newPageSize) => {
            setPerPage(newPageSize);
          },
        }}
        onRow={() => {
          return {
            className: "hover:bg-gray-100 text-sm lowercase",
          };
        }}
      />
    </div>
  );
}
