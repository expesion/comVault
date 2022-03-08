import React from "react";
import { Link } from "react-router-dom";
import { Table, Pagination } from "rsuite";
import "rsuite/dist/rsuite.css";
const { Column, HeaderCell, Cell } = Table;
function DetailsTable({ jobs }) {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };
  const data = jobs.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });
  return (
    <>
      <Table height={400} data={data}>
        <Column width={200} fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>

        <Column width={200}>
          <HeaderCell>startTime</HeaderCell>
          <Cell dataKey="startTime" />
        </Column>

        <Column width={200}>
          <HeaderCell>endTime</HeaderCell>
          <Cell dataKey="endTime" />
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
          total={jobs.length}
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
export default DetailsTable;
