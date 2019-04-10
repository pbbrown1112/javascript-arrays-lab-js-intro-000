var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  var kittens = kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.shift(name)
  return kittens
}
