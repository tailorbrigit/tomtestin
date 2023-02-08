import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TestindexComponent } from './testindex/testindex.component';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';

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
