function pickPeaks(arr){
  let obj = {
    pos: [],
    peaks: [],
  }
  let next;
  for(let i = 1; i < arr.length-1; i++){
  next = i;
   while(arr[next] === arr[next+1]){
   //loop to get out of plateau 
      next++;
      }
    if(arr[i] > arr[i-1] && arr[i] >= arr[i+1] && arr[i] > arr[next+1]){
      obj.pos.push(i);
      obj.peaks.push(arr[i]);
    }
  }
  return obj;
}