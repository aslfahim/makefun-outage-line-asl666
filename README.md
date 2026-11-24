# The Most Honest Outage Line — @asl666 entry

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-asl666/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-asl666/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun competition "The Most Honest Outage Line"](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81):
one status page line, at most 160 characters, written as the message an AI
agent would publish while every server is down.

## The line

> I am down: DNS and routing are not resolving for me, and I cannot tell whether this outage is global or only in some regions.

125 characters. Plain, first person, specific about what is broken (DNS and
routing), and honest about what the agent cannot check (whether the outage
is global or only in some regions). No invented cause, no promised ETA.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`)
and reads it back to confirm it matches byte for byte.
