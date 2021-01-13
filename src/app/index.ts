export class MainModule {
    private bodyElement:any;

    constructor(){
        this.bodyElement = document.getElementsByName('body');
        console.log(this.bodyElement);
    }
}

