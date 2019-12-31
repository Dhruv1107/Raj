import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'dynamicForm', component: DynamicFormComponent },
  {
    path: 'table',
    component: TableComponent
  },
  { path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [AppComponent, TableComponent,DynamicFormComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
