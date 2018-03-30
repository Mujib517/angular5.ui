import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { BookService } from "./book.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ShowDirective } from "./show.directive";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe, ShowDirective],
    providers: [BookService, { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe, ShowDirective]
})
export class SharedModule { }