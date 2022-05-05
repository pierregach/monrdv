import { Component, Input, OnInit } from '@angular/core';
import { Creneau } from 'src/app/model/Creneau';

@Component({
  selector: '[calendrier-creneau]',
  templateUrl: './calendrier-creneau.component.html',
  styleUrls: ['./calendrier-creneau.component.scss']
})
export class CalendrierCreneauComponent implements OnInit {

  @Input()
  dureeCreneau: number;
  @Input()
  nbCreneau: number;

  dayForm: Date;
  hourForm: Date;

  dayOffset: number = 0;

  listeCreneau: Array<Creneau>;

  get hoursRange(): Array<Date> {
    let res: Array<Date> = new Array<Date>();
    let d = new Date('1995-12-17T08:00:00');
    res.push(d);
    while(d.getHours() < 18) {
      if (d.getHours() == 12) {
        d.setHours(14);
      }
      let dtmp = new Date('1995-12-17T08:00:00');
      dtmp.setHours(d.getHours());
      if (this.nbCreneau){
        dtmp.setMinutes(d.getMinutes() + this.dureeCreneau*this.nbCreneau);
      } else {
        dtmp.setMinutes(d.getMinutes() + this.dureeCreneau);
      }
      // console.log(this.nbCreneau);
      res.push(dtmp);
      d = dtmp;
    }
    return res;
  }

  get daysRange(): Array<Date> {
    let d = new Date();
    let res: Array<Date> = new Array<Date>();
    d.setDate(d.getDate() + 7*this.dayOffset);
    for (let i = 0; i < 7; i++){
      let diff = d.getDate() - d.getDay() + i + (d.getDay() == 0 ? -6:1);

      let dtmp = new Date(d.setDate(diff));
      res.push(dtmp);
    }
    return res;
  }

  constructor() {

  }
    // let d = new Date();
    // let day = d.getDay(),
    // let  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    // let  new Date(d.setDate(diff));

  isReserved(day: Date, hour: Date): boolean {

  }

  ngOnInit(): void {
  }

}
