---
{"dg-publish":true,"permalink":"/study/3rd-semester/applied-business-statistics/index-number/","title":"Index Numbers","tags":["study","applied-business-statistics","index-number","laspeyres","paasche","fisher"],"dg-note-properties":{"title":"Index Numbers","course":"Applied Business Statistics","semester":3,"source":"[[Index Number.pdf]]","tags":["study","applied-business-statistics","index-number","laspeyres","paasche","fisher"]}}
---


> [!info] How to read this note
> Plain text is from the slides, reworded for studying. Callouts titled **Added** are not on the slides. Callouts titled **Slide error** mark mistakes I found in the slides.
> Related: [[Study/3rd Semester/Applied Business Statistics/Quality Control\|Quality Control]]

> [!summary] Summary
> An **index number** is a specialised average that measures the change in a variable (prices, quantities, values) over time or place. The base period is set to 100. Index numbers are **unweighted** (simple aggregate, simple average of price relatives) or **weighted** (Laspeyres, Paasche, Dorbish-Bowley, Fisher, Marshall-Edgeworth, Kelly, weighted price relatives). **Fisher's** formula is called "ideal" because it passes both the time reversal and factor reversal tests. The **cost of living index** (consumer price index) uses Laspeyres-type weights.

Example from the slides: a wholesale price index of 125 in June 2021 against June 2020 means wholesale prices rose by 25%.

## Classification
- **By what is measured:** price index, quantity index, value index.
- **By method:** unweighted (simple aggregate; simple average of price relatives) and weighted (weighted aggregate; weighted average of price relatives).

## Notation
$p_0,p_1$ = base-year and current-year prices. $q_0,q_1$ = base-year and current-year quantities. $P_{01}$ = price index for current year on the base year.

## Formulas

### Unweighted
| Method | Formula |
|---|---|
| Simple aggregate | $P_{01}=\dfrac{\sum p_1}{\sum p_0}\times100$ |
| Average of price relatives (AM) | $P_{01}=\dfrac{\sum\left(\frac{p_1}{p_0}\times100\right)}{N}$ |
| Average of price relatives (GM) | $P_{01}=\text{Antilog}\dfrac{\sum\log P}{N}$, where $P=\frac{p_1}{p_0}\times100$ |

### Weighted aggregate
| Method | Weights | Formula |
|---|---|---|
| Laspeyres | base-year quantities | $\dfrac{\sum p_1q_0}{\sum p_0q_0}\times100$ |
| Paasche | current-year quantities | $\dfrac{\sum p_1q_1}{\sum p_0q_1}\times100$ |
| Dorbish-Bowley | mean of the two | $\dfrac12\left[\dfrac{\sum p_1q_0}{\sum p_0q_0}+\dfrac{\sum p_1q_1}{\sum p_0q_1}\right]\times100$ |
| Fisher (ideal) | geometric mean of the two | $\sqrt{\dfrac{\sum p_1q_0}{\sum p_0q_0}\times\dfrac{\sum p_1q_1}{\sum p_0q_1}}\times100$ |
| Marshall-Edgeworth | $q_0+q_1$ | $\dfrac{\sum p_1q_0+\sum p_1q_1}{\sum p_0q_0+\sum p_0q_1}\times100$ |
| Kelly | fixed weights $q$ of any chosen period | $\dfrac{\sum p_1q}{\sum p_0q}\times100$; if $q=\frac{q_0+q_1}2$ it uses the average of two years |

### Weighted average of price relatives
- Arithmetic mean: $P_{01}=\dfrac{\sum PV}{\sum V}$ with $P=\frac{p_1}{p_0}\times100$ and value weight $V=p_0q_0$.
- Geometric mean: $P_{01}=\text{Antilog}\dfrac{\sum V\log P}{\sum V}$.

### Quantity and value indices
Swap $p$ and $q$ in the price formulas (prices then act as weights):
- Laspeyres $Q_{01}=\dfrac{\sum q_1p_0}{\sum q_0p_0}\times100$
- Paasche $Q_{01}=\dfrac{\sum q_1p_1}{\sum q_0p_1}\times100$
- Fisher $Q_{01}=\sqrt{\dfrac{\sum q_1p_0}{\sum q_0p_0}\times\dfrac{\sum q_1p_1}{\sum q_0p_1}}\times100$
- Value index $V=\dfrac{\sum p_1q_1}{\sum p_0q_0}\times100$

