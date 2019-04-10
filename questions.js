var languagesArrayCreation = function () {
  return array = ["Html", "CSS", "Java", "PHP"];
}

var numbersArrayCreation = function () {

    return array = [0,1,2,3,4,5];
}

var ElementReplacement = function (languages) {
  languages.splice(2,1,"Javascript");
  return languages
}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby","Python")
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift(0);
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMedia= socialMediaInString.split(",");
  return socialMedia;
}

var arrayToString = function (languages) {

  return languages.toString();
}

var arraySort = function (socialMedia) {
  socialMedia.splice(1,0,"Google +");
  socialMedia.splice(3,1,);
  socialMedia.splice(4,1,);
  socialMedia.splice(2,0,"LinkedIn");
    return socialMedia;
}

var arrayInvert = function (languages){
languages.reverse();
  return languages;
}
