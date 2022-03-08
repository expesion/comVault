import React from "react";
import { ButtonToolbar, Button } from "rsuite";
function TopNav({ handleOpen }) {
  return (
    <ButtonToolbar>
      <Button appearance="ghost" onClick={handleOpen}>
        Add New Filerserver
      </Button>
    </ButtonToolbar>
  );
}

export default TopNav;
