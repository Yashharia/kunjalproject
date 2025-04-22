import { Fragment, useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import Contact from '../../component/contact/contact.component';
import Brand from '../../component/Brand/Brand.component';
import Sale from '../../component/sale/sale.component';
import newarrivals from '../../routes/new-arrivals/new-arrivals.component';
import PerfumeSimple from '../perfumesimple/perfumesimple.component';
import './navigation.styles';
import {SalerBanner} from './navigation.styles';
import MyAccount from '../../component/myaccount/myaccount.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks className='navigation-container'>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          <NavLink to='/sale'>SALE</NavLink> 
          <NavLink to='/brand'>BRAND</NavLink>
          <NavLink to="/perfumesimple">SIMPLE</NavLink>
          <div style={{ position: 'relative' }}>
            <NavLink to='/new-arrivals'>New Arrivals</NavLink>
            {newarrivals && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  backgroundColor: 'red',
                  color: 'white',
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                New!
              </span>
            )}
          </div>
          <NavLink to="/myaccount">My Account</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={()=>{signOutUser(navigate)}}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;