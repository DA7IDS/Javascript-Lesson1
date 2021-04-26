// 1
var number = 15;
var number1 = 25;
var equal = number + number1;
console.log(equal);
// 2
var User = { name: 'Temo', age: 26, numbers: ['+995123321312', '+9951231241'], isActive: false }
console.log(User.numbers)

// 3
var user2 = { name: 'Temo', age: 26, numbers: ['+995123321312', '+9951231241'], isActive: false }
console.log(user2.name + " არის " + user2.age + " წლის")
    // 4
var arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

for (x = 0; x < arr.length; x++) {
    if (arr[x].length >= 5)
        console.log(arr[x])
}
// 5
var array = [
    [2, -3, 5, 11],
    [1, -30, -11, 100],
    [-1, -3, -4]
];
for (var a = 0; a < array.length; a++) {
    for (var b = 0; b < array[a].length; b++)
        if (array[a][b] > 0) {
            console.log(array[a][b])
        }
}
// 7
var users = [{ username: 'test', status: false, }, { username: 'test2', status: false, }, { username: 'test3', status: true, }]
for (y = 0; y < users.length; y++) {
    if (users[y].status) {
        console.log(users[y])
    }

}