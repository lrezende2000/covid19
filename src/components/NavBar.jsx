import React, { memo } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

function NavBar() {
  return (
    <NavContainer>

      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          Home
        </Link>

        <Link to="/graphics">
          Graphics
        </Link>
      </Breadcrumbs>

    </NavContainer>
  );
}

export default memo(NavBar);
