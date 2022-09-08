import { Injectable } from "@angular/core";
import { Personaje } from "src/app/dragon-ball-z/interfaces/personaje.interface";


@Injectable()
export class DragonBallZService {
    private _personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 14000
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        // Do nothing
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push( personaje );
    }

}








