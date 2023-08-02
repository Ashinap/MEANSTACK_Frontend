import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpUsers:any[]=[];
  signupForm :FormGroup;
  submitted = false;
  
    // Add more fields as needed
    

  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  } // Inject the Router into the component


  ngOnInit(): void {
    // Read data from localStorage when the component initializes
    const storedUsers = localStorage.getItem('signUpUsers');
    if (storedUsers) {
      this.signUpUsers = JSON.parse(storedUsers);
    }
    this.signupForm.reset();
  }

  onSignupSubmit(){
    this.submitted = true;

    if (this.signupForm.invalid) {
      // If the form is invalid, do not proceed with submission
      return;
    }
    const formData = this.signupForm.value;

   this.signUpUsers.push(formData);
   localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))

   window.alert('Signup successful!');
    console.log('Signup form submitted:', this.signupForm.value);
    this.signupForm.reset();
    this.submitted = false;
  
    this.router.navigate(['/login']);
  }
 
}


