import { Component, OnInit, DoCheck, OnChanges } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, DoCheck, OnChanges {

    count: number = 0;
    interval: any;

    constructor(logger: ConsoleLogger) {
        logger.warn("Component is slow");
    }

    ngOnChanges(): void {
        console.log("Inside on changes");
    }


    ngDoCheck(): void {
        console.log("Checked..");
    }

    ngOnInit() {
        console.log("Iniside Init event");
        this.interval = setInterval(
            () => this.count++,
            1000
        );
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}

//data binding
//expression (interpolation), Property, event, class, style and two way