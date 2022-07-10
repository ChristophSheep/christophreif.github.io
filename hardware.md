---
layout: default
title: Hardware
---

# Hardware

In the future according to [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law) we with have computer with many [cores](https://en.wikipedia.org/wiki/Central_processing_unit). Today <small>(2022)</small>  we have for instance a MacBook with 8 cores[^3]. If every two the size doubles. Then we have in 10 years 256 cores and in 20 years 8192 cores. But in 40 <small>(2062)</small> years we break wall with an order of 1 million cores in a [cpu](https://en.wikipedia.org/wiki/Central_processing_unit).


```
   Now                      
    8, 16, 32, 64, 128, 256 Cores (Now+10 years)
    256, 512, 1024, 2048, 4096, 8192 Cores (Now+20 years)
```

For these new very fast computers we need a different ways of programming[^1].

## New

A computer with let says 100.000 smalls little simple processors with its own [core memory](https://en.wikipedia.org/wiki/Magnetic-core_memory).

You can programm each small processors and you can connect the output to input of other processors.
While data is flowing from one "i/o cell" to the next.

```
  IN --> [fn(x)(+ x 1)] --> [fn(x y)(+ x y)] --> OUT
```

## Data-Flow Hardware

Preliminary Architecture for a Basic Data-Flow Processor[^4].

<small>
  Processor is described which can achieve highly parallel execution of programs represented in data- flow form. The language implemented incorporates conditional and iteration mechanisms, and the processor is a step toward a practical data-flow processor for a Fortran-level data-flow language. The processor has a unique archi- tecture which avoids the problems of processor switching and memory/processor interconnecion that usually limit the degree of realizable concurrent processing. The architecture offers an unusual solution to the problem of struc- turing and managing a two-level memory system.
</small>

## RISC

I should be a small fast, maybe a [RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer) architectire like MMIX[^2].

---

[^1]: [The Hundred-Year Language - Paul Graham](http://www.paulgraham.com/hundred.html)

[^2]: [MMIX - A RISC Computer for the 3rd Millennium - Donald Knuth](https://mmix.cs.hm.edu/index.html)

[^3]: [Apple MacBook Air "M1" 8 CPU/8 GPU 13" Specs](https://everymac.com/systems/apple/macbook-air/specs/macbook-air-m1-8-core-8-core-gpu-13-retina-display-2020-specs.html)

[^4]: [Preliminary Architecture for a Basic Data-Flow Processor](https://dl.acm.org/doi/pdf/10.1145/641675.642111)


