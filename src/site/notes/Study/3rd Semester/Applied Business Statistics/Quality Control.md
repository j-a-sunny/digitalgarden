---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/quality-control/","title":"Statistical Quality Control","tags":["study","applied-business-statistics","quality-control","control-charts","acceptance-sampling"],"dg-note-properties":{"title":"Statistical Quality Control","course":"Applied Business Statistics","semester":3,"source":"[[Quality Control.pdf]]","tags":["study","applied-business-statistics","quality-control","control-charts","acceptance-sampling"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Related: [[Study/3rd Semester/Applied Business Statistics/3 Binomial Distribution\|3 Binomial Distribution]] (p chart), [[Study/3rd Semester/Applied Business Statistics/4 Poisson Distribution\|4 Poisson Distribution]] (c chart), [[Study/3rd Semester/Applied Business Statistics/Index Number\|Index Number]]

> [!summary] Summary
> **Statistical quality control (SQC)** uses statistics to keep products fit for use. It separates **chance causes** (natural, unavoidable variation) from **assignable causes** (preventable variation). **Process control** uses **control charts** (centre line plus upper and lower control limits) to see whether a process is "in control". **Product control** uses **acceptance sampling** to accept or reject a lot from a sample.

## Key terms

| Term | Meaning |
|---|---|
| Quality | Fitness for use; depends on the four M's: materials, manpower, machines, management |
| Chance cause | Inherent, inevitable variation; beyond human control; natural to the process |
| Assignable cause | Preventable variation (the product departs from the standard); usually found before the product turns defective |
| Process control | Using statistical tools (control charts) to keep product quality in control; also called the control chart technique |
| Control chart | Graph of a sample statistic (mean, range, SD, proportion, count) over time with control limits |
| Product control | Acceptance sampling |

## Types of control charts

| Type | Data | Chart | Based on |
|---|---|---|---|
| Variables (measurable) | length, weight, ... | $\bar X$ (mean), $R$ (range), $\sigma$ (SD) | normal ideas |
| Attributes (good/defective) | counts | $p$ (fraction defective), $np$ (number defective) | binomial |
| Defects per unit | counts of defects | $c$ chart | Poisson |

### Formulas

| Chart | Centre line | Control limits |
|---|---|---|
| $\bar X$ using $\bar R$ | $\bar{\bar X}$ | $\bar{\bar X}\pm A_2\bar R$ |
| $\bar X$ using $\bar S$ ($\bar\sigma$) | $\bar{\bar X}$ | $\bar{\bar X}\pm A_1\bar S$ |
| $R$ chart | $\bar R$ | UCL $=D_4\bar R$, LCL $=D_3\bar R$ (if negative, take 0) |
| $\sigma$ (S) chart | $\bar S$ | UCL $=B_4\bar S$, LCL $=B_3\bar S$ (if negative, take 0) |
| $p$ chart | $\bar p$ | $\bar p\pm3\sqrt{\dfrac{\bar p(1-\bar p)}{n}}$ |
| $np$ chart | $n\bar p$ | $n\bar p\pm3\sqrt{n\bar p(1-\bar p)}$ |
| $c$ chart | $\bar c$ | $\bar c\pm3\sqrt{\bar c}$ (LCL below 0 becomes 0) |

Here $\bar{\bar X}$ is the mean of the sample means, $\bar R$ the mean of the sample ranges, $\bar S$ the mean of the sample standard deviations. $A_1,A_2,B_3,B_4,D_3,D_4$ come from tables.

Notes from the slides:
- The $R$ chart shows variability and is normally drawn alongside the $\bar X$ chart; both are needed for a proper analysis.
- $\sigma$ charts are rarely used because computing the SD for every sample is laborious.
- The $c$ chart suits situations with many chances for a defect but few actual defects (air bubbles in glass, flaws in cloth, blemishes on paper). Use 25 or more units.
- The $np$ chart is the $p$ chart multiplied by $n$ (plots counts instead of fractions).

## Acceptance sampling
Decides whether to **accept or reject a lot** from a random sample. Mostly used for attributes (percent defective).

| Concept | Meaning |
|---|---|
| Producer's risk | Chance of **rejecting a good lot**. Measured against the **AQL** (acceptance quality level), the fraction defective below which a lot is good |
| Consumer's risk | Chance of **accepting a bad lot**. Measured against the **LTPD** or RQL (lot tolerance percent defective / rejectable quality level), the fraction defective above which a lot is bad |

**Single sampling plan** (defined by $N$ lot size, $n$ sample size, $a$ acceptance number): draw $n$ items at random, inspect. If defectives $\le a$, accept the lot (defectives replaced by good items). If $>a$, reject.

**Double sampling plan** (7 numbers: $N$, $n_1$, $a_1$, $r_1$, $n_2$, $a_2$, $n_1+n_2$): inspect first sample $n_1$.
- Accept if defectives $\le a_1$.
- Reject if defectives exceed the rejection number $r_1$.
- If in between, take a second sample $n_2$; accept if the **combined** defectives are $\le a_2$, otherwise reject.

> [!note] Wording on the slide
> The slide's list for double sampling says "accept the lot if the first sample contains $a_1$ defectives" and "reject if more than $a_1$", but then draws a second sample when the first has "more than $a_1$ but not more than $a_2$". The version above (with $r_1$ as the rejection number) is the consistent reading.

## Advantages of SQC
- Shows whether quality is satisfactory and keeps it **uniform**, so goods meet the specified standard.
- Cuts waste of time and material by finding faults early and removing their causes.
- Human inspection is not 100% reliable; SQC is more efficient and economical.
- Important in Bangladesh because of large variation in raw materials and machines, and the need to earn foreign exchange with quality goods.

