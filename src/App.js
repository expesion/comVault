import React from "react";
import Servers from "./Servers";
import TopNav from "./TopNav";
import { ModalForm } from "./Component/Modal";
import "./App.css";
import Axios from "axios";

const fetchServer = () => {
  return Axios.get(`http://localhost:3000/fileServers`);
};
function App() {
  const [fileServers, setFileServers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({});
  const [editingIndex, setEditingIndex] = React.useState(null);
  React.useEffect(() => {
    fetchServer().then(({ data }) => {
      setFileServers(data);
    });
  }, []);
  const addNewServer = (
    tableData = {
      id: 1000000,
      name: "testMEDCOM",
      ipAddress: "126.136.187.70",
      operatingSystem: 1,
      softwareVersion: "test",
    }
  ) => {
    Axios.post(`http://localhost:3000/fileServers`, tableData).then(() => {
      fetchServer().then(({ data }) => {
        setFileServers(data);
        setOpen(false);
      });
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    addNewServer({ ...formValue, id: fileServers.length + 1 });
    setFormValue({});
  };
  const handleEdit = (id) => {
    const server = fileServers.find((data) => data.id === id);
    setEditingIndex(id);
    setFormValue(server);
    setOpen(true);
  };
  const editFileServer = () => {
    Axios.patch(
      `http://localhost:3000/fileServers/${editingIndex}`,
      formValue
    ).then(() => {
      fetchServer().then(({ data }) => {
        setFileServers(data);
        setOpen(false);
        setFormValue({});
      });
    });
  };
  const deleteFileServer = (id) => {
    Axios.patch(`http://localhost:3000/fileServers/${id}`).then(() => {
      fetchServer().then(({ data }) => {
        setFileServers(data);
        setOpen(false);
        setFormValue({});
      });
    });
  };

  return (
    <div className="App">
      <TopNav handleOpen={handleOpen} />
      <Servers
        fileServers={fileServers}
        handleEdit={handleEdit}
        handleDelete={deleteFileServer}
      />
      <ModalForm
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleOpen={handleOpen}
        setFormValue={setFormValue}
        formValue={formValue}
        editFileServer={editFileServer}
      />
    </div>
  );
}

export default App;
