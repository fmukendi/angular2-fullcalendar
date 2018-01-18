import { SelectDateTimeComponent } from './select-date-time/select-date-time.component';
import { DisplayImages4Component } from './display-images4/display-images4.component';
import { ShowOrHideDays3Component } from './show-or-hide-days3/show-or-hide-days3.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProductListComponent } from './products/index';
import { BasicFullCalendar1Component } from './basic-full-calendar1/basic-full-calendar1.component';
import { NavigationsButtons2Component } from './navigations-buttons2/navigations-buttons2.component';
import { ManagingEvents5Component } from './managing-events5/managing-events5.component';
import { JsonFeed6Component } from './json-feed6/json-feed6.component';
import { EventInteractComponent } from './event-interact/event-interact.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'basicFullCalendar1',
        component: BasicFullCalendar1Component
    },
    {
        path: 'navigationsButtons2',
        component: NavigationsButtons2Component
    },
    {
        path: 'showHideDays3',
        component: ShowOrHideDays3Component
    },
    {
        path: 'displayImages4',
        component: DisplayImages4Component
    },
    {
        path: 'managingEvents5',
        component: ManagingEvents5Component
    },
    {
        path: 'jsonFeed6',
        component: JsonFeed6Component
    },
    {
        path: 'selectDateTime',
        component: SelectDateTimeComponent
    },
    {
        path: 'eventInteract',
        component: EventInteractComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductListComponent];