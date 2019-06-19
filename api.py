<!DOCTYPE html>
<html lang="en">
  <head>
    <title>API My notes</title>
  </head>
  <body>
    <p>I'm in the body!</p>
  </body>
</html>

<h1>API LEARNINGS</h1>
<p>
What even is an API?
The term API is used quite broadly, and if you look it up you'll find a number of different definitions (some of which are rather difficult to understand). But the key underlying idea is in the name—Application Programming Interface. An API is an interface. It's something that has been created to help two different applications interact with one another.
For example, in this lesson you'll be working with an online service, MetaWeather, that aggregates data on weather forecasts. And you'll be writing a Python program to display that weather data. In order for these two systems to interact, we need an interface between them—something that allows your Python code to make requests to the MetaWeather service and receive back responses with data that it can interpret meaningfully. And that's what an API is for. MetaWeather provide an API so that there's a standardized way for other program to communicate with it.</p>

<p>Below is a demonstration of what you'll be building in this lesson. You'll write Python code that gets weather data for a city and displays it to the user on request.
To try it out for yourself, enter the name of a city (such as Tokyo, London, or Delhi) into the terminal shown below.
Note that MetaWeather only has data for major cities—but the program below will still give a helpful message if you enter a city it doesn't have data for (rather than crashing or displaying an error message). This is also something you'll learn how to do in this lesson.</p>
<ul>
<li> In the video, Karl showed how to send a request to the MetaWeather API to get the Where On Earth Identifier (WOEID).
You can do this from either your terminal or the browser, using the URL:</li>
<li>https://www.metaweather.com/api/location/search/?query=</li>
<li>With the city name (for whatever city you're interested in) added to the end. Give it a try in your own browser first. See if you can get the WOEID for New York.</li>
<li>

<P>To keep it simple. If spaces were allowed, just figuring out where the URL ends would become really tricky.
Suppose I were to send you a a link to this thread: https://www.reddit.com/r/explainlikeimfive/comments/5itw51/eli5_why_arent_spaces_allowed_in_urls/
Does it end on a space or not? It's difficult to tell. And if I instead list two URLs, you have no way of knowing whether it's actually one or two:
"https://www.reddit.com/r/explainlikeimfive/new/ and http://amazon.com" could be a single URL. Or it could be two URLs separated by the word "and".
So it's much simpler to just say "unescaped spaces are not allowed" and avoid all that confusion. If you really want to use a space, the escape sequence %20 exists for that purpose, making it possible to include spaces in a safe way.
In fact, here's the relevant quote from the RFC in which URLs are defined.
The space character is unsafe because significant spaces may disappear and insignificant spaces may be introduced when URLs are transcribed or typeset or subjected to the treatment of word-processing programs.
permalinkembedsave

[–]Schnutzel 13 points 2 years ago
Note that this is also because HTTP is a text based protocol, which uses spaces and line endings as delimiters. A simple HTTP request looks something like this:
GET /r/explainlikeimfive HTTP/1.1
Host: www.reddit.com
The space after explainlikeimfive denotes the end of the url and the beginning of the http protocol version.
permalinkembedsaveparent

[–][deleted] 1 point 2 years ago
Sure, the same problem extends to the underlying protocols as well. But for an ELI5 answer, I figured looking at it just from a human readability angle was a simpler way to get the point across. :)
permalinkembedsaveparent

[–]KapteeniJ 1 point 2 years ago
You wrote that in misleading way, it seemed like you wrote "because http is text-based protocol, and because of that, it has to treat spaces and line endings differently"
While you probably meant, "because http is reserving spaces and line endings for its own use, also http is text-based protocol"
permalinkembedsaveparent

[–]JackAceHole 1 point 2 years ago*
Exactly. All you need to say to answer this question is that the "P" in "http" stands for "protocol" - a series of rules for communicating. Allowing a space in the URL breaks the protocol. The space has special meaning in the request, so it can't be allowed in the URL without escaping it to "%20" or "+". It should also be noted that spaces aren't allowed in DNS or hostnames.
Asking this question is like asking "Why aren't there any married bachelors?" It's because a "married" bachelor would violate the definition of what a bachelor is.
If we allowed a space in a URL, then your request wouldn't be following the Hyper Text Transfer Protocol.
permalinkembedsaveparent

