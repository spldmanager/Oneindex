let body = $response.body
let restype = $response.headers['Content-Type']

if (/html/.test(restype)) {
  const $ = $cheerio.load(body)
  $('body').text('hello cheerio')
  body = $.html()
  console.log(body)
}

alert('test')

$done(body)
