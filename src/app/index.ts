import $ from 'jquery';
import { fromEvent, pipe } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { of } from 'rxjs';

export class MainModule {
    private bodyElement: any;

    constructor() {
        this.bodyElement = document.getElementsByName('body');
        console.log(this.bodyElement);
    }

    onClick(event: Event) {
        console.log(event);

    }

}

window.onload = () => {
    let btn = $('#btnClick');
    let main: MainModule = new MainModule();
    let body = $('body');

    fromEvent(btn, 'click').subscribe(main.onClick);
    //map((x:any) => x * x)(of(1,2,3,4,5,6)).subscribe( (v)=> console.log(`${v}`));
    of(1, 2, 3, 4, 5, 6).pipe(
        map((x: any) => {
            
            return x * x;
        }),
        map(x=> x+1)
    ).subscribe(v=>console.log(`${v}`));
    
}

