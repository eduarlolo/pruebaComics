import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

// import Routes
import { APP_ROUTES } from "./app.routes";
// import HttpClient
import { HttpClientModule } from "@angular/common/http";
// import formModule
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// componentea
import { NavbarComponent } from "./shared/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
