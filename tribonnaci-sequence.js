function tribonacci(signature,n){
  let i = 0;
  let arr = [];
  while(i < n){
  if(i < 3){
  arr.push(signature[i]);
  }else{
  let newValue = arr[i-1] + arr[i-2] + arr[i-3];
  arr.push(newValue);
  }
  i++;
  }
  return arr;
}