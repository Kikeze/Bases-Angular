import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "src/app/heroes/heroe/heroe.component";
import { ListadoComponent } from "src/app/heroes/listado/listado.component";


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {
    // Do nothing
}
