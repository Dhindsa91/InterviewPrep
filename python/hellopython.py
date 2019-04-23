import random
import sys
import os



hello = "Hello World"

print(hello[3:5])
print(hello[-1:1])
print(hello[-5:3])




# Comment

'''
MultiLine Comment

'''

name = "Arvind"
print(name)

#Numbers Strings Lists Tuples Dictionaries # exponential ** division discard the remainder //

print("THIS IS EXPONENTIAL STRING CONCAT 5^2",5**2)

quote = "\"This is how you include a quotation mark"
multi_line_quote = ''' This 
is the 3 quote multiline quote'''

new_string = quote + multi_line_quote
print("new String!!!!",new_string)

print("%s %s %s" % ('This String is going to take in 3 values', quote, multi_line_quote))

print("\nThis is a String", "This is a String 2")

print("\nI dont like ", end="")
print("newlines")

print("-----------------------------------------------------------------------------------------------------------------")


grocery_list = ['Juice', 'Tomatos','Potatos', 'Bananas']
print("The first item is", grocery_list[0])
print(grocery_list[1:3])

other_events = ['Wash Car', 'Pick up kids', 'Cash Check']
to_do_list = [other_events, grocery_list]
print("This is the to do list",to_do_list)
print((to_do_list[1][0]))

grocery_list.append('Onions')
grocery_list.insert(1, 'Pickle')
print(grocery_list)

grocery_list.sort()
print(grocery_list)
del grocery_list[4]
print(grocery_list)


to_do_list2 = other_events + grocery_list
to_do_list3 = [other_events, grocery_list]
print("\nThis is to do list 2",to_do_list2)
print("\nTo Do List 3", to_do_list3)
print(to_do_list3[1][4])

print(len(to_do_list2))
print(max(to_do_list2))
print(min(to_do_list2),"\n")

print("\n\ntuples","--------------------------------------------------------------------------------------------------------\n\n")

pi_tuple = (3,1,4,1,5,9)
new_tuple = list(pi_tuple)
print("\n")
print(pi_tuple)
print("\n")


print("\n\ndictionaries","--------------------------------------------------------------------------------------------------\n\n")

#Key Value Pairs

super_villians = {'Fiddler': 'Isaac Brown',
                  'Captain Cold': 'Leonard Snart',
                  'Weather Wizard': 'Mark Mardon',
                  'Mirror Master': 'Sam Scudder',
                  'Pied Piper': 'Thommas Peterson'}


print(super_villians['Captain Cold'])
super_villians['Pied Piper'] = 'Hartley Rathaway'
print(super_villians['Pied Piper'])
print(super_villians.keys())
print(super_villians.values())

print("\n"*3)
print("\n\nconditionals","--------------------------------------------------------------------------------------------------\n\n")


age = 21

if age > 16:
    print("Age Greater Than 16")
else:
    print("Age Less Than 16")


age = 12
print(12)

if age > 16:
    print("Age Greater Than 16")

elif age <= 16:
    print("Age Less Than 16")

if((age>=1) and (age<=18)):
    print("Age between 1 and 18")

if((age==1) or (age==12)):
    print("Age is 1 or 12")

print("\n")
print("\n\nLooping","-------------------------------------------------------------------------------------------------------\n\n")

for x in range(0,10):
    print(x,'',end='')

print("\n")

for y in grocery_list:
    print(y)

num_list = [[1,2,3],[10,20,30],[100,200,300]]

for x in range(0,3):
    for y in range(0,3):
        print(num_list[x][y],' ',end='')


print("\n")
print("\n\nWhile","---------------------------------------------------------------------------------------------------------\n\n")

random_num = random.randrange(0,25)
while(random_num != 15):
    print(random_num)
    random_num = random.randrange(0,25)

print("\n")
i = 0
while(i <= 20):
    if(i%2==0):
        print(i)
    elif(i== 9):
        break
    else:
        i += 1
        continue
    i += 1

print("\n\nFunctions","-----------------------------------------------------------------------------------------------------\n\n")

def addNumber(fNum, lNum):
    sumNum = fNum + lNum
    return sumNum


string = addNumber(1,4)
print(string)


print("what is your name?")
#name = sys.stdin.readline()

#print('Hello', name)

long_string = "THIS IS A VERY LONG STRING VERY LONG"

print(long_string[0:4])
print(long_string[-5:])
print(long_string[0:-5])
print(long_string[:4]+ " be there")
print("%c is my %s letter and my number %d number is %.5f" % ('X','favourite', 1, .14))

print(long_string.capitalize())
print(long_string.find("THIS"))
print(long_string.isalpha())
print(long_string.isalnum())
print(len(long_string))
quote_list = long_string.split(" ")

print(quote_list)



print("\n\nI/O","-----------------------------------------------------------------------------------------------------------\n\n")


test_file = open("test.txt", "wb")
print(test_file.mode)
print(test_file.name)

test_file.write(bytes("Write me to the file\n", 'UTF-8'))

test_file.close()

test_file


print("\n\nObjects","-------------------------------------------------------------------------------------------------------\n\n")

class Animal:

    name = None;
    size = 0;

    def __init__(self, name, size):
        self.name = name
        self.size = size

    def __set_name__(self,name):
        self.name = name

    def get_name(self):
        return self.name

    def get_type(self):
        print("Animal")

    def toString(self):
        return "{} is cm tall and  kilograms and say ".format(self.name)

cat = Animal('Whiskers', 10)
print(cat.name+"\n\n")


print("_________________________________________________________________________________________________________________\n\n")




class Employee:

    raise_amt = 2.00

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@email.com'
        self.pay = pay

    def fullname(self):
        return '{} {}'.format(self.first, self.last)

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amt)





class Developer(Employee):

    raise_amt = 1.10
    __language = str()

    def __init__(self, first, last, pay, language):
        super().__init__(first,last,pay)
        self.language = language




class Manager(Employee):

    numemps = 0

    def __init__(self, first, last, pay, employees=[]):
        super().__init__(first, last, pay)
        Manager.numemps += 1

        # if employees is None:
        #     self.employees = []
        # else:
        #     self.employees = employees


    def add_emp(self, emp):
        if emp not in self.employees:
            self.employees.append(emp)

    def remove_emp(self, emp):
        if emp in self.employees:
            self.employees.remove(emp)

    def print_emps(self):
        for emp in self.employees:
            print('-->', emp.fullname())

    def addOne(self):
       test = 5;

    def __add__(self, other):
        return self.pay + other.pay

    def __repr__(self):
        return self.first + " " + self.last + " "

    def __len__(self):
        return len(self.fullname())

dev_1 = Employee('Corey', 'Schafer', 50000)
dev_2 = Developer('Test', 'Employee', 60000, "PHP")



mgr_1 = Manager('Sue', 'Smith', 90000, [])
mgr_2 = Manager('Bill', 'Smith', 70000, [])


print(mgr_1)
print(mgr_1+mgr_2)



print(1+2)
print('a'+'b')

full_name = lambda fn,ln: fn + ln

print(full_name("Arv","Dhindsa"))





# mgr_1.add_emp(dev_2)
#
# print(mgr_1.email)
#
# mgr_1.print_emps()

# print(dev_1.pay)
# dev_1.apply_raise()
# print(dev_1.pay)
# print(help(Developer))
# print(dev_2.language)
#print(help(Developer))
