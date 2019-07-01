function findUniq(arr) {
  let unique = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] != arr[i-1] && arr[i] != arr[i+1] && arr[i] != arr[i-2]){
    unique = arr[i];
    }
  }
  return unique;
}