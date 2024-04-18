import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairsDashBoardComponent } from './shared/components/fairs-dash-board/fairs-dash-board.component';
import { FairsCardComponent } from './shared/components/fairs-card/fairs-card.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashBoardComponent,
    FairsCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
