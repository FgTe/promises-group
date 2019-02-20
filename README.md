# promises-group
This class is built to manage multiple parallel promises. Its constructor accepts an array of functions that returns a promise. These functions will be invoked sequentially when **call** or **refresh** called. Those are propertys of an instance of this class. They accept an object as an argument that contains tow propertys **complete**(Function) and **success**(Function). They will be invoked with an argument that is an array of resolved results. The result in this array and function that returns the promise resolving with it are corresponded by index.
   
   
