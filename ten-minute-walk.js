function isValidWalk(walk) {
  let destination = 0;
  walk.forEach((direction)=>{
  if(direction === 'n' || direction === 'e'){
    destination++;
  }else{
    destination--;
  }
  })
  if(destination == 0 && walk.length == 10){
    return true;
  }
  return false;
}