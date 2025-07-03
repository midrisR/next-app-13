"use client";
import { useState } from "react";
import { message, Table, Flex } from "antd";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getQuestion, deleteQuestion } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import Update from "./components/update";

export default function Employe() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading } = useQuery({
    queryKey: ["question"], // tambahkan ke queryKey
    queryFn: getQuestion,
    keepPreviousData: true,
  });

  const { mutate: removeQuestion } = useMutation({
    mutationFn: ({ id, accessToken }) => deleteQuestion({ id, accessToken }),
    onSuccess: () => {
      message.success("question berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["question"] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const options = {
    day: "numeric", //'2-digit' -> 02 , numeric 2
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // pakai 24 jam
    timeZone: "Asia/Jakarta",
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (_, record) => {
        const date = new Date(record.createdAt);
        const formatted = date.toLocaleString("id-ID", options);
        const finalFormatted = formatted.replace("pukul", ", jam");
        return <p>{finalFormatted}</p>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Flex gap="small">
          <ModalDelete
            handleDelete={() =>
              removeQuestion({
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
