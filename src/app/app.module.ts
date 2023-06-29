import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BasicSyntaxComponent } from "./pages/basic-syntax/basic-syntax.component"
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { DetailedComponentsComponent } from './pages/detailed-components/detailed-components.component';
import { SyntaxNotesComponent } from './components/syntax-notes/syntax-notes.component';
import { DetailedDirectivesComponent } from './pages/detailed-directives/detailed-directives.component';
import {StyleDirective} from "./directives/style.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicSyntaxComponent,
    PostFormComponent,
    PostComponent,
    DetailedComponentsComponent,
    SyntaxNotesComponent,
    DetailedDirectivesComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
