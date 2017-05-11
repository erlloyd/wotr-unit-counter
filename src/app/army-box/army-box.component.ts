import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-army-box',
  templateUrl: './army-box.component.html',
  styleUrls: ['./army-box.component.scss']
})
export class ArmyBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  name: string = '';
} 
