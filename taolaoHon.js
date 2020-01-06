let words = ["corn", "to", "add", "adhere", "tree"];
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
    }
  ];
const getListTheoBangChuCai = () => {
   
    return Object.values(
      sings.reduce((acc, word) => {
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

var x=getListTheoBangChuCai();
console.log(x[0].item);