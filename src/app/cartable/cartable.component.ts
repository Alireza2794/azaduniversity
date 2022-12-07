import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {
  // @ViewChild('f') mysendform : any

  messagetitle: any
  contanttitle: any
  majortitle: any
  termtitle: any
  datetitle: any
  mysendform: any = FormGroup
  constructor() {
   }

  ngOnInit(): void {
   this.mysendform = new FormGroup({
    inputText : new FormControl(),
    section : new FormControl(),
    major : new FormControl(),
    term : new FormControl(),
    sendNow : new FormControl(),
    sendLater : new FormControl()
   })
  }

  onSubmit(){
    console.log(this.mysendform)
  }

}

