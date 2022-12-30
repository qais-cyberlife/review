// WRITE YOUR CODE HERE
var studentNames = ['Qais', 'Rich', 'Will', 'Nancy'];

console.log(studentNames.length)

for (let i = 0; i < studentNames.length; i++) {
    console.log('Welcome to the class ' + studentNames[i])
}

studentNames[0] = 'Qusay';

if (studentNames[0] !== 'Qais') {
 console.log(studentNames[0] + " is in class")
}
