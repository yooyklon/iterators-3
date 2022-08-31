export default function canIterate(elem) {
  if (elem == null) {
    return false;
  }
  return typeof elem[Symbol.iterator] === 'function';
}
