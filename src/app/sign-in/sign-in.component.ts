import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../userData';
import { SignInService } from '../sign-in.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: userData;
  fetchedUser: userData;
  x: string;
  y: string;

  model = new userData();
  constructor(
    private signInService: SignInService
  ) { }

  signIn(): void {
    this.signInService.signIn(this.model).subscribe(newUser => {
      this.fetchedUser = newUser;
      if(this.model.id == this.fetchedUser.id && this.model.password === this.fetchedUser.password)
        this.x='Signed in successfully';
      else
        this.x='Incorrect username or password';
      this.y = this.model.id + this.fetchedUser.id + this.model.password + '  ' + this.fetchedUser.password;
    });

    
    //this.x = this.model.password + '  ' + this.fetchedUser.password;
  }


  ngOnInit() {
  }
}
