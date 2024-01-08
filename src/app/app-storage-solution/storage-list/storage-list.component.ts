import { Component } from '@angular/core';

@Component({
  selector: 'storage-list',
  templateUrl: './storage-list.component.html',
  styleUrl: './storage-list.component.scss'
})
export class StorageListComponent {

  public dataList = [
    {
      type: "folder",
      name: "Folder-1"
    },
    {
      type: "folder",
      name: "Folder-2",
    },
    {
      type: "file",
      name: "File-30"
    }
  ]

}
