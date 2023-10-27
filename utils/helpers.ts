export function isNumber(param: any): boolean {
  return !isNaN(parseFloat(param)) && isFinite(param);
}
