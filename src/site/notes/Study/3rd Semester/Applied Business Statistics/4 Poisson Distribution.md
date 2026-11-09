---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/4-poisson-distribution/","title":"Poisson Distribution","tags":["study","applied-business-statistics","probability","poisson"],"dg-note-properties":{"title":"Poisson Distribution","course":"Applied Business Statistics","semester":3,"source":"[[4 Poisson Distribution.pdf]]","tags":["study","applied-business-statistics","probability","poisson"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Previous: [[Study/3rd Semester/Applied Business Statistics/3 Binomial Distribution\|3 Binomial Distribution]] | Next: [[Study/3rd Semester/Applied Business Statistics/5 Normal Distribution\|5 Normal Distribution]]

> [!summary] Summary
> The Poisson distribution counts how many times a **rare, random event** occurs in a fixed interval of time or space, when the average number of occurrences is $\lambda$ (also written $m$ or $\mu$). It has one parameter and $P(X=r)=\dfrac{e^{-\lambda}\lambda^r}{r!}$. Its mean and variance are both $\lambda$. It is the limiting form of the binomial when $n$ is very large and $p$ very small.

## Definition and examples
If an event occurs at random with mean $\lambda$ per interval and $X$ = number of occurrences in the interval, then $X\sim Po(\lambda)$ and

$$P(X=r)=\frac{e^{-\lambda}\lambda^{r}}{r!},\qquad r=0,1,2,\dots,\infty,\quad \lambda>0$$

| Situation | Mean rate | Model |
|---|---|---|
| Road accidents per day | 1 per day | $Po(1)$ |
| Bacteria per ml of solution | 3 per ml | $Po(3)$ |
| Flaws per square metre of cloth | 1.5 per m² | $Po(1.5)$ |

More examples on the slides: suicides reported in a city in 10 years, cattle deaths from a disease in an area, gas leaks per 100 km of Titas Gas pipeline.

## Characteristics (from the slides)
1. Discrete outcomes $0,1,2,\dots$ with no theoretical upper limit.
2. Describes **infrequent (rare)** events.
3. Each event is independent of the others.
4. Describes events over an **interval** (time, distance, area).
5. The expected number of occurrences is constant throughout.

## Properties

| Property | Value |
|---|---|
| Parameter | one only: $m$ ($=\mu=\lambda$) |
| Mean | $m$ |
| Variance | $m$ (mean = variance) |
| Skewness | $\dfrac{1}{\sqrt m}$, positively skewed |
| Kurtosis $\beta_2$ | $3+\dfrac1m$, leptokurtic |
| Relation to binomial | limiting form when $n$ very large, $p$ very small, $np=m$ finite |

## Derivation as a limit of the binomial (outline)
Put $p=m/n$ in ${}^nC_x p^xq^{n-x}$ and let $n\to\infty$. Then:
- the factors $\left(1-\tfrac1n\right)\left(1-\tfrac2n\right)\cdots\to 1$,
- $\left(1-\tfrac mn\right)^n\to e^{-m}$,
- $\left(1-\tfrac mn\right)^{-x}\to 1$,

leaving $\dfrac{e^{-m}m^x}{x!}$.

## Mean and variance (outline)
- **Mean:** pull out $m$, shift $y=x-1$, and the rest sums to 1, so $E(X)=m$.
- **Variance:** $E[x(x-1)]=m^2$, so $E(X^2)=m^2+m$ and $\mathrm{Var}=m^2+m-m^2=m$.

## Worked problems

**Problem 1: cloth defects** (mean 0.25 per metre).
- (a) Exactly 1 defect in a metre: $\dfrac{e^{-0.25}(0.25)^1}{1!}=0.195$ (19.5%).
- (b) More than 2 defects in 6 metres. Rate scales with length: $Y\sim Po(6\times0.25)=Po(1.5)$.
  $P(Y>2)=1-[P(0)+P(1)+P(2)]=1-0.8088=0.191$ (19.1%).

**Problem 3: factory accidents** (mean 2 per week). Fewer than 3 in a fortnight: $X\sim Po(4)$.
$P(X<3)=P(0)+P(1)+P(2)=e^{-4}\left(1+4+8\right)=0.238$ (23.8%).

**Problem 2: typist** (mean 2 errors per page). The slide gives the question only.

> [!tip] Added: worked answers for Problem 2 (the slide has no solution)
> $X\sim Po(2)$.
> - (a) No errors: $P(0)=e^{-2}=0.135$.
> - (b) More than 3 errors: $1-[P(0)+P(1)+P(2)+P(3)]=1-e^{-2}\left(1+2+2+\tfrac43\right)=1-0.857=0.143$.

> [!tip] Added: key trick
> **Rescale $\lambda$ to match the interval in the question.** 0.25 per metre becomes 1.5 per 6 metres. 2 per week becomes 4 per fortnight.

> [!tip] Added: memory aid
> Poisson = **R**are, **R**andom, **R**ate. Mean = variance is the quickest way to recognise Poisson data.

> [!warning] Slide notation
> The slides write $e=2.72$ and use "$P_0$" for "Po". Use $e\approx 2.718$ on exams and your calculator's $e^x$ key.

> [!question]- Self-test 1: Calls arrive at 3 per minute. Probability of none in a minute?
> $e^{-3}=0.0498$.

> [!question]- Self-test 2: What is the mean and variance of $Po(4)$?
> Both equal 4.

> [!question]- Self-test 3: When can a binomial be approximated by Poisson?
> When $n$ is large and $p$ is small (the slides: $n\to\infty$, $p\to0$). Use $m=np$.

> [!question]- Self-test 4: Defects average 0.5 per metre. Distribution of defects in 4 metres?
> $Po(2)$.
