import { Component, OnInit, Input } from '@angular/core';
import { UnitInfo } from 'app/models/unit-info';

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
    if (this.unitInfo.numActive > 0) {
      this.unitInfo.numActive--;
    }
  }

  musterUnit() {
    if (this.unitInfo.numActive < this.unitInfo.numTotal) {
      this.unitInfo.numActive++;
    }
  }

  @Input()
  unitImage: string = '';

  @Input()
  unitInfo: UnitInfo = new UnitInfo();
}