[–]svartkonst -4 points 2 years ago
These answers, and the question, aren't entirely true. Spaces are allowed on occasion, with or without escaping.
This is a valid URL that gives me results on google, for instance: https://www.google.se/#q=new stars
permalinkembedsaveparent

[–]PitaJ 14 points 2 years ago
That's because your browser automatically escapes the spaces when you put it in. The spaces aren't valid characters.
permalinkembedsaveparent

[–]JackAceHole 2 points 2 years ago
Yes. It would be like claiming "URL's don't have to start with 'http://' or 'https://'". It's true that you don't have to type it, but only because modern browsers will try to append "http://" to your request by default.
If you were to intercept the underlying web request with a proxy like Fiddler, you would see that the spaces in the URL get escaped.
permalinkembedsaveparent

[–][deleted] 1 point 2 years ago
It would be like claiming "URL's don't have to start with 'http://' or 'https://'".
URL's don't have to start with http:// or https://. URL's are protocol-agnostic. They are commonly used with http and https, but they can be used with any other protocol as well. (and they are used with many other protocols)
permalinkembedsaveparent

[–][deleted] 11 points 2 years ago
The space isn't valid. Your browser doesn't send that URL to Google. It converts it to https://www.google.se/#q=new%20stars and then sends that to Google.
Spaces are never allowed in URLs.
But the browser's address bar doesn't just accept URL's. It also accepts things that it can convert to URLs with a few more or less clever heuristics (as well as things that aren't URL's at all, which it will then launch a google search for)
permalinkembedsaveparent

[–]tanantish 1 point 2 years ago
Mini-pedant note: that quote is the RFC's justification of why spaces are considered unsafe. The quote that defines what URLs are is:
..a compact string representation for a resource available via the Internet. These strings are called "Uniform Resource Locators" (URLs).
We could've had spaces if we adopted a representation with explicit start/end markers, but we didn't, almost certainly because of the complications you've demonstrated (using space as a break to separate tokens is so ingrained, we'd be mad to go against it)
permalinkembedsaveparent

[–][deleted] 1 point 2 years ago
that quote is the RFC's justification of why spaces are considered unsafe. The quote that defines what URLs are is:
Well, the question wasn't "how do you define a URL". It was "why aren't spaces allowed". :)
permalinkembedsaveparent

[–]tanantish 1 point 2 years ago
Totally, I think your answer is better at pulling out the underlying reasons, just in your answer you use the why not spaces justification but refer to it as
.. the quote from the RFC that defines what URLs are
Which I think might be confusing
permalinkembedsaveparent

[–][deleted] 1 point 2 years ago*
oh, gotcha. Yeah, that could've been worded better. What I meant was "here is the relevant quote from the RFC (which is the document that defines what URLs are)". I'll sneak in an edit. Thanks for pointing that out. :)
permalinkembedsaveparent

[–]tanantish 11 points 2 years ago*
Fundamentally - because we agreed that it can't.
Something like a URL is just a jumbling of characters together, and the only way it means anything is if we all agree on how to read it.
Back in the day when we were trying to agree what a URL is and how it should look, there was a proposal written up (RFC 1738^ ) that excluded spaces, instead we use a set of other marks ( ",", "/", ".", "?" for example) to mark out blocks of information.
The reason given was that spaces may be included or disappear without you being able to notice it, and word processing programs may do odd things.
For example, it's easy to see the difference between "google.co.uk" and "google.co.jp", there's a different letter. It's much harder to see the difference between "www.place cat.com" and "www.place cat.com" (five vs four spaces).
Can't see the difference? That's the other example - I entered in
www.place    cat.com
www.place     cat.com
but reddit's formatting rules crunched all the spaces down to one.
^ Note, RFC1738 is out of date. The current RFC is 3986, which can be found here https://tools.ietf.org/html/rfc3986
(edit: stupid formatting even takes control within backquotes :P )
permalinkembedsave

[+][deleted] 2 years ago (1 child)


[–]spacedrgn 1 point 2 years ago
Technically, spaces and other special characters are allowed with percent encoding where eg. space becomes %20 and so on.
permalinkembedsave</p>

