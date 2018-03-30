import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: '[dlBorder]',
})
export class BorderDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.renderer.setElementStyle(this.el.nativeElement, "border", "1px solid gray");
    }
}