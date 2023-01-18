import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { delay, of, Subject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
let ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: '_', weight: 1.0079, symbol: 'H'},
  {position: 0, name: '_', weight: 4.0026, symbol: 'He'},
  {position: 0, name: '_', weight: 6.941, symbol: 'Li'},
  {position: 0, name: '_', weight: 9.0122, symbol: 'Be'},
  {position: 0, name: '_', weight: 10.811, symbol: 'B'},
  {position: 0, name: '_', weight: 12.0107, symbol: 'C'},
  {position: 0, name: '_', weight: 14.0067, symbol: 'N'},
  {position: 0, name: '_', weight: 15.9994, symbol: 'O'},
  {position: 0, name: '_', weight: 18.9984, symbol: 'F'},
  {position: 0, name: '_', weight: 20.1797, symbol: 'Ne'},
];

const newData = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]

@Component({
  selector: 'app-table-sorting',
  templateUrl: './table-sorting.component.html',
  styleUrls: ['./table-sorting.component.css']
})
// export class TableSortingComponent implements AfterViewInit{
export class TableSortingComponent {
  observable$ = of(newData).pipe(
    delay(1000)
  );
  private refreshRequired = new Subject();  
  dataSource: any;
  emData: any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _liveAnnouncer: LiveAnnouncer
  ) {

  }


  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.observable$.subscribe((result) => {
      this.emData = result;
      this.dataSource = new MatTableDataSource(this.emData);
      this.dataSource.sort = this.sort;
      console.log("result : ", result);
    });
  }

  ngAfterViewInit() {
    // this.emData.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}