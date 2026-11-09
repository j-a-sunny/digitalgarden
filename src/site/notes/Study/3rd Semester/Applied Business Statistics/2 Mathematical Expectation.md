---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/2-mathematical-expectation/","title":"Mathematical Expectation","tags":["study","applied-business-statistics","probability","expectation","variance"],"dg-note-properties":{"title":"Mathematical Expectation","course":"Applied Business Statistics","semester":3,"source":"[[2 Mathematical Expectation.pdf]]","tags":["study","applied-business-statistics","probability","expectation","variance"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Previous: [[Study/3rd Semester/Applied Business Statistics/1 RV PMF CDF PDF CDF\|1 RV PMF CDF PDF CDF]] | Next: [[Study/3rd Semester/Applied Business Statistics/3 Binomial Distribution\|3 Binomial Distribution]]

> [!summary] Summary
> The **expected value** $E(X)=\mu$ is the long-run average of a random variable: add up (discrete) or integrate (continuous) each value times its probability. **Moments** generalise this to $E(X^n)$. The **variance** is the second central moment and can be computed as $E(X^2)-[E(X)]^2$. The **standard deviation** is its square root.

## Key formulas

| Idea | Discrete | Continuous |
|---|---|---|
| Expectation $E(X)=\mu$ | $\sum x_i\,p(x_i)$ | $\int_{-\infty}^{\infty} x f(x)\,dx$ |
| Expectation of $g(X)$ | $\sum g(x)\,p(x)$ | $\int g(x) f(x)\,dx$ |
| $n$th moment $E(X^n)$ | $\sum x^n p(x)$ | $\int x^n f(x)\,dx$ |
| $n$th central moment $E(X-\mu)^n$ | $\sum (x-\mu)^n p(x)$ | $\int (x-\mu)^n f(x)\,dx$ |
| Variance $\sigma^2$ | $E(X^2)-[E(X)]^2$ | same |
| Standard deviation | $\sigma=\sqrt{\mathrm{Var}(X)}$ (spread around the mean) | same |

## Two facts proved on the slides
1. **First central moment is always 0.**
   $E(X-\mu)=\sum xp(x)-\mu\sum p(x)=\mu-\mu\cdot 1=0$.
2. **Second central moment is the variance.**
   $E(X-\mu)^2=E(X^2)-2\mu E(X)+\mu^2=E(X^2)-\mu^2=\mathrm{Var}(X)$.

> [!tip] Added: shortcut
> **Variance = mean of the squares minus the square of the mean.** Compute $E(X)$, then $E(X^2)$, then subtract. This is faster than computing $(x-\mu)^2$ for every value.

## Example 1: two coins (discrete)
$X$ = number of heads. $P(0)=\tfrac14$, $P(1)=\tfrac12$, $P(2)=\tfrac14$.

| $x$ | $p(x)$ | $x\,p(x)$ | $x^2$ | $x^2p(x)$ |
|---|---|---|---|---|
| 0 | 1/4 | 0 | 0 | 0 |
| 1 | 1/2 | 1/2 | 1 | 1/2 |
| 2 | 1/4 | 1/2 | 4 | 1 |
| Total | 1 | **1** | | **1.5** |

$E(X)=1$, $E(X^2)=1.5$, so $\sigma^2=1.5-1^2=0.5$.

## Example 2: continuous
$f(x)=\tfrac{3}{10}(3x-x^2)$ for $0\le x\le 2$, else 0.

- $E(X)=\tfrac3{10}\int_0^2(3x^2-x^3)\,dx=\tfrac3{10}\left[x^3-\tfrac{x^4}{4}\right]_0^2=\tfrac3{10}(8-4)=1.2$
- $E(X^2)=\tfrac3{10}\int_0^2(3x^3-x^4)\,dx=\tfrac3{10}\left[\tfrac{3x^4}{4}-\tfrac{x^5}{5}\right]_0^2=\tfrac3{10}\cdot\tfrac{28}{5}=1.68$
- $\mathrm{Var}(X)=1.68-1.2^2=0.24$

> [!tip] Added: sanity check on the PDF
> $\int_0^2\tfrac3{10}(3x-x^2)dx=\tfrac3{10}\cdot\tfrac{10}{3}=1$, so it is a valid PDF.

> [!tip] Added: linear rules (not on the slides)
> $E(aX+b)=aE(X)+b$ and $\mathrm{Var}(aX+b)=a^2\mathrm{Var}(X)$. Adding a constant shifts the mean but does not change the spread.

> [!question]- Self-test 1: Find $E(X)$ for a fair die.
> $\tfrac16(1+2+3+4+5+6)=3.5$.

> [!question]- Self-test 2: Why is $E(X-\mu)$ always zero?
> Distances above and below the mean cancel exactly: $E(X)-\mu=0$.

> [!question]- Self-test 3: $E(X)=4$ and $E(X^2)=20$. Find the standard deviation.
> $\mathrm{Var}=20-16=4$, so $\sigma=2$.

> [!question]- Self-test 4: Which moment gives the variance?
> The second **central** moment, $E(X-\mu)^2$. The second ordinary moment $E(X^2)$ is not the variance unless $\mu=0$.
