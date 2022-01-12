let person = (function(){
  let age = 15;

  return {
    name: "luffy",

    getAge: function(){
      console.log(age);
      return age;
    },

    setAge: function(val){
      age = val;
      console.log(age);
    }
  }
})();

pserson.getAge