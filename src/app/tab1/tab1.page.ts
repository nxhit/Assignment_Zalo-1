import { Component } from '@angular/core';
import { mylist } from './mylist'
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
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
      "image": "https://zenco.com.vn/wp-content/uploads/2019/09/anh-con-no-anh.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
    },
    {
      "Id": "1412134520",
      "Name": "Anh Het Nợ Em",
      "Singer": "Quang Dũng",
      "image": "quangdung.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
    },
    {
      "Id": "1412145502",
      "Name": "Cách Biệt",
      "Singer": "Đặng Thế Luân",
      "image": "dangtheluan.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
    },
    {
      "Id": "1412144501",
      "Name": "Gặp Nhau Trong Rùng Mơ",
      "Singer": "Trọng Tấn, Tân Nhàn",
      "image": "trongtan.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
    },
    {
      "Id": "1412143332",
      "Name": "Đáp Mộ Cuộc Tình",
      "Singer": "Đan Nguyên",
      "image": "dangnguyen.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
    },
    {
      "Id": "1412143332",
      "Name": "yeu lai tu dau",
      "Singer": "Đasdadanx zxcz",
      "image": "asd.jpg",
      "loibaihat":"Anh còn nợ em Công viên ghế đáCông viên ghế đá Lá đổ chiều êm."
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
  mylist = [];



  constructor(private ds:DataService,private router:Router) {
    this.mylist = this.getListTheoBangChuCai();
  }
  public searchValue;

  thongbao() {
    this.mylist = this.getListTheoBangChuCai();
    let tempArr = [];
    for (let i = 0; i < this.mylist.length; i++) {
      for (let x of this.mylist[i]["item"]) {
        if (x["Name"].toLowerCase().indexOf(this.searchValue.toLowerCase())>-1) {
          if (tempArr.indexOf(this.mylist[i]) < 0) {
            tempArr.push(this.mylist[i]);
          }

        }
      }
    }
    this.mylist = tempArr;
    console.log(this.mylist);

  }

  mylistIsEmpty(){
    if(this.mylist.length==0){
      return true
    }
    return false
  }

  goToDetailPage(item){
    this.ds.selectedSong=item;
    this.router.navigate(['/detail']);
  }












  // // this.mylist = this.getListTheoBangChuCai();
  // console.log(`1=`, this.mylist);

  // this.searchValue = this.searchValue.toLocaleLowerCase();
  // console.log(this.searchValue);
  // for (let i = 0; i < this.mylist.length; i++) {
  //   for (let x of this.mylist[i].item) {
  //     if (x["Name"].toLocaleLowerCase().search(this.searchValue) > 0) {
  //       this.tempArr.push(this.mylist[i]);
  //     }
  //   }
  // }
  // this.mylist=this.tempArr;



}
