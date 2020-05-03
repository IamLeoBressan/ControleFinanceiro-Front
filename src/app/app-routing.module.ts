import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CentroControleComponent } from './centro-controle/centro-controle.component';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';


const routes: Routes = [
  { path: 'home', component: CentroControleComponent },
  { path: 'login', component: LoginComponent},
  { path: 'planos', component: ListaPlanosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
