---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/probability-distribution/","title":"Probability Distribution (short sheet)","tags":["study","applied-business-statistics","probability","binomial","poisson","normal-distribution"],"dg-note-properties":{"title":"Probability Distribution (short sheet)","course":"Applied Business Statistics","semester":3,"source":"[[Probability Distribution(1).pdf]]","tags":["study","applied-business-statistics","probability","binomial","poisson","normal-distribution"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> This is a 28-page short sheet that covers binomial, Poisson and normal in one go. The longer notes are [[Study/3rd Semester/Applied Business Statistics/3 Binomial Distribution\|3 Binomial Distribution]], [[Study/3rd Semester/Applied Business Statistics/4 Poisson Distribution\|4 Poisson Distribution]] and [[Study/3rd Semester/Applied Business Statistics/5 Normal Distribution\|5 Normal Distribution]]. This sheet adds the full **derivations**, the **coefficient of variation** and a different set of **worked problems**.

> [!summary] Summary
> A **random variable** takes values with definite probabilities, and $E(x)=\sum x_iP(x_i)$. Three distributions matter here.
> - **Binomial** $B(n,p)$: successes in $n$ independent trials. $P(x)={}^nC_x\,p^xq^{n-x}$, mean $np$, variance $npq$.
> - **Poisson** $Po(m)$: limit of the binomial when $n\to\infty$, $p\to0$, $np=m$. $P(x)=\dfrac{e^{-m}m^x}{x!}$, mean = variance $=m$.
> - **Normal** $N(\mu,\sigma^2)$: symmetric bell curve, mean = median = mode.

## Key terms

| Term | Meaning |
|---|---|
| Random variable | A set of possible values, each with a definite probability |
| Mathematical expectation | $E(x)=\sum x_i\,P(x_i)$ |
| Probability distribution | The values of a random variable arranged with their probabilities |
| Binomial distribution | Repeated independent trials with constant $p$; $P(x)={}^nC_x\,p^xq^{n-x}$, $x=0,1,\dots,n$ |
| Poisson distribution | Limiting case of the binomial: $n\to\infty$, $p\to0$, $np=m$ fixed |
| Normal distribution | Continuous, symmetric, two parameters $\mu$ and $\sigma^2$ |

> [!warning] Slide error
> The opening example throws 2 fair coins and says the number of heads is "2, 1 and 1 with probabilities 1/2, 1/4 and 1/4". Check with the sample space {HH, HT, TH, TT}:
>
> | Heads $x$ | 0 | 1 | 2 |
> |---|---|---|---|
> | $P(x)$ | 1/4 | 1/2 | 1/4 |
>
> So 2 heads has probability **1/4** and 1 head has probability **1/2**. The slide has them the wrong way round and misses $x=0$.

## Binomial distribution

**Conditions** (all four must hold):
1. A fixed number of trials.
2. The trials are independent.
3. Only two outcomes per trial (success or failure).
4. The probability of success is the same every trial.

> [!tip] Added: history note
> The slide dates the discovery to James (Jacob) Bernoulli in 1700. His book *Ars Conjectandi*, where it appears, is usually dated **1713** (published after his death). Learn the slide's date for the exam only if your teacher asks for it.

### Derivation of the formula
A particular sequence of $x$ successes followed by $n-x$ failures has probability $p\cdot p\cdots p\times q\cdot q\cdots q=p^xq^{n-x}$ (multiplication law for independent events). The $x$ successes can sit in the $n$ trials in ${}^nC_x$ different, mutually exclusive ways, so add the same probability ${}^nC_x$ times:

$$P(x)={}^nC_x\,p^xq^{n-x},\qquad x=0,1,\dots,n$$

### Properties

