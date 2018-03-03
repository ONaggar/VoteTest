import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../userData';
import { SignInService } from '../sign-in.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private signInService: SignInService
  ) { }

  signIn(username: string, password: string): void {
    username = username.trim();
    password = password.trim();
    if(!username || !password){return ; }
    this.signInService.signIn(this.user).subscribe(success => this.success = success)
    this.x='jjj';
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  ngOnInit() {
    this.user={username:'dd', password: 'ss'};
    //this.x='sss';
  }



}
