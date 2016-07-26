var app = angular.module('madLibsApp');
app.factory('madLibsFactory', function() {
    var emptyObject = {};

    function saveObject(madLib) {
        emptyObject = madLib;
        console.log(emptyObject);
    } //passes the info through from the inputController and saves to object
    // --> user input is being stored here

    function returnObject() {
        return emptyObject;
    } //returns the object of the passed through info from the page

    return {
        saveObject: saveObject,
        returnObject: returnObject
    }; // returns the emtpy object from before with the two new key:value pairs with the vlaues as functions which are declared on lines 5 and 10
});

//factories return objects and services return functions
