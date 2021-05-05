import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = (props)=>{
  console.log("props",props);
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
      {props.cartItems.length ?(
        props.cartItems.map((item)=>(
          <CartItem key={item.id} item={item} />
          ))
      ):
        (<span className="empty-message">Your Cart is empty</span>)
      }
    </div>
    <CustomButton onClick={()=>{
      props.history.push('/checkout');
      props.dispatch(toggleCartHidden());
      }
    }>GO TO CHECKOUT</CustomButton>
  </div>
)}
const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps,null) (CartDropdown));