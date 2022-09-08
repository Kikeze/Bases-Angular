import { Component, OnInit } from "@angular/core";

import { Personaje } from "src/app/dragon-ball-z/interfaces/personaje.interface";
import { DragonBallZService } from "src/app/dragon-ball-z/services/dragon-ball-z.service";


@Component({
    selector: "app-main-page",
    templateUrl: "main-page.component.html",
    styleUrls: ["main-page.component.css"]
})
export class MainPageComponent implements OnInit {

    nuevo: Personaje = {
        nombre: "Roshi",
        poder: 1500
    }

    constructor() {
        // Do nothing
    }

    ngOnInit(): void { }

}
