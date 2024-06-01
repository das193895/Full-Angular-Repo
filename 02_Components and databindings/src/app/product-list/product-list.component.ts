import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name:string = "Amlan"
  addToCart:number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 0,
    pImage: '/assets/iphone.png'
  }

  discounted_price(){
    return this.product.price - (this.product.price * (this.product.discount / 100));
  }

  instock_or_not(){
    if(this.product.inStock == 0){
      return "There is no product left";

    }
    else {
      return "There is"+this.product.inStock+"products left"
    }
  }

  instock_or_not_amount(){
    if(this.product.inStock == 0){
      return false;
    }
    else{
      return true;
    }
  }

  onNameChange(event:any){
    this.name = event.target.value;

  }

  increment(){
    this.addToCart = this.addToCart + 1

  }

  decrement(){

    if(this.addToCart < 0){
      this.addToCart = 0;
    }

    this.addToCart = this.addToCart - 1

   

  }

}
