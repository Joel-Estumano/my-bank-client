import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaDigitalComponent } from './views/conta-digital/conta-digital.component';
import { GerarCobrancaComponent } from './views/gerar-cobranca/gerar-cobranca.component';

const routes: Routes = [
    { path: '', component: ContaDigitalComponent },
    { path: 'gerar-cobranca', component: GerarCobrancaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContaDigitalRoutingModule {
}