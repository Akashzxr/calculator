function display(val){
    document.getElementById('output-screen').value+=val;
}
function cl(){
    document.getElementById('output-screen').value="";
}
function del(){
    document.getElementById('output-screen').value=document.getElementById('output-screen').value.slice(0,-1);
}
function calculate(){
    var text=document.getElementById('output-screen').value;
    var result=eval(text);
    document.getElementById('output-screen').value=result;
}