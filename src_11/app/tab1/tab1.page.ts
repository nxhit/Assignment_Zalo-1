import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sings = [
    {
      "Id": "1412134502",
      "Name": "Anh Còn Nợ Em",
      "Singer": "Quang Dũng",
      "image": "quangdung.jpg"
    },
    {
      "Id": "1412134520",
      "Name": "Anh Het Nợ Em",
      "Singer": "Quang Dũng",
      "image": "quangdung.jpg"
    },
    {
      "Id": "1412145502",
      "Name": "Cách Biệt",
      "Singer": "Đặng Thế Luân",
      "image": "dangtheluan.jpg"
    },
    {
      "Id": "1412144501",
      "Name": "Gặp Nhau Trong Rùng Mơ",
      "Singer": "Trọng Tấn, Tân Nhàn",
      "image": "trongtan.jpg"
    },
    {
      "Id": "1412143332",
      "Name": "Đáp Mộ Cuộc Tình",
      "Singer": "Đan Nguyên",
      "image": "dangnguyen.jpg"
    },
    {
      "Id": "1412143332",
      "Name": "yeu lai tu dau",
      "Singer": "Đasdadanx zxcz",
      "image": "asd.jpg"
    }
  ];
  getListTheoBangChuCai() {

    return Object.values(
      this.sings.reduce((acc, word) => {
        let KiTuDauTien = word.Name[0].toLocaleUpperCase();
        if (!acc[KiTuDauTien]) {
          acc[KiTuDauTien] = { headers: KiTuDauTien, item: [word] };
        } else {
          acc[KiTuDauTien].item.push(word);
        }
        return acc;
      }, {})
    );

  }
  mylist;



  constructor() {
    this.mylist = this.getListTheoBangChuCai();
  }

}
