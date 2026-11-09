---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/1739799506338-test-of-hypothesis/","title":"Test of Hypothesis","tags":["study","applied-business-statistics","hypothesis-testing","t-test","chi-square","f-test"],"dg-note-properties":{"title":"Test of Hypothesis","course":"Applied Business Statistics","semester":3,"source":"[[1739799506338_Test of hypothesis.pdf]]","tags":["study","applied-business-statistics","hypothesis-testing","t-test","chi-square","f-test"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides. I re-did every numeric example; where my number differs from the slide you will see a warning.
> Related: [[Study/3rd Semester/Applied Business Statistics/5 Normal Distribution\|5 Normal Distribution]], [[Study/3rd Semester/Applied Business Statistics/6. Analysis of Variance BBA\|6. Analysis of Variance BBA]], [[Study/3rd Semester/Applied Business Statistics/7. Nonparametric Methods 06052021\|7. Nonparametric Methods 06052021]]

> [!summary] Summary
> A **hypothesis test** uses sample data to decide whether to reject a claim ($H_0$) about a population. You choose a test statistic ($t$, $z$, $F$ or $\chi^2$), compare the calculated value with the table value at a chosen significance level $\alpha$ (usually 5% or 1%), and **reject $H_0$ if calculated > table**. The slides cover: one-sample $t$, two-sample $t$, paired $t$, $t$ for correlation, $F$ for two variances, and $\chi^2$ for independence, goodness of fit and $2\times2$ tables (with Yates' correction).

## Key terms

| Term | Meaning |
|---|---|
| Statistical hypothesis | A statement about a population (or its distribution) to be verified from sample data |
| Null hypothesis $H_0$ | The hypothesis tested for possible rejection, assumed true, e.g. $\mu=\mu_0$ |
| Alternative $H_1$ (or $H_A$) | Any other possibility, e.g. $\mu<\mu_0$, $\mu>\mu_0$ or $\mu\ne\mu_0$ |
| Simple hypothesis | Specifies the population completely (both $\mu$ and $\sigma^2$ given) |
| Composite hypothesis | Does not specify the population completely |
| Type I error | Rejecting $H_0$ when it is true |
| Type II error | Accepting $H_0$ when it is false |
| Level of significance $\alpha$ | $P(\text{Type I error})=P(\text{reject }H_0\mid H_0\text{ true})$. Usually 5% or 1% |
| $\beta$ | $P(\text{Type II error})=P(\text{accept }H_0\mid H_0\text{ false})$ |
| Power of test | $1-\beta$ = probability of rejecting $H_0$ when it is false |
| Parameter | Unknown population characteristic ($\mu$, $\sigma^2$) |
| Statistic | Value computed from the sample ($\bar x$, $s^2$) |
| Degrees of freedom (d.f.) | Number of independent observations |
| Standard error (SE) | Standard deviation of a statistic's sampling distribution, e.g. $SE(\bar x)=\sigma/\sqrt n$ |
| Critical (rejection) region | Values of the test statistic that lead to rejecting $H_0$; separated from the acceptance region by the critical value |
| One-tailed test | $H_1$ points one way ($\theta>\theta_0$ or $\theta<\theta_0$) |
| Two-tailed test | $H_1$: $\theta\ne\theta_0$ |

## Steps to test a hypothesis
1. Know the population distribution and the parameter you are testing.
2. Set up $H_0$ and $H_1$ in terms of the parameter.
3. Choose a suitable test statistic.
4. Split the possible values of the statistic into a rejection region and an acceptance region. Reject $H_0$ if the statistic falls in the rejection region.

> [!tip] Added: test picker
> | Question | Test |
> |---|---|
> | One mean vs a given value, $\sigma$ unknown, small sample | One-sample $t$ |
> | Two independent means, equal unknown variances | Two-sample (pooled) $t$ |
> | Same subjects before and after | Paired $t$ |
> | Is a correlation real? | $t=r\sqrt{n-2}/\sqrt{1-r^2}$ |
> | Two variances equal? | $F$ |
> | Two categorical attributes related? | $\chi^2$ independence |
> | Does data follow a given distribution? | $\chi^2$ goodness of fit |

> [!tip] Added: decision rule in one line
> **Calculated value > table value, reject $H_0$ (significant). Calculated < table value, do not reject.** For a two-tailed $t$ test at 5%, use the $\alpha/2=0.025$ column.

## The $t$ tests

Uses of $t$: tests on means, correlation coefficients and regression coefficients. The slides list five kinds: single mean (Student's $t$), difference of two means (equal variances, unequal variances, paired), correlation coefficient, regression coefficient, rank correlation.

### 1. One-sample $t$ (small sample, $\sigma$ unknown)
$H_0:\mu=\mu_0$, $H_1:\mu\ne\mu_0$.
$$t=\frac{\bar x-\mu_0}{s/\sqrt n},\quad (n-1)\text{ d.f.},\qquad s=\sqrt{\tfrac{1}{n-1}\left\{\sum x_i^2-\tfrac{(\sum x_i)^2}{n}\right\}}$$

### 2. Two-sample $t$ (independent samples, equal unknown variances)
$H_0:\mu_1=\mu_2$.
$$t=\frac{\bar x_1-\bar x_2}{s\sqrt{\tfrac1{n_1}+\tfrac1{n_2}}},\quad (n_1+n_2-2)\text{ d.f.},\qquad s=\sqrt{\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}}$$

### 3. Paired $t$ (same units measured twice)
Let $d_i=x_i-y_i$. $H_0:\mu_d=0$.
$$t=\frac{\bar d}{s_d/\sqrt n},\quad (n-1)\text{ d.f.}$$

> [!warning] Slide error
> The slide prints $s_d=\sqrt{\sum d_i^2-(\sum d_i)^2/n}$ without dividing by $(n-1)$. The correct sample SD is $s_d=\sqrt{\dfrac{\sum d_i^2-(\sum d_i)^2/n}{n-1}}$. The worked problems below do use $n-1$.

### 4. $t$ for a correlation coefficient
$H_0:\rho=0$.
$$t=\frac{r\sqrt{n-2}}{\sqrt{1-r^2}},\quad (n-2)\text{ d.f.}$$

> [!note] Slide naming
> The slides call the pooled two-sample test "Fisher's $t$". Many textbooks call it the pooled (Student's) two-sample $t$ test.

## $F$ test for two variances
$H_0:\sigma_1^2=\sigma_2^2$. Put the **larger** sample variance on top:
$$F=\frac{s_1^2}{s_2^2}\ (s_1^2>s_2^2),\qquad (n_1-1,\ n_2-1)\text{ d.f.}$$

## $\chi^2$ tests
Formula: $\chi^2=\sum\dfrac{(O-E)^2}{E}$. A value of 0 means observed = expected. The bigger it is, the bigger the gap between theory and data. It makes no assumption about the population distribution.

**Conditions:** observations independent; random sample; data in original counts (not percentages or ratios); no cell with fewer than 5 observations.

### Test of independence (contingency table)
$H_0$: no association between the attributes. $H_1$: there is association.
- Expected count: $E_{ij}=\dfrac{R_i\times C_j}{N}$.
- d.f. $=(r-1)(c-1)$.

### Goodness of fit
$H_0$: the sample comes from the stated theoretical distribution (binomial, Poisson, normal, ...). $H_1$: it does not.

### Shortcut for a $2\times2$ table
| | A1 | A2 | Total |
|---|---|---|---|
| B1 | $a$ | $b$ | $a+b$ |
| B2 | $c$ | $d$ | $c+d$ |
| Total | $a+c$ | $b+d$ | $N$ |

$$\chi^2=\frac{N(ad-bc)^2}{(a+b)(a+c)(b+d)(c+d)},\quad 1\text{ d.f.}$$

The slides derive this by writing each $\frac{(O-E)^2}{E}$ term with $E(a)=\frac{(a+b)(a+c)}{N}$ etc.; every term has the numerator $\frac{(ad-bc)^2}{N^2}$ times a reciprocal, and adding them gives the shortcut.

### Yates' correction (small cell, below 5)
If $ad>bc$: subtract $\tfrac12$ from $a$ and $d$, add $\tfrac12$ to $b$ and $c$ (reverse if $ad<bc$). The statistic becomes
$$\chi^2=\frac{N\left(\lvert ad-bc\rvert-\tfrac N2\right)^2}{(a+b)(a+c)(b+d)(c+d)}$$

## Worked problems

### $t$ tests

| # | Problem | Calculation | Table value (two-tailed 5%) | Decision |
|---|---|---|---|---|
| 1 | 10 biscuit boxes, mean 490 g, SD 9 g; is $\mu=500$? | $t=\dfrac{490-500}{9/\sqrt{10}}=-3.51$ (3.51 in size), 9 d.f. | 2.26 | Reject $H_0$: the sample does not come from a mean-500 population |
| 2 | $n=20$, mean 42, SD 5; is $\mu=45$? | $t=\dfrac{-3}{5/\sqrt{20}}=-2.68$, 19 d.f. | 2.09 | Reject $H_0$ |
| 3 | 10 share prices; is mean price 65? | $\bar x=67.5$, $s=2.80$, $t=2.82$, 9 d.f. | 2.262 | Reject $H_0$ |
| 4 | Samples of 10 and 12: means 22 and 25, variances 9 and 4; equal means? | $s=2.5$, $t=\dfrac{3}{2.5\sqrt{1/10+1/12}}=2.80$, 20 d.f. | 2.086 | **Reject $H_0$** (see warning) |
| 5 | Drug A (5 patients) vs B (7 patients), weight gain | $\bar x_A=9$, $\bar x_B=10$, $s^2=11.6$, $s=3.41$, $t=0.50$, 10 d.f. | 2.228 | Do not reject: no significant difference |
| 6 | 8 students, score change after coaching: 4, −2, 6, −8, 12, 5, −7, 2 | $\bar d=1.5$, $s_d=6.8$, $t=0.62$, 7 d.f. | 2.365 | Do not reject: no evidence of a gain |
| 7 | 10 clerks, marks before vs after training | $\bar d=1.0$, $s_d=4.27$, $t=0.74$, 9 d.f. | 2.262 | Do not reject: no evidence of benefit |
| 8 | $n=10$, $r=0.93$; linearly related? | $t=\dfrac{0.93\sqrt8}{\sqrt{1-0.93^2}}=7.16$, 8 d.f. | 2.306 | Reject $H_0$: linearly related |

> [!warning] Slide errors in the $t$ problems
> - **Problem 3:** the table shows $\sum x_i^2=40622$, but the squares add to **45633** (so $\sum x^2-(\sum x)^2/n=70.5$, $s=2.80$). The slide also compares with 1.833, which is the **one-tailed** 5% value for 9 d.f. The test is two-tailed, so use 2.262. The decision (reject) is the same.
> - **Problem 4:** the slide uses 2.806 as "$t_{0.05}$ for 20 d.f." and accepts $H_0$. The two-tailed 5% value for 20 d.f. is **2.086** (2.845 is the 1% value). The exact $t$ is $2.80$ (the slide gets 2.79 by rounding $\sqrt{1/10+1/12}$ to 0.43). Since $2.80>2.086$ the conclusion at 5% is to **reject $H_0$**, the opposite of the slide. At the 1% level (2.845) you would not reject. Check with your teacher which level and table value they want.
> - **Problem 5:** the slide says "10 d.f." in one place and "18 d.f." in another. It is $5+7-2=10$ d.f., and 1.812 is a one-tailed value. Two-tailed 5% is 2.228. Same decision.
> - **Problem 6:** $t=1.5\sqrt8/6.8=0.62$ (slide rounds to 0.63).
> - **Problem 7:** the slide says "5 d.f." The correct d.f. is $n-1=9$ and the table value 2.262 it quotes is for 9 d.f.

### $F$ test (variances of two samples)
Sample I (n=10): 20, 16, 26, 27, 23, 22, 18, 24, 25, 19. Sample II (n=12): 27, 33, 42, 35, 32, 34, 38, 28, 41, 43, 30, 37.
- $s_1^2=\tfrac19\left\{4960-\tfrac{220^2}{10}\right\}=13.33$
- $s_2^2=\tfrac1{11}\left\{15014-\tfrac{420^2}{12}\right\}=28.55$
- $F=\dfrac{28.55}{13.33}=2.14$ with $(11,9)$ d.f. Table value $3.11$ (exact 3.10).
- $2.14<3.11$, so do not reject $H_0$: the variances are not significantly different.

> [!warning] Slide error
> In the working table the ninth value of Sample II is printed as 45, but the problem statement and the totals ($\sum x=420$, $\sum x^2=15014$) use **41**.

### $\chi^2$ problems

**Problem 9: 3×3 independence** (PSTU graduates: organisation type vs use of education).

| Organisation | Fully | Partly | Very little/not at all | Total |
|---|---|---|---|---|
| Education & research | 112 (90) | 19 (34) | 6 (13) | 137 |
| Banking | 88 (76) | 27 (29) | 1 (11) | 116 |
| Others | 27 (61) | 40 (23) | 26 (9) | 93 |
| Total | 227 | 86 | 33 | 346 |

Expected counts in brackets, $E_{ij}=R_iC_j/N$. Slide: $\chi^2=90.52$ with $(3-1)(3-1)=4$ d.f. Table value 9.49. Reject $H_0$: use of education depends on organisation type.

> [!note] Rounding
> With unrounded expected counts the statistic is **91.43**. The slide rounds the expected counts to whole numbers and gets 90.52. The decision is identical.

**Problem 10: 2×2 vaccine.** Diseased: 12 vaccinated, 16 not. Healthy: 26 vaccinated, 6 not. $N=60$.
$\chi^2=\dfrac{60(12\cdot6-16\cdot26)^2}{28\cdot38\cdot22\cdot32}=\dfrac{7100160}{749056}=9.48$, 1 d.f. Table value 3.84. Reject $H_0$: the vaccine and disease status are related.

**Problem 11: 2×2 with Yates' correction.** Died: 3 (preventive), 35 (none). Alive: 47, 15. $N=100$. One cell is below 5, so correct.
$ad=45$, $bc=1645$, $\lvert ad-bc\rvert=1600$.
$\chi^2=\dfrac{100(1600-50)^2}{50\cdot50\cdot38\cdot62}=\dfrac{240250000}{5890000}=40.79$, 1 d.f. Table value (1%) 6.635. Reject $H_0$ strongly.

> [!warning] Slide notation
> Problem 11 labels the 6.635 as "$t_{0.01}$". It is the $\chi^2$ table value at 1% with 1 d.f.

> [!tip] Added: memory aids
> - **Type I = "false alarm"** (reject a true $H_0$, probability $\alpha$). **Type II = "missed detection"** (keep a false $H_0$, probability $\beta$).
> - Degrees of freedom: one-sample $t$: $n-1$. Two-sample $t$: $n_1+n_2-2$. Paired: $n-1$. Correlation: $n-2$. $\chi^2$ table: $(r-1)(c-1)$.
> - Small $p$ (calculated beyond the table value) means **reject**.

> [!question]- Self-test 1: What is a Type I error and how is its probability written?
> Rejecting $H_0$ when it is true. Its probability is the level of significance $\alpha$.

> [!question]- Self-test 2: How many d.f. for a $\chi^2$ test on a 3×4 table?
> $(3-1)(4-1)=6$.

> [!question]- Self-test 3: When do you apply Yates' correction?
> For a $2\times2$ table when a cell frequency is small (below 5). Move each cell $\tfrac12$ toward the expected counts, which gives $N(\lvert ad-bc\rvert-N/2)^2/\dots$.

> [!question]- Self-test 4: In the $F$ test, which variance goes on top?
> The larger one, so $F\ge1$.

> [!question]- Self-test 5: A paired design has 12 pairs. How many d.f.?
> $12-1=11$.
