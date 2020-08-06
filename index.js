function map(source, func) {
  let r = []
  for (let i = 0; i < source.length; i++) {
    let element = source[i]
    r.push(func(element))
  }

  return r;
}