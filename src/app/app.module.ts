import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/counter.reducer';
import { ButtonComponent } from './counter/button/button.component';
import { DisplayComponent } from './counter/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CustomComponent } from './counter/custom/custom.component';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { blogReducer } from './blogs/blog.reducers';
import { BlogComponent } from './counter/blog/blog.component';
import { Appstate } from './shared/Global/App.state';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './blogs/blog.Effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterStateClass } from './shared/customs/customeSerilizer';
import { RouteQueryCheckComponent } from './route-query-check/route-query-check.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    CustomComponent,
    BlogComponent,
    PopupComponent,
    RouteQueryCheckComponent
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    StoreModule.forRoot(Appstate),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatToolbarModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    EffectsModule.forRoot([BlogEffects]),
    StoreRouterConnectingModule.forRoot({serializer:RouterStateClass})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
