import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './_shared/share.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, ShareModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
