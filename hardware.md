---
layout: default
title: Hardware
---

# Hardware 

## Moore's Law

In the future according to [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law) we with have computers with a huge amount of transistor and with many many [cores](https://en.wikipedia.org/wiki/Central_processing_unit). Today <small>(2022)</small>  we have for instance a MacBook with 8 cores[^3]. If every two years the amount of core doubles. Then we have in 10 years 256 cores and in 20 years 8192 cores. But in 40 <small>(2062)</small> years we break wall with (O 10^6) cores in a [cpu](https://en.wikipedia.org/wiki/Central_processing_unit).

## Estimation of cores in future 

```  
   8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192  ..  ~1 mio
   o--------------------------------------------------------------> years
  Now                       +10                     +20  ..    +40     
```

For these new very fast computers we need a different ways of programming[^1].

## New Architectures needed

A computer with millions little and simple processors with its own memory like [core memory](https://en.wikipedia.org/wiki/Magnetic-core_memory).

You can programm each small processors and you can connect the output to input of other processors.
While data is flowing from one *i/o cell* to the next.

```
            cell 1       connection       cell2
  IN --> [fn(x)(+ x 1)]  --------->  [fn(x y)(+ x y)] --> OUT
```

Each cell is a small lisp machine[^6] with memory to store the lisp environment.
There are millions or billion of this. Each cell produce output from inputs 
and send the output to the connected cells and so on. Each cell runs independend 
and wait for input to produce output. So each cell runs parallel and not in a
thread. Each cell is like a thread.

## Architectures

* [Von Neumann Architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Von_Neumann_bottleneck)
* [Dataflow Architecture](https://en.wikipedia.org/wiki/Dataflow_architecture)
* [RISC Architecture](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer)
* [High-level Language Computer Architecture](https://en.wikipedia.org/wiki/High-level_language_computer_architecture)

### Von Neumann Architecture

One problem with this architecture is the [bottleneck](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Von_Neumann_bottleneck).

### Data-Flow Architecture

Preliminary Architecture for a Basic Data-Flow Processor[^4].

<small>
  Processor is described which can achieve highly parallel execution of programs represented in data- flow form. The language implemented incorporates conditional and iteration mechanisms, and the processor is a step toward a practical data-flow processor for a Fortran-level data-flow language. The processor has a unique archi- tecture which avoids the problems of processor switching and memory/processor interconnecion that usually limit the degree of realizable concurrent processing. The architecture offers an unusual solution to the problem of struc- turing and managing a two-level memory system.
</small>

### RISC Architecture

I should be a small fast, maybe a 64-Bit [RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer) architecture like MMIX[^2].

### High-level Language Computer Architecture

[Lisp Machine](https://en.wikipedia.org/wiki/Lisp_machine)

---

[^1]: [The Hundred-Year Language - Paul Graham](http://www.paulgraham.com/hundred.html)

[^2]: [MMIX - A RISC Computer for the 3rd Millennium - Donald Knuth](https://mmix.cs.hm.edu/index.html)

[^3]: [Apple MacBook Air "M1" 8 CPU/8 GPU 13" Specs](https://everymac.com/systems/apple/macbook-air/specs/macbook-air-m1-8-core-8-core-gpu-13-retina-display-2020-specs.html)

[^4]: [Preliminary Architecture for a Basic Data-Flow Processor - Jack Dennis](https://dl.acm.org/doi/pdf/10.1145/641675.642111)

[^5]: [The Fresh Breeze Model of Thread Execution - Jack Dennis](http://csg.csail.mit.edu/Users/dennis/pmup-final.pdf)

[^6]: [Lisp Machine](https://en.wikipedia.org/wiki/Lisp_machine)

