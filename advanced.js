var person = new Object();

// Enumberable, Configurable, writable 
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

 // Getter and setter
Object,defineProperty(person, "fullName", {
    get: function() {
        return this.firstName+" "+this.lastName;
    },
    set: function(value) {
        var splitValue = value.split(" ");
        this.firstName = splitValue[0];
        this.lastName = splitValue[1];
    }
});

 person.firstName = "Varun";

//  hello = person.displayName.bind(person);
//  hello();

 console.log(person.displayName());




