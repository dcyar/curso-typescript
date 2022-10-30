"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'El mundo esta a salvo'; };
    var myFunction;
    //! myFunction = 10
    //! console.log(myFunction);
    //* myFunction = addNumbers
    //* console.log(myFunction(1, 2));
    //* myFunction = greet
    //* console.log(myFunction('Jhon'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
