---
layout: default
title: Sustainable
---

# Sustainable 

## Code

Sustainable code is software that is made with *long term* thinking of business.

> *The short time minded person gets perhaps a single point for the fastest lap, <br>
but the long term headed wins the race or even the formula one season.*

What are the attributes of sustainable code:

* flexible
* robust
* changeable
* clear
* simple
* readable
* understandable
* maintainable
* independent
* abstract

All these stuff is so important, but often not teached in classes.

### Flexible

How to get you source code flexible. Flexible means that you can change you code if the enviroment change so you are flexible to the world outside around you.

Some create flexible code by making plugins. Plugins are often build around a small abstract core. For plugins you need an future safe abstract interface.

Because you does not know what the future will bring.

So interfaces or the concept of an interface create a big role. Interfaces are something like template.

```
  (deftem obj id 0 name "not set")
  (inst obj 'id 1 name "foo")
```

### Robust

A sustainable needs not to be flexible, but also robust. If you only flexible alone that you can not stand against a storm. A robust things does not break in a storm. 

I always use the picture of our humane body. We have bones for robustness and muscle for flexibility. Both things work hand in hand. Without bones the muscle have nothing to attach. The bones alone without muscle can not move or rotate. And the flesh and the skin glue everything together.

A robust software has a very small and simple abstract core. This core is very stable over the time.

### Changeable

Because you does not know what the future brings. You need to be able to change the software.

For instance you will change you database from MSSQL or Oracle to Postgre or MySQL. Or even to other None-SQL data storages. Another example would be to user interface web framework. Because there is knew very good on the market.
So that it is so important that your design and archicture allow to change things later.

### Simple

Eric Raymond wrote in his book about "The Art of Unix programming" that robustness is a child of simplicity. Nearly every said keep it simple. And Einstein said: Keep it simple, as possible. So everything could not be very simple. But it is an attitude to keep things simple. Only pride people believe they can handle a huge amount of complicated things. We can handle complex things, but only by divide it into smaller simpler things in form of layers.

## Clear

A software should be clear. Clear means that it is clear to understand. Clear also means clear as a glass compared to a foggy or nebulous view of things. So clarity is really very important.

### Readable

Readability is very important. All say we read more software the we write. For instance if you have a document and nobody could read your handwriting then this is a problem.

### Understandable

Understandable is a child of readability. If you can not read the code then it is impossible to understand the code. Understandable has more to do with getting an overview and the relationsship of the parts of the software and what the software is doing or what it should doing.
Often only the implementer understand what they did and new developer they joined later to the project does not understand or have hard time to understand.

### Maintainable

No software is fully free of bugs. But if believe you can develope software in a way that you have not many bugs.

### Independent

Sometimes you need the opposite to understand a concept. The opposite of independent is depent. A dependet code is better known as "spagetti code". Everthing depend on anything and so if you change later something
you break the whole things. To manage your dependencies in a software project is very important things to make your software __changeable__ and __flexible__.

__Technics:__

* [Dependency_inversion_principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

### Abstract

Abstract is the power you need to make a sustainable code. Because you don't know the future. But if you make an abstract data type for instance Animal you can later add Dogs, Lions, Birds, Cats whatever. All these objects fit into the abstract type Animal. And the most abstract data type is an Object. And the all most abstract data type are list of bytes. So called byte streams. In Unix everything is a file (a stream of bytes).

#### Layers of Abstraction

``` 
                                       a c
  -------------- LayerN  more concrete 0 3
  +------------+ Layer2  less concrete 1 2
  | +--------+ | Layer1  less abstract 2 1
  | | [core] | | Layer0  most abstract 3 0
  | +--------+ | Layer1  less abstract 2 1
  +------------+ Layer2  less concrete 1 2
  -------------- LayerN  more concrete 0 3

```

Layers of abstraction is a very important concept to make your software architecture sustainable. The core (layer0) is your most abstract layer. The higher in goes the less abstract it goes
and the layer gets more concrete to fullfill your business.

For instance in layer core there is a string class or module. This string module does not anything about for what it is used. Then you build an object with attributes. 
Like 
```
  <obj attr1 attr2> 
  <obj key1=value1 key2=value2>
```  
No you build concrete types like an image object in html 
``` 
  <img src="./foo.png" "style="color:red">
```  
Then you build a button with a link and a box
``` 
  <div class="button">
    <a href="www.foo.orf">
      <img src="./foo.png" "style="color:red">
    </a>
  </div>
```

#### Bottom-Up Design

Bottom-Up design lays hand in hand with the concept of *layers of abstraction*[^4].
Bottom-Up design is coupled with a macros[^5] and macros expansion. Macros are like template of code, so you can create you own language inside the language.

> Experienced Lisp programmers divide up their programs differently. As well as top-down design, they follow a principle which could be called bottom-up design-- changing the language to suit the problem. In Lisp, you don't just write your program down toward the language, you also build the language up toward your program. As you're writing a program you may think "I wish Lisp had such-and-such an operator." So you go and write it. Afterward you realize that using the new operator would simplify the design of another part of the program, and so on. Language and program evolve together.

#### Examples

 - Paul Graham talk about *bottom up design*[^1] of Arc or Bel. 
 - How *TeX*[^2] is build by Donald Knuth? TeX documents are written and programmed using an unusual macro language[^3].

## Things to avoid

### Null Pointer

* [Null Pointer](https://en.wikipedia.org/wiki/Null_pointer)
* [Null-References - The Billion Dollar Mistake - Tony Hoare ](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/)

---

[^1]: [Programming Bottom-Up](http://www.paulgraham.com/progbot.html)
[^2]: [TeX](https://en.wikipedia.org/wiki/TeX)
[^3]: [TeX - Macro lanugage](https://en.wikipedia.org/wiki/TeX#Macro_language)
[^4]: [Abstraction Layer](https://en.wikipedia.org/wiki/Abstraction_layer)
[^5]: [On Lisp - Chapter 7: "Macros"](http://www.paulgraham.com/onlisp.html)