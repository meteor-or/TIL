# Python theory

---

생성일 : 2022년 1월 4일

[Python으로 웹 스크래퍼 만들기 - 노마드 코더 Nomad Coders](https://nomadcoders.co/python-for-beginners)

## 0. Data Types of Python

```python

a = 2
b = 3
string = "hello"
boolean = True
float = 3.14
none = None
```

## 1. List in Python (mutable)

```python
days = ["Mon", "Tue", "Wed", "Thur", "Fri"]
# print("Mon" in days) True
# print(days[3]) Thur
# print(len(days)) 5
# https://docs.python.org/3/library/stdtypes.html
days.append("Sat")
days.reverse()
# print(days) ['Sat', 'Fri', 'Thur', 'Wed', 'Tue', 'Mon']
```

## 2. Tuples and Dicts (immutable)

```python
# 리스트와 같지만 변경할 수 없다.
# print(type(days)) <class 'list'>
Tani = {
    "name": "Tani",
    "age": 5,
    "korean": True
}
# print(Tani) {'name': 'Tani', 'age': 5, 'korean': True}
Tani["cute"] = True
# print(Tani) {'name': 'Tani', 'age': 5, 'korean': True, 'cute': True}
```

## 3. Built in Functions

```python
age = "18"
# print(type(age)) <class 'str'>/
n_age = int(age)
# print(n_age) 18
# print(type(n_age)) <class 'int'>
```

## 4. Creating a Your First Python Function

```python
def say_hello():
    print("hello")

'''
print("bye")
say_hello()
say_hello()
'''
```

## 5. Function Arguments

```python

def say_hello2(who):
    print("hello", who)

# say_hello2("Tani") hello Tani

def plus(a, b):
    print(a + b)

def minus(a, b=0):
    print(a - b)

# plus(2, 5) 7
# minus(2) 2

def say_hello3(name="anonymous"):  # default = anonymous
    print("hello", name)

# say_hello3() hello annonymous
# say_hello3("Taaaani") hello Taaaani
```

## 6. Returns

```python
def r_plus(a, b):
    return a + b

def p_plus(a, b):
    print(a+b)

p_result = p_plus(2, 3)
r_result = r_plus(2, 3)

# print(p_result, r_result) None 5
```

## 7. Keyworded Arguments

```python
def plus2(a, b):
    return a - b

result = plus2(b=30, a=1)
print(result)  # -29 인자 순서 상관없이 정의된대로 나온다

def say_hello(name, age):
    return f"Hello {name} you are {age}"

print(say_hello("yuseong", 25))
```

## 8. Conditionals Part One

```python

def plus(a, b):
    if type(b) is int or type(b) is float:
        return a + b
    else:
        return None

print(plus(12, 10.5))
```

## 9. i else and or

```python
def age_check(age):
    print(f"you are {age}")
    if age < 18:
        print("you cant drink")
    elif age == 18:
        print("you are new to this!")
    elif age > 20 and age < 25:
        print("you are still kind of young")
    else:
        print("enjoy you drink")

# age_check(18)
# you are 18
# you are new to this!
```

## 11. for in

```python
days = ("Mon", "Tue", "Wed", "Thu", "Fri")

for day in days:
    if day is "Wed":
        break
    else:
        print(day)  # Mon Tue

```

## 11.Modules

```python
import math

print(math.ceil(1.2))
print(math.fabs(-1.2))
```
