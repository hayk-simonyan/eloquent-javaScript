// my solution
let print = ""
for (let i = 0; i < 7; i++)  {
  print += "#"; 
  console.log(print);
}

// solution
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);