import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {CourseComponent} from "./course/course.component";
import {CoursesService} from "./services/courses.service";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {CreateCourseStep1Component} from './create-course/create-course-step-1/create-course-step-1.component';
import {CreateCourseStep2Component} from './create-course/create-course-step-2/create-course-step-2.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';

import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {VirtualScrollingComponent} from './virtual-scrolling/virtual-scrolling.component';

import {AppStorageSolutionModule} from "./app-storage-solution/app-storage-solution.module";
import {MaterialsModule} from "./material-module/materials.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CourseComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        CreateCourseComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        DragDropComponent,
        TreeDemoComponent,
        VirtualScrollingComponent
    ],
    imports: [
        AppRoutingModule,
        AppStorageSolutionModule,
        MaterialsModule
    ],
    providers: [
        CoursesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
