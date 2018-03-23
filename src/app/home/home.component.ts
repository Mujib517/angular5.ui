import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(logger: ConsoleLogger) {
        logger.warn("Component is slow");
    }
}

//data binding
//expression (interpolation), Property, event, class, style and two way