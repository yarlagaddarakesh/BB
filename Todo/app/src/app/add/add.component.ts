import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpservicesService } from '../services/httpservices.service';
import * as _ from 'lodash';
interface todoData {
  task: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  tododata: todoData;
  errorMsg = '';
  successMsg = '';

  constructor(private service: HttpservicesService) {
    this.tododata = {} as todoData;
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      task: new FormControl(this.tododata.task)
    });
  }


  onSubmit() {
    this.service.add(this.addForm.value).subscribe((data) => {
      if (!data.status) {
        this.errorMsg = data.msg;
        this.successMsg = "";
      } else {
        this.successMsg = data.msg;
        this.errorMsg = "";
        this.addForm.reset();
      }
    })
  }
}
