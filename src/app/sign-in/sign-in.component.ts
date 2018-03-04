import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../userData';
import { SignInService } from '../sign-in.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  fetchedUser: userData;
  x: string;
  y: string;

  user = new userData();
  constructor(
    private signInService: SignInService
  ) { }

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
