let estado = function(SP,RJ){
    if(SP === "SP" || RJ === "RJ"){
        return "Estado permitido"
    }else{
        return "Estado negado"
    }
}
module.exports = estado;