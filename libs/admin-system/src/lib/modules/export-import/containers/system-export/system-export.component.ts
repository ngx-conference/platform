import { Component, OnInit } from '@angular/core';
import { ExportImportService } from '../../services/export-import.service'

@Component({
  selector: 'lib-system-export',
  template: `
    <ui-page-title title="Export & Import" icon="cloud_upload"></ui-page-title>
    <mat-card>
      <mat-card-content>
        <button mat-raised-button (click)="export()" class="button">
          <mat-icon>cloud_upload</mat-icon>
          Make export
        </button>
        <pre>{{exportData | json}}</pre>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class SystemExportComponent implements OnInit {

  public exportData: any

  constructor(private service: ExportImportService) { }

  ngOnInit() {
  }

  public export() {
    this.service.export()
      .subscribe((res) => this.exportData = res)
  }
}
