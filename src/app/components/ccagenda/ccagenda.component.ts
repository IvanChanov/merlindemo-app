import { CCAgenda } from './../../model/CCAgenda';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-ccagenda',
  templateUrl: './ccagenda.component.html',
  styleUrls: ['./ccagenda.component.css']
})
export class CcagendaComponent implements OnInit {

  ccAgendaData: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getCCAgenda().subscribe(ccAgendaData =>{
      this.ccAgendaData = ccAgendaData;
    })

  }

}
