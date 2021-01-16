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
import { BoxListComponent } from './shared/component/box-list/box-list.component';


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
    BoxListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
