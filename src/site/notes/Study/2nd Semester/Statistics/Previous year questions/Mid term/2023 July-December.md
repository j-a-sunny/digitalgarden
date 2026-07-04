---
{"dg-publish":true,"permalink":"/study/2nd-semester/statistics/previous-year-questions/mid-term/2023-july-december/","dg-note-properties":{}}
---

![Pasted image 20260704143828.png](/img/user/Pasted%20image%2020260704143828.png)
#### **Question 1 (a): Mention different types of data.**

Data is classified based on five primary criteria:

- **By Source:** Primary data and Secondary data.
- **By Research Type:** Survey data and Experimental data.
- **By Measurement:** Qualitative data and Quantitative data.
- **By Time:** Cross-sectional data, Time series data, Pooled cross sections, and Panel (Longitudinal) data.
- **By Scale:** Nominal data, Ordinal data, Interval data, and Ratio data.

---

#### **Question 1 (b): What are the characteristics of statistics?**

To be considered statistics, information must possess several key features:

1. **Aggregates of Individuals:** Statistics must deal with groups rather than isolated cases.
2. **Numerical Expression:** Data must be presented in the form of numerical figures.
3. **Multiplicity of Causes:** Statistical outcomes are generally influenced by various factors.
4. **Standard of Accuracy:** The data collected must meet reasonable accuracy standards.
5. **Pre-determined Purpose:** Collection should be driven by a specific, previously decided objective.
6. **Comparability:** The data must allow for meaningful comparison with other datasets.

---

#### **Question 1 (c): Briefly discuss data based on source and scale.**

**Data Based on Source:**

- **Primary Data:** These are original in character and generated through large-scale surveys, such as a population census, conducted by government or research bodies.
- **Secondary Data:** These refer to data not originally collected by the current researcher but obtained from existing published or unpublished sources, like reports from the Bangladesh Bureau of Statistics (B.B.S.).

**Data Based on Scale:**

- **Nominal Scale:** Numbers serve only as labels or tags for identifying and classifying objects, with no mathematical properties (e.g., ID numbers).
- **Ordinal Scale:** Used when categories have a natural ordered relationship (e.g., grading systems like A, B, C) where the distance between categories cannot be quantified.
- **Interval Scale:** A scale where the distance between categories is constant and known, making differences meaningful, though ratios are not (e.g., years like 2005 to 2006).
- **Ratio Scale:** The highest level of measurement where ratios, distances, and ordering are all mathematically meaningful (e.g., GDP growth percentages).

---

#### **Question 2 (a): Illustrate the classical and statistical probability with their limitations.**

**1. Mathematical (Classical) Definition:** If a trial results in $n$ exhaustive, mutually exclusive, and equally likely cases, and $m$ of them are favorable to event A, the probability is: $$P(A) = \frac{\text{Favorable outcomes (m)}}{\text{Total outcomes (n)}}$$

- **Limitations:** It cannot be applied if the outcomes are not **equally likely** or if the total number of outcomes is **infinite**.

**2. Statistical (Empirical) Definition:** If an event A occurs $r$ times in $n$ independent trials, the probability is defined as the limit of the relative frequency ($r/n$) as $n$ tends toward infinity: $$P(A) = \lim_{n \to \infty} \frac{r}{n}$$

- **Limitations:** In practice, it is difficult to repeat trials under **identical conditions**, and it is hard to obtain an **exact numerical probability** using this method.

---

#### **Question 2 (b): State the different types of laws of probability. State and prove the theorem of total probability for two not mutually exclusive events. What will happen when the events are mutually exclusive?**

**Types of Laws:** The two primary laws are the **Additive Law** (Theorem of Total Probability) and the **Multiplicative Law** (Theorem of Compound Probability).

**Theorem of Total Probability (Additive Law):** The probability of at least one of two **not mutually exclusive** events occurring is the sum of their individual probabilities minus the probability of their joint occurrence: $$P(A_1 + A_2) = P(A_1) + P(A_2) - P(A_1 A_2)$$

**Proof:**

1. Consider a Venn diagram where $A_1$ and $A_2$ overlap.
2. The area of $A_1$ is the sum of the part unique to $A_1$ ($A_1 \bar{A_2}$) and the overlap ($A_1 A_2$). So, $P(A_1) = P(A_1 A_2) + P(A_1 \bar{A_2})$ **(Eq. i)**.
3. Similarly, the area of $A_2$ is $P(A_2) = P(A_1 A_2) + P(\bar{A_1} A_2)$ **(Eq. ii)**.
4. The total area covered by both events ($A_1 + A_2$) consists of three non-overlapping parts: $P(A_1 + A_2) = P(A_1 \bar{A_2}) + P(A_1 A_2) + P(\bar{A_1} A_2)$ **(Eq. iii)**.
5. Adding (Eq. i) and (Eq. ii) gives: $P(A_1) + P(A_2) = [P(A_1 A_2) + P(A_1 \bar{A_2})] + [P(A_1 A_2) + P(\bar{A_1} A_2)]$.
6. This sum includes the overlap ($A_1 A_2$) twice. By substituting (Eq. iii) into this equation, we get: $P(A_1) + P(A_2) = P(A_1 + A_2) + P(A_1 A_2)$.
7. Rearranging the terms yields: ** $P(A_1 + A_2) = P(A_1) + P(A_2) - P(A_1 A_2)$ **.

**Mutually Exclusive Case:** If events are mutually exclusive, they cannot occur simultaneously, meaning $P(A_1 A_2) = 0$. In this case, the law simplifies to: $$P(A_1 + A_2) = P(A_1) + P(A_2)$$

---

#### **Question 2 (c): Urn Probability Problem.**

**Problem:** 16 balls (8 White, 5 Red, 3 Blue). Draw 2 balls.

**Step 1: Calculate Total Outcomes ($n$):** We draw 2 balls from 16. Using combinations ($^{16}C_2$): $$n = \frac{16 \times 15}{2 \times 1} = 120 \text{ ways}$$

**Step 2: Calculate Favorable Outcomes for Same Color ($m$):** The balls can be both White, both Red, or both Blue.

- Two White ($^8C_2$): $\frac{8 \times 7}{2 \times 1} = 28$
- Two Red ($^5C_2$): $\frac{5 \times 4}{2 \times 1} = 10$
- Two Blue ($^3C_2$): $\frac{3 \times 2}{2 \times 1} = 3$ Total favorable outcomes ($m$) = $28 + 10 + 3 = 41$.

**Step 3: Solve for (i) Same Color:** $$P(\text{Same Color}) = \frac{m}{n} = \mathbf{\frac{41}{120} \approx 0.3417}$$

**Step 4: Solve for (ii) Different Colors:** This is the complement of drawing the same color. $$P(\text{Different Colors}) = 1 - P(\text{Same Color}) = 1 - \frac{41}{120} = \mathbf{\frac{79}{120} \approx 0.6583}$$