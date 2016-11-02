import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-test'
})
export class Test implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
