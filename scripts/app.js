// var myList = [
//     {a: 10},
//     {a: 15},
//     {a: 25}
// ];
//
// var myNewList = myList.map( obj => obj.a )
//
// console.log(myNewList);

var a = 11;

var myobj = {
    a: 10,
    myFunc:  () => {
        console.log(this.a);
        var newFunc = () => {
            this.a += 5;
            console.log(this.a);
        }
        newFunc();
    }
};

myobj.myFunc();