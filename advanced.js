var person = new Object();


person = {
    "address" : "Santa Clara",
    "displayName1" : function() {
        console.log(this.firstName +" "+this.lastName);
    }
}

Object.defineProperty(person,"firstName", {
    configurable: false,
    writable:false,
    value: "Arun",
    enumerable: true
});

Object.defineProperty(person,"lastName", {
    configurable:false,
    writable: false,
    value: "Nekkalapudi",
    enumerable: true
});


Object.defineProperty(person, "displayName", {
    
    value: function() {
        return this.lastName;
    } ,
    enumerable: true,
 });

//  for(var i in person) {
//      console.log(i);
//  }

 person.firstName = "Varun";

//  hello = person.displayName.bind(person);
//  hello();

 console.log(person.displayName());




