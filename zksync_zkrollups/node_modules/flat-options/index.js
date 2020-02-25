
export default function flatOptions(options, defaults) {
  const result = Object.assign({}, defaults);
  if (options && typeof options === 'object') {
    Object.keys(options).forEach(key => validateOption(key, defaults) && copyOption(key, options, result));
  }
  return result;
}

function copyOption(key, from, to) {
  if (from[key] !== undefined) {
    to[key] = from[key];
  }
}

function validateOption(key, defaults) {
  if (defaults && !Object.hasOwnProperty.call(defaults, key)) {
    throw new Error(`Unknown option: ${key}`);
  }
  return true;
}
