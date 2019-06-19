# Create a string with 99 a's and one b.
# There will always be one b, but it will be at a random position from 0 to 99.
import random
letters = ['a'] * 100
b = random.randint(0, 99)
letters[b] = 'b'
letters = "".join(letters)

# Search for the letter b in the string.
# How many times will this print "Not yet" ?
print("Looking for 'b' ...")
pos = 0
while letters[pos] != 'b':
    pos += 1
    print("Not yet")
print("Found it!")

<p>That's right! Because the letter 'b' is at a random position from 0 to 99, the program will need to look at — on average, approximately — fifty characters before finding it. Sometimes it will need to look at only one; sometimes the 'b' won't be till the end. But on average, it'll look at fifty characters and print Not yet about fifty times.</p>
