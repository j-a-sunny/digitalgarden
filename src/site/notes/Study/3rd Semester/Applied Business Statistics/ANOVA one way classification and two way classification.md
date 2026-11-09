---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/anova-one-way-classification-and-two-way-classification/","title":"ANOVA worked examples (one-way and two-way)","tags":["study","applied-business-statistics","anova","worked-examples"],"dg-note-properties":{"title":"ANOVA worked examples (one-way and two-way)","course":"Applied Business Statistics","semester":3,"source":"[[ANOVA one way classification and two way classification.pdf]]","tags":["study","applied-business-statistics","anova","worked-examples"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Theory and formulas: [[Study/3rd Semester/Applied Business Statistics/6. Analysis of Variance BBA\|6. Analysis of Variance BBA]]

> [!summary] Summary
> Three worked ANOVA problems: **(1)** bulb lifetimes, one-way, *do not reject* $H_0$; **(2)** flaws on four machines, one-way, *reject* $H_0$; **(3)** workers by machine type, two-way, *do not reject* either $H_0$. Every calculation below was re-checked. Problem 3 has inconsistent data on the slide (see warning).

## Recipe (one-way)
1. Total each group, then the grand total $y_{..}$ and the correction factor $y_{..}^2/N$.
2. $SS_T=\sum y^2-CF$.
3. $SS_B=\dfrac1r\sum(\text{group totals})^2-CF$.
4. $SS_W=SS_T-SS_B$.
5. Build the ANOVA table, compute $F$, compare with $F_{table}$.

## Example 1: four brands of bulbs (lifetime in hundreds of hours)

| | A | B | C | D |
|---|---|---|---|---|
| | 20 | 25 | 24 | 23 |
| | 19 | 23 | 20 | 20 |
| | 21 | 21 | 22 | 20 |
| **Total** | 60 | 69 | 66 | 63 |
| **Mean** | 20 | 23 | 22 | 21 |

Grand total $=258$, $N=12$, $k=4$, $r=3$. $CF=258^2/12=5547$.
$H_0:\mu_1=\mu_2=\mu_3=\mu_4$.

- $SS_T=20^2+25^2+\dots+20^2-CF=39$
- $SS_B=\tfrac13(60^2+69^2+66^2+63^2)-CF=15$
- $SS_W=39-15=24$

| Source | SS | d.f. | MS | $F$ |
|---|---|---|---|---|
| Between brands | 15 | 3 | 5 | $5/3=1.67$ |
| Error | 24 | 8 | 3 | |
| Total | 39 | 11 | | |

Table $F_{0.05}(3,8)=4.07$. Since $1.67<4.07$, **do not reject $H_0$**.

> [!note] Wording of the conclusion
> The slide says "we can infer the mean lifetimes are equal". Strictly, failing to reject means there is **no significant evidence of a difference** between the brands. It does not prove they are equal.

## Example 2: flaws per 100 m² from four machines

| | A | B | C | D |
|---|---|---|---|---|
| | 8 | 6 | 14 | 20 |
| | 9 | 8 | 12 | 22 |
| | 11 | 10 | 18 | 25 |
| | 12 | 4 | 9 | 23 |
| **Total** | 40 | 28 | 53 | 90 |
| **Mean** | 10 | 7 | 13.25 | 22.5 |

Grand total $=211$, $N=16$, $r=4$. $CF=211^2/16=2782.56$.

- $SS_T=(8^2+6^2+\dots+23^2)-CF=3409-2782.56=626.44$ (15 d.f.)
- $SS_B=\tfrac14(40^2+28^2+53^2+90^2)-CF=3323.25-2782.56=540.69$ (3 d.f.)
- $SS_W=626.44-540.69=85.75$ (12 d.f.)

| Source | d.f. | SS | MS | $F$ |
|---|---|---|---|---|
| Between machines | 3 | 540.69 | 180.23 | $180.23/7.15=25.21$ |
| Within machines | 12 | 85.75 | 7.15 | |
| Total | 15 | 626.44 | | |

