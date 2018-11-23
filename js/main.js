
 function cpf() {
    function gerar(){
        let cpf = [];
        for(let i=0; i<9;i++){
            cpf[i] = Math.floor(Math.random()*10);
        }
        return cpf;
        }
        let v = gerar();

    function extrairTotal1(){
        let resultado = []; 
        let total=0;
        for (let i=0; i < 9; i++){
            let multiplicador = 10 ; 
            resultado[i] = v[i]*(multiplicador-i);
        }
        for(let i=0; i < 9; i++){
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
        }
        for(let i=0; i < 10; i++){
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
    function formatar(){
        let array = digitoDois();
        array.splice(3,0,".")
        array.splice(7,0,".")
        array.splice(11,0,"-")
        array = array.join("");
        return array;
    }
 
    let value = formatar();

    document.getElementById("input").innerHTML = "<input type='text' class='form-control'value="+value+">";
} 

function validarCpf(){
    

  let cpf = document.getElementById("validarinput").value;
   
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
   let v = [];

   function verdade(){
       for ( let i = 0; i<9;i++){
            v[i] = cpf[i];
       }
       return v;
   }
   v = verdade();



    function extrairTotal1(){
        let resultado = []; 
        let total=0;
        for (let i=0; i < 9; i++){
            let multiplicador = 10 ; 
            resultado[i] = v[i]*(multiplicador-i);
        }
        for(let i=0; i < 9; i++){
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
        }
        for(let i=0; i < 10; i++){
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
        return alert("-----------------------------CPF É VALIDO-----------------------------")
    } 
    else{
        return alert("-----------------------------CPF É INVALIDO-----------------------------")
    }


    
}



