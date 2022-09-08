import { Component, Input, OnInit } from "@angular/core";

import { Personaje } from "src/app/dragon-ball-z/interfaces/personaje.interface";
import { DragonBallZService } from 'src/app/dragon-ball-z/services/dragon-ball-z.service';


@Component({
    selector: "app-personajes",
    templateUrl: "personajes.component.html",
    styleUrls: ["personajes.component.css"]
})
export class PersonajesComponent implements OnInit {
    // @Input() personajes: Personaje[] = [];
    get personajes(): Personaje[] {
        return this.DBZService.personajes;
    }

    constructor(private DBZService: DragonBallZService) {
        // Do nothing
    }

    ngOnInit(): void {
    }

}
