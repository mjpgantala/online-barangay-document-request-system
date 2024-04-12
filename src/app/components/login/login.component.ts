import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginAlert(){
  Swal.fire({
    title: 'Invalid Username/Password!',
    text: 'Please Try Again!',
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

  
}
