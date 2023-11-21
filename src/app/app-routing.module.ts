import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './portfolio/curriculo/curriculo.component';
import { ExperienciasComponent } from './portfolio/experiencias/experiencias.component';
import { HabilidadesComponent } from './portfolio/habilidades/habilidades.component';
import { ContatoComponent } from './portfolio/contato/contato.component';

const routes: Routes = [
  {path: 'curriculo', component: CurriculoComponent},
  {
    path: '',
    redirectTo: 'curriculo',
    pathMatch: 'full'
  },
  {path: 'experiencias', component: ExperienciasComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
