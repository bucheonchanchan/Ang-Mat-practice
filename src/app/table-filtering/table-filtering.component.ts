// app.component.ts
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.html'],
})
export class TableFilteringComponent {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
    'status',
  ];
  
  filterSelectObj: any = [];
  filterValues: any = {};

  constructor() {
    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: [],
      },
      {
        name: 'NAME',
        columnProp: 'name',
        options: [],
      },
      {
        name: 'USERNAME',
        columnProp: 'username',
        options: [],
      },
      {
        name: 'EMAIL',
        columnProp: 'email',
        options: [],
      },
      {
        name: 'STATUS',
        columnProp: 'status',
        options: [],
      },
    ];
  }

  ngOnInit() {
    this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
    console.log('1. dataSource.filter: ', this.dataSource.filter);
  }

  // Get Uniqu values from columns to build filter
  getFilterObject(data: any, key: any) {
    const uniqChk: any = [];
    data.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Get remote serve data using HTTP call
  getRemoteData() {
    const remoteDummyData = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        status: 'Blocked',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        status: 'Blocked',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        status: 'Active',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        phone: '(254)954-1289',
        website: 'demarco.info',
        status: 'Active',
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        status: 'In-Active',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        phone: '210.067.6132',
        website: 'elvis.io',
        status: 'Active',
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        status: 'In-Active',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        status: 'In-Active',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        phone: '024-648-3804',
        website: 'ambrose.net',
        status: 'Active',
      },
    ];
    // [1] 테이블 생성 시 필요한 데이터를 가져와 MatTableDataSource 객체에 담는다.
    this.dataSource.data = remoteDummyData;

    // [2] 배열의 길이에 따라 filter API가 순회하며 filter 목록에 있는 option 배열에 remoteDummyData를 바탕으로 채워넣는다.
    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(remoteDummyData, o.columnProp);
      // console.log('o.options: ', o.options);
    });
  }

  // [3] input 또는 select 이벤트에 의해 실제로 사용자로 부터 선택된 filter 항목을 MatTableDataSource 객체의 filter 멤버변수에 담는다.
  // 이제 MatTableDataSource에 있는 멤버변수 filter에 값이 할당되어 이 값을 조회할 수 있게 되었다.
  filterChange(filter: any, event: any) {
    console.log("2. this.filterValues: ", this.filterValues);
    console.log('-------------------------[1]-------------------------------------');
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase();
    console.log("2. this.filterValues: ", this.filterValues);

    console.log('-------------------------[2]-------------------------------------');
    this.dataSource.filter = JSON.stringify(this.filterValues);

    console.log('-------------------------[3]-------------------------------------');
    console.log('2. dataSource.filter: ', this.dataSource.filter);
  }

  // Custom filter method fot Angular Material Datatable
  // 무슨 이유에서인지는 모르겠지만, createFilter는 ngOnInit에서 이미 실행되었음에도 불구하고, filterChange가 호출될때 마다 자동으로 실행된다.
  // 정확하지는 않지만 filterChange 함수에서 MatTableDataSource 객체 멤버변수 filter에 값이 할당되는 순간!! ngOnInit에 있는 filterPredicate 메서드가 실행되는 듯 하다.
  // 정리하자면, filter 변수에 값이 할당되면서 MatTableDataSource 객체의 filterPredicate 메서드가 실행되었다.
  // 비동기적인 실행이다. filterChnage 호출 → filter에 값 할당 → filterPredicate 메서드 실행 → filterPredicate 메서드 종료 → filterChnage 함수 종료.
  createFilter() {
    // [4] 3번에서 filter 변수에 담긴 값을 아래 함수의 인자(filter)로 받아올 수 있게되었다.
    let filterProcess = function (data: any, filter: string): boolean {
      let filterObj = JSON.parse(filter);
      let isFilterSet = false;
      for (const key in filterObj) {
        console.log(`key: ${key}, filterObj: `, filterObj);
        if (filterObj[key].toString() !== '') {
          isFilterSet = true;
        } else {
          delete filterObj[key];
        }
      }
      console.log(data, filter);
      console.log(filterObj);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const key in filterObj) {
            filterObj[key]
              .trim()
              .toLowerCase()
              .split(' ')
              .forEach((word: any) => {
                if (data[key].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) found = true;
              });
          }
          return found;
        } else {
          return true;
        }
      };
      return nameSearch();
    };
    return filterProcess;
  }

  // Reset table filters
  resetFilters() {
    this.filterValues = {};
    this.filterSelectObj.forEach((value: any, key: any) => {
      value.modelValue = undefined;
    });
    this.dataSource.filter = '';
  }
}
