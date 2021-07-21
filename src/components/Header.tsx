import React from "react";
import styled from "styled-components";
import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

export function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StyledHeader = styled(AppBar)`
  flex-grow: 1;
`;
const Header = (props) => {
  return (
    <HideOnScroll {...props}>
      <StyledHeader>
        <Toolbar variant="dense">
          <Typography variant="h6">
            RATP LISTE DES COMMERCE
          </Typography>
        </Toolbar>
      </StyledHeader>
    </HideOnScroll>
  );
};

export default Header;
