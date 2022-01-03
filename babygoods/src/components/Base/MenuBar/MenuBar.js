import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const MenuBar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Home" component={Link} to="/mainHome" />
          <Tab label="introduce" component={Link} to="/introduce" />
          <Tab label="introduce" component={Link} to="/introduce" />
        </Tabs>
      </Box>
    </Fragment>
  );
};

export default MenuBar;
