import { Component } from '@angular/core';

@Component({
  template: `<h1>Movies List</h1>
  	<ul>
  		<li *ngFor="let movie of movies"><a (click)="recieveMovie(movie)">{{movie}}</a></li>
  	</ul>
  	<a routerLink = "/cart"> My Cart</a>
  `,
})
export class MovieListComponent  {
	movies: string[] = ['Raees', 'Kaabil', 'Bahubali returns'];
	cart: string[] = [];
	constructor() {
		//localStorage.clear();
	}
	public recieveMovie(movieName:string) {
		if(localStorage.getItem('cartItems') != null) {
			this.cart = JSON.parse(localStorage.getItem('cartItems'));
			if(this.cart.indexOf(movieName) == -1) {
				this.cart.push(movieName);
				console.log(this.cart);
				localStorage.setItem('cartItems', JSON.stringify(this.cart));	
			}
		} else {
			if(this.cart.indexOf(movieName) == -1) {
				this.cart.push(movieName);
				console.log(this.cart);
				localStorage.setItem('cartItems', JSON.stringify(this.cart));	
			}
		}
	}
}