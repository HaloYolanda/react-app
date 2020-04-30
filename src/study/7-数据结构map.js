const map = new Map()

map.set('xxx', 'xx').set('kkk', 'kk')

console.log(map.size) //2
console.log(map.get('xxx')) //xx
console.log(map.has('kkk')) //true
console.log(map.has('kk')) //false

console.log(map.keys()) //[Map Iterator] { 'xxx', 'kkk' }
console.log(map.values()) //[Map Iterator] { 'xx', 'kk' }

console.log(map.entries()) //[Map Entries] { [ 'xxx', 'xx' ], [ 'kkk', 'kk' ] }

map.forEach(function (v, k) {
    console.log(k + ':' + v)
    // xxx: xx
    // kkk: kk
})