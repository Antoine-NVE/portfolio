import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':slug', component: ProjectComponent },
];
