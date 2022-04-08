import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EmailIcon from "@mui/icons-material/Email";

const BottomBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction
            label="New Budget"
            icon={<AddBoxIcon />}
            href="/BudgyApp"
          />
          <BottomNavigationAction
            label="Email"
            icon={<EmailIcon />}
            onClick={() => window.open("mailto:budgysupport@gmail.com")}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomBar;