## Tests of a good index formula

| Test | Requirement | Laspeyres | Paasche | Fisher |
|---|---|---|---|---|
| Time reversal | $P_{01}\times P_{10}=1$ | fails | fails (added) | **passes** |
| Factor reversal | $P_{01}\times Q_{01}=\dfrac{\sum p_1q_1}{\sum p_0q_0}=V$ | fails | fails (added) | **passes** |
| Circular test | listed on the slide, not developed | | | |

- Time reversal example from the slides: butter rises from Tk 360 to Tk 480 per kg. $480/360=133.33\%$ and $360/480=75\%$. Product $=1.3333\times0.75=1$.
- **Why Fisher is "ideal":** it uses the geometric mean; it uses both current and base-year prices and quantities; it satisfies both reversal tests; and it is free of bias because the opposite biases of Laspeyres and Paasche cancel when they are averaged geometrically.

> [!note] What the slides prove
> They show Laspeyres fails time reversal ($\frac{\sum p_1q_0}{\sum p_0q_0}\cdot\frac{\sum p_0q_1}{\sum p_1q_1}\ne1$) and factor reversal, and that Fisher passes both (the products reduce to 1 and $\frac{\sum p_1q_1}{\sum p_0q_0}$).

## Cost of living index (consumer price index)
Measures the relative change in expenditure needed to keep the same standard of living (food, clothing, fuel, housing...).
- **Aggregate expenditure method:** $\dfrac{\sum p_1q_0}{\sum p_0q_0}\times100$ (a Laspeyres formula; the usual CPI method).
- **Family budget method:** $\dfrac{\sum PV}{\sum V}$ with $P=\frac{p_1}{p_0}\times100$ and $V=p_0q_0$. It gives the same result as the aggregate method.

## Problems in constructing an index
1. **Purpose** of the index (decide this first).
2. **Selection of commodities** relevant to that purpose (e.g. no luxury goods in a low-income index).
3. **Data:** reliable sources, accurate, comparable, representative, adequate.
4. **Base period:** a normal period (no war, famine, strike, boom or slump) and not too far back. Its index is 100.
5. **Choice of average:** AM is used more often, but GM is recommended for accuracy.
6. **Weights:** items differ in importance, so weight them.
7. **Formula:** depends on purpose and available data.

## Uses
Measure changes in a variable; study industrialisation; show changes in prices of goods people consume (cost of living); help government price policy; measure the purchasing power of money; forecast business and economic activity and cycles.

## Worked problems

### 1. Simple price index, 2001 on base 2000
Prices (Tk, 2000 → 2001): butter 20→21, cheese 15→14, milk 3→3, bread 2.80→2.80, eggs 6→8, ghee 250→260.
- Simple aggregate: $\dfrac{308.80}{296.80}\times100=104.04$. Prices are up 4.04% on average.
- Average of price relatives (relatives: 105, 93.33, 100, 100, 133.33, 104; sum 635.66):
  - AM: $\dfrac{635.66}{6}=105.94$
  - GM: $\sum\log P=12.1331$, antilog$\left(\dfrac{12.1331}{6}\right)=$ antilog $2.0222=105.20$

### 2. Five weighted indices, 2005 base, 2006 current

| Commodity | $p_0$ | $q_0$ | $p_1$ | $q_1$ | $p_1q_0$ | $p_0q_0$ | $p_1q_1$ | $p_0q_1$ |
|---|---|---|---|---|---|---|---|---|
| A | 2 | 8 | 4 | 6 | 32 | 16 | 24 | 12 |
| B | 5 | 10 | 6 | 5 | 60 | 50 | 30 | 25 |
| C | 4 | 14 | 5 | 10 | 70 | 56 | 50 | 40 |
| D | 2 | 19 | 2 | 13 | 38 | 38 | 26 | 26 |
| **Total** | | | | | **200** | **160** | **130** | **103** |

| Method | Calculation | Index |
|---|---|---|
| Laspeyres | $200/160\times100$ | 125.00 |
| Paasche | $130/103\times100$ | 126.21 |
| Dorbish-Bowley | $\frac12(1.25+1.2621)\times100$ | 125.61 |
| Fisher | $\sqrt{1.25\times1.2621}\times100$ | 125.6 |
| Marshall-Edgeworth | $\dfrac{200+130}{160+103}\times100$ | 125.48 |

