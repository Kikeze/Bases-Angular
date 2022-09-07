import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "src/app/contadores/contador/contador.component";


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadoresModule {
    // Do nothing
}
