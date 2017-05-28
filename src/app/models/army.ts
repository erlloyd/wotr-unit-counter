import { UnitInfo } from 'app/models/unit-info';

export class Army {
    name: string;
    leaders: UnitInfo;
    elite: UnitInfo;
    regular: UnitInfo;
}