import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpservicesService } from '../services/httpservices.service';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.scss']
})
export class ListdataComponent {
  todo_list: any;

  errorMsg = '';
  successMsg = '';
  constructor(private service: HttpservicesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.service.list().subscribe((data) => {
      if (data.status) {
        this.todo_list = data.data;
      }
    })
  }

  deleteDoc(_id: any): void {
    this.service.delete(_id).subscribe((data) => {
      if (data.status) {
        this.successMsg = data.msg;
        this.service.list().subscribe((data) => {
          if (data.status) {
            this.todo_list = data.data;
          }
        })
      }
    })
  }

}
