import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #ffff;
  
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
}

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const SaleBanner = styled.div`
  background-color: #e31b1b;
  width: 100%;
  padding: 10px 0;
  text-align: center;

  p {
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.5px;
  }
`;
