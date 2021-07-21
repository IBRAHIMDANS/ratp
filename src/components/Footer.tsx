import React from "react";
import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";


const StyledFooter = styled(BottomNavigation)`
  width: 100%;
  
  .MuiBottomNavigationAction-root {
    max-width: 200px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter showLabels>
      <BottomNavigationAction
        label="Made with ❤️ &nbsp; by @Ibrahimdans"
        icon={<GitHub/>}
        onClick={() => window && window.open("https://github.com/ibrahimdans")}
      />
    </StyledFooter>
  );
};
