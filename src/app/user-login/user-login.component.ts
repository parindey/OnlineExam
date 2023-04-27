// 



import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { UserService } from '../user.service';
// import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  sessionUser : any= sessionStorage.getItem("userId");
  form1  : any;
  login : Login = new Login();
  message: any;
  constructor(private userService: UserService, private router: Router) {​​​​ }​​​


  logout() {
    sessionStorage.clear();
  }
  loginCheck() {​​​​
  console.log(this.login);

  this.userService.login(this.login).subscribe(response => {​​​​
    // Swal(
    //   response.status,
    //   response.message
    // )
    alert("logged in successfully");

    console.log(response);

    if(response.status == 'SUCCESS') {​​​​



      sessionStorage.setItem('email',String(this.login.email) );
      sessionStorage.setItem('userId',response.userId );

      this.router.navigate(['userDashboard']);

    }​​​​

    else{
      this.router.navigate(['user_registration']);
      this.message = response.message;
    }
  }​​​​)

}​​​​


  ngOnInit() {
    this.form1 = new FormGroup (
      {
        email: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')])
      }
    )
  }

}
// function Swal(status: any, message: any) {
//   throw new Error('Function not implemented.');
// }