> [!warning] Possible slide typo
> The slide says SQC is more economical "because 100% inspection is involved". SQC works by **sampling**, which is why it avoids 100% inspection. Read it as "because 100% inspection is *not* needed".

## Worked problems

### Problem 1: $\bar X$ and $R$ charts (10 samples of 5, $A_2=0.577$, $D_4=2.115$, $D_3=0$)

| Sample | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean $\bar x$ | 52 | 50 | 50 | 51 | 47 | 52 | 49 | 54 | 51 | 56 |
| Range $R$ | 6 | 7 | 6 | 5 | 6 | 9 | 8 | 7 | 7 | 4 |

$\sum\bar x=512$, so $\bar{\bar X}=51.2$. $\sum R=65$, so $\bar R=6.5$.

- **$\bar X$ chart:** UCL $=51.2+0.577(6.5)=54.95$, LCL $=51.2-0.577(6.5)=47.45$.
- **$R$ chart:** UCL $=2.115(6.5)=13.75$, LCL $=0$. All ranges are inside, so variability is **under control**.

> [!warning] Slide error
> The slide says only **one** point falls outside the $\bar X$ limits. Two do: sample 5 (mean 47, below 47.45) and sample 10 (mean 56, above 54.95). The conclusion that the process mean is **out of control** is unchanged.

### Problem 2: $\bar X$ and $\sigma$ charts (18 samples of 10)
Given $\sum\bar x=595.8$, $\sum\sigma=8.28$, $A_1=1.03$, $B_3=0.28$, $B_4=1.72$.
$\bar{\bar X}=595.8/18=33.1$, $\bar\sigma=8.28/18=0.46$.
- $\bar X$ chart: UCL $=33.1+1.03(0.46)=33.57$, LCL $=33.1-1.03(0.46)=32.63$.
- $\sigma$ chart: centre line 0.46. UCL $=B_4\bar\sigma=1.72\times0.46=\mathbf{0.79}$, LCL $=B_3\bar\sigma=0.28\times0.46=\mathbf{0.13}$.

> [!warning] Slide error
> The slide swaps the two limits: it writes UCL $=B_3\bar\sigma=0.13$ and LCL $=B_4\bar\sigma=0.79$. The upper limit must be larger. UCL uses $B_4$, LCL uses $B_3$.

### Problem 3: $c$ chart (pinholes in 15 paper sheets)
Defects per sheet: 8, 9, 5, 8, 5, 6, 9, 11, 8, 7, 6, 4, 7, 6, 14.
- Total $=113$, $\bar c=113/15=7.53$.
- UCL $=7.53+3\sqrt{7.53}=15.77$. LCL $=7.53-8.23=-0.70$, so take **0**.
- All points are inside (the highest is 14). The process is **in control**.

> [!warning] Slide error
> The slide adds the defects to 116 (so $\bar c=7.73$, UCL $=16.07$). The correct total is **113**. The conclusion (in control) is the same.

### Problem 4: $p$ chart (20 samples of 100 TV tubes)
Defectives: 4, 6, 10, 8, 3, 2, 0, 1, 3, 5, 4, 5, 3, 0, 14, 5, 7, 13, 3, 4. Total $=100$, $\bar p=100/(20\times100)=0.05$.
- $3\sqrt{\dfrac{0.05\times0.95}{100}}=3(0.0218)=0.066$
- UCL $=0.05+0.066=0.116$, LCL $=0.05-0.066=-0.016\to0$.
- Sample 15 (0.14) and sample 18 (0.13) are above UCL. **Out of control**: look for assignable causes on those days.

> [!note] Slide typo
> The problem says "TV tubes... large output of pens". It is TV tubes throughout.

### Problem 5: $np$ chart (10 samples of 100)
Defectives: 4, 8, 11, 3, 11, 7, 7, 16, 12, 6. Total $=85$, $\bar p=0.085$, $n\bar p=8.5$.
- $3\sqrt{8.5(1-0.085)}=3(2.789)=8.37$
- UCL $=8.5+8.37=16.87$, LCL $=8.5-8.37=0.13$.
- The largest count is 16, inside the limits. **Process in control.**

> [!tip] Added: memory aids
> - **Rule for a chart:** pick the chart from the data type. Measurements: $\bar X$ and $R$. Good/bad counts out of $n$: $p$ or $np$. Defects per unit: $c$.
> - **Control limits are "centre ± 3 standard errors"** in every chart; the tables $A_2$, $D_4$... just save you computing the standard error.
> - **UCL > centre line > LCL.** If your upper and lower limits come out swapped (as in Problem 2) you have used the wrong table constants.
> - A point **outside the limits** (or LCL below 0 treated as 0) is the signal to look for an assignable cause.
> - Producer's risk = **reject a good** lot. Consumer's risk = **accept a bad** lot.

> [!question]- Self-test 1: What is the difference between chance and assignable causes?
> Chance causes are natural, unavoidable variation. Assignable causes are specific, preventable disturbances that can be found and removed.

> [!question]- Self-test 2: Which chart suits "number of flaws per roll of cloth"?
> The $c$ chart (Poisson).

> [!question]- Self-test 3: Defects in 25 units total 100. Find the $c$ chart limits.
> $\bar c=4$. UCL $=4+3\sqrt4=10$. LCL $=4-6=-2\to0$.

> [!question]- Self-test 4: Define producer's risk and consumer's risk.
> Producer's risk: rejecting a good lot (relates to AQL). Consumer's risk: accepting a bad lot (relates to LTPD/RQL).

> [!question]- Self-test 5: In a double sampling plan when is the second sample drawn?
> When the first sample has more defectives than the first acceptance number but not enough to reject outright.
