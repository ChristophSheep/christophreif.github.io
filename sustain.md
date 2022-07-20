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

This way you get your source code flexibly. Flexible means you can adapt your code as the environment changes, giving you flexibility for the world around you.

Some create flexible code by making plugins. Plugins are often built around a small abstract core. For plugins you need a future-proof abstract stable interface because you don't know what the future will bring.

Interfaces or the idea of an interface therefore play a major role. Interfaces are something like templates.

It has to be abstract because they cannot know the concrete future. But abstraction enables you to implement concrete parts without breaking the code in the future.

```
  (deftem obj id 0 name "not set")
  (inst obj 'id 1 name "foo")
```

### Robust

A sustainable system must not only be flexible, but also robust. If you're just flexible, you can't withstand a storm. A sturdy thing doesn't break in a storm.

I always use the image of our human body. We have bones for strength and muscles for flexibility. Both things work hand in hand. Without bones, muscles have nothing to attach to. The bones alone without muscle cannot move or rotate. And the flesh and skin stick everything together.

Robust software has a very small and simple abstract core. This core is very stable over time.

### Changeable

Because you don't know what the future will bring. You must be able to change the software.

For example, you will migrate your database from MS-SQL or Oracle to PostgreSQL or MySQL. Or even to other non-SQL data stores. Another example would be changing the web framework for the user interface, because there are new very good ones on the market.

That's why it's so important that your design and architecture allow things to be changed later.

### Simple

Eric Raymond wrote in his book The Art of Unix Programming that robustness is a child of simplicity. Almost know the saying: "Keep it simple" And Einstein said: "Keep it as simple as possible, but no simpler". But it's an attitude of wanting to keep things simple. Only proud people believe they can handle a huge amount of complicated code. We can handle complex systems, but only by breaking them down into smaller, simpler layers, where each layer builds on the others below.

## Clear

Software should be clear. Clear means it is clear and understandable. Clear also means crystal clear in contrast to a foggy or nebulous view of the system. So clarity is really very important. If you don't explain in a few words, simply and clearly, what a module does, for example, so that even a child or a grandmother can understand it, it's not clear.

### Readable

Readability is also very important. Many say we read more code than we write code. For example, if you can't read a handwritten document because of the writing, how are you ever going to understand what the content is?

### Understandable

Understandable is a child of readability. If you cannot read the code, it is impossible to understand the code. Comprehensible has more to do with getting an overview and understanding the relationships between the parts of the software and what the software does or should do.
Often only the developer understands what he has done, and new developers coming later into the project have difficulty understanding the system through the code.

### Maintainable

No software is completely bug-free. But if you believe that you can develop software in such a way that you don't have many bugs. Paul Graham wrote in his books Hacker & Painter that his ViaWeb never had more than 10 errors. And because they publish it on the server, the bug was often found and fixed early. Because the faster you find a bug, the cheaper it is. A bug that is only fixed years later is very very expensive. If you've just created the code and find the bug a few days later, you won't remember very well. Years later this no longer works and maybe the bug will be fixed by a developer who doesn't understand the code at all. It then takes days or weeks to find the error.

### Independent

Sometimes you need the opposite to understand a concept. The opposite of "independent" is "dependent". Code with many dependencies is better known as "spagetti code". Everything depends on everything and if you change something later, you probably break a lot in the worst case. Managing your dependencies in a software system is very important to keep your software __changeable__ and __flexible__.

__Technics:__

* [Dependency_inversion_principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

### Abstract

Abstraction is the power you need to create sustainable code because you don't know the future. But if you create an abstract data type, say animal, you can later add concrete types like dogs, birds, bats, whatever you need. All of these objects fit into the abstract type of an animal. And the most abstract data type is an object with attributes. And the most abstract data type are lists of bytes. So-called byte streams. In Unix, everything is a file or a stream of bytes. That's why.

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

Abstraktionsschichten sind ein sehr wichtiges Konzept, um Ihre Softwarearchitektur nachhaltig zu gestalten. Der Kern (layer0) ist Ihre abstrakteste Ebene. Je höher es geht, desto weniger abstrakt wird es
und die Schicht wird konkreter, um Ihr Geschäft zu erfüllen.

Zum Beispiel gibt es im Layer-Kern eine String-Klasse oder ein Modul. Dieses String-Modul weiß nicht für was sie benutzt wird, Vielleicht wird damit ein Personen Klasse gebaut mit Attributen Vorname und Nachname von Typ String. Diese Personen-Klasse, weiß nichts davon, wo Sie in eine UseCase Klasse verwendet wird usw.

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

Bottom-up design goes hand-in-hand with the concept of *layers of abstraction*[^4].
The bottom-up design is coupled with functions, macros[^5] and macro expansion. Macros are like code templates, allowing you to create your own language within the language. Therefore, Lisp is extremely well suited for this without any additional syntax.

> Experienced Lisp programmers divide up their programs differently. As well as top-down design, they follow a principle which could be called bottom-up design-- changing the language to suit the problem. In Lisp, you don't just write your program down toward the language, you also build the language up toward your program. As you're writing a program you may think "I wish Lisp had such-and-such an operator." So you go and write it. Afterward you realize that using the new operator would simplify the design of another part of the program, and so on. Language and program evolve together.

#### Examples

 - Paul Graham talk about *bottom up design*[^1] of Arc or Bel. 
 - How *TeX*[^2] is build by Donald Knuth? TeX documents are written and programmed using an unusual macro language[^3].

## Things to avoid

### Null Pointer

* [Null Pointer](https://en.wikipedia.org/wiki/Null_pointer)
* [Null-References - The Billion Dollar Mistake - Tony Hoare ](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/)

## Technics

### Decomposition

In her TEDx talk[^6], Barbara Liskov explains how see started by decomposing a large system
a technique called *partitions*.

Disassembly is a natural thing to build bigger things that many companies are collaborating on. For example, if you are building a Boeing 777. Then you get parts from other companies that have a specification and an interface. We believe in techniques to share something new. No they are not new. They already exist and are so-called *common sense*. It was only discovered how to use it for software development with many people.

### Composability 

[Composability](https://en.wikipedia.org/wiki/Composability) is a very important concept, for instance of Unix. Instead of creating a big monolitic system. You create many small components, small commands, that can be composed together.

For example, this command select first 7 lines through (head -7) command and that will be input to (tail -5) command which will finally print last 5 lines from that 7 lines. 

```
> cat sample2.txt | head -7 | tail -5
```

### Interfaces

Today we have interfaces, interfaces hide their implementations. With the interface you come into contact with the module.

For example, a simple lightbulb has an interface that we call an E14 or E27 thread. Thomas Edison invented this interface with the name *Edison screw*[^7]. Currently we often use LED lightbulbs, this is another implementation with the same interface.

Interfaces are required for plugins. A lightbulb is a plugin for your lighting system.

Interfaces are also important so that you can later change things that will only be invented in the future. For example, before the invention of non-SQL data storage, the file system or SQL database was commonly used. But often you have objects that don't fit well in a relational database. But now, with data tier interface, you can unplug the old SQL storage and plug in a new non-SQL storage.

Same with USB, you unplug your old spinning hard drive and plug in a brand new fast 1TB SSD.

The *metric ISO screws*[^9] thread of a screw is also an interface. For example, you can buy an M5 screw anywhere in the world and screw it in somewhere at home.

### Compatibility with old code

We can't always rewrite everything when a new language comes out.

Robert Martin said we as an industry should stop inventing new languages all the time. Stop looking for the holy grail and start growing up and focusing on other things like clean architecture. Architecture is fundamentally language-independent.

Tony Hoare also said in his talk on Null References: The Billion Dollar Mistake that it is important that we are compatible with legacy code. We can't always rewrite everything.

---

[^1]: [Programming Bottom-Up](http://www.paulgraham.com/progbot.html)
[^2]: [TeX](https://en.wikipedia.org/wiki/TeX)
[^3]: [TeX - Macro lanugage](https://en.wikipedia.org/wiki/TeX#Macro_language)
[^4]: [Abstraction Layer](https://en.wikipedia.org/wiki/Abstraction_layer)
[^5]: [On Lisp - Chapter 7: "Macros"](http://www.paulgraham.com/onlisp.html)
[^6]: [How Data Abstraction changed Computing forever - TEDx](https://www.youtube.com/watch?v=_jTc1BTFdIo)
[^7]: [Edison screw](https://en.wikipedia.org/wiki/Edison_screw)
[^8]: [Null References: The Billion Dollar Mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/
[^9]: [ISO Metric Screw Thread](https://en.wikipedia.org/wiki/ISO_metric_screw_thread)