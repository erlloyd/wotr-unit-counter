import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.component.html',
  styleUrls: ['./unit-info.component.scss'],
  host: {'class': 'centered'}
})
export class UnitInfoComponent implements OnInit {

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
  unitImage: string = '';

  @Input()
  totalTroops: number = 0;

  @Input('initialActiveTroops')
  activeTroops: number = 0;

}
