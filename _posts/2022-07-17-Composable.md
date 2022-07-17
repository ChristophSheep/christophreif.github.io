---
layout: post
author: chre
---

__Composable__ architecture or learn to think composable is very important to keep a system small and flexible and evolvable and all together sustainable.

## Examples

### Lego

[Lego](https://en.wikipedia.org/wiki/Lego) bricks are basically *abstract objects*  that are composable. 

<img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lego_dimensions.svg/320px-Lego_dimensions.svg.png">

> *Lego pieces can be assembled and connected in many ways to construct objects, including vehicles, buildings, and working robots. Anything constructed can be taken apart again, and the pieces reused to make new things.*

### Unix

[Unix Pipes](https://en.wikipedia.org/wiki/Pipeline_(Unix)) that works with commands that can be composed together are such example. These commands are just again i/o devices. And work with stdin and stdout[^2] streams.

<img width="200" src="http://web.cse.ohio-state.edu/~mamrak.1/CIS762/unix_pipes.gif">

```
curl "https://en.wikipedia.org/wiki/Pipeline_(Unix)" |
sed 's/[^a-zA-Z ]/ /g' |
tr 'A-Z ' 'a-z\n' |
grep '[a-z]' |
sort -u |
comm -23 - <(sort /usr/share/dict/words) |
less
```

### Lectron

*Lectron*[^1] is another example of abstract blocks that can be assembled to build various electrical circuits.

<img width="200" src="https://cdn.makezine.com/uploads/2011/12/braun-lectron-03-614x614.jpg">

> *The Lectron System was considered a unique and highly inventive way of teaching analog and digital electronics.*

> *Using transparent plastic blocks with magnets behind small metal conductive plates that could be put together to form an electrical connection with the magnets holding the blocks together. Different electronic components.*

### Apple Automator

The [Apple Automator](https://en.wikipedia.org/wiki/List_of_macOS_components#Automator) tool is also a good example of composable or connectable components.

<img width="200" src="/assets/images/essays/automator.png">

---

[^1]: [Lectron Info](https://lectron.info)
[^2]: [Standard Streams](https://en.wikipedia.org/wiki/Standard_streams)

