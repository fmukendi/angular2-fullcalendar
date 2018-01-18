import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { MomentModule } from 'angular2-moment/moment.module';
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
import { BasicFullCalendar1Component } from './basic-full-calendar1/basic-full-calendar1.component';
import { NavigationsButtons2Component } from './navigations-buttons2/navigations-buttons2.component';
import { ShowOrHideDays3Component } from './show-or-hide-days3/show-or-hide-days3.component';
import { DisplayImages4Component } from './display-images4/display-images4.component';
import { ManagingEvents5Component } from './managing-events5/managing-events5.component';
import { DateFormatPipe } from 'angular2-moment/date-format.pipe';
import { LocalTimePipe } from 'angular2-moment/local.pipe';

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
        MatCardModule,
        MomentModule
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
        ModalMaterialDesignComponent,
        BasicFullCalendar1Component,
        NavigationsButtons2Component,
        ShowOrHideDays3Component,
        DisplayImages4Component,
        ManagingEvents5Component
    ],
    providers: [
        DateFormatPipe,
        LocalTimePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
