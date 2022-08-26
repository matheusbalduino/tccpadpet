export function existsValue(value:any){
  if(value !== null && value !== undefined && value !== ""){
    return true
  }
  return false
}
