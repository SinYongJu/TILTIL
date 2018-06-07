'use strict'

var resultView = document.querySelector('#resultView');

// utils 

function log(arg){

  resultView.innerHTML += arg+'&nbsp'+'&nbsp//'

}



// functional한 프로그래밍을 해보려고함돠

// ver 2.0.0 

// 순서대로 처리를 하는데 이제 반환 값을 받아서 처리해 보자


function a(i){
  
  var i = i + 10;

  log('a 처리 중'+i)
  console.log('a', i)
  return i

}


function b(i){

  var i = i+ 100; 
 
  log('b 처리'+i)
 
  console.log(i,'b')

  return i

}

function c(){

  log('c 처리')
  
  return this

}


function d(i){

  var i = i + 'task'
  log(i)
  
  return this

}

function Pipeline(){
  
  var tasking = Array.from(arguments) || [];
  
  this.task = tasking;
  
  this.pretasks = [];

  return this

};


Pipeline.prototype.pipe = function(fn){
  
  this.pretasks.push(fn)
  
  console.log(this.pretasks)

  return this.precess();
};


Pipeline.prototype.precess = function(data){
  
  console.log(this.returnData,'process')

  if(this.returnData == undefined){


      this.returnData = this.pretasks[this.pretasks.length-1]

    

  
  }else{

    if( data == 'undefined'){

      console.log(typeof data, 'process 안에서 ')
    
    }else{
      var typeChecker = this.pretasks[this.pretasks.length-1](this.returnData)

      if(typeChecker instanceof Object){
          
        return this
      
      }
      

      this.returnData = typeChecker;

    }
  
  }


  return this

}

var test = new Pipeline(a,b,c);


test.pipe(a(1)).pipe(b).pipe(c).pipe(a).pipe(d).pipe(a);





