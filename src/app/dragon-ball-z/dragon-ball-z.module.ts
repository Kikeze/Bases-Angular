import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "src/app/dragon-ball-z/main-page/main-page.component";
import { PersonajesComponent } from "src/app/dragon-ball-z/personajes/personajes.component";
import { AgregarPersonajeComponent } from "src/app/dragon-ball-z/agregar-personaje/agregar-personaje.component";
import { DragonBallZService } from "src/app/dragon-ball-z/services/dragon-ball-z.service";


@NgModule({
    declarations: [
        MainPageComponent,
        PersonajesComponent,
        AgregarPersonajeComponent,
    ],
    exports: [
        MainPageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        DragonBallZService,
    ],
})
export class DragonBallZModule { }
