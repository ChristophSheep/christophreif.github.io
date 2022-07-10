---
layout: default
title: Cell
---

# i/o cells paradigm - draft

Following sentences define the paradigm of so called [i/o](https://en.wikipedia.org/wiki/Input/output) cells.

According to [i/o](https://en.wikipedia.org/wiki/Input/output) devices. see [Asynchronous I/O](https://en.wikipedia.org/wiki/Asynchronous_I/O)

Each cell is ..

 * .. is independent
 * .. is simple and stupid
 * .. does not know that there are other cells
 * .. has no side effects
 * .. has its own memory
 * .. has 0 to N inputs
 * .. has 0 to 1 outputs (or M outputs)
 * .. calculates the output from the inputs
 * .. runs parallel, but concurrent to other cells
 * .. has 0 to N in connections to other cells
 * .. has 0 to M output connections to other cells

Note: the output could be the input of a cell but
not at the same time, only t+1.
So the output at time t can be the input of a
cell at t+1. Cells lives in time.

 
There are a huge amount of cells that are connected together.

## Example

A simple cell adds to inputs (a, b) and produce an output c
The cell is running in a loop parallel to other cells.
It produces output from input.

```

        ┌───────┐
   b ──>o ┌─<─┐ │
        │  add  o──> c
   a ──>o └─>─┘ │
        └───────┘

        +-------+
   a -->| +-<-+ |
        | | + | o--> c
   b -->| -->-+ |
        +-------+
```
   
  When data is flowing through channel a and data is flowing through channel b
  then also computed data is flowing out of channel c.
 

