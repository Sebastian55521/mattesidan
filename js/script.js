console.log("hejsan");
function getValue() {
    var a_str = document.getElementById("a").value;
    var a = parseInt(a_str);
    var b_str = document.getElementById("b").value;
    var b = parseInt(b_str);
    var c = pyth(a, b);
    document.getElementById("Svar").innerHTML = c;
    
  }
  
function pyth(a, b){

    var c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2));
    return c;


}