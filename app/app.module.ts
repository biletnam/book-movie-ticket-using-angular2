import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { MovieListComponent }  from './movie-list.component';
import { CartComponent } from './cart.component';

const appRoutes: Routes = [
  { path: '', component: MovieListComponent },
  
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, MovieListComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
