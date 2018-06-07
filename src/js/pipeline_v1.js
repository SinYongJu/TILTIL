'use strict'

var resultView = document.querySelector('#resultView');

// utils 

function log(arg){

  resultView.innerHTML += arg

}



// functional한 프로그래밍을 해보려고함돠

// ver 1.0.0 

// 일단 순서대로 처리만을 성공해 보자 

function a(){
  log('a 처리 중')
  return this
}

function b(){
  log('b 처리')
  return this
}

function c(){

  log('c 처리')
  
  return this
}



function Pipeline(){
  var tasking = Array.from(arguments) || [];
  this.task = tasking;

  return this
};


Pipeline.prototype.pipe = function(fn){

  for(var i = 0; i < this.task.length;i++){
    
    if(this.task[i] == fn){

      fn()
    
    }
    
  
  }
  return this

};

var test = new Pipeline(a,b,c);


test.pipe(b).pipe(c).pipe(a).pipe(c).pipe(a).pipe(c);






