import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './_shared/share.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './todos/new-todo/new-todo.component';
import { DelModalComponent } from './todos/del-modal/del-modal.component';
import { HttpInterceptorProvider } from './_services/http.interceptor';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,

    TodosComponent,
    TodoComponent,
    NewTodoComponent,
    DelModalComponent,
  ],
  imports: [BrowserModule, ShareModule, AppRoutingModule],
  providers: [HttpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
