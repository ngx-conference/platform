import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TalksTableDatasource } from './talks-table-datasource';

@Component({
  selector: 'talks-table',
  templateUrl: './talks-table.component.html',
  styleUrls: ['./talks-table.component.css']
})
export class TalksTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TalksTableDatasource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TalksTableDatasource(this.paginator, this.sort);
  }
}
