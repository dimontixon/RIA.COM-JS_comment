var fs = require('fs');

var reader = fs.readFileSync('input.txt', 'utf8');

var arrayLines = reader.split('\n');
console.log(`All comments = ${arrayLines.length}`);

// читання кожного рядка та розбиття користувачів на масив. 
// Запис в масив об'єктів
var lines = [];
for(var i = 0; i < arrayLines.length; i++){
  var oneLine = arrayLines[i].split(': ');
  var splitUsers = oneLine[0].split(':').reverse();
  lines.push({id: i+1, users: splitUsers, comment: oneLine[1]});
}

// найбільший рівень вкладеності коментарів
maxLevelNestingComments = 0;
for(var i=0; i < lines.length; i++){
  if(lines[i].users.length > maxLevelNestingComments){
    maxLevelNestingComments = lines[i].users.length;
  }
}

console.log(`Level nesting comments = ${maxLevelNestingComments}`);

console.log(lines);
for(var i = 0; i < lines.length; i++){
  for(var j = 0; j < lines.length; j++){
    if(lines[i].users.length == 1){
      // console.log(`${lines[i].id}`);
      // break;

      if(lines[i].users.length == lines[j].users.length - 1){ // maybe here is problem
        var count = 0;
        for(var k = 0; k < lines[i].users.length; k++){ 
          if(lines[i].users[k] == lines[j].users[k]){ // or here
            count++;
            break;
          }
        }

        if(count == lines[i].users.length){
          console.log(`${lines[i].id} -- ${lines[j].id}`);
          break;
        }
        else{ // or in this condition "if"
          console.log(`${lines[i].id}`);
        }
      }
      
    }else 
    if(lines[i].users.length == lines[j].users.length - 1){
      var count = 0;
      for(var k = 0; k < lines[i].users.length; k++){
        if(lines[i].users[k] == lines[j].users[k]){
          count++;
        }
      }
      if(count == lines[i].users.length){
        console.log(`${lines[i].id} -- ${lines[j].id}`);
      }
    }
  }
}