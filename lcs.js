s = process.argv.slice(2)
r = ""
a = s[0]
for (i = 0; i < a.length; i++)
  for (j = i + 1; j <= a.length; j++) {
    t = a.slice(i, j)
    if (t.length > r.length && s.every(e => e.includes(t)))
      r = t
  }
console.log(r)


