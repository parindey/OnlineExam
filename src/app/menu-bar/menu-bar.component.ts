// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-menu-bar',
// //   templateUrl: './menu-bar.component.html',
// //   styleUrls: ['./menu-bar.component.css']
// // })
// // export class MenuBarComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-menu-bar',
//   templateUrl: './menu-bar.component.html',
//   styleUrls: ['./menu-bar.component.css']
// })
// export class MenuBarComponent implements OnInit {

//   constructor(private router: Router) { }

//   sessionUser : any = sessionStorage.getItem("userId");
//   sessionAdmin : any = sessionStorage.getItem("adminId");
//   logout() {
//    sessionStorage.clear();
//   //  this.router.navigate[('')];
//    location.reload();
//  }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  sessionUser : any = sessionStorage.getItem("userId");
  sessionAdmin : any = sessionStorage.getItem("adminId");
  cwurl : any = window.location.href;
  logout() {
   sessionStorage.clear();
  //  this.router.navigate[('')];
   location.reload();
 }

  ngOnInit() {
  }

 

  

}


