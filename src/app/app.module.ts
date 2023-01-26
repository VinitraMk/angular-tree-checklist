import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoleculeComponent } from './components/molecule/molecule.component';
import { TreeComponent } from './components/tree/tree.component';
import { SelectedListComponent } from './components/selected-list/selected-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoleculeComponent,
    TreeComponent,
    SelectedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
