function creditCardValidation(cardNumber) {
  /*
  mastercard regex checks for 16-digit card starting with 51 to 55
  ^ matches the start of the string
  5[1-5] ensures the card number starts with 51, 52, 53, 54, or 55
  (all master cards start with these numbers)
  [0-9]{14}: Matches exactly 14 digits
  $ matches the end of the string
  */
  const mastercardRegex = /^(?:5[1-5][0-9]{14})$/;
  /*
  visa regex checks for 13 to 16-digit card starting with 4.
  ^ matches the start of the string
  4 ensures the card number starts with 4 (all visa cards start with 4)
  [0-9]{12}: Matches exactly 12 digits the inital 4
  (?:[0-9]{3})?: matches an additional 3 digits (if the card has 15 or 16 digits)
  $ matches the end of the string
  */
  const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  if (visaRegex.test(cardNumber)) {
    return "Valid visa";
  } else if (mastercardRegex.test(cardNumber)) {
    return "Valid masterCard";
  } else {
    return "Invalid card number or unspported card";
  }
}
