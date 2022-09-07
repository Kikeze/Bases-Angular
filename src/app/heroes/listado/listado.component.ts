import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-listado",
    templateUrl: "listado.component.html",
    styleUrls: ["listado.component.css"]
})
export class ListadoComponent implements OnInit {
    heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];
    borrado: string = "";

    constructor() {
        console.log("Constructor!");
    }

    ngOnInit(): void {
        console.log("OnInit");
    }

    borrarHeroe(): void {
        this.borrado = this.heroes.pop() || "";
    }

}
