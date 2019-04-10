var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function kittens() {
  return kittens
}

function destructivelyAppendKitten(array, element) {
  console.log(array.push(element))
  return array.push(element)
}
