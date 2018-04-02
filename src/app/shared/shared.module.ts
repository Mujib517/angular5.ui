import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { BookService } from "./book.service";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ShowDirective } from "./show.directive";
import { BorderDirective } from "./border.directive";
import { IfDirective } from "./if.directive";
import { BookIntercetor } from "./book.interceptor";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe, ShowDirective, BorderDirective, IfDirective],
    providers: [BookService,
        { provide: HTTP_INTERCEPTORS, useClass: BookIntercetor, multi: true },
        { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe, ShowDirective, BorderDirective, IfDirective]
})
export class SharedModule { }