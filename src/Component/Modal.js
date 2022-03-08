import React from "react";
import { Modal, Button, Form } from "rsuite";
export const ModalForm = ({
  open,
  handleClose,
  handleSubmit,
  setFormValue,
  formValue,
  editFileServer,
}) => {
  console.log(formValue);
  return (
    <div className="modal-container">
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            layout="horizontal"
            onChange={(fv) => setFormValue(fv)}
            formValue={formValue}
          >
            <Form.Group controlId="name">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Name is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="ipAddress">
              <Form.ControlLabel>IP Address</Form.ControlLabel>
              <Form.Control name="ipAddress" type="ipAddress" />
              <Form.HelpText>IP Address</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="operatingSystem">
              <Form.ControlLabel>Operating System</Form.ControlLabel>
              <Form.Control name="operatingSystem" />
              <Form.HelpText>Operating System is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="softwareVersion">
              <Form.ControlLabel>Software Version</Form.ControlLabel>
              <Form.Control name="softwareVersion" />
              <Form.HelpText>Software Version is required</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={formValue.id ? editFileServer : handleSubmit}
            appearance="primary"
          >
            Create
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
