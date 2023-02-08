import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'testindex', component: TestindexComponent},
  {path: 'github', component: GithubComponent},
  {path: 'about', component: AboutComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
