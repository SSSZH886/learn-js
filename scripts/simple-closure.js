function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name); // call with binding 
    }
    return dispName; // return a closure (dispname calling mozilla)
}
// where we have a function, when an event gets trigger.
//  add a function to event handler.// should add a closure. we also

const f = makeFunc();
f();