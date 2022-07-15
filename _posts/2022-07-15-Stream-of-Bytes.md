---
layout: post
author: chre
---

__Everything is a Stream of Bytes__ or __Everything is a file__[^2] is a very important things to understand.

A computer only see a list bytes. The memory is a list of bytes. A list of bytes can be everything.
For instance a string, or an image, or a number or whatever data. It is the problem of the software to interpret what this list of bytes are.

```
    Address       Memory
        101     [0101 1010]
        102     [0101 0110]
        103     [1101 1110]
        ...     ..
        999     [0001 1010]
```

When HTML is send over the wire, you will see a list of bytes come in as a stream.

```
<img width="200" name="john doe">
````

So the concept of everthing is a stream of bytes are also an abstraction. 

## Plan 9

[Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs), I called that real Unix or Unix 2.0 (like [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0 )) had implemented the "everything is one file" metaphor much more consistently than current Unix operating systems (which are based on Unix 1.0) that we use today. Plan 9 was too late and Unix 1.0 had already been kicked out of the lab. Like a lab virus you left in the wild. Everyone wants their own variant of Unix and want to do business with it. That's why Unix has mutated and that's why we have so many different flavors of [Unix (mutations)](https://en.wikipedia.org/wiki/Unix).

---

[^1]: [Plan 9 from Bells Labs](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs)
[^2]: [Everything is a file](https://en.wikipedia.org/wiki/Everything_is_a_file)
[^3]: [9P Protocol](https://en.wikipedia.org/wiki/9P_(protocol))
[^4]: [Plumber](https://en.wikipedia.org/wiki/Plumber_(program))
