import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../userData';
import { subjectData } from '../subjectData';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fetchedUser: userData;
  fetchedSubject: subjectData;

  user = new userData();
  subject = new subjectData();


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

  deleteUser(): void {
      this.adminService.deleteUser(this.user).subscribe(newUser => {
        this.fetchedUser = newUser;
      });
    }

// ------------ subject -----------------------

  addSubject(): void {
       this.adminService.addSubject(this.subject).subscribe(newSubject => {
         this.fetchedSubject = newSubject;
       });
      }

  deleteSubject(): void {
         this.adminService.deleteSubject(this.subject).subscribe(newSubject => {
           this.fetchedSubject = newSubject;
         });
        }
}
