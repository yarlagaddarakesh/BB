import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListdataComponent } from './listdata/listdata.component';

const routes: Routes = [
  { path: '', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
