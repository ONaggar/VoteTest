import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../userData';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fetchedUser: userData;
  x: string;
  y: string;

  user = new userData();


  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  addUser(): void {
    this.user.id= 'user5';
    this.user.password='12344' ;
    this.adminService.addUser(this.user).subscribe(newUser => {
      this.fetchedUser = newUser;
    });
   }

   updateUser(): void {

     this.adminService.updateUser(this.user).subscribe(newUser => {
       this.fetchedUser = newUser;
     });
    }

  /*  deleteUser(): void {
      this.adminService.deleteUser(this.user).subscribe(newUser => {
        this.fetchedUser = newUser;
      });
     }
*/
}
