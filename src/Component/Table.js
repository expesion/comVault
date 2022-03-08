import React from "react";
import { Link } from "react-router-dom";
import { Table, Pagination } from "rsuite";
import "rsuite/dist/rsuite.css";
const { Column, HeaderCell, Cell } = Table;
const OperatingSystem = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>{rowData.operatingSystem === 1 ? "Linux" : "Windows"}</Cell>
);
const Name = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <Link
      style={{ display: "block", margin: "1rem 0" }}
      to={`/details/${rowData.id}/${rowData.name}/${rowData.ipAddress}/${rowData.operatingSystem}/${rowData.softwareVersion}`}
      key={rowData.id}
    >
      {rowData.name}
    </Link>
  </Cell>
);
function ServerTable({ fileServers, handleEdit, handleDelete }) {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };
  const data = fileServers.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });
  return (
    <>
      <Table height={400} data={data}>
        <Column width={200} fixed>
          <HeaderCell>Name</HeaderCell>
          <Name dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>IP Address</HeaderCell>
          <Cell dataKey="ipAddress" />
        </Column>

        <Column width={200}>
          <HeaderCell>Operating System</HeaderCell>
          <OperatingSystem dataKey="operatingSystem" />
        </Column>

        <Column width={200}>
          <HeaderCell>Software Version</HeaderCell>
          <Cell dataKey="softwareVersion" />
        </Column>
        <Column width={200} fixed="right">
          <HeaderCell>Action</HeaderCell>

          <Cell>
            {(rowData) => {
              return (
                <span>
                  <a onClick={() => handleEdit(rowData.id)}> Edit </a> |{" "}
                  <a onClick={() => handleDelete(rowData.id)}> Remove </a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={fileServers.length}
          limitOptions={[10, 20]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </>
  );
}
export default ServerTable;
