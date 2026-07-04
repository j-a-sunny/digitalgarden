---
{"dg-publish":true,"permalink":"/study/2nd-semester/statistics/previous-year-questions/mid-term/2024-july-december/","dg-note-properties":{}}
---

![Pasted image 20260704143810.png](/img/user/Pasted%20image%2020260704143810.png)
#### **Question 1 (a): Define Statistics. What are the limitations of Statistics?**

**Definition:** According to **Fisher (1947)**, "the science of statistics is essentially a branch of **applied mathematics** and may be regarded as mathematics applied to **observational data**." More functionally, it is the scientific method concerned with the **collection, organization, presentation, analysis**, and drawing of **inferences** from numerical data.

**Limitations:**

1. **Quantitative Focus:** It deals with numerical data only. Qualitative attributes must be converted into numbers via ranking or scaling to be analyzed.
2. **Mass Data Only:** It describes aggregates/groups and is not applicable to a **single observation**.
3. **Average Truth:** Statistical results are true only **on an average** and in a general sense.
4. **Probabilistic Error:** Conclusions are always subject to a certain amount of **error**.
5. **Not a Panacea:** It is a tool for drawing conclusions but not a solution for all types of problems.
6. **Misuse:** Statistics can be easily **misused** to represent data in biased ways.

---

#### **Question 1 (b): Mention different types of data.**

Data is classified based on five primary criteria:

1. **By Source:** Primary and Secondary data.
2. **By Research Type:** Survey and Experimental data.
3. **By Measurement:** Qualitative and Quantitative data.
4. **By Time:** Cross-sectional, Time series, Pooled cross sections, and Panel/Longitudinal data.
5. **By Scale:** Nominal, Ordinal, Interval, and Ratio data.

---

#### **Question 1 (c): Briefly discuss data based on research type and measurement.**

**By Research Type:**

- **Survey Data:** Information collected through direct interaction with subjects via **interviews, questionnaires**, or **direct observation**.
- **Experimental Data:** Original information specifically obtained through **controlled experiments**.

**By Measurement:**

- **Qualitative Data:** Data classified based on non-numerical **attributes or qualities** (e.g., gender, hair color).
- **Quantitative Data:** Characteristics that can be **numerically measured** (e.g., height, weight, income, or production figures).

---

#### **Question 2 (a): Define with examples: compound event, dependent event, mutually exclusive event, sample space, and statistical probability.**

1. **Compound Event:** When two or more events occur in connection with each other. **Example:** If A and B are simple events, their simultaneous occurrence (AB) is a compound event.
2. **Dependent Event:** An event whose occurrence depends on whether another event has occurred in the same sample space. **Example:** Drawing a card without replacement affects the probability of the next draw, denoted as $P(A/B)$.
3. **Mutually Exclusive Event:** Events that cannot happen at the same time; the occurrence of one excludes the other. **Example:** A single coin toss resulting in both **Heads** and **Tails**.
4. **Sample Space:** The set of all possible outcomes of an experiment. **Example:** For a coin toss, $S = {H, T}$.
5. **Statistical Probability:** The limit of the relative frequency ($r/n$) as the number of independent trials ($n$) approaches infinity. **Example:** If a coin is tossed 1,000 times and results in 500 heads, the probability is 0.50.

---

#### **Question 2 (b): Mention the different laws of probability. State and prove the multiplicative law of probability for two events. What will happen when the events are independent?**

**Laws of Probability:** The two laws are the **Additive Law** and the **Multiplicative Law**.

**Multiplicative Law (Theorem of Compound Probability):** The probability of the joint occurrence of two dependent events A and B is the probability of the first event multiplied by the conditional probability of the second. **Formula:** $P(AB) = P(A) \times P(B/A)$

**Proof:**

1. Let $n$ be the total number of equally likely outcomes.
2. Let $n_1$ be outcomes favorable to event A, and $n_{12}$ be outcomes favorable to both A and B.
3. By definition, the probability of A is $P(A) = n_1/n$.
4. The conditional probability of B occurring _given_ A has occurred is $P(B/A) = n_{12}/n_1$.
5. Multiplying these two gives: $(n_1/n) \times (n_{12}/n_1) = n_{12}/n$.
6. Since $n_{12}/n$ is the definition of $P(AB)$, the theorem is proved: ** $P(AB) = P(A) \times P(B/A)$ **.

**Independent Case:** If events are independent, $P(B/A) = P(B)$. Thus, the law simplifies to: ** $P(AB) = P(A) \times P(B)$ **.

---

#### **Question 2 (c): Urn Probability Problem.**

**Problem:** 16 balls (8 White, 5 Red, 3 Blue). Draw 2 balls.

**Step 1: Total Outcomes ($n$):** Choose 2 balls from 16 ($^{16}C_2$): $$n = \frac{16 \times 15}{2 \times 1} = 120 \text{ ways}$$

**Step 2: Solve for (i) Same Color:** Favorable outcomes ($m$) include two White, two Red, or two Blue:

- Two White ($^8C_2$): $(8 \times 7) / 2 = 28$
- Two Red ($^5C_2$): $(5 \times 4) / 2 = 10$
- Two Blue ($^3C_2$): $(3 \times 2) / 2 = 3$ Total $m = 28 + 10 + 3 = 41$. **Probability = $41/120 \approx 0.3417$ **

**Step 3: Solve for (ii) Different Colors:** This is the complement of drawing the same color: **Probability = $1 - (41/120) = 79/120 \approx 0.6583$ **