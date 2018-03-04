import { Component, OnInit } from '@angular/core';
import { userData } from '../userData';
import { SignInService } from '../sign-in.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private signInService: SignInService
  ) { }

  fetchedUser: userData;
  x: string;
  y: string;

  user = new userData();
  signIn(): void {
    this.signInService.signIn(this.user).subscribe(newUser => {
      this.fetchedUser = newUser;
      if(this.user.id == this.fetchedUser.id && this.user.password === this.fetchedUser.password)
        this.x='Signed in successfully';
      else
        this.x='Incorrect username or password';
      //this.y = this.user.id + this.fetchedUser.id + this.user.password + '  ' + this.fetchedUser.password;
    });

    
    //this.x = this.user.password + '  ' + this.fetchedUser.password;
  }

  ngOnInit() {
  }
}
