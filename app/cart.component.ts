import { Component } from '@angular/core';

@Component({
  selector: 'cart',
  template: ` Cart: 
  <ul>
  	<li *ngFor="let cartItem of cartList;let i = index;">{{cartItem}} <span (click)="removeMovie(i)" > x </span></li>
  </ul>
  <a routerLink="/"> Go to Movies List</a>
  `,
})
export class CartComponent  {
	cartList = JSON.parse(localStorage.getItem('cartItems'));
	constructor() {
		
		console.log(this.cartList);
	}
	public removeMovie(index:string) {
		this.cartList.splice(index,1);
		localStorage.setItem('cartItems',JSON.stringify(this.cartList));
	}
	
}