import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  
})
export class CustomerLoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Navigate to the desired page upon form submission
    this.router.navigate(['/user-dashboard']); // Replace '/user-dashboard' with the desired route
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Call the onSubmit method
      this.onSubmit();
    }
  }
}
