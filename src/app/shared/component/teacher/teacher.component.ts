import { Component, OnInit } from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public teacherList: Card[] = [];

  constructor() {
    this.teacherList = this.getTeacherList();
  }

  ngOnInit(): void {
  }

  private getTeacherList(): Card[] {
    let allTeacher: Card[] = [];
    allTeacher = [];
    allTeacher.push({title: 'Sayed', count: 5, subject: 'English', comment: 'A great teacher to teach English. He is keeping students busy as much as possible. Sometime students fail to complete his homework.'});
    allTeacher.push({title: 'Joyal', count: 2, subject: 'Math', comment: 'All students like him. Some students doesn\'t do their home work at all. But the teacher is above of them. He is happy for doing nothing.'});
    allTeacher.push({title: 'Chirs', count: 6, subject: 'Science', comment: 'He is very active for his class. He always try to show something to his student but sometimes it isn\'t possible for him to do that.'});
    return allTeacher;
  }
}
