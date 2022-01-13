---
title: The Power of NAND
description: |-
  When I was an engineering student, I learned a logic gate NAND in one of the electronics classes. At that time I didn't fully understand why NAND is so important.

  Ten years later, only after I decided to engage myself more in computer science, I finally understood why it's so: We can build very complex computing systems only with NAND on contrary to its super simple look.

  I'd like to introduce here (1) what NAND is and (2) why it has such a powerful capability.
language: en/GB
tags:
  - computer science
  - system programming
  - nand2tetris
image:
  src: gate.jpg
  alt: A gate in Beograd, Serbia
  credit: Photo by <a href="https://unsplash.com/@nknezevic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Knezevic</a> on <a href="https://unsplash.com/s/photos/gate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
createdAt: 2022-01-12
---

## What's NAND?

NAND is one of the most basic **logic gates**. So first I need to explain what the logic gate is.

A logic gate is a sort of a calculator that accepts one or more input and produces one or more output where both input and output values are either 0 or 1. Let's take a look at one of the simplest logic gates: AND.

<figure>
    <img src="/img/blog/the-power-of-nand/AND.svg" alt="AND gate" />
    <figcaption>AND gate</figcaption>
</figure>

As you can see it takes two inputs (a) and (b), then produce one output (out). Because each (a) and (b) can be either 0 or 1, there are 4 variations of input combination as shown in the table below. The output of an AND gate will be 1 only when both (a) and (b) are 1.

|  a  |  b  | out |
| :-: | :-: | :-: |
|  0  |  0  |  0  |
|  1  |  0  |  0  |
|  0  |  1  |  0  |
|  1  |  1  |  1  |

<aside>This table representation of the relationship between input combinations and corresponding output is called <i>truth table</i>.</aside>

Let's take a look at another example: OR gate.

<figure>
    <img src="/img/blog/the-power-of-nand/OR.svg" alt="OR gate" />
    <figcaption>OR gate</figcaption>
</figure>

Again, it receives two inputs and produces one output. The output of the OR gate is 0 when both (a) and (b) are 0, otherwise 1. This is the truth table of the OR gate.

|  a  |  b  | out |
| :-: | :-: | :-: |
|  0  |  0  |  0  |
|  1  |  0  |  1  |
|  0  |  1  |  1  |
|  1  |  1  |  1  |

Now let's get back to the initial question: What is NAND?

Like AND and OR gates, NAND is also a logic gate that receives two inputs and produces one output.

<figure>
    <img src="/img/blog/the-power-of-nand/NAND.svg" alt="NAND gate" />
    <figcaption>NAND gate</figcaption>
</figure>

The output of NAND gate is just an opposite of AND output: When either (a) or (b) is 1 or both of them are 0, the output is 1. More simply put, the output is 0 only when both (a) and (b) are 1.

|  a  |  b  | out |
| :-: | :-: | :-: |
|  0  |  0  |  1  |
|  1  |  0  |  1  |
|  0  |  1  |  1  |
|  1  |  1  |  0  |

Not very complicated, right?

Now how would it be possible to build a "computer" like the one you're reading this post with with this tiny device?

## How to Build a Computer with NAND

The steps are like this:

1. build elementary logic gates such as AND, OR, and Multiplexer with NAND
1. build components needed to compose CPU such as ALU (Arithmetic Logic Unit) and RAM (Random Access Memories) with elementary logic gates
1. build a CPU with these components

An essential fact that makes these steps possible is that _any logic gates can be constructed by combining only NAND gates_. Let's take a look at an example.

<figure>
    <img src="/img/blog/the-power-of-nand/AND with NAND.svg" alt="Input (a) and (b) are connected to two different NANDs. The output of these two NANDs are connected to another NAND." />
    <figcaption>???</figcaption>
</figure>

There are three NAND gates in this combined logic gate and it still has two inputs and one output. The branching lines from (a) and (b) mean that input (a) and (b) are connected to multiple gates. Please take a moment to think how the truth table of this logic gate would look like.

This is the answer.

|  a  |  b  | out |
| :-: | :-: | :-: |
|  0  |  0  |  0  |
|  1  |  0  |  0  |
|  0  |  1  |  0  |
|  1  |  1  |  1  |

As you can see, it's identical to the AND gate; we successfully made an AND gate only with NAND gates.

What about this one?

<figure>
    <img src="/img/blog/the-power-of-nand/OR with NAND.svg" alt="Input (a) are branched into two and connected to the same NAND. Same connection for (b). The output of these two NANDs are connected to another NAND." />
    <figcaption>???</figcaption>
</figure>

As you may have guessed, it's an OR gate implemented with NAND gates.

The truth tables we've seen so far were quite simple: two inputs and one output, but it can be very complex in real life. However, it is known that no matter how complex the truth table is, it can be realised by combining only NAND gates. This characteristic of NAND is called **functional completeness**.

<aside>In fact NAND is not the only gate that has functional completeness: NOR gate (the inverse of OR gate), or the combination of AND and NOT also has this property.</aside>

Because so called CPU and any other components needed to build a computer are just a very complex version of logic gates, all the necessary components to build a computer are constructed only with NANDs.

Of course tons of arduous work needs to be done on top of this to turn it into a full-fledged computer we use today, however, they are all about how to make use of this tiny yet powerful device.

## "The Elements of Computing Systems"

Let me introduce a book which I learned this fact from at the end of the story.

In the previous post I said I'm going to work on the "CPU Experiment". However, I didn't know what exactly I should work on or how to kick off the project. After some intensive search on the internet, I came across this book titled ["The Elements of Computing Systems"](https://www.amazon.co.uk/Elements-Computing-Systems-second-Principles/dp/0262539802/).

The book was written by Dr. Noam Nisan and Dr. Shimon Schocken, and was first published in 2005 as a computer science textbook to teach their students how the black-boxed computer systems actually look inside.

The key concept of the book is "NAND to Tetris": The idea that any general-purpose computers are made in a same way that

- (1) they are built from NAND as an elementary logic gate, and
- (2) they are programmed to run any applications such as Tetris game.

And then there is a word _to_ between them meaning the book provides readers a hands-on experience of building a Tetris (general-purpose computer) starting from NAND (an elementary logic gate).

It turned out that not only is this book a perfect introduction to the low-level systems but also it was a perfect timing for me to read. Most importantly, it helped me understand what exactly I'm trying to learn.

I can't wait to see what comes out of this journey. Stay tuned…
