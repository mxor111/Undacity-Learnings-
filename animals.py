class Dog:

    scientific_name = "Canis lupus familiaris"

    def speak(self):
        print("Woof!")

    def eat(self, food):
        if food == "biscuit":
            print("Yummy!")
        else:
            print("That's not food!")

    def learn_name(self, name):
        self.name = name # traching object how to learn it name

    def hear(self, words):
        if self.name in words:
            self.speak()# teaching dog how to speak it name

#<p>
>>> import animals
>>> fido = animals.Dog()
>>> fido.learn_name("Fido")
>>> fido.hear("This string does not have the dog's name in it.")
>>> fido.hear("I have a nice treat for Fido!")
>>> Woof!#</p>

# you can rid of the class for learn name and put into initial

class Dog:

    scientific_name = "Canis lupus familiaris"

    def __init__(self, name): # by adding this and deleting learn_name method you now can nem oyour docs
        self.name = name

    def speak(self):
        print("Woof!")

    def hear(self, words):
        if self.name in words:
            self.speak()






class Cat:

    def __init__(self):
        self.mood = "neutral"

    def speak(self):
        print("Meow!")




        class Cat:

    def __init__(self):
        self.mood = "neutral"

    def speak(self):
        if self.mood == "happy":
            print("Purrr")
        elif self.mood == "angry":
            print("Hiss!")
        else:
            print("meow")


#COUNTS

class Dog:

    scientific_name = "Canis lupus familiaris"

    def __init__(self, name):
        self.name = name
        self.woofs = 0

    def speak(self):
        print("Woof!")

    # def learn_name(self, foo):
    #     self.foo = name

    def hear(self, words):
        if self.name in words:
            self.speak()

    def count(self):
        self.woofs += 1
        for bark in range(self.woofs):
            self.speak()

<p>PUTTING CLASSES INSIDE CLASSES OR SUB-CLASS - INHERITENCE <\p>

# you can add this class below the above class

class Chicky(dog)
    origin = "mexico"

    def speakk(self):
        print("yip")


### Addint another PASS it intentiaonal for the method to do nothing.
class Dog:
    def do_trick(self):
        pass

class Chihuahua(Dog):
    pass

class TrainedChihuahua(Chihuahua):
    def do_trick(self):
        print("The chihuahua spins in the air and turns briefly into a chicken.")
        #Why do we need this? Because it's not legal in Python to have a function or class that contains no statements. By defining do_trick on the Dog class, we make it possible to call that method on any Dog, even though only TrainedChihuahua instances will actually do anything when it's called:
>>> fido = Dog()
>>> fido.do_trick()
>>> pupper = TrainedChihuahua()
>>> pupper.do_trick()
The chihuahua spins in the air and turns briefly into a chicken.






            print
