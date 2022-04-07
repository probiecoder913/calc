function clean() {
   document.querySelector("input").value  = "0";
}
function append(num){
    document.querySelector("input").value += num;
}
function solve() {
    var res = document.querySelector("input").value;
    document.querySelector("input").value = eval(res);
}