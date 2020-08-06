function map(source, func) {
  let r = []
  for (let i = 0; i < source.length; i++) {
    let element = source[i]
    r.push(func(element))
  }

  return r;
}

function reduce(source, func, starting) {
  let r = 
}

function reduce(src, cb, starting) {
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
} 