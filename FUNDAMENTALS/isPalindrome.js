function isPalindrome(str) {
    // Преобразуване на стринга в малки букви
    const cleanStr = str.toLowerCase();
  
    // Изтриване на интервалите
    const spacelessStr = cleanStr.split(' ').join('');
  
    // Обръщане на стринга
    const reversedStr = spacelessStr.split('').reverse().join('');
   
  
    // Сравняване на оригиналния стринг с обръщания
    return spacelessStr === reversedStr;
  }
  
  // Примери за използване:
  console.log(isPalindrome("level"));       // true
  console.log(isPalindrome("A man a plan a canal Panama")); // true
  console.log(isPalindrome("hello"));       // false
  console.log(isPalindrome("Georgi is Junior"));     //false