"use client";
import { useState } from "react";
import { getCategories } from "@/lib/api";
import { Table, Input, message, Tag, Flex } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Create from "./components/create";
import { deleteCategorie } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import Update from "./components/update";
export default function Categorie() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["categorie"], // tambahkan ke queryKey
    queryFn: getCategories,
    keepPreviousData: true,
  });

  const { mutate: removeCategorie } = useMutation({
    mutationFn: ({ id, token }) => deleteCategorie(id, token),
    onSuccess: () => {
      message.success("categorie berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["categorie"] });
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
      title: "Published",
      dataIndex: "published",
      key: "published",
      render: (_, { published }) => (
        <Tag color={published ? "green" : "red"} key={published}>
          {published ? "True" : "Disable"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Flex gap="small">
          <ModalDelete
            handleDelete={() =>
              removeCategorie({ id: record.id, token: session?.accessToken })
            }
          />
          <Update id={record.id} />
        </Flex>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto shadow rounded bg-white py-4 px-4">
      <div className="mb-4">
        <Create accessToken={session?.accessToken} />
      </div>
      <Table
        columns={columns}
        dataSource={data || []}
        loading={isLoading}
        rowKey="id"
        pagination={{
          position: ["bottomCenter"],
          pageSize: 10,
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
