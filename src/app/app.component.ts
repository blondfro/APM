import {Component} from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}


// Original code
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
