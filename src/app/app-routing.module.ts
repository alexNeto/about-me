import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule)
    redirectTo: 'resume',
    pathMatch: 'full'
  }, {
    path: 'resume',
    loadChildren: () => import('./views/resume/resume.module').then(mod => mod.ResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
