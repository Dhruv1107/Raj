import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import data from '../data'
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Id','Name', 'Mnemonic'];
  dataSource = new MatTableDataSource(data.dataroot.Functions);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
constructor(private router: Router){}
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  click(index: number){
    this.router.navigate(['/dynamicForm', {index}]);
  }
}
