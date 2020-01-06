let array = ['cheese', 'corn', 'apple', 'acorn', 'beet', 'banana', 'yam', 'yucca', 'zuize']
let sings = [
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
        "Name": "Oáp Mộ Cuộc Tình",
        "Singer": "asdasĐan Nguyên",
        "image": "dangnguyen.jpg"
    }

];


let mangBaihatTheoBangChuCai = sings.reduce((a, c) => {
    //C['Name'][0] là kí tự đầu tiên của tên bài hát
    let k = c.Name[0].toLocaleUpperCase()

    // Nếu chưa có thì tạo ra 1 object có thuộc tính k có giá trị là 1 mảng
    if (a[k]) {
        a[k].push({
            header: k,
            item: [
                {
                    "Name": c.Name,
                    "Id": c.Id,
                    "Singer": c.Singer,
                    "image": c.image
                }
            ]
        })
    }
    else {
        a[k] = [
            {
                header: k,
                item: [
                    {
                        "Name": c.Name,
                        "Id": c.Id,
                        "Singer": c.Singer,
                        "image": c.image
                    }
                ]
            }
        ]
    }

    return a;
}, {})

console.log(mangBaihatTheoBangChuCai);
// console.log(mangBaihatTheoBangChuCai.A[0].item);

// // Get the A's
// console.log(mangBaihatTheoBangChuCai['A'])


