import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CentroControleComponent } from './centro-controle/centro-controle.component';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';
import { LoginGuard } from './login/login-guard.guard';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'novoUsuario', component: CadastroUsuarioComponent},
  { path: 'home', canActivate: [LoginGuard], component: CentroControleComponent },
  { path: 'planos', canActivate: [LoginGuard], component: ListaPlanosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
