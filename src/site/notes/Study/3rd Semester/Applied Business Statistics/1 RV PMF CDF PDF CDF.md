---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/1-rv-pmf-cdf-pdf-cdf/","title":"Random Variables, PMF, PDF and CDF","tags":["study","applied-business-statistics","probability","random-variable"],"dg-note-properties":{"title":"Random Variables, PMF, PDF and CDF","course":"Applied Business Statistics","semester":3,"source":"[[1 RV PMF CDF PDF CDF.pdf]]","tags":["study","applied-business-statistics","probability","random-variable"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Next topic: [[Study/3rd Semester/Applied Business Statistics/2 Mathematical Expectation\|2 Mathematical Expectation]]

> [!summary] Summary
> A **random variable (r.v.)** turns each outcome of an experiment into a number. If it takes isolated values it is **discrete** and is described by a **PMF**. If it can take any value in an interval it is **continuous** and is described by a **PDF**. The **CDF** $F(x)=P(X\le x)$ adds up the probability to the left of $x$ and works for both types.

## Key terms

| Term | Meaning | Condition / formula |
|---|---|---|
| Random variable $X$ | Variable taking values $x_1,\dots,x_n$ with probabilities $p_1,\dots,p_n$ | Capital letter = the variable, small letter = a value |
| Discrete r.v. | Finite or countable, isolated values (die: 1 to 6) | |
| Continuous r.v. | Infinitely many values, e.g. every number in $0<x<1$ | |
| PMF $P(x_i)$ | Probability that a discrete $X$ equals $x_i$ | $P(x_i)\ge 0$ and $\sum P(x_i)=1$ |
| PDF $f(x)$ | Density function of a continuous $X$ | $f(x)\ge 0$ and $\int_{-\infty}^{\infty} f(x)\,dx=1$ |
| CDF $F(x)$ | Cumulative probability up to $x$ | Discrete: $\sum_{x_i\le x}P(x_i)$. Continuous: $\int_{-\infty}^{x} f(t)\,dt$ |
| Density (from data) | Relative frequency divided by class width | $f(x)=\dfrac{\text{relative frequency}}{\text{class width}}$ |

**Link between CDF and PDF:** $\dfrac{d}{dx}F(x)=f(x)$.

## Worked example: three coins
Toss three coins, $X$ = number of heads. The 8 outcomes HHH, HHT, HTH, THH, HTT, THT, TTH, TTT give $X=3,2,2,2,1,1,1,0$.

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $P(X=x)$ | 1/8 | 3/8 | 3/8 | 1/8 |
| $F(x)$ | 1/8 | 4/8 | 7/8 | 1 |

> [!note] Reading the slide
> The slide prints the CDF as 1/8 for $x\le 0$, 4/8 for $x\le 1$, and so on. Each value applies from that $x$ up to just before the next one, so the CDF is a staircase.

## Discrete problems

**Find $k$ from a PMF.** $P(X=x)=k(x+2)$ for $x=1,2$ and $kx$ for $x=3,4$.
Values: $3k,\,4k,\,3k,\,4k$. Sum $=14k=1$, so $k=\tfrac1{14}$.

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $P$ | 3/14 | 4/14 | 3/14 | 4/14 |

**CDF value.** For $P=0.2,0.1,0.4,0.2,0.1$ at $x=1..5$: $F(3)=0.2+0.1+0.4=0.7$.

**PMF from a CDF.** Given $F(1)=0.2$, $F(2)=0.9$, $F(3)=1$:
$P(3)=F(3)-F(2)=0.1$, $P(2)=F(2)-F(1)=0.7$, $P(1)=0.2$.

## From a histogram to a PDF
The slides use waiting times in minutes (100 observations) to show how density works.

| Class | Frequency | Relative frequency | Density (width 1) |
|---|---|---|---|
| 1 to 2 | 20 | 0.2 | 0.2 |
| 2 to 3 | 50 | 0.5 | 0.5 |
| 3 to 4 | 30 | 0.3 | 0.3 |

Splitting each class into halves (width 0.5) doubles the density of each half, e.g. the 2 to 2.5 class has relative frequency 0.20 and density 0.4. Making the classes narrower and narrower gives a smooth curve, the PDF.

## Continuous problems

**Example 1.** $f(x)=\alpha(2x-x^2)$ on $0<x<2$, else 0.
- $\int_0^2 \alpha(2x-x^2)dx=\alpha\left(4-\tfrac83\right)=\tfrac43\alpha=1 \Rightarrow \alpha=\tfrac34$.
- $P(X>1)=\tfrac34\int_1^2(2x-x^2)dx=\tfrac34\left[\tfrac43-\tfrac23\right]=\tfrac12$.

**Example 2.** $f(x)=\tfrac17(4-3x^2)$ for $-1\le x\le 1$, $f(x)=\tfrac17$ for $1<x\le 2$, else 0. The curve is an upside-down parabola on $[-1,1]$ (peak $4/7$ at $x=0$) and a flat line at $1/7$ on $(1,2]$.
- $P(X\le 0)=\tfrac17\left[4x-x^3\right]_{-1}^{0}=\tfrac37$.
- $P(0.5\le X\le 1.5)=\tfrac17\left[4x-x^3\right]_{0.5}^{1}+\tfrac12\cdot\tfrac17=\tfrac9{56}+\tfrac1{14}=\tfrac{13}{56}$.

**Example 3 (find the CDF).**
$f(x)=\tfrac14$ for $0\le x<1$, $f(x)=\tfrac{x^3}{5}$ for $1\le x\le 2$, else 0.
- For $0\le x<1$: $F(x)=\tfrac x4$.
- For $1\le x\le 2$: $F(x)=\tfrac14+\int_1^x\tfrac{t^3}{5}dt=\tfrac14+\tfrac{x^4-1}{20}=\tfrac{x^4+4}{20}$.

$$F(x)=\begin{cases}0 & x<0\\[2pt] \dfrac x4 & 0\le x<1\\[6pt] \dfrac{x^4+4}{20} & 1\le x\le 2\\[6pt] 1 & x>2\end{cases}$$

Check: $F(2)=\tfrac{20}{20}=1$.

> [!tip] Added: memory aids
> - **PMF = Mass at points, PDF = Density along a line.** For a PMF you read the height. For a PDF you read the area.
> - For a continuous r.v. $P(X=x)=0$ for any single value, so $P(a\le X\le b)$ and $P(a<X<b)$ are the same.
> - A CDF never decreases and always runs from 0 up to 1.
> - Discrete: $P(X=x)=F(x)-F(x^-)$. Continuous: differentiate $F$ to get $f$.

> [!question]- Self-test 1: Why must the PMF probabilities sum to 1?
> Together the possible values cover every outcome of the experiment, so the total probability is the whole sample space, which is 1.

> [!question]- Self-test 2: $P(X=x)=kx$ for $x=1,2,3$. Find $k$.
> $k+2k+3k=6k=1$, so $k=\tfrac16$.

> [!question]- Self-test 3: Can a PDF take a value greater than 1?
> Yes. Only the **area** under the curve has to equal 1. A narrow, tall density can exceed 1, e.g. $f(x)=2$ on $0\le x\le 0.5$.

> [!question]- Self-test 4: How do you get $f(x)$ from $F(x)$?
> Differentiate: $f(x)=F'(x)$. Example: $F(x)=x/4$ gives $f(x)=1/4$ on $0\le x<1$.
