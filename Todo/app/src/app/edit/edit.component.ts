import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService } from '../services/httpservices.service';
import * as _ from 'lodash';
interface todoData {
  task: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  tododata: todoData;
  todo_row: any;
  errorMsg = '';
  successMsg = '';

  constructor(private service: HttpservicesService, private route: ActivatedRoute, private router: Router) {
    this.tododata = {} as todoData;
  }

  ngOnInit(): void {

    let _id = this.route.snapshot.params['id'];
    this.service.todorow(_id).subscribe((data) => {
      if (data.status) {
        this.todo_row = data.data;
      }
    })

    this.editForm = new FormGroup({
      task: new FormControl(this.tododata.task)
    });
  }


  onSubmit() {
    this.editForm.value._id = this.route.snapshot.params['id'];
    this.service.update(this.editForm.value).subscribe((data) => {
      if (!data.status) {
        this.errorMsg = data.msg;
        this.successMsg = "";
      } else {
        this.successMsg = data.msg;
        this.errorMsg = "";

      }
    })
  }
}
