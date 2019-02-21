# promises-group
This class is built to manage multiple parallel promises.   
Its constructor accepts an array of functions that returns a promise. These functions will be invoked sequentially when **call** or **refresh** called. Those are properties of an instance of this class.
They accept an object as an argument that contains two properties, **complete**(Function) and **success**(Function). These two functions will be invoked with an argument that is an array of resolved results. The result in this array and function which returns the promise resolving with it are corresponded by index. **complete** will be invoked when all promises resolved or rejected, and **success** will be invoked only if all promises resolved.
