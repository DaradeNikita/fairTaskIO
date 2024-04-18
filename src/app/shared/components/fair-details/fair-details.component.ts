import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
@Input() getFairsDetails :any = [];
@Input() getFairsId !:any 
selectedFair ! : any;
 constructor() { }

  ngOnInit(): void {
this.selectedFair = this.getFairsDetails[0]
 }

ngOnChanges(){
  console.log(this.getFairsId);
 this.selectedFair = this.getFairsDetails.find((fair: any) =>fair.fairId === this.getFairsId)
 console.log(this.selectedFair);



 
  
}


}
