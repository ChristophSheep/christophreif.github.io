
---
layout: default
title: Cel
---

# Draft of (i/o) cell paradigm

Following sentences define the paradigm of so called cells:

 * Each cell is independent
 * Each cell is simple and stupid
 * Each cell does not know that there are other cells
 * Each cell has no side effects
 * Each cell has its own memory
 * Each cell has 0 to N inputs
 * Each cell has 0 to 1 outputs (or M outputs)
 * Each cell calculates the output from the inputs
 * Each cell runs parallel, but concurrent to other cells
 * Each cell has 0 to N in connections to other cells
 * Each cell has 0 to M output connections to other cells
 
There are a huge amount of cells that are connected together.

## Example

A simple cell adds to inputs (a, b) and produce an output c

```
        +-----+
   a -->|     |
        |  +  o--> c
   b -->|     |
        +-----+
```
   
  When data is flowing through channel a and data is flowing through channel b
  then also computed data is flowing out of channel c.
 