Table $F_{0.01}(3,12)=5.95$. Since $25.21>5.95$, **reject $H_0$**: the machines differ significantly in performance.

> [!tip] Added: next step after rejecting
> Machine D has by far the highest mean (22.5 flaws) and B the lowest (7). To say which pairs differ use the LSD method from [[Study/3rd Semester/Applied Business Statistics/6. Analysis of Variance BBA\|6. Analysis of Variance BBA]]: $LSD=t_{0.025,12}\sqrt{2(7.15)/4}$.

## Example 3: two-way (4 workers × 3 machine types)

Problem as printed: units produced by 4 workers on machines A, B, C. Test (a) whether workers differ in mean productivity, (b) whether machine types differ.

$H_0$: (a) workers do not differ, (b) machines do not differ.

Table used in the solution:

| Worker | A | B | C | Total |
|---|---|---|---|---|
| 1 | 20 | 28 | 26 | 74 |
| 2 | 22 | 30 | 32 | 84 |
| 3 | 26 | 32 | 18 | 76 |
| 4 | 32 | 20 | 24 | 76 |
| **Total** | 100 | 110 | 100 | **310** |

$N=12$. $CF=310^2/12=8008.33$.

- $SS_{machines}=\dfrac{100^2+110^2+100^2}{4}-CF=16.67$
- $SS_{workers}=\dfrac{74^2+84^2+76^2+76^2}{3}-CF=19.67$
- $SS_T=283.67$
- $SS_E=283.67-16.67-19.67=247.33$

| Source | SS | d.f. | MS | $F$ |
|---|---|---|---|---|
| Between machines (columns) | 16.67 | 2 | 8.34 | $8.34/41.22=0.202$ |
| Between workers (rows) | 19.67 | 3 | 6.56 | $6.56/41.22=0.159$ |
| Error | 247.33 | 6 | 41.22 | |
| Total | 283.67 | 11 | | |

- Machines: $F_{0.05}(2,6)=5.14$. $0.202<5.14$, **no significant difference** between machine types.
- Workers: $F_{0.05}(3,6)=4.76$. $0.159<4.76$, **no significant difference** in mean productivity of workers.

> [!warning] Slide error: the data do not match
> The problem statement has worker 3 on machine C = **10** and worker 4 on machine B = **24**. The solution table uses **18** and **20**. Only the solution table matches the row/column totals (74, 84, 76, 76 and 100, 110, 100) and the printed sums of squares, so the numbers above use it. With the statement's values the totals change to 74, 84, 68, 80 and the results are $SS_T=441$, $F_{workers}=0.30$, $F_{machines}=0.56$ (still not significant). Ask which version is intended.
>
> Also: the slide quotes the workers' table value as 4.74. The correct 5% value for $(3,6)$ d.f. is 4.76. Same decision.

> [!tip] Added: memory aids
> - Check your table before using it: row totals and column totals must both add to the grand total.
> - "Fail to reject" is not "accept as equal". Say "no significant difference".
> - Compare the **larger** $F$ with the table. If $F<1$ it can never be significant.

> [!question]- Self-test 1: In Example 1, why is the error d.f. 8?
> $N-k=12-4=8$.

> [!question]- Self-test 2: In Example 2, state $H_0$ and your decision at 1%.
> $H_0:\mu_A=\mu_B=\mu_C=\mu_D$. $F=25.21>5.95$, so reject $H_0$.

> [!question]- Self-test 3: In Example 3, what are the numerator d.f. for the workers' $F$ ratio?
> Workers are the 4 rows, so numerator d.f. $a-1=3$ and error d.f. $(a-1)(b-1)=6$.

> [!question]- Self-test 4: A one-way ANOVA has $SS_B=30$, $SS_W=60$, $k=3$, $N=15$. Find $F$.
> $MS_B=30/2=15$, $MSE=60/12=5$, $F=3$ with $(2,12)$ d.f. Table 5% value is 3.89, so do not reject.
