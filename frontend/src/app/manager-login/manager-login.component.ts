import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manager-login',
  templateUrl:'./manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username?: string;
  password?: string;
  isInvalid: boolean = false;

  onSubmit() {
    if (this.username && this.password) { // Check if username and password are not undefined
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          console.log('Login successful');
          this.isInvalid = false; // Reset error state
          this.router.navigate(['/manager-dashboard']);
        },
        (error) => {
          console.log('Invalid credentials');
          this.isInvalid = true; // Set error state
        }
      );
    } else {
      console.log('Username or password is undefined');
      // Handle the case where either username or password is undefined
    }
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-manager-login',
//   templateUrl: './manager-login.component.html',
//   styleUrls: ['./manager-login.component.css']
// })
// export class ManagerLoginComponent {
//   constructor(private router: Router) {}

//   username?: string;
//   password?: string;
//   isInvalid: boolean = false;

//   onSubmit() {
//     // Dummy data for authentication
//     const dummyUsername = 'admin';
//     const dummyPassword = 'password';

//     if (this.username === dummyUsername && this.password === dummyPassword) {
//       console.log('Login successful');
//       this.isInvalid = false; // Reset error state
//       this.router.navigate(['/manager-dashboard']);
//     } else {
//       console.log('Invalid credentials');
//       this.isInvalid = true; // Set error state
//     }
//   }
// }

