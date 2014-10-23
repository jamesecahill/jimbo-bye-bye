JimboByeBye.Test = DS.Model.extend({
  text: DS.attr(),
  input: DS.attr(),
  output: DS.attr(),
  successMessage: DS.attr()
});

JimboByeBye.Test.FIXTURES = [
  {
    id: "test1", 
    text: "Decode the string for my personal email address",
    input: "var string = \"d4c2dacae6cac6c2d0d2d8d880cedac2d2d85cc6deda\";",
    successMessage: "It was just hex encoded ascii... multipled by 2.",
    output: "jamesecahill@gmail.com"
  },
  {
    id: "test2",
    text: "Decode the string for my cell phone number",
    input: "var string = \"1i 1h 1l 1d 1i 1m 1k 1d 1l 1p 1l 1p\";",
    output: "215-264-5959",
    successMessage: "Space delimited base32... Weird."
  },
  {
    id: "test3",
    text: "Return a string of the top two words used in descending order of usage, space delimited, for my linked in profile",
    input: "var string = \"This is a sentence where a is used twice and is is used four times.\";",
    output: "is a",
    successMessage: "http://www.linkedin.com/pub/james-cahill/8/858/686/"
  }
];
