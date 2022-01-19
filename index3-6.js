
let card = {
    name: 'tej',
    tel: '0912345678',
    addr: 'AA市BB區CC路D段E號',
    '職稱': '工程師'
};

// let x = 'name';
// console.log(card[x]);

for(let i in card){
    // console.log(i);
    // console.log(typeof i);
    console.log(card[i])
}