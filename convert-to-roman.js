let romanNumber = {
  1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
  9: "IX", 10: "X", 20: "XX", 40: "XL", 50: "L", 60: "LX", 80: "LXXX", 90: "XC", 100: "C",
  200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 
  1000: "M", 2000: "MM", 3000: "MMM", 4000: "MMMM"
}

function convertToRoman(num) {
  let divider, res = 0

  if (romanNumber[num]) {
    return romanNumber[num]
  }

  if (num < 100) {
    divider = 10
  } else if (num < 1000) {
    divider = 100
  } else {
    divider = 1000
  }

  res = parseInt(num / divider) * divider
  return romanNumber[res] + convertToRoman(num % divider)
}

let num = convertToRoman(100);

console.log(num)
