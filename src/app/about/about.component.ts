import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FileUploadingServicService} from "../app-storage-solution/services/file-uploading-servic.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
