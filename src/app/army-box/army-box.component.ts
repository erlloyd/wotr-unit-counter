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

  killUnit() {
    if (this.activeTroops > 0) {
      this.activeTroops--;
    }
  }

  musterUnit() {
    if (this.activeTroops < this.totalTroops) {
      this.activeTroops++;
    }
  }

  @Input()
  name: string = '';

  totalTroops: number = 20;
  activeTroops: number = 12;
}
