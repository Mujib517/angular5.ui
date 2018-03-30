import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private el: ElementRef, private render: Renderer) {

    }

    set dlShow(val: boolean) {
        this.render.setElementStyle(this.el.nativeElement, "display", val ? "block" : "none");
        // this.el.nativeElement.style.display = val ? "block" : "none";
    }
}
