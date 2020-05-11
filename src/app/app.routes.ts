import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
  { path: "inicio", component: HomeComponent },
  { path: "**", redirectTo: "inicio" },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
