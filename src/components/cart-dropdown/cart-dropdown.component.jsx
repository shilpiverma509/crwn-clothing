import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors'


const CartDropdown = (props)=>{
  console.log(props)
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
    {props.cartItems.map((item)=>
      <CartItem key={item.id} item={item} />
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)}
const mapStateToProps = (state)=>({
  cartItems:selectCartItems(state)
});
export default connect(mapStateToProps,null) (CartDropdown);