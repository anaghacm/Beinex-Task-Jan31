import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { BannerComponent } from './banner/banner.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DemorequestComponent } from './demorequest/demorequest.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoSectionComponent,
    BannerComponent,
    ReviewsComponent,
    DemorequestComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
