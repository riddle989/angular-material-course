import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FileUploadingServicService} from "../services/file-uploading-servic.service";

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  public uploadIndicator = 0;
  constructor(
    private fileUploadingServicService:FileUploadingServicService
  ) { }

  ngOnInit() {
  }

  onChangeAttachment(event){
    const file = event.target.files[0]
    console.log("uploaded file", file)
    this.fileUploadingServicService.uploadAttachment(file).subscribe(resp => {
      this.uploadIndicator = resp['uploadPercentage']
      // Done
    })



  }

}
