import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CpfFilterPipe } from './cpf-filter.pipe';
import { TelefoneFilterPipe } from './telefone-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CpfFilterPipe,
    TelefoneFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
