import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './_shared/share.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { loadSvgResoures } from './_utils/svg.util';
import { MatIconRegistry } from '@angular/material';
import { AvatarSelectComponent } from './_components/avatar-select/avatar-select.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './todos/new-todo/new-todo.component';
import { DelModalComponent } from './todos/del-modal/del-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AvatarSelectComponent,

    TodosComponent,
    NewTodoComponent,
    DelModalComponent,
  ],
  imports: [BrowserModule, ShareModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewTodoComponent, DelModalComponent],
})
export class AppModule {
  constructor(ir: MatIconRegistry, ds: DomSanitizer) {
    loadSvgResoures(ir, ds);
  }
}
