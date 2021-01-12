import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: Card = { };
  // public data: Card = {title: 'Anika', count: 3, subject: 'English', comment: 'He this is new'};
  constructor() { }

  ngOnInit(): void {
  }


}
