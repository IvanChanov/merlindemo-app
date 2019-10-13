import { CCApproval } from './../../model/CCApproval';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-ccapproval',
  templateUrl: './ccapproval.component.html',
  styleUrls: ['./ccapproval.component.css']
})
export class CcapprovalComponent implements OnInit {

  ccApprovalData: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCCApproval({'title': 'body'}).subscribe(ccApprovalData => {
      console.log(ccApprovalData);
    })

  }

}
