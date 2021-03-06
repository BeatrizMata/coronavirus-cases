import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CasesComponent} from './cases/cases.component';
import {CasesDetailsComponent} from './cases-details/cases-details.component';
import {CasesStatComponent} from './cases-stat/cases-stat.component';
import {EditCasesComponent} from './edit-cases/edit-cases.component';
import {AddCasesComponent} from './add-cases/add-cases.component';

const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: {title: 'Lista de casos'}
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: {title: 'Cases Details'}
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: {title: 'Estadísticas'}
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: {title: 'Agregar casos'}
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: {title: 'Modificando casos'}
  },
  {
    path: '',
    redirectTo: '/cases',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
