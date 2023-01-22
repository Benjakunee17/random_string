function create_random_string(length){
    var result           = '';
    var characters       = 'ABCDEFG'
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result;
    
}

console.log(create_random_string(4));
//          สุ่ม          ถูกต้อง          ตำแหน่ง        คำตอบ
//ครั้งที่ 1 = DGDC ,       2               0           ABCD

//ครั้งที่ 2 = GBEB,        1               1           ABCD

//ครั้งที่ 3 = DEGB,        2               0           ABCD

//ครั้งที่ 4 = BBDD         2               2           ABCD

//ครั้งที่ 5 = BABB         2               0           ABCD

//ครั้งที่ 6 = FFGD         1               1           ABCD

