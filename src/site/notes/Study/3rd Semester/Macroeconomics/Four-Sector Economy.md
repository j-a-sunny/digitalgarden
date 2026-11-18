---
{"dg-publish":true,"permalink":"/study/3rd-semester/macroeconomics/four-sector-economy/","tags":["study","economics","macroeconomics","circular-flow","foreign-trade"],"created":"2026-11-18T21:37:15.661+06:00","updated":"2026-11-18T21:46:23.890+06:00","dg-note-properties":{"tags":["study","economics","macroeconomics","circular-flow","foreign-trade"],"semester":"3rd","source":"5.four-sector-economy-2.ppt"}}
---


# Four-Sector Economy

> [!info] About this note
> Rewritten from the 18-slide lecture deck `5.four-sector-economy-2.ppt` (23-24 session sheet). The deck is almost entirely numerical — it has no circular-flow diagram — so the figures below are typeset from the slide text and every calculation was re-checked; two slide errors are flagged in [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Things to check\|#Things to check]]. Callouts titled **Added**, **Memory aid**, **Check** and **Self-test questions** are mine; everything else follows the slides.
> Previous: [[Study/3rd Semester/Macroeconomics/Three-Sector Keynesian Model\|Three-Sector Keynesian Model]]

## Contents

1. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#The big picture (read this first)\|#The big picture (read this first)]]
2. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Why the foreign sector matters\|#Why the foreign sector matters]]
3. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#The four-sector equilibrium condition\|#The four-sector equilibrium condition]]
4. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Illustration 1: equilibrium income and net exports\|#Illustration 1: equilibrium income and net exports]]
5. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Illustration 2: fiscal change and an export boom\|#Illustration 2: fiscal change and an export boom]]
6. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Illustration 3: an export function instead of imports\|#Illustration 3: an export function instead of imports]]
7. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#The four multipliers compared\|#The four multipliers compared]]
8. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Key terms\|#Key terms]]
9. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Things to check\|#Things to check]]
10. [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Self-test questions\|#Self-test questions]]

## The big picture (read this first)

The four-sector model adds the **foreign sector** to the three-sector model. Exports are an **injection** into the flow (foreigners buy our output) and imports are a **leakage** (our spending goes abroad), so the equilibrium condition becomes

$$Y=C+I+G+(X-M)$$

where $X$ = exports and $M$ = imports. Because imports rise with income ($M=mY$), the **multiplier shrinks**: the denominator gains an extra term, $1-b+m$ instead of $1-b$.

> [!tip] Note in one sentence
> Exports add demand; imports leak demand out in proportion to income — so in an open economy every multiplier is smaller, and part of any spending increase leaks abroad.

## Why the foreign sector matters

"**The inclusion of the foreign sector influences the level of aggregate demand through the export and import of goods and services**; hence it is necessary to understand the factors that influence exports and imports" (slide 1).

**The volume of exports and imports depends on** (slide 2):

1. The **prices of exports** in the domestic economy **relative to prices in other countries**.
2. The **income level in the other economies**.
3. **Tastes, preferences, customs and traditions** in the other economies.
4. **Tariff and trade policies** between the domestic economy and other economies.
5. The **domestic economy's level of imports**.

> [!tip] Memory aid (mine)
> Three "competitiveness" factors — **price, income abroad, tastes** — plus **policy** (tariffs) and **our own import bill**. Prices and income abroad drive exports; tastes and tariffs shape both directions.

## The four-sector equilibrium condition

$$Y=C+I+G+X-M$$

with consumption written as a function of **disposable** income, $C=a+bY_d$ where $Y_d=Y-T$:

$$Y=a+b(Y-T)+I+G+X-mY$$

Collecting $Y$ on the left gives the general solution:

$$Y=\frac{a-bT+I+G+X}{1-b+m}$$

so the **open-economy multiplier** is $\dfrac{1}{1-b+m}$ — smaller than the closed-economy $\dfrac{1}{1-b}$ because every extra taka of income now also pulls in $m$ taka of imports.

> [!warning] Added: all leakages in one place
> | Leakage | Rate | Injection |
> |---|---|---|
> | Saving | $1-b$ of extra income | Investment $I$ |
> | Tax | $T$ (lump sum here) | Government spending $G$ |
> | Imports | $m$ of extra income | Exports $X$ |
>
> The multiplier is **one over the sum of all leakage rates**: $\dfrac{1}{(1-b)+m}$. In the decks so far:
> - two-sector: $\dfrac{1}{1-b}$
> - three-sector (with lump-sum tax): still $\dfrac{1}{1-b}$ for spending changes, tax multiplier $-\dfrac{b}{1-b}$
> - four-sector: $\dfrac{1}{1-b+m}$

## Illustration 1: equilibrium income and net exports

The fundamental equations (slide 3):

| Item | Value |
|---|---|
| Consumption | $C=200+0.8Y_d$ |
| Investment | $I=300$ |
| Tax | $T=120$ |
| Government expenditure | $G=200$ |
| Exports | $X=100$ |
| Imports | $M=0.05Y$ |

**Find (1) the equilibrium level of income and (2) net exports.**

**(1) Equilibrium income.** First put $C$ in terms of $Y$ (slides 4–5):

$$C=200+0.8(Y-T)=200+0.8(Y-120)$$

| Step | Working |
|---|---|
| Condition | $Y=C+I+G+X-M$ |
| Substitute | $Y=200+0.8(Y-120)+300+200+100-0.05Y$ |
| Expand | $Y=200+0.8Y-96+600-0.05Y$ |
| Collect constants | $Y=704+0.75Y$ |
| Move $Y$ | $Y-0.8Y+0.05Y=704$ |
| Simplify | $0.25Y=704$ |
| Result | $Y=704/0.25=\mathbf{2{,}816}$ |

**(2) Net exports** (slide 6):

$$M=0.05(2{,}816)=140.8$$
$$X-M=100-140.8=\mathbf{-40.8}$$

There is a **deficit** in the balance of trade.

> [!warning] Added: check with the multiplier
> Here $b=0.8$ and $m=0.05$, so the open-economy multiplier is $1/(0.2+0.05)=1/0.25=4$ (against 5 in the closed economy). Autonomous spending is $a-bT+I+G+X=200-96+300+200+100=704$, and $704\times4=2{,}816$ — the same answer.

## Illustration 2: fiscal change and an export boom

Using Illustration 1's equations, find **(1)** the increase in income if government expenditure **and** tax both rise by 20, and **(2)** net exports if exports rise by 60.

**(1) G = 220 and T = 140** (slides 7–8):

| Step | Working |
|---|---|
| Condition | $Y=200+0.8(Y-140)+300+220+100-0.05Y$ |
| Expand | $Y=200+0.8Y-112+620-0.05Y$ |
| Collect | $0.25Y=708$ |
| Result | $Y=\mathbf{2{,}832}$ |

Income rises from 2,816 to 2,832 — **an increase of 16**.

> [!warning] Added: why only 16, not zero
> With no foreign sector a balanced budget would leave income unchanged. Here:
> - $G$ rises 20, worth $20\times4=$ **+80** (multiplier 4, not 5, because of imports);
> - $T$ rises 20, worth $-20\times\dfrac{0.8}{0.25}=-20\times3.2=$ **−64**;
> - net **+16**, exactly as the slide finds. So the balanced-budget multiplier in this open economy is $1-\text{something}$: it is $\dfrac{1}{1-b+m}\left(1-b\right)=\dfrac{0.2}{0.25}=0.8$, i.e. $20\times0.8=16$.

**(2) X = 160** (slides 9–10):

| Step | Working |
|---|---|
| Condition | $Y=200+0.8(Y-120)+300+200+160-0.05Y$ |
| Constants | $200-96+300+200+160=764$ |
| Collect | $Y=764+0.75Y$ |
| Solve | $0.25Y=764\Rightarrow Y=\mathbf{3{,}056}$ |

$$M=0.05(3{,}056)=152.8,\qquad X-M=160-152.8=\mathbf{7.2}$$

There is a **surplus** in the balance of trade. (Check: $\Delta X=60$, multiplier 4, so $\Delta Y=240$ and $2{,}816+240=3{,}056$.) ✔

## Illustration 3: an export function instead of imports

The equations (slide 11): $C=260+0.8Y_d$, $I=320$, $T=300$, $G=300$, and **exports given as $X=300-0.05Y$** (the deck then treats imports as zero). Find **(1)** equilibrium income, **(2)** net exports at that income, **(3)** both after investment rises from 320 to 340, and **(4)** both when the export function becomes $280-0.05Y$.

**(1) Equilibrium income** (slides 13–14):

| Step | Working |
|---|---|
| Consumption | $C=260+0.8(Y-300)$ |
| Condition | $Y=C+I+G+X$ (imports zero) |
| Substitute | $Y=260+0.8(Y-300)+320+300+300-0.05Y$ |
| Expand | $Y=260+0.8Y-240+920-0.05Y$ |
| Collect | $Y-0.8Y+0.05Y=940$ |
| Solve | $0.25Y=940\Rightarrow Y=\mathbf{3{,}760}$ |

**(2) Net exports** (slide 15): $M=0$, so

$$X-M=300-0.05(3{,}760)-0=300-188=\mathbf{112}$$

— a **surplus**.

**(3) Investment rises to 340** (slides 15–16):

| Step | Working |
|---|---|
| Constants | $260-240+340+300+300=960$ |
| Solve | $0.25Y=960\Rightarrow Y=\mathbf{3{,}840}$ |
| Net exports | $300-0.05(3{,}840)=300-192=\mathbf{108}$ |

Income rises by **80** (which is $\Delta I=20$ times the multiplier 4) and the surplus **falls to 108**: higher income pulls in more imports even though imports are "zero" in the equation, because the export function itself falls with $Y$.

**(4) Export function becomes $280-0.05Y$** (slides 17–18):

| Step | Working |
|---|---|
| Constants | $260-240+320+300+280=920$ |
| Solve | $0.25Y=920\Rightarrow Y=\mathbf{3{,}680}$ |
| Net exports | $280-0.05(3{,}680)=280-184=\mathbf{96}$ |

Income **falls by 80** and net exports **fall by 12** (112 → 96).

> [!warning] Added: reading the "export function"
> Writing exports as $X=300-0.05Y$ is unusual — exports normally depend on *foreign* income, not our own. In these slides it works as a stand-in for **net exports** (exports minus an import content of 0.05 per taka of income), which is why the multiplier is still $1/0.25$ and why the surplus shrinks as income grows. Treat the symbol as "net exports", not as gross exports, when revising.

## The four multipliers compared

| Change | Multiplier | With $b=0.8$, $m=0.05$ |
|---|---|---|
| Investment $\Delta I$ | $\dfrac{1}{1-b+m}$ | 4 |
| Government spending $\Delta G$ | $\dfrac{1}{1-b+m}$ | 4 |
| Exports $\Delta X$ | $\dfrac{1}{1-b+m}$ | 4 |
| Lump-sum tax $\Delta T$ | $-\dfrac{b}{1-b+m}$ | −3.2 |
| Balanced budget ($\Delta G=\Delta T$) | $\dfrac{1-b}{1-b+m}$ | 0.8 |
| Closed economy, for comparison | $\dfrac{1}{1-b}$ | 5 |

> [!tip] Memory aid (mine)
> **One denominator: leakage.** Closed economy leaks 0.2 per taka; open economy leaks 0.25. Multiplier $=1/\text{leakage rate}$, so 5 becomes 4. A tax change is worth only $b$ times a spending change, and a balanced budget is worth $1-b$ times.

## Key terms

| Term | Meaning |
|---|---|
| Four-sector model | Households + businesses + government + foreign sector |
| Foreign sector | Rest of the world, linked through exports and imports |
| Exports ($X$) | Domestic output bought by foreigners — an injection |
| Imports ($M$) | Spending on foreign output — a leakage, usually written $mY$ |
| Marginal propensity to import ($m$) | Fraction of extra income spent on imports, $\Delta M/\Delta Y$ |
| Net exports ($X-M$) | Trade balance; positive = surplus, negative = deficit |
| Balance of trade | The net export position of the economy |
| Open-economy multiplier | $\dfrac{1}{1-b+m}$, smaller than the closed-economy multiplier |
| Trade policy | Tariffs and trade rules that affect the volume of exports and imports |

## Things to check

> [!bug] Slips in the slides
> - **Slide 8:** writes "$0.15Y=708$" and then divides 708 by **0.25**. The coefficient is **0.25** ($1-0.8+0.05$); the answer 2,832 is right, the intermediate line is wrong.
> - **Slide 18:** says income "is 3,680 which is a decrease by **160**". From 3,760 to 3,680 the fall is **80** (and $\Delta X=-20$ times the multiplier 4 confirms 80).
> - **Slide 11:** calls $X=300-0.05Y$ "exports", then solves with imports $M=0$ without saying so; slide 15 even writes "$M=0$" and then computes $X-M$ from the export function. See the note in [[Study/3rd Semester/Macroeconomics/Four-Sector Economy#Illustration 3: an export function instead of imports\|#Illustration 3: an export function instead of imports]].
> - **Slide 2** lists "the domestic economy's level of imports" as a factor influencing "exports and imports", which is circular as written; it is meant as *our imports affect the demand our trading partners can direct to us*.
> - **Slide 14** prints the constant as "920" where the sum is $260-240+320+300+300=940$; the final answer 3,760 uses the correct 940.
> - The deck has **no circular-flow diagram** for four sectors, unlike the two- and three-sector decks.

## Self-test questions

> [!question]- 1. Write the equilibrium condition for a four-sector economy and say which items are leakages and which are injections.
> $Y=C+I+G+(X-M)$. Leakages: saving, tax and imports. Injections: investment, government spending and exports. The multiplier is one over the sum of the leakage rates, $1/(1-b+m)$.

> [!question]- 2. Name the five factors the deck says determine the volume of exports and imports.
> Relative prices of exports at home and abroad; income levels in other economies; tastes, preferences, customs and traditions abroad; tariff and trade policies between the economies; and the domestic economy's own level of imports.

> [!question]- 3. Why does an open-economy multiplier have $m$ in the denominator, and what does that do to its size?
> Because part of every extra taka of income is spent on imports, which leaves the domestic flow, so the leakage rate rises from $1-b$ to $1-b+m$. The multiplier therefore shrinks — with $b=0.8$, $m=0.05$ it falls from 5 to 4.

> [!question]- 4. $C=100+0.9Y_d$, $T=50$, $I=150$, $G=200$, $X=80$, $M=0.1Y$. Find $Y$.
> $C=100+0.9(Y-50)=55+0.9Y$; $Y=55+0.9Y+150+200+80-0.1Y\Rightarrow0.2Y=485\Rightarrow Y=2{,}425$.

> [!question]- 5. In question 4, find imports and net exports. Is there a surplus or a deficit?
> $M=0.1(2{,}425)=242.5$; $X-M=80-242.5=-162.5$ — a **deficit** in the balance of trade.

> [!question]- 6. Compute the open-economy multiplier in question 4 and compare it with the closed-economy one.
> Open: $1/(0.1+0.1)=5$. Closed: $1/0.1=10$. The import leakage halves it.

> [!question]- 7. If exports rise by 40 in question 4, what happens to income and to net exports?
> Multiplier 5, so income rises by $40\times5=200$ to 2,625. Then $M=262.5$ and $X=120$, so $X-M=-142.5$: the deficit narrows by 20, because 20 of the extra 40 leaks into imports.

> [!question]- 8. Why is the balanced-budget multiplier smaller in an open economy than in a closed one?
> Because the spending it creates partly leaks abroad as imports, so the same rise in $G$ and $T$ produces less income; the multiplier falls from $1$ to $(1-b)/(1-b+m)$, e.g. $0.8$ when $b=0.8$, $m=0.05$.

> [!question]- 9. Distinguish "exports" from "net exports", and explain why a rise in income can worsen the trade balance.
> Exports are gross purchases of domestic output by foreigners; net exports are exports minus imports. When income rises, imports rise with it ($M=mY$) while exports stay the same, so the trade balance worsens even though nothing happened to exports.

> [!question]- 10. $C=260+0.8Y_d$, $I=320$, $T=300$, $G=300$, $X=300-0.05Y$. Find $Y$ and net exports.
> $Y=260+0.8(Y-300)+320+300+300-0.05Y\Rightarrow0.25Y=940\Rightarrow Y=3{,}760$; $X-M=300-0.05(3{,}760)=112$ — a surplus.
