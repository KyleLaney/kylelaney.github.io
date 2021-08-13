# Auther: Kyle Reed
# Date: Aug. 12, 2021

myList = [1,2,3,4,5,6,7,8]
myList2 = myList[1:8]

# The count() functoin can count the number of times a substring occurs in a given string
str = "Kyle is awseome and Kyle is cool"
str_cnt = str.count("Ky")
print(str_cnt)


# The endswith() fucntion returns the number of a given character in a given string
x = str.endswith("cool", 7, 20) 
print(x)
#This function returns the index of whatever item you are looking for given value
y = str.find("awesome")
print(y)


#This function will check a string and verify if the given string contains a given substring
str = "Company12"
x = str.isalnum()
print(x)


#This function will check true if all charcacters are in alphabet
str = "Company12"
x = str.isalpha()
print(x)


#This function will check true if all charcacters are a number
str = "Company12"
x = str.isdigit()
print(x)


#This function will check true if all charcacters are a number
str = " "
x = str.isspace()
print(x)


#This function will check true if all charcacters are lowercase chars
str = "Company12"
x = str.islower()
print(x)


#This function will check true if all words in string begin with an uppercase letter
str = "Company12"
x = str.istitle()
print(x)


#This function will check true if all letters are uppercase
str = "Company12"
x = str.isupper()
print(x)


#This function will join all items and joins them into one string
myDict = {"name": "John", "country": "Norway"}
mySeparator = "TEST"
x = mySeparator.join(myDict)
print(x)


#This function will join all items and joins them into one string
myDict = {"name": "John", "country": "Norway"}
mySeparator = "TEST"
x = mySeparator.join(myDict)
print(x)

#This method returns a string where all characters are lower case.
str = "Company12"
x = str.lower()
print(x)



#This function will take a portion of a string and replace it with another
txt = "I like bananas"
x = txt.replace("bananas", "apples")
print(x)


#This function will take a string and split it into a list
txt = "welcome to the jungle"
x = txt.split()
print(x)


#This function will take a string and split it into a list
txt = "welcome to the jungle"
x = txt.split()
print(x)


#This function will take a string and split it into a list, but it splits at linebreaks
txt = "Thank you for the music\nWelcome to the jungle"
x = txt.splitlines()
print(x)


#This function will take a string and split it into a list, but it splits at linebreaks
txt = "Thank you for the music\nWelcome to the jungle"
x = txt.splitlines()
print(x)


# This method returns True if the string starts with the specified value, otherwise False.
txt = "Hello, welcome to my world."
x = txt.startswith("Hello")
print(x)


# method removes any leading (spaces at the beginning) and trailing characters (space is the default leading character to remove)
txt = "     banana     "
x = txt.strip()
print("of all fruits", x, "is my favorite")


# This method returns a string where all characters are in upper case.
txt = "Hello my friends"
x = txt.upper()
print(x)


# My teammates are Valentin and Leo. We will be monitoring eachohter and helping with the all tasks
# but I will mainly focus on the html and CSS, while Velentin does Javascript and Leo handles the SQL.










