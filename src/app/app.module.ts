import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalProductComponent } from './products/modal-product/modal-product.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalMaterialDesignComponent } from './products/modal-material-design/modal-material-design.component';

import {MatDialogModule , MatButtonModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    entryComponents : [
        ModalProductComponent,
        ModalMaterialDesignComponent
     ],
    declarations: [
        AppComponent,
        routedComponents,
        CalendarComponent,
        ModalProductComponent,
        ModalMaterialDesignComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
