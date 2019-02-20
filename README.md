# promises-group
This class is built to manage multiple parallel promises. Its constructor accepts an array of function that returns a promise. These functions will be invoked sequentially when **call** or **refresh** called. Both are a property of an instance of this class. They accept an object as the second argument that contains tow property **complete**(Function) and **success**(Function). They will be invoked with an array of resolved result as an argument. The result in this array and function that return the promise resolving with it are corresponded by index.
   
   
