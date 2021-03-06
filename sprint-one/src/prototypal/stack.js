var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.pop = function (){
  if (this.count >0){
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.size = function(){
  return this.count;
};

