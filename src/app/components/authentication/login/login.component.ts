import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private authenticationService:AuthenticationService) {}

ngOnInit() {
}
ngOnDestroy() {
}

onLogin(user:any){
this.authenticationService.login(user).subscribe(
resp => {
  let jwt = resp.headers.get("Authorization");
  this.authenticationService.saveToken(jwt);
  console.log(jwt);
  this.router.navigateByUrl('/produits');
},
err => {
  console.log("Error : " + err);
}
);
}


}
