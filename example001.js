var person = function () {
 
  var fullName = "Jason Shapiro";
  var reg = new RegExp(/\d+/);
 
  var theObj = {
    setFullName : function (newValue) {
      if( reg.test(newValue) ) {
        alert("invalid name");
      }
      else {
        fullName = newValue; // Legal! The object has access to "fullName"
      }
    },
    getFullName : function () {
     return fullName; // Legal! The object has access to "fullName"
    }
  }; // End of the Object
};
console.log(person.theObj.getFullName()); // doesn't work!