import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadingServicService} from "./services/file-uploading-servic.service";
import {FileUploaderComponent} from "./file-uploader/file-uploader.component";
import {MaterialsModule} from "../material-module/materials.module";
import {StorageListComponent} from "./storage-list/storage-list.component";



@NgModule({
  declarations: [
    FileUploaderComponent,
    StorageListComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  providers: [
    FileUploadingServicService
  ]
})
export class AppStorageSolutionModule { }
