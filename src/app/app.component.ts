import { Component, OnInit } from '@angular/core';
import { Ifairs } from './shared/models/fairs';
import { fairsArr } from './shared/const/fairs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  fairsData:Array<Ifairs> = fairsArr
  constructor(){}
  
  ngOnInit(): void {
    
  }
  
}