### 3. Weighted average of price relatives
Sugar (3.0 → 4.0, 20 kg), flour (1.5 → 1.6, 40 kg), milk (1.0 → 1.5, 10 l).

| Item | $V=p_0q_0$ | $P$ | $PV$ | $\log P$ | $V\log P$ |
|---|---|---|---|---|---|
| Sugar | 60 | 133.33 | 8000 | 2.1249 | 127.49 |
| Flour | 60 | 106.7 | 6400 | 2.0282 | 121.69 |
| Milk | 10 | 150.0 | 1500 | 2.1761 | 21.76 |
| **Total** | **130** | | **15900** | | **270.95** |

- AM: $\dfrac{15900}{130}=122.31$ (prices up 22.31%).
- GM: antilog$\left(\dfrac{270.95}{130}\right)=$ antilog $2.084=121.3$.

### 4. Quantity index from values (1995 → 1996)
Given price and value, quantity $=$ value $\div$ price: $q_0$ (A, B, C) $=10,9,16$ and $q_1=11,9,17$.
$\sum q_1p_0=450$, $\sum q_0p_0=426$, $\sum q_1p_1=558$, $\sum q_0p_1=528$.
Fisher: $Q_{01}=\sqrt{\dfrac{450}{426}\times\dfrac{558}{528}}\times100=\sqrt{1.1164}\times100=105.7$

> [!warning] Rounding
> The slide gives 105.6. The unrounded result is 105.66, which rounds to **105.7**.

### 5. Fisher passes the time and factor reversal tests
Commodities A to E give $\sum p_1q_0=1900$, $\sum p_0q_0=1360$, $\sum p_1q_1=1880$, $\sum p_0q_1=1344$.
- Time reversal: $P_{01}\times P_{10}=\sqrt{\frac{1900}{1360}\cdot\frac{1880}{1344}\cdot\frac{1344}{1880}\cdot\frac{1360}{1900}}=\sqrt1=1$.
- Factor reversal: $P_{01}\times Q_{01}=\frac{1880}{1360}=\dfrac{\sum p_1q_1}{\sum p_0q_0}$ (the slide shows the products collapsing to this).

### 6. Cost of living index, 1985 → 1986
Seven items (rice, wheat, pulse, oil, fuel, clothes, others). $\sum p_0q_0=10350$, $\sum p_1q_0=14890$.
- Aggregate expenditure: $\dfrac{14890}{10350}\times100=143.86$
- Family budget: $\dfrac{\sum PV}{\sum V}=\dfrac{1\,489\,000}{10350}=143.86$ (identical)

Living costs rose by about 43.9%.

> [!tip] Added: memory aids
> - **Laspeyres = base-year (Last) quantities. Paasche = present-year quantities.** Both have $p_1$ on top and differ only in the weights.
> - **Fisher = geometric mean of Laspeyres and Paasche** (cross-weight, "ideal"). In Problem 2 it lies between the two (125.0 and 126.21).
> - The index of the base year is always 100.
> - Aggregate expenditure method = family budget method (same answer, different route).

> [!tip] Added: tendencies (not on the slides)
> Laspeyres usually runs higher than Paasche when consumers shift away from items whose prices rise, and the Fisher index falls between them. This matches Problem 2.

> [!question]- Self-test 1: What is the index number of the base year?
> 100.

> [!question]- Self-test 2: Why does Laspeyres fail the time reversal test?
> Its reverse $\frac{\sum p_0q_1}{\sum p_1q_1}$ uses different weights, so $P_{01}\times P_{10}\ne1$.

> [!question]- Self-test 3: Which weights does Paasche use?
> Current-year quantities $q_1$.

> [!question]- Self-test 4: Prices of 3 items rise from Tk 10, 20, 30 to Tk 12, 20, 36. Simple aggregate index?
> $\dfrac{12+20+36}{10+20+30}\times100=\dfrac{68}{60}\times100=113.3$.

> [!question]- Self-test 5: State the factor reversal test.
> $P_{01}\times Q_{01}$ must equal $\dfrac{\sum p_1q_1}{\sum p_0q_0}$, the value index ratio.
