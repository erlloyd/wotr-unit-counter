import { Component } from '@angular/core';
import { Armies } from 'app/models/armies';
import { Army } from 'app/models/army';
import { UnitInfo } from 'app/models/unit-info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'War of the Ring Unit Counter';
  armies: Armies;
  currentArmy: Army;

  ngOnInit() {
    let eliteInfo = new UnitInfo();
    eliteInfo.type = 'elite';
    eliteInfo.numTotal = 10;
    eliteInfo.numActive = 4;

    let regularInfo = new UnitInfo();
    regularInfo.type = 'regular';
    regularInfo.numTotal = 20;
    regularInfo.numActive = 14;

    let leaderInfo = new UnitInfo();
    leaderInfo.type = 'leader';
    leaderInfo.numTotal = 30;
    leaderInfo.numActive = 14;

    let army = new Army();
    army.leaders = leaderInfo;
    army.elite = eliteInfo;
    army.regular = regularInfo;
    army.name = "Sauron";

    this.armies = new Armies();
    this.armies.shadowArmies = [army];
    this.currentArmy = army;
  }
}
