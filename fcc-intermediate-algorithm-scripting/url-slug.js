let urlSlug = title => 
  title
    .split(/\s/)
    .filter(str => str.length != "")
    .join("-")
    .toLowerCase()

let myStr = urlSlug(" Winter Is  Coming")

console.log(myStr)