| Property | Value |
|---|---|
| Type, range | Discrete, $x=0,1,\dots,n$ |
| Parameters | Two: $n$ and $p$ |
| Mean | $np$ |
| Variance | $npq$ |
| Mean vs variance | Mean > variance |
| Shape | Symmetric if $p=q=\tfrac12$, otherwise skew |
| Skewness | $S_k=\dfrac{q-p}{\sqrt{npq}}$ |
| Kurtosis | $3+\dfrac{1-6pq}{npq}$ |
| Coefficient of variation | $C.V.=\dfrac{\sigma}{\bar x}\times100=\dfrac{\sqrt{npq}}{np}\times100=\sqrt{\dfrac{q}{np}}\times100$ |

### Mean (derivation)
Use $x\,{}^nC_x=n\,{}^{n-1}C_{x-1}$ and take $np$ outside the sum:
$$E(x)=np\sum_{x=1}^{n}{}^{n-1}C_{x-1}\,p^{x-1}q^{(n-1)-(x-1)}=np\sum P(x-1)=np\cdot1=np$$

### Variance (derivation)
Write $E(x^2)=E\{x(x-1)\}+E(x)$. By the same trick, $E\{x(x-1)\}=n(n-1)p^2$. Then
$$\sigma^2=n(n-1)p^2+np-(np)^2=np-np^2=np(1-p)=npq$$

### Theorem: mean > variance
$\text{Variance}=npq=np(1-p)=np-np^2=\text{mean}-np^2$, so $\text{mean}=\text{variance}+np^2$. Since $np^2>0$, **mean > variance**.

## Poisson distribution

The slide dates it to S. D. Poisson, 1837. It is the **limiting case of the binomial** under three conditions:
1. $n\to\infty$ (very many trials),
2. $p\to0$ (very small success probability),
3. $np=m$ stays a finite, fixed positive number.

$$P(x)=\frac{e^{-m}m^x}{x!},\qquad x=0,1,2,\dots,\infty$$

### Derivation from the binomial
Put $p=m/n$ and $q=1-m/n$:
$$P_b(x)=\frac{n!}{x!(n-x)!}\left(\frac mn\right)^x\left(1-\frac mn\right)^{n-x}
=\frac{m^x}{x!}\cdot\frac{\left(1-\tfrac1n\right)\left(1-\tfrac2n\right)\cdots\left(1-\tfrac{x-1}n\right)\left(1-\tfrac mn\right)^n}{\left(1-\tfrac mn\right)^x}$$
As $n\to\infty$: the bracket of $(1-\tfrac kn)$ factors $\to1$, $\left(1-\tfrac mn\right)^n\to e^{-m}$ and $\left(1-\tfrac mn\right)^x\to1$. So $P_p(x)=\dfrac{e^{-m}m^x}{x!}$.

### Mean and variance (derivation)
- **Mean:** $E(x)=\sum_{x=1}^\infty x\,\dfrac{e^{-m}m^x}{x!}=m\sum_{x=1}^\infty\dfrac{e^{-m}m^{x-1}}{(x-1)!}=m\cdot1=m$.
- **Variance:** $E\{x(x-1)\}=m^2\sum_{x=2}^\infty\dfrac{e^{-m}m^{x-2}}{(x-2)!}=m^2$, so $E(x^2)=m^2+m$ and $\sigma^2=m^2+m-m^2=m$.
- **Coefficient of variation:** $\dfrac{\sqrt m}{m}\times100=\dfrac{100}{\sqrt m}\%$.

### Properties
1. Discrete, $x=0,1,2,\dots,\infty$.
2. **One** parameter, $m$.
3. Mean = variance $=m$.
4. $\beta_1=\dfrac1m$ (this is the square of the skewness $1/\sqrt m$).
5. $\beta_2=3+\dfrac1m$.

### Examples on the slide
Road accidents per unit time in a city; printing mistakes per page; unfilled grains per panicle; telephone calls at an exchange per unit time; defective screws per box of 100 (the slide also lists reported incidents of a rare event in a city over a fixed time).

## Normal distribution

$$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\qquad -\infty\le x\le\infty$$
$\mu$ is the mean and $\sigma^2$ the variance.

