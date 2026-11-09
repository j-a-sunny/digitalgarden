---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/5-normal-distribution/","title":"Normal Distribution","tags":["study","applied-business-statistics","probability","normal-distribution"],"dg-note-properties":{"title":"Normal Distribution","course":"Applied Business Statistics","semester":3,"source":"[[5 Normal Distribution.pdf]]","tags":["study","applied-business-statistics","probability","normal-distribution"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Previous: [[Study/3rd Semester/Applied Business Statistics/4 Poisson Distribution\|4 Poisson Distribution]] | Next: [[Study/3rd Semester/Applied Business Statistics/1739799506338_Test of hypothesis\|1739799506338_Test of hypothesis]] (see also [[Study/3rd Semester/Applied Business Statistics/6. Analysis of Variance BBA\|6. Analysis of Variance BBA]])

> [!summary] Summary
> The normal distribution is the symmetric bell curve described by its mean $\mu$ and standard deviation $\sigma$. Any normal variable can be **standardised** with $z=\dfrac{x-\mu}{\sigma}$ to the standard normal ($\mu=0$, $\sigma=1$), whose areas are read from a table. About 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean.

## Definition
$X\sim N(\mu,\sigma^2)$ has density
$$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\qquad -\infty<x<\infty$$

**Standard normal:** if $z=\dfrac{X-\mu}{\sigma}$ then $z\sim N(0,1)$ with $f(z)=\dfrac{1}{\sqrt{2\pi}}e^{-z^2/2}$, symmetric about $z=0$.

## Characteristics
1. Symmetric, bell-shaped.
2. Two parameters: $\mu$ (position) and $\sigma$ (spread).
3. Highest probability at $x=\mu$.
4. Mean = median = mode.
5. $\beta_1=0$ (no skew) and $\beta_2=3$.
6. Area within $\mu\pm\sigma$, $\mu\pm2\sigma$, $\mu\pm3\sigma$ is 68.27%, 95.45%, 99.73%.

| Effect of the parameters | What happens |
|---|---|
| $\mu$ changes (e.g. $-12.3$, $0$, $10$) | Curve slides left or right; any real value allowed |
| $\sigma$ smaller | Narrower, taller curve |
| $\sigma$ larger | Wider, flatter curve |

Everyday examples on the slides: natural (height, temperature, blood pressure) and man-made (machine products, financial data, sales). The mean is the most frequent value and values far from it get rarer.

## Reading the standard normal table (cumulative probability $P(Z<z)$)

| $z$ | −3 | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| $P(Z<z)$ | 0.0013 | 0.0228 | 0.1587 | 0.5000 | 0.8413 | 0.9772 | 0.9987 |

Using the symmetry:
- Between 0 and 1: $0.8413-0.5=0.3413$. Between 1 and 2: $0.1359$. Between 2 and 3: $0.0214$.
- $P(-1<z<1)=0.6826$, $P(-2<z<2)=0.9544$, $P(-3<z<3)=0.9974$.

## Worked problems

**Problem 1: battery.** $X\sim N(62,\,3^2)$ hours. $P(X<68)$.
$z=\dfrac{68-62}{3}=2$, so $P=P(Z<2)=0.977$.

**Problem 2: cereal.** Mean 250 g, SD 4 g. $P(X>254.4)$.
$z=\dfrac{254.4-250}{4}=1.1$, so $P=1-P(Z<1.1)=1-0.8643=0.136$.

> [!warning] Slide error
> The slide writes $X\sim N(250,\,4)$. In the notation $N(\mu,\sigma^2)$ the second number is the **variance**, which here is $4^2=16$. It should read $N(250,\,16)$. The calculation itself correctly uses $\sigma=4$.

**Problem 3: orange juice** (mean 120 ml, SD 1.8 ml, find $P(X>118)$) and **Problem 4: light bulb** (mean 520 h, SD 6 h, find $P(X<511)$). The slides give the questions only.

> [!tip] Added: worked answers for Problems 3 and 4
> - **Problem 3:** $z=\dfrac{118-120}{1.8}=-1.11$. $P(Z>-1.11)=P(Z<1.11)=0.867$.
> - **Problem 4:** $z=\dfrac{511-520}{6}=-1.5$. $P(Z<-1.5)=0.0668$.

> [!tip] Added: 4-step recipe for any normal problem
> 1. Write $X\sim N(\mu,\sigma^2)$ and take $\sigma$ as the square root of the second number.
> 2. Standardise: $z=(x-\mu)/\sigma$.
> 3. Sketch the bell and shade the area you want.
> 4. Table gives the area to the **left**. For "more than" use $1-$ table value. For negative $z$ use symmetry.

> [!warning] Slide notation
> The slides write $e=2.712$. The correct value is $e\approx 2.718$ (and $\pi\approx3.14$).

> [!question]- Self-test 1: $X\sim N(100,\,25)$. What is the probability $X$ is between 95 and 105?
> $\sigma=5$, so $z=\pm1$ and the area is $0.6826$.

> [!question]- Self-test 2: Why is the mean, median and mode the same in a normal distribution?
> The curve is perfectly symmetric about its single peak at $\mu$.

> [!question]- Self-test 3: Find $P(X>254.4)$ if $\mu=250$, $\sigma=4$.
> $z=1.1$, $1-0.8643=0.136$.

> [!question]- Self-test 4: Which of $\beta_1$, $\beta_2$ is 0 and which is 3?
> Skewness $\beta_1=0$, kurtosis $\beta_2=3$.
