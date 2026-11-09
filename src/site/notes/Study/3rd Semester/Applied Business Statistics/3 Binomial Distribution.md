---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/3-binomial-distribution/","title":"Binomial Distribution","tags":["study","applied-business-statistics","probability","binomial"],"dg-note-properties":{"title":"Binomial Distribution","course":"Applied Business Statistics","semester":3,"source":"[[3 Binomial Distribution.pdf]]","tags":["study","applied-business-statistics","probability","binomial"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Previous: [[Study/3rd Semester/Applied Business Statistics/2 Mathematical Expectation\|2 Mathematical Expectation]] | Next: [[Study/3rd Semester/Applied Business Statistics/4 Poisson Distribution\|4 Poisson Distribution]]

> [!summary] Summary
> The binomial distribution counts the number of **successes $x$ in $n$ independent trials**, each with the same success probability $p$. It is $B(n,p)$ with $P(x)={}^nC_x\,p^xq^{n-x}$, mean $np$ and variance $npq$. It turns into a Poisson distribution when $n$ is large and $p$ is tiny, and into a normal distribution when $n$ is large and $p$ is not extreme.

## Conditions (all must hold)
1. A **fixed number** of trials $n$ (the slide's example: throwing a dart until you hit the bull does *not* qualify, because the number of throws is not fixed).
2. **Two outcomes** per trial: success or failure (a football match with win/draw/lose has three outcomes, so it does not qualify).
3. Trials are **independent** (two tennis matches are fine).
4. $p$ is **constant** from trial to trial (throwing a six and then spinning a coin for a head changes $p$).
5. $x=0,1,\dots,n$ is a discrete random variable.

## Key terms and formulas

| Item | Formula |
|---|---|
| Parameters | $n$ (trials), $p$ (success), $q=1-p$ |
| Probability function | $P(x)={}^nC_x\,p^x q^{n-x}$, $x=0,1,\dots,n$ |
| Mean | $np$ |
| Variance | $npq$ (mean is greater than variance) |
| Skewness | $\dfrac{q-p}{\sqrt{npq}}$ (symmetric only when $p=q=\tfrac12$) |
| Kurtosis $\beta_2$ | $3+\dfrac{1-6pq}{npq}$ |
| Limit to Poisson | $n\to\infty$, $p\to 0$ |
| Limit to Normal | $n\to\infty$ and neither $p$ nor $q$ very small |

## Where the formula comes from
One particular sequence with $x$ successes then $n-x$ failures has probability $p^xq^{n-x}$ (multiplication law for independent events). There are ${}^nC_x$ different orders in which the $x$ successes can occur, and these are mutually exclusive, so you add them up: ${}^nC_x\,p^xq^{n-x}$.

**Mean.** Write $x\,{}^nC_x=n\,{}^{n-1}C_{x-1}$, take $np$ outside, and the remaining sum is $(p+q)^{n-1}=1$. So $E(X)=np$.

**Variance.** Use $x^2=x(x-1)+x$. Then $E[x(x-1)]=n(n-1)p^2$, so $E(X^2)=n(n-1)p^2+np$ and
$\mathrm{Var}=n^2p^2-np^2+np-n^2p^2=np(1-p)=npq$.

## Worked examples

**Example 1: coins.** A fair coin is tossed 300 times; heads is a success.
Mean $=300(0.5)=150$. Variance $=300(0.5)(0.5)=75$.

**Example 2: toffees.** Each bag has a 90% chance of containing toffees; 20 bags are chosen. $X\sim B(20,0.9)$.
- (i) All 20: $P(20)={}^{20}C_{20}(0.9)^{20}(0.1)^0=0.122$.
- (ii) More than 18: $P(19)+P(20)=0.270+0.122=0.392$.

**Example 3: drug trial.** A drug cures 8% of patients; 15 patients have the disease. $X\sim B(15,0.08)$. Find $P(X\ge 2)$.
$P(X\ge 2)=1-[P(0)+P(1)]=1-[0.286+0.373]=1-0.659=0.341$.

> [!warning] Slide error
> The working on the slide writes $(0.1)^{15}$ for the first term. It should be $(0.92)^{15}$, since $q=1-0.08=0.92$. The printed value 0.286 and the final answer 0.341 are right (checked: $0.92^{15}=0.2863$, $15(0.08)(0.92)^{14}=0.3734$).

> [!tip] Added: shortcut "at least" problems
> For "at least 2" (or "more than...") use the complement: $P(X\ge 2)=1-P(X\le 1)$. It is much shorter than adding $P(2)+P(3)+\dots+P(n)$.

> [!tip] Added: memory aid "BINS"
> **B**inary outcomes, **I**ndependent trials, **N**umber of trials fixed, **S**ame probability each time.

> [!question]- Self-test 1: A die is rolled 12 times. Find the mean and variance of the number of sixes.
> $p=\tfrac16$, $q=\tfrac56$. Mean $=12\cdot\tfrac16=2$. Variance $=12\cdot\tfrac16\cdot\tfrac56=\tfrac{5}{3}\approx 1.67$.

> [!question]- Self-test 2: Why is "throw a dart until you hit the bull" not binomial?
> The number of trials is not fixed in advance. It depends on when the first success happens.

> [!question]- Self-test 3: When is a binomial distribution symmetric?
> When $p=q=\tfrac12$, since skewness $(q-p)/\sqrt{npq}=0$.

> [!question]- Self-test 4: Which distribution replaces the binomial when $n$ is huge and $p$ is very small?
> The Poisson distribution with $m=np$. See [[Study/3rd Semester/Applied Business Statistics/4 Poisson Distribution\|4 Poisson Distribution]].
