import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(private messengerService : MessengerService) { }

  ngOnInit(): void {

    this.messengerService.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  CartIsEmpty(){
    if(this.cartItems.length === 0){
      return true;
    }
    return false;
  }

  pushToCart(product:Product){
    this.cartItems.push({
      productId : product.id,
      productName : product.name,
      productQty : 1,
      productPrice : product.price
    })
  }

  productIsExists(product : Product){
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].productQty++;
        return true;
      }
    }
    return false;
  }

  updateCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.productQty * item.productPrice)
    })
  }

  addProductToCart(product : Product){
    if(this.CartIsEmpty()){
      this.pushToCart(product)
    }else{
      if(this.productIsExists(product)){
        console.log("product exists, qty increased.")
      }else{
        this.pushToCart(product)
      }
    }
    this.updateCartTotal();
  }

}
