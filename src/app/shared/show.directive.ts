import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private el: ElementRef) {

    }

    set dlShow(val: boolean) {
        this.el.nativeElement.style.display = val ? "block" : "none";
    }
}
