export function random(min = 0, max = 1) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);

  return min + (array[0] / 0xffffffff) * (max - min);
}