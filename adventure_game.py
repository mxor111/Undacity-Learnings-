import time
import random
items[]


def print_pause(message_to_print):
    print(message_to_print)
    time.sleep(2)


def intro():
    print_pause("You are entering a Jungle where strange animals live")
    print_pause("You want to venture in but are scared by the noises")


def cave():
    print_pause("You hear a loud noise and start running")
    print_pause("There is two pathe to take")
    print_pause("One is toward the cave, the other a Treehouse")

    if "cave" in items:
        print_pause("You enter the cave and see a pair of eyes in the dark"
                    "It starts growling and you/n"
                    "You grab the bow and arrow and start shooting/n"
                    "You start shooting at it")
    else:
        print_pause("you turn and run toward the treehouse"
                    "and start running as fast as possible"/n)
        items.append("cave")
        print_pause("You run back to the jungle")
        options(items)


def house():
    print_pause("You climb the rope and pull yourself"
                "to the top.")
    print_pause("You see a mountain lion inside the house")
    print_pause("You reach for the spear and it lunges at you")

    if "house" in items:
        print_pause("You pick up spear and start waving it at the lion"
                    "The lion jumps toward you and stab it with the spear/n")
    else:
        print_pause("You jump off the treehouse and run towards the cave")
        items.append("house")
        print_pause("You run back to the jungle")
        options(items)


def options():
    print_pause("Choose how to protect yourself")
    weapons = imput("1. bow_arrow with poision arrowheads/n"
                    "2. spear gun with radioactive tips/n")
    if weapons == '1':
        house()

    elif weapons == '2':
        cave()

def play_game():
    items[]
    intro()
    cave()
    house()
    options(items)

play_game()
