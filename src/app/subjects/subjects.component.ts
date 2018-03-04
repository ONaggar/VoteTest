import { Component, OnInit } from '@angular/core';
import { subjectData } from '../subjectData';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects : subjectData[];

  constructor(private subjectService: SubjectsService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() : void {
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }


}