<p>Make a Request
Making a request with Requests is very simple.
Begin by importing the Requests module:
>>> import requests
Now, let’s try to get a webpage. For this example, let’s get GitHub’s public timeline:
>>> r = requests.get('https://api.github.com/events')
Now, we have a Response object called r. We can get all the information we need from this object.
Requests’ simple API means that all forms of HTTP request are as obvious. For example, this is how you make an HTTP POST request:
>>> r = requests.post('https://httpbin.org/post', data = {'key':'value'})
Nice, right? What about the other HTTP request types: PUT, DELETE, HEAD and OPTIONS? These are all just as simple:
>>> r = requests.put('https://httpbin.org/put', data = {'key':'value'})
>>> r = requests.delete('https://httpbin.org/delete')
>>> r = requests.head('https://httpbin.org/get')
>>> r = requests.options('https://httpbin.org/get')
That’s all well and good, but it’s also only the start of what Requests can do.
Passing Parameters In URLs
You often want to send some sort of data in the URL’s query string. If you were constructing the URL by hand, this data would be given as key/value pairs in the URL after a question mark, e.g. httpbin.org/get?key=val. Requests allows you to provide these arguments as a dictionary of strings, using the params keyword argument. As an example, if you wanted to pass key1=value1 and key2=value2 to httpbin.org/get, you would use the following code:
>>> payload = {'key1': 'value1', 'key2': 'value2'}
>>> r = requests.get('https://httpbin.org/get', params=payload)
You can see that the URL has been correctly encoded by printing the URL:
>>> print(r.url)
https://httpbin.org/get?key2=value2&key1=value1
Note that any dictionary key whose value is None will not be added to the URL’s query string.
You can also pass a list of items as a value:
>>> payload = {'key1': 'value1', 'key2': ['value2', 'value3']}

>>> r = requests.get('https://httpbin.org/get', params=payload)
>>> print(r.url)
https://httpbin.org/get?key1=value1&key2=value2&key2=value3
Response Content
We can read the content of the server’s response. Consider the GitHub timeline again:
>>> import requests

>>> r = requests.get('https://api.github.com/events')
>>> r.text
u'[{"repository":{"open_issues":0,"url":"https://github.com/...
Requests will automatically decode content from the server. Most unicode charsets are seamlessly decoded.
When you make a request, Requests makes educated guesses about the encoding of the response based on the HTTP headers. The text encoding guessed by Requests is used when you access r.text. You can find out what encoding Requests is using, and change it, using the r.encoding property:
>>> r.encoding
'utf-8'
>>> r.encoding = 'ISO-8859-1'
If you change the encoding, Requests will use the new value of r.encoding whenever you call r.text. You might want to do this in any situation where you can apply special logic to work out what the encoding of the content will be. For example, HTML and XML have the ability to specify their encoding in their body. In situations like this, you should use r.content to find the encoding, and then set r.encoding. This will let you use r.text with the correct encoding.
Requests will also use custom encodings in the event that you need them. If you have created your own encoding and registered it with the codecs module, you can simply use the codec name as the value of r.encoding and Requests will handle the decoding for you.
Binary Response Content
You can also access the response body as bytes, for non-text requests:
>>> r.content
b'[{"repository":{"open_issues":0,"url":"https://github.com/...
The gzip and deflate transfer-encodings are automatically decoded for you.
For example, to create an image from binary data returned by a request, you can use the following code:
>>> from PIL import Image
>>> from io import BytesIO

>>> i = Image.open(BytesIO(r.content))
JSON Response Content
There’s also a builtin JSON decoder, in case you’re dealing with JSON data:
>>> import requests

>>> r = requests.get('https://api.github.com/events')
>>> r.json()
[{u'repository': {u'open_issues': 0, u'url': 'https://github.com/...
In case the JSON decoding fails, r.json() raises an exception. For example, if the response gets a 204 (No Content), or if the response contains invalid JSON, attempting r.json() raises ValueError: No JSON object could be decoded.
It should be noted that the success of the call to r.json() does not indicate the success of the response. Some servers may return a JSON object in a failed response (e.g. error detail</p>
