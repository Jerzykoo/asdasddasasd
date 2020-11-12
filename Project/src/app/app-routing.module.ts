import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenComponent } from './people/men/men.component';
import { WomenComponent } from './people/women/women.component';

const routes: Routes = [
  {
    path: 'men',
    pathMatch: 'full',
    component: MenComponent
  },
  {
    path: 'women',
    pathMatch: 'full',
    component: WomenComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
