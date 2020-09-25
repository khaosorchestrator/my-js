function isPalindrome(str) {
  let newStr = str.replace(/[`~!@#$%^&*() _|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase().split('')
  str = newStr.join('');

  return newStr.reverse().join('') == str
}
