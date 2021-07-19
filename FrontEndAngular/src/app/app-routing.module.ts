import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'categorie/:tipoInteresse', component: CategorieComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
