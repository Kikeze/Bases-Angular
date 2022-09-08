import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { HeroesModule } from "src/app/heroes/heroes.module";
import { ContadoresModule } from "src/app/contadores/contadores.module";
import { DragonBallZModule } from "src/app/dragon-ball-z/dragon-ball-z.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContadoresModule,
    HeroesModule,
    DragonBallZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
