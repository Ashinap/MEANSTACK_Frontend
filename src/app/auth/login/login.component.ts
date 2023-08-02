import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  loginForm: FormGroup; // Declare loginForm as a FormGroup
  registeredUsers: any[] = [];

  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({ // Initialize loginForm as a FormGroup
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  } // Inject the Router into the component
  ngOnInit(): void {
  
    const storedUsers = localStorage.getItem('signUpUsers');
    if (storedUsers) {
      this.signUpUsers = JSON.parse(storedUsers);
    }
  }

  
  signUpUsers: any[] = [];


  onLoginSubmit(): void {
    const user = this.signUpUsers.find(
      (u) => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
    );
    console.log("Userrrr",user)
    if (user) {
    
     alert('Login successful!');
     this.router.navigate(['/task-list']);
        } else {

   
      alert('Login failed. Invalid email or password.');
     
    }
   
    this.loginForm.reset(); 
  }

}

