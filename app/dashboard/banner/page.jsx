// import Table from "@/components/table";
import { getBanner } from "@/lib/api";
import Table from "@/components/table";
export default async function Banner() {
  const banner = await getBanner();
  const columns = [
    {
      title: "Information",
      dataIndex: "information",
      key: "information",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
  ];
  const results = banner.map((val) => ({
    information: val.information,
    image: val.images,
    created: val.createdAt,
    key: val.id,
  }));

  return <Table columns={columns} dataSource={results} />;
}
