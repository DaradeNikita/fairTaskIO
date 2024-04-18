import { Component, Input, OnInit} from '@angular/core';
import { Ifairs } from '../../models/fairs';

@Component({
  selector: 'app-fairs-dash-board',
  templateUrl: './fairs-dash-board.component.html',
  styleUrls: ['./fairs-dash-board.component.scss']
})
export class FairsDashBoardComponent implements OnInit {
@Input() sendFairsData : Array<Ifairs>= [];
fairsId !:any

  constructor() { }

  ngOnInit(): void {
   
  }
  onIdget(eve:any){
    console.log(eve);
    this.fairsId = eve;
    console.log(this.fairsId);
                                                                  

    
  }

}
