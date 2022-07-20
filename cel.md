---
layout: default
title: Cell
---

# i/o cells paradigm

Following sentences define a the [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) with the name __i/o cells__[^1].

Each cell is ..

 * .. is independent
 * .. is simple and stupid
 * .. does not know about outside
 * .. calculates the output from the inputs
 * .. has no side effects
 * .. has 0 to N inputs
 * .. has 0 to 1 outputs (or M outputs)
 * .. has 0 to N in connections to other cells
 * .. has 0 to M output connections to other cells
 * .. has its own memory, but can forget
 * .. can be a group of other cells

Note: the output could be the input of a cell but not at the same time, only t+1. So the output at time t can be the input of a cell at t+1. Cells lives in time.

There are a huge amount of cells that are connected together. Connections can be programmed.
I/O cells are like nerve cells[^3] who produce an output signal from incoming signals from other cells.

## i/o cells and AI

But this i/o cell paradigm has nothing to do with AI or brain stuff. I agree with Joseph Weizenbaum
who said in the movie [Plug&Pray](http://plugandpray-film.de/inhalt.html) that it is a big mistake that
people believe everything can be computed. But we can learn from the way our brain is build. 
Like we learned from birds and build areoplanes.

Basically a computer is an I/O device. With inputs like keyboard and mouse and ouputs like screen or speaker.

## Simulate

Currently you can simulate i/o cells paradigm via [channels](https://en.wikipedia.org/wiki/Channel_(programming)) and [green threads](https://en.wikipedia.org/wiki/Green_threads). Because this paradigm need a hardware like a modern dataflow architecture[^3]. This hardware would be similar to our humane brain hardware, where each neuron is permanent calc output from input signals.

So CSP and GO[^10] is a good start to play and simulate the paradigm.  Following example show to add cells that calculate c = a+b. The result c is then piped into the channel and the next add cell takes out the result c and take it for b.

## Example

A simple cell adds to inputs (a, b) and produce an output c.
The cell is running in a loop parallel to other cells. It produces output from input. If input a is there and input b is there it can generate output c. Inputs can come at any time. If both inputs are available the output will be produced.

```

        ┌───────┐
   b ──>o ┌─<─┐ │       connect       ┌───────┐
        │  add  o──> c --------- b ──>o ┌─<─┐ │
   a ──>o └─>─┘ │       channel       │  add  o──> c
        └───────┘                a ──>o └─>─┘ │
                                      └───────┘

```
   
  When data is flowing through channel[^2] a and data is flowing through channel b
  then also computed *data is flowing*[^3] out of channel c.


## Dataflow programming

See Wiki [Dataflow_programming](https://en.wikipedia.org/wiki/Dataflow_programming)

### State

> One of the key concepts in computer programming is the idea of state, essentially a snapshot of various conditions in the system. Most programming languages require a considerable amount of state information, which is generally hidden from the programmer. Often, the computer itself has no idea which piece of information encodes the enduring state. This is a serious problem, as the state information needs to be shared across multiple processors in parallel processing machines. Most languages force the programmer to add extra code to indicate which data and parts of the code are important to the state. This code tends to be both expensive in terms of performance, as well as difficult to read or debug. Explicit parallelism is one of the main reasons for the poor performance of Enterprise Java Beans when building data-intensive, non-OLTP applications.[citation needed]

> Where a sequential program can be imagined as a single worker moving between tasks (operations), a dataflow program is more like a series of workers on an assembly line, each doing a specific task whenever materials are available. Since the operations are only concerned with the availability of data inputs, they have no hidden state to track, and are all "ready" at the same time.

### Representation

> Dataflow programs are represented in different ways. A traditional program is usually represented as a series of text instructions, which is reasonable for describing a serial system which pipes data between small, single-purpose tools that receive, process, and return. Dataflow programs start with an input, perhaps the command line parameters, and illustrate how that data is used and modified. The flow of data is explicit, often visually illustrated as a line or pipe.

> In terms of encoding, a dataflow program might be implemented as a hash table, with uniquely identified inputs as the keys, used to look up pointers to the instructions. When any operation completes, the program scans down the list of operations until it finds the first operation where all inputs are currently valid, and runs it. When that operation finishes, it will typically output data, thereby making another operation become valid.

> For parallel operation, only the list needs to be shared; it is the state of the entire program. Thus the task of maintaining state is removed from the programmer and given to the language's runtime. On machines with a single processor core where an implementation designed for parallel operation would simply introduce overhead, this overhead can be removed completely by using a different runtime.

---

[^1]: [Input/output automaton](https://en.wikipedia.org/wiki/Input/output_automaton)
[^2]: [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)
[^3]: [Dataflow Architecture](https://en.wikipedia.org/wiki/Dataflow_architecture)
[^4]: [Input/ouput](https://en.wikipedia.org/wiki/Input/output)
[^5]: [Asynchronous I/O](https://en.wikipedia.org/wiki/Asynchronous_I/O)
[^6]: [Neuron or nerve cell](https://en.wikipedia.org/wiki/Neuron)
[^7]: [Channel](https://en.wikipedia.org/wiki/Channel_(programming))
[^8]: [Bell Labs and CSP Threads](https://swtch.com/~rsc/thread/)
[^9]: [A Simulator for Digital Circuits](SICP - Page 369)
[^10]: [Bell Labs and CSP Threads](https://swtch.com/~rsc/thread/)

 

