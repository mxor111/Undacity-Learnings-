import time
import random

def print_pause(message_to_print):
    print(messgae_to_print)
    time.sleep(1)

def what_floor(prompt, level1, level2, level3):
    while True:
        what_floor = imput(prompt).lower()
        if level1 in what_floor:
            break
        elif level2 in what_floor:
            break
        elif level3 in what_floor:
            break
    else:
        print_pause("choose another floor")
    return what_floor

def elevator():
    print_pause("You have just arrived at your new job!")
    print_pause("You are in the elevator")

def choose_floor():
    what_floor = what_floor("Please enter the number for the floor"
                            "Choose your floor 1, 2, 3\n",
                            "1. Lobby", "2. human Resources",
                            "3. Enginner Dept.")

    if "1. Lobby" in what_floor:
        print_pause("You push the button for the first floor"
                    "You have arrived in the lobby.\n")
    elif "2. human Resources" in what_floor:
        print_pause("You push the button for second floor"
                    "You have arrived in HR Dept.\n")
    elif "3. Enginner Dept." in what_floor:
        print_pause("You push the button for the third floor"
                    "You have arrived in Engineering\n")
def go_next():
    what_floor = what_floor("where would you like to go next? "
                                "please choose 'Level1', 'Level2'\n,
                                'Level3'",
                                "level1", "Level2", "level3")
    if "Level1" in what_floor:
        print_pause("You have Arrived")
    elif "Level2" in what_floor:
        print_pause("One more stop")
    else
        print_pause("last stop")
        choose_floor()

def elevator_1():
    elevator()
    what_floor()
    choose_floor()
    go_next()

elevator_1()
            
