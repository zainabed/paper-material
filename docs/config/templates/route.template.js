angular
    // Injecting into our app module
    .module('z-material')

    // Creating an Angular constant and rendering a list of items as JSON
    .constant('{$ doc.name $}', {$ doc.routes | json $});
