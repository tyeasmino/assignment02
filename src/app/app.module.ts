import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './page/landing/landing.component';
import { AboutComponent } from './page/about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PageTitleComponent } from './common/page-title/page-title.component';
import { CardComponent } from './shared/component/card/card.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { StudentComponent } from './shared/component/student/student.component';
import { TeacherComponent } from './shared/component/teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    CardComponent,
    PageNotFoundComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