### Properties
1. Continuous, range $-\infty$ to $\infty$.
2. Symmetric.
3. Two parameters, $\mu$ and $\sigma^2$.
4. Mean = median = mode.
5. $\beta_1=0$ and $\beta_2=3$.
6. All odd-order central moments are zero: $\mu_1=\mu_3=\mu_5=\dots=0$.

> [!note] Wording
> "Odd-order moments are zero" means moments **about the mean** (central moments). Moments about the origin are not zero unless $\mu=0$.

## Worked problems

### Binomial 1: six tosses of a fair coin
$n=6$, $p=q=0.5$, so $P(x)={}^6C_x(0.5)^6$.
- (a) Exactly 3 heads: ${}^6C_3/64=20/64=\tfrac5{16}$.
- (b) At least 5 heads: $P(5)+P(6)=\dfrac{6+1}{64}=\dfrac7{64}$.
- (c) At most 3 heads: $\dfrac{1+6+15+20}{64}=\dfrac{42}{64}=\dfrac{21}{32}$.

### Binomial 2: mean 4, variance 4/3
Given $np=4$ and $npq=\tfrac43$.
1. Divide: $q=\dfrac{npq}{np}=\dfrac{4/3}{4}=\dfrac13$, so $p=\dfrac23$.
2. $n\cdot\dfrac23=4$ gives $n=6$.
3. $P(x\ge1)=1-P(0)=1-\left(\dfrac13\right)^6=1-0.00137=0.99863$.

> [!tip] Added: pattern for "mean and variance given"
> Divide variance by mean to get $q$, then $p=1-q$, then $n=\text{mean}/p$. Always check that $q<1$ (variance < mean), otherwise the data cannot be binomial.

### Poisson 1: cattle deaths
Mean $m=2.5$ deaths per day. No death in a day: $P(0)=e^{-2.5}=0.0821$.

### Poisson 2: pins in boxes of 100
5% of pins are defective, so $n=100$, $p=0.05$, $m=np=5$. The box fails the guarantee if more than 10 pins are defective:
$$P(x>10)=1-P(x\le10)=1-e^{-5}\sum_{x=0}^{10}\frac{5^x}{x!}$$

> [!warning] Slide incomplete
> The slide stops at the formula and gives no number.

> [!tip] Added: the final answer
> $\sum_{x=0}^{10}e^{-5}5^x/x!=0.9863$, so $P(x>10)\approx\mathbf{0.0137}$ (about 1.4%). The exact binomial value is 0.0115, so the Poisson answer is a decent but not perfect approximation, because $p=0.05$ is not tiny.

> [!tip] Added: memory aids
> - **BINS** for binomial: **B**inary outcomes, **I**ndependent trials, **N**umber of trials fixed, **S**ame probability each time.
> - Mean = variance is the fingerprint of Poisson. Mean > variance is the fingerprint of binomial.
> - Normal: three averages coincide (mean, median, mode) and skewness is 0.

> [!warning] Typos on the slides
> "trails" should be "trials", "quantoty" should be "quantity", and "Coefficien" should be "Coefficient". The notation is also loose: the slide writes $\mu$ for the variance in one line ($\mu_2=\sigma^2$).

> [!question]- Self-test 1: A binomial has $n=10$, $p=0.3$. Find mean, variance and coefficient of variation.
> Mean $=3$, variance $=10(0.3)(0.7)=2.1$, $C.V.=\sqrt{2.1}/3\times100\approx48.3\%$.

> [!question]- Self-test 2: Why is the mean of a binomial always greater than its variance?
> Variance $=npq=np-np^2=\text{mean}-np^2$, and $np^2>0$.

> [!question]- Self-test 3: A Poisson variable has variance 6. What is $P(x=0)$?
> Mean = variance $=6$, so $P(0)=e^{-6}=0.0025$.

> [!question]- Self-test 4: List three conditions under which a binomial becomes a Poisson.
> $n\to\infty$, $p\to0$, and $np=m$ finite and fixed.

> [!question]- Self-test 5: Which odd-order central moments of a normal distribution are non-zero?
> None. All odd-order central moments are zero, because the curve is symmetric.
