function setMatrix() {
    // deterSet();
    const input = document.querySelector("#matrix");
    const size = 9;
    // if (!(size > 0 && size < 11)) {
    //   document.getElementById("resultdet").innerHTML = "Invalid Order";
    //   document.querySelector("#resultboxdet").style.display = "inline";
    //   return;
    // }
  
    for (var i = 0; i < size; i++) {
      var rows = document.createElement('div');
      input.appendChild(rows);
      rows.className = "rows";
  
      for (var j = 0; j < size; j++) {
        var field = document.createElement("input");
        field.type = "number";
        field.className = "cells";
        field.id = `deter${i}${j}`;
        var flex = document.createElement('div');
        flex.className = "flex";
  
        flex.style.display = "inline";
  
        rows.appendChild(flex);
        flex.appendChild(field);
      }
  
    }
  }
  document.getElementById("resultboxdet").addEventListener("submit",(e)=>{
    e.preventDefault()
    calculatelDet()
})
function calculateDet() {
    var n =9;
    var mat = [];
    for (var i = 0; i < n; i++) {
      mat[i] = [];
      for (var j = 0; j < n; j++) {
        if (document.getElementById(`deter${i}${j}`).value) {
          mat[i][j] =parseInt(document.getElementById(`deter${i}${j}`).value);
        }
        else mat[i][j] = '.';
      }
    }
  //  console.log(mat);
    solve(mat);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
        
            document.getElementById(`deter${i}${j}`).value=mat[i][j];
          
         
        }
      }
 
    
    // document.getElementById("resultdet").innerHTML = ans;
    // document.querySelector("#resultboxdet").style.display = "block";
  
  }
  function check(board,i,j,cond){
    
    
    var a=true;
    var b=cond;
    for(var k=0;k<9;k++){
        if((board[i][k]==b&&(k^j)) || (board[k][j]==b&&(k^i))) a=false;
        }
    
var r=Math.floor(i/3)*3;
var c=Math.floor(j/3)*3;
for(var p=r;p<r+3;p++){
    for(var q=c;q<c+3;q++){
        if(board[p][q]==b && p!=i&&q!=j) a=false;
        }
    }
    return a;
}


function solve(board){
    
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(board[i][j]=='.'){
               
                
                for(var k='1';k<='9';k++){
                    if(check(board,i,j,k)){
                        
                        board[i][j]=parseInt(k);
                        if(solve(board)){return 1;}
                        else{
                            board[i][j]='.';
                        }
                        
                        
                        
                    }
                    else{
                        continue;
                    }
                }
               return 0;
            }
            
                
            
        }
    }
    return 1;
}
