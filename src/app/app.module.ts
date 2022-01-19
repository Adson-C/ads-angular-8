import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisições Ajax*/
import { RouterModule, Routes} from '@angular/router'
import { ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent} from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';


export const appRoutes: Routes = [

  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
