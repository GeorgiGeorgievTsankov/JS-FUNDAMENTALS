function isPalindromeReg(str) {
    // Преобразуване на стринга в малки букви
    const cleanStr = str.toLowerCase();
  
    // Изчистване на всички символи, които не са букви
    const alphanumericStr = cleanStr.replace(/[^a-z]/g, '');
  
    // Обръщане на стринга
    const reversedStr = alphanumericStr.split('').reverse().join('');
  
    // Сравняване на оригиналния стринг с обръщания
    return alphanumericStr === reversedStr;
  }
  
  // Примери за използване:
  console.log(isPalindromeReg("level"));       // true
  console.log(isPalindromeReg("A man a plan /a / canal, Panama")); // true
  console.log(isPalindromeReg("hello"));       // false
  
  