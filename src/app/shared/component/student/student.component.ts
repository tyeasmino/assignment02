import { Component, OnInit } from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public studentList: Card[] = [];

  constructor() {
    this.studentList = this.getStudentList();
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
}
