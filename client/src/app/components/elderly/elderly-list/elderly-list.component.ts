import { Component, OnInit, Input } from '@angular/core';
import { ElderlyClass } from '../../../domain/elderly.class';

@Component({
  selector: 'app-elderly-list',
  templateUrl: './elderly-list.component.html',
  styleUrls: ['./elderly-list.component.css']
})
export class ElderlyListComponent implements OnInit {

  @Input() public elderlies: ElderlyClass[] = [];

  constructor() { }

  ngOnInit() {
  }

}
