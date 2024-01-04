import { TestBed } from '@angular/core/testing';

import { FileUploadingServicService } from './file-uploading-servic.service';

describe('FileUploadingServicService', () => {
  let service: FileUploadingServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadingServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
