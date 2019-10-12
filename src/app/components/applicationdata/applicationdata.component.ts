import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationData } from '../../model/ApplicationData';

@Component({
  selector: 'app-applicationdata',
  templateUrl: './applicationdata.component.html',
  styleUrls: ['./applicationdata.component.css']
})
export class ApplicationdataComponent implements OnInit {

  applicationData: string;
  ccApprovalData: string;
  ccAgendaData: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  this.dataService.getCCAgenda().subscribe(ccAgendaData =>{
    this.ccAgendaData = ccAgendaData;
  })

  }

}
