const _ = require('lodash');

function validarCpf(numero){
    let cpf = numero;
     
     function tratar(){
          cpf = cpf.split("");
          cpf.splice(3,1);
          cpf.splice(6,1);
          cpf.splice(9,1);
          for(let i in cpf){
          cpf[i] = parseInt(cpf[i]);
          }
          return cpf;
     }    
     cpf = tratar();
     
     let testeErro = _.uniq(cpf);
     if(testeErro.length == 1){
         return false
     }

     let v = [];
  
     function iguala(){
         for ( let i = 0; i<9;i++){
              v[i] = cpf[i];
         }
         return v;
     }
     v = iguala();
  
  
  
      function extrairTotal1(){
          let resultado = []; 
          let total=0;
          for (let i=0; i < 9; i++){
              let multiplicador = 10 ; 
              resultado[i] = v[i]*(multiplicador-i);
              total = total+resultado[i];
          }
          return total;
      }
  
  
      function digitoUm(){
          let total = extrairTotal1(); 
          let resto = total % 11 ;    
          let digito1 =  0;
          if(resto <2){
              digito1 = 0;
          }
          else{
              digito1 = 11 - resto;
          }
          v[9] = digito1;
          return v;
      }
  
      function extrairTotal2(){
          let v = digitoUm();
          let resultado1 = []; 
          let total=0;
          for (let i=0; i < 10; i++){
              let multiplicador = 11 ; 
              resultado1[i] = v[i]*(multiplicador-i);
              total = total+resultado1[i];
          }
          return total;
      }
      function digitoDois(){
          let arrayCfp = digitoUm(); 
          let total = extrairTotal2();
          let resto = total % 11 ; 
          let digito2 =  0;
          if(resto <2){
              digito2 = 0;
          }
          else{
              digito2 = 11 - resto;
          }
          arrayCfp[10] = digito2;
          
          return arrayCfp;
      }
  
      let valido = digitoDois();
  
      if(cpf[9]===valido[9] && cpf[10]===valido[10]){
          return true;
      } 
      else{
          return false;
      }
  
  
      
}


module.exports = {
    validarCpf
}