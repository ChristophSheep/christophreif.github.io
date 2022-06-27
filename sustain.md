# Sustainable Code

Sustainable code is software that is made with long term thinking of business.

What are the attributes of Sustainable code:

* Flexible
* Robust
* Changeable
* Clear
* Simple
* Readable
* Understandable
* Maintainable
* Independent
* ...

## Flexible

How to get you source code flexible. Flexible means that you can change you
code if the enviroment change so you are flexible to the world outside around you.

Some create flexible code by making plugins. Plugins are often build around a
small abstract core. For plugins you need an future safe abstract interface.

Because you does not know what the future will bring.

So interfaces or the concept of an interface create a big role.
Interfaces are something like template.

```
  (deftem obj id 0 name "not set")
  (inst obj 'id 1 name "foo")
```

## Robust

A sustainable needs not to be flexible, but also robust. If you only flexible
alone that you can not stand against a storm. A robust things does not break
in a storm. 

I always use the picture of our humane body. We have bones for robustness and
muscle for flexibility. Both things work hand in hand. Without bones the
muscle have nothing to attach. The bones alone without muscle can not move
or rotate. And the flesh and the skin glue everything together.

A robust software has a very small and simple abstract core. This core
is very stable over the time.

## Changable

Because you does not know what the future brings. You need to be able to change
the software.

For instance you will change you database from MSSQL or Oracle to Postgre or
MySQL. Or even to other None-SQL data storages. Another example would be to 
user interface web framework. Because there is knew very good on the market.
So that it is so important that your design and archicture allow to change
things later.

## Simple

Eric Raymond wrote in his book about "The Art of Unix programming" that
robustness is a child of simplicity. Nearly every said keep it simple.
And Einstein said: Keep it simple, as possible. So everything could not
be very simple. But it is an attitude to keep things simple. Only pride
people believe they can handle a huge amount of complicated things. We
can handle complex things, but only by divide it into smaller simpler
things in form of layers.

## Clear

A software should clear. Clear means that it is clear to understand. Celar
means also clear like a glas compared to a foggy or nebulous view of the things.
Clearity is really very important.

## Readable

Readability is very important. All say we read more software the we write.
For instance if you have a document and nobody could read your handwriting
then this is a problem.

## Understandable

Understandable is a child of readability. If you can not read the code then
it is impossible to understand the code. Understandable has more to do with
getting an overview and the relationsship of the parts of the software and
what the software is doing or what it should doing.
Often only the implementer understand what they did and new developer they
joined later to the project does not understand or have hard time to understand.

## Maintainable

No software is fully free of bugs. But if believe you can develope
software in a way that you have not many bugs.
