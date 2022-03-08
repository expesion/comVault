import React from "react";
import ServerTable from "./Component/Table";

function Servers({ fileServers, handleEdit, handleDelete }) {
  return (
    <div>
      <ServerTable
        fileServers={fileServers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Servers;
