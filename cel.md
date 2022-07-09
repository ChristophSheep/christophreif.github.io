---
layout: default
title: Cell
---

# Draft of (i/o) cell paradigm

Following sentences define the paradigm of so called cells.

Each cell is ...

 * is independent
 * is simple and stupid
 * does not know that there are other cells
 * has no side effects
 * has its own memory
 * has 0 to N inputs
 * has 0 to 1 outputs (or M outputs)
 * calculates the output from the inputs
 * runs parallel, but concurrent to other cells
 * has 0 to N in connections to other cells
 * has 0 to M output connections to other cells
 
There are a huge amount of cells that are connected together.

## Example

A simple cell adds to inputs (a, b) and produce an output c
The cell is running in a loop parallel to other cells.
It produces output from input.

```

        ┌───────┐
   b ──>│       │
        │  add  o──> c
   a ──>│       │
        └───────┘

        +-------+
   a -->| +-<-+ |
        | | + | o--> c
   b -->| -->-+ |
        +-------+
```
   
  When data is flowing through channel a and data is flowing through channel b
  then also computed data is flowing out of channel c.
 

