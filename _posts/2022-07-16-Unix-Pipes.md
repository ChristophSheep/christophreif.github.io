---
layout: post
author: chre
---

__Unix Pipes__ are a very important concept of Unix. Pipes are just ordinary files. There are named pipe and unnamed pipes.

```
cat test.txt | grep "foo" | tee result.txt | wc -l
```

For instance above chain of commands are connected by pipes.

```
     out  in    out  in   out  in
[ cat ]-->[ grep ]-->[ tee ]-->[ wc ]
```

So process are again i/o device. Which takes the input from a pipe do something
and put the result to output. The next process in the chain take the output as
input and so on.

[Unix Pipes](https://en.wikipedia.org/wiki/Pipeline_(Unix)) are invented by [Douglas McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy) 