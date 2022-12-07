import { Component, OnInit, ViewChild } from '@angular/core';
import { Tables } from '../model/member-list-model';
import { MemberListService } from '../service/member-list-service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers : [MemberListService]
})
export class StudentListComponent implements OnInit {

  searchText: any;
  searchmajor: any;
  searchsection: any;
  searchterm: any;
  tables :Tables[] = [];
  list : Tables[]= [];
 
  constructor(private memberListService : MemberListService) {
  }

  ngOnInit(): void {
  this.tables = this.memberListService.getTables()
  
  console.log(this.searchterm)
}
}
