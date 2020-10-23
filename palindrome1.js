function palindrome(str) {
  return str.replace(/[`~!@#$%^&*() _|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase() == 
  str.replace(/[`~!@#$%^&*() _|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')toLowerCase().split("").reverse().join()
}
