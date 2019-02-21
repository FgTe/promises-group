# promises-group
This class is built to manage multiple parallel promises.   
Its constructor accepts an array of functions that returns a promise. When **call** or **refresh** called, these functions will sequentially be invoked. Those are properties of an instance of this class.
- **call(obj)** will invoke functions accepted by constructor except which was invoked and it returning promise was resolved or was not resolved and rejected yet.
- **refresh(obj)** will invoke functions accepted by constructor except which was invoked and it returning promise was not resolved and rejected yet.

They accept an object as an argument that contains two functions as properties, **complete** and **success**. These two functions will be invoked with an argument that is an array of resolved results. The result in this array and function which returned the promise resolving with it are corresponded by index. When all promises resolved, **success** will be invoked. When all promises resolved or rejected, **complete** will be invoked.
