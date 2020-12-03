const fs = require('fs');



const quote = "Why, sometimes I've believed as many as six impossible things before breakfast."

fs.writeFile('alicequotes.txt',quote, (err) =>{

});

fs.readFile('alicequotes.txt','utf8', (err, content) =>{
  console.log(content);
})

fs.readFile('style.css', 'utf8', (err, content) => {
  let count = 0;
  for (var i = 0; i < content.length; i++) {
    if (content[i] == '#') {
      count++
    }
  }
  console.log(count);

})


