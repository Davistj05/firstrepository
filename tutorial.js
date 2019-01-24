setTimeout(function(){
  document.getElementById ('paragraph').innerHTML=sum
}, 1000)
  var sum=0
for(i=0; i<=100;i++){
  if (i%2==0){
    sum=sum+i

  }
}
setTimeout(function(){
  $('#paragraph').text ('this is more different')
}, 3000)
