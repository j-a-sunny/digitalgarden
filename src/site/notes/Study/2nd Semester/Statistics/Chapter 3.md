---
{"dg-publish":true,"permalink":"/study/2nd-semester/statistics/chapter-3/","dg-note-properties":{}}
---

### **Fundamentals of Probability**

**Probability** is defined as the likelihood that a specific random event will occur in the future. To understand this field, we must first establish a common vocabulary of its core components.

---

#### **I. Basic Terminology**

- **Experiment:** An act that can be repeated under specific conditions where the outcome is not certain. For example, when throwing a die, the possible outcomes are ${1, 2, 3, 4, 5, 6}$, but the exact result of any single throw cannot be predicted.
- **Event:** One or more specified outcomes from an experiment. For instance, in a coin toss, "Heads" (H) occurring is an event.
- **Compound Event:** Occurs when two or more simple events happen simultaneously or in connection with each other. If A and B are two simple events, their joint occurrence is denoted as $(AB)$.
- **Sample Space (S):** The set containing the totality of all possible outcomes for an experiment. For a coin toss, $S = {H, T}$.

#### **II. Classifying Events**

- **Mutually Exclusive:** Two or more events that cannot occur at the same time. The occurrence of one automatically excludes the others.
- **Independent:** Events are independent if the occurrence of one does not influence or affect the occurrence of the other. Mathematically, two events are independent if: $$P(AB) = P(A) \times P(B)$$
- **Equally Likely:** Events that have an equal chance of occurring.
- **Exhaustive:** A set of events is exhaustive if they include all possible outcomes of an experiment.
- **Conditional:** When the occurrence of one event depends on whether another event has already occurred. This is denoted as $P(A/B)$, meaning the probability of event A occurring given that event B has occurred.

---

#### **III. Definitions of Probability**

There are two primary ways to define and calculate probability:

1. **Mathematical (Classical) Definition:** Used when a trial results in $n$ exhaustive, mutually exclusive, and equally likely cases. If $m$ of those cases are favorable to event A, then: $$P(A) = \frac{\text{Favorable outcomes (m)}}{\text{Total outcomes (n)}}$$
    
    - **Limitations:** This cannot be used if outcomes are not equally likely or if the number of possible outcomes is infinite.
2. **Statistical (Empirical) Definition:** Based on the "Relative Frequency" of an event. If event A occurs $r$ times in $n$ independent trials, the probability is the limit of the ratio $r/n$ as $n$ approaches infinity: $$P(A) = \lim_{n \to \infty} \frac{r}{n}$$
    
    - **Example:** In 1,000 coin tosses, if "Heads" appears 500 times, the empirical probability is $500/1000 = 0.50$.

---

#### **IV. The Laws of Probability**

##### **1. The Additive Law (Theorem of Total Probability)**

**Statement:** For two events that are **not** mutually exclusive, the probability that at least one of them occurs is the sum of their individual probabilities minus the probability of them happening together. **Formula:** $P(A_1 + A_2) = P(A_1) + P(A_2) - P(A_1 A_2)$

**Proof (Step-by-Step):**

1. Imagine a Venn diagram where two circles (Events $A_1$ and $A_2$) overlap.
2. The area of $A_1$ is composed of the part that doesn't overlap with $A_2$ (denoted $A_1 \bar{A_2}$) and the overlapping part ($A_1 A_2$). Thus: $P(A_1) = P(A_1 \bar{A_2}) + P(A_1 A_2)$ **(Equation i)**.
3. Similarly, for $A_2$: $P(A_2) = P(\bar{A_1} A_2) + P(A_1 A_2)$ **(Equation ii)**.
4. The total area covered by both circles ($A_1 + A_2$) is the sum of the three distinct sections: $P(A_1 + A_2) = P(A_1 \bar{A_2}) + P(A_1 A_2) + P(\bar{A_1} A_2)$ **(Equation iii)**.
5. If we add Equation (i) and Equation (ii) together, we get the sum of all four sections. By subtracting the overlapping part ($P(A_1 A_2)$) once, we arrive at the total area defined in Equation (iii).

**Special Cases:**

- If events are **Independent**: $P(A_1 + A_2) = P(A_1) + P(A_2) - [P(A_1) \times P(A_2)]$.
- If events are **Mutually Exclusive**: Since they can't overlap, $P(A_1 A_2) = 0$, so $P(A_1 + A_2) = P(A_1) + P(A_2)$.

##### **2. The Multiplicative Law (Theorem of Compound Probability)**

**Statement:** For two dependent events, the probability of both occurring is the probability of the first event multiplied by the conditional probability of the second. **Formula:** $P(AB) = P(A) \times P(B/A)$

**Proof (Step-by-Step):**

1. Let $n$ be the total outcomes, $n_1$ be outcomes favorable to A, $n_2$ favorable to B, and $n_{12}$ favorable to both.
2. By definition: $P(A) = n_1/n$ and $P(B/A) = n_{12}/n_1$ (Probability of both occurring, out of only those where A occurred).
3. Multiply them: $(n_1/n) \times (n_{12}/n_1) = n_{12}/n$. This equals the definition of $P(AB)$.

---

#### **V. Practical Problem Solving**

**Problem 1: Numbered Tickets** There are 20 tickets (1–20). Find the probability that a random ticket is a multiple of 2 or 5.

- **Step 1:** List multiples of 2: ${2, 4, 6, 8, 10, 12, 14, 16, 18, 20}$. There are 10. $P(A) = 10/20$.
- **Step 2:** List multiples of 5: ${5, 10, 15, 20}$. There are 4. $P(B) = 4/20$.
- **Step 3:** Identify overlapping numbers (multiples of both 2 and 5): ${10, 20}$. There are 2. $P(AB) = 2/20$.
- **Step 4:** Use Additive Law: $10/20 + 4/20 - 2/20 = 12/20$. Simplified, the answer is **3/5**.

**Problem 2: Team Selection (Combinations)** A team of 4 must be formed from 4 accountants, 2 economists, 3 statisticians, and 1 physician (10 total employees).

- **Total Outcomes:** We choose 4 out of 10. Using combinations ($^{10}C_4$): $$\frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210 \text{ ways}$$
- **Task: Probability the team includes at least 1 statistician.**
    - **Step 1:** Calculate the probability of the _opposite_ (no statisticians).
    - **Step 2:** If we exclude the 3 statisticians, we choose 4 people from the remaining 7 employees ($^7C_4$): $$\frac{7 \times 6 \times 5 \times 4}{4 \times 3 \times 2 \times 1} = 35 \text{ ways}$$
    - **Step 3:** Probability of NO statisticians = $35/210 = 1/6$.
    - **Step 4:** Probability of AT LEAST one = $1 - 1/6 = \mathbf{5/6}$.

**Problem 3: Drawing Balls from an Urn** An urn has 8 white, 6 red, and 3 blue balls (17 total). Two are drawn. Find the probability they are the same color.

- **Total Outcomes:** Choosing 2 from 17 ($^{17}C_2$): $$\frac{17 \times 16}{2 \times 1} = 136 \text{ ways}$$
- **Favorable Outcomes (Same Color):**
    - Two White ($^8 C_2$): $\frac{8 \times 7}{2 \times 1} = 28$
    - Two Red ($^6 C_2$): $\frac{6 \times 5}{2 \times 1} = 15$
    - Two Blue ($^3 C_2$): $\frac{3 \times 2}{2 \times 1} = 3$
- **Total Favorable:** $28 + 15 + 3 = 46$.
- **Probability:** $46/136 = \mathbf{23/68}$.