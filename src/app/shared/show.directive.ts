import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private el: ElementRef) {
        
    }

    set dlShow(val:boolean){
        if(val){
            this.el.nativeElement.style.display = "block";
        }
        else{
            this.el.nativeElement.style.display = "none";
        }
    }
}