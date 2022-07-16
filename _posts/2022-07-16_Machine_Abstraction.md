---
layout: post
author: chre
---

Today following sentences hit my eyes on the wikipedia about [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture) in the section [Capabilities](https://en.wikipedia.org/wiki/Von_Neumann_architecture#Capabilities).

> *"Some high level languages leverage the von Neumann architecture by providing an abstract, machine-independent way to manipulate executable code at runtime (e.g., LISP), or by using runtime information to tune just-in-time compilation (e.g. languages hosted on the Java virtual machine, or languages embedded in web browsers)."*

It is talking here about Virtual Machines, Lisp interpretors and it seems JavaScript engine. While JavaScript is nothing more then *Lisp in C cloth*[^1], like [Apple Dylan](https://en.wikipedia.org/wiki/Apple_Dylan) or [Python](https://en.wikipedia.org/wiki/Python_(programming_language)).

For those who understand how important abstraction is, should understand that von Neumann is only a way to boot up to the next generations of hardware technology. It seems for me we hang to long on von Neumann architecture, which had his time, and still have value, but with high parallel computing there should be another approach - like dataflow processor architecture[^2]. The world often does not have catch up what was already an knowledge available. In the 70s and 80s they had not the hardware to do things, but because of Moore's law the things have changed dramatically and now it is time to go back in time and look where bring current possibilites together with the knowledge of professional computer scientiest of the early days of computing.

---

[^1]: [JavaScript:
The World's Most Misunderstood Programming Language](https://www.crockford.com/javascript/javascript.html)
[^2]: [Dataflow processor](https://dl.acm.org/doi/pdf/10.1145/641675.642111)
