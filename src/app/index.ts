import $ from 'jquery';
import {map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
export class MainModule {
    private bodyElement:any;

    constructor(){
        this.bodyElement = document.getElementsByName('body');
        console.log(this.bodyElement);
    }

    
    

}

window.onload = ()=>{
    let btn = $('#btnClick');
    fromEvent(btn, 'click').subscribe( (event: Event) =>{
        console.log(event);
        
    });
}

