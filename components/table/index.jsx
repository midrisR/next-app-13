export default function Table({ columns, dataSource }, props) {
  console.log(props);

  return (
    <>
      <table className="divide-y-2 w-full divide-gray-200 bg-white text-sm lowercase">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {dataSource.map((data, i) => (
            <tr key={i}>
              {columns.map((col, j) => (
                <td
                  key={j}
                  className="whitespace-nowrap px-4 py-2 text-gray-800"
                >
                  {data[col.dataIndex]}
                </td>
              ))}
              <td>{props}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
