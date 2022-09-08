import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Personaje } from "src/app/dragon-ball-z/interfaces/personaje.interface";
import { DragonBallZService } from 'src/app/dragon-ball-z/services/dragon-ball-z.service';


@Component({
    selector: "app-agregar-personaje",
    templateUrl: "agregar-personaje.component.html",
    styleUrls: ["agregar-personaje.component.css"]
})
export class AgregarPersonajeComponent implements OnInit {

    @Input() nuevo: Personaje = {
        nombre: "",
        poder: 0
    }

    // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

    constructor(private DBZService: DragonBallZService) {
        // Do nothing
    }

    ngOnInit(): void { }

    cambiarNombre(e: any) {
        this.nuevo.nombre = e.target.value || "";
    }

    cambiarPoder(e: any) {
        this.nuevo.poder = e.target.value || 0;
    }

    agregar(): void {
        if( this.nuevo.nombre.trim().length <= 0 ) {
            return;
        }

        // this.onNuevoPersonaje.emit(this.nuevo);
        this.DBZService.agregarPersonaje( this.nuevo );

        this.nuevo = {
            nombre: "",
            poder: 0
        }

    }

}
