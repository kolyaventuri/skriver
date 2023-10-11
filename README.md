# ✏️ Skriver 
(Swedish: "writing")

Write shell scripts in natural language using GPT.

---

# NOTE:
**_DO NOT ACTUALLY USE THIS!_**

This has no fault-tolerance, error checking, or preventions for malicious action. This is purely a proof of a silly concept. Kolya Venturi assumes no responsibility for misuse.


## What
Have you ever wanted to write scripts, without actually doing any work? Well, ChatGPT is great at that sort of thing! So what if we just removed the effort of opening ChatGPT, and instead just wrote in plain English for what we wanted our scripts to do. Well that's what "skriver" is here to help with! Kinda. It's a proof of concept. Please do not actually use this on mission critical systems. I'm doing absolutely no vetting of scripts, nor any sandboxing.

## Why?
Because I thought the idea was silly and it was easy to execute.

## Q's
Q: Won't this generate a new script every time?

A: Nope! It takes a hash of your input and if it hasn't changed, it just runs the existing script. It's simple, but it gets the job done. If your input changes at all, you'll get a new script.

# Getting Started

## Installation
Just install the packages with your favorite flavor of node package manager (I use `pnpm` but `npm` or `yarn` will also work).

## Writing scripts
You can write scripts in as easy as one import and function call!

```js
import {script} from 'skriver';

script('Do a thing');
```

## Running scripts
Provide your own OpenAI API key via `OPENAI_API_KEY=...` and execute your file! 

Example:
```bash
OPENAI_API_KEY=sk-abc123 npm run script path/to/script.ts
```

## Example scripts
I have two examples in place already:
1. `example/hello-world.ts` -- Just a hello world script
2. `example/number-game.ts` -- Plays a simple number guessing game

---

That's it. Have fun.
