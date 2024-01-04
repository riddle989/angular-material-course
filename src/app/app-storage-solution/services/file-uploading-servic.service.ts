import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FileUploadingServicService {

  constructor() { }

  getNewGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getPresignedUrl(itemId, name){
    return ""

  }

  uploadAttachment(attachment){
    const itemId = this.getNewGuid();
    const url = this.getPresignedUrl(itemId,  attachment.name);

    return this.uploadFileWithProgress(url, attachment).pipe(map(resp => resp))
  }

  uploadFileWithProgress(url, file) {
    return new Observable((observer) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);

      xhr.setRequestHeader('x-ms-blob-type', 'BlockBlob');

      xhr.upload.addEventListener('progress', (e) => {
        let uploadPercentage = Math.round((e.loaded / e.total) * 100);
        observer.next({uploadPercentage: uploadPercentage});
      });

      xhr.upload.addEventListener('error', event => {
        observer.error({error: event});
      });

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 1) {
          const response = xhr.response;
          if (response) {
            const body = JSON.parse(response);
            if (body['StatusCode'] === 200 && body['IsSuccessStatusCode']) {
              observer.next({uploadPercentage: 100});
              observer.complete();
            } else {
              observer.error({error: 'upload error'});
            }
          }
        }
      };

      xhr.send(file);
    });
  }


}
