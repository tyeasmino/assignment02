import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public studentList: Card[] = [];
  public teacherList: Card[] = [];

  constructor() {
    this.studentList = this.getStudentList();
    this.teacherList = this.getTeacherList();
  }

  ngOnInit(): void {
  }

  private getStudentList(): Card[] {
    let allCard: Card[] = [];
    allCard = [];
    allCard.push({title: 'Anique', count: 1, subject: 'English', comment: 'Great at English. Always does better in the class. Advanced level of knowledge.'});
    allCard.push({title: 'Anita', count: 2, subject: 'Math', comment: 'Great at Math. Doing great and trying to be super in math. She is currently trying to be superior.'});
    allCard.push({title: 'Rosemary', count: 1, subject: 'Science', comment: 'Science? She always like practical. She is collecting some items from Great desert of California.'});
    return allCard;
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
