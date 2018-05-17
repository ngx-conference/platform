import { TestBed, inject } from '@angular/core/testing';

import { ExportImportService } from './export-import.service';

describe('ExportImportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportImportService]
    });
  });

  it('should be created', inject([ExportImportService], (service: ExportImportService) => {
    expect(service).toBeTruthy();
  }));
});
