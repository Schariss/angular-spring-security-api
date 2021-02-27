import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,
    private authService: AuthenticationService) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticate())
      this.authService.loadToken();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
      
}
