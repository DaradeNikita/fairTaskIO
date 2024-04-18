import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../models/fairs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
  @Input() fairsArray:Array<Ifairs>=[];
  selectedFairId ! : string;
  @Output() sendId :EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }
  onFairSelected(id : string){
    console.log(id);
 this.selectedFairId = id
  console.log(this.selectedFairId);
this.sendId.emit(id)


}

}
