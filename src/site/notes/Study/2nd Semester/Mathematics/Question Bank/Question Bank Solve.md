---
{"dg-publish":true,"permalink":"/study/2nd-semester/mathematics/question-bank/question-bank-solve/","title":"You said Solve these questions with fully detailed...","tags":["clippings"],"dg-note-properties":{"title":"You said Solve these questions with fully detailed...","source":"https://gemini.google.com/app/76470150db78d31a","author":null,"published":null,"created":"2026-09-20","description":"Gemini conversation with 6 messages","tags":["clippings"]}}
---

![Pasted image 20260921000021.png](/img/user/Study/2nd%20Semester/Mathematics/Attachments/Pasted%20image%2020260921000021.png)
![Pasted image 20260921000038.png](/img/user/Study/2nd%20Semester/Mathematics/Attachments/Pasted%20image%2020260921000038.png)

# Set 1

## Question 1

### a) Identification of Straight Line Equations

- **i) $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:** Not a straight line. This is the standard equation of an **ellipse** centered at the origin, as both variables are squared (degree 2).
- **ii) $y = mx^2 + c$:** Not a straight line. This represents a **parabola** opening vertically, as $x$ has a degree of 2.
- **iii) $y^2 = mx + c$:** Not a straight line. This represents a **parabola** opening horizontally, as $y$ has a degree of 2.
- **iv) $a^2 x + b^2 y + c = 0$:** **This is the equation of a straight line.** It is a general linear equation in two variables where both $x$ and $y$ are of first degree (degree 1).

### b) Cost Function Form and Transformation

The cost function form of a straight line is written as:

$$
C(x) = v \cdot x + F \quad \text{or} \quad y = m \cdot x + c
$$

Where:

- $x$ = output quantity (number of units)
- $y$ or $C(x)$ = total cost
- $v$ or $m$ = variable cost per unit (marginal cost)
- $F$ or $c$ = fixed cost

Given linear equation:

$$
9x - 3y + 12 = 0
$$

Transforming into cost function form by solving for $y$:

$$
3y = 9x + 12
$$

$$
y = \frac{9x + 12}{3}
$$

$$
y = 3x + 4
$$

From this cost function $C(x) = 3x + 4$:

- **Variable Cost ($VC$):** $3x$ (the component dependent on output quantity $x$)
- **Marginal Cost ($MC$):** $\frac{dC}{dx} = 3$ (the slope, representing the cost added by producing one additional unit)
- **Fixed Cost ($FC$):** $4$ (the constant term, representing cost incurred when $x = 0$)

### c) Investment vs. Income Linear Model

Let:

- $x$ = investment amount (in Tk.)
- $y$ = annual income / return (in Tk.)

We are given two coordinate points $(x_1, y_1)$ and $(x_2, y_2)$:

- Point 1: $(10,00,000, 50,000)$
- Point 2: $(20,00,000, 2,00,000)$

#### Step 1: Find the slope (m)

$$
m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{2,00,000 - 50,000}{20,00,000 - 10,00,000} = \frac{1,50,000}{10,00,000} = 0.15
$$

#### Step 2: Establish the linear equation

Using the point-slope formula $y - y_1 = m(x - x_1)$:

$$
y - 50,000 = 0.15(x - 10,00,000)
$$

$$
y - 50,000 = 0.15x - 1,50,000
$$

$$
y = 0.15x - 1,00,000
$$

**Relationship between investment and annual income:**

$$
y = 0.15x - 100,000
$$

#### Step 3: Determine return on investment of Tk. 65,000

Substitute $x = 65,000$:

$$
y = 0.15(65,000) - 100,000
$$

$$
y = 9,750 - 100,000 = -90,250\text{ Tk.}
$$

The annual return on an investment of Tk. 65,000 is **-Tk. 90,250** (representing a net loss of Tk. 90,250 due to fixed operating costs/overhead).

## Question 2

### a) Applications of Matrices in Business and Economics

1. **Revenue and Cost Calculation:** Multi-product pricing and sales volume analysis across multiple retail markets.
2. **Input-Output Analysis:** Modeling inter-industry dependencies and production requirements in macroeconomics (Leontief models).
3. **Linear Programming:** Solving complex resource allocation problems via the Simplex method.
4. **Markov Chains:** Forecasting consumer market share transitions and credit risk defaults over time.

### b) Determinant Evaluation of Matrix A

Matrix $A = \begin{bmatrix} 2 & 3 \\ 3 & 1 \\ 1 & 0 \end{bmatrix}$ is of dimension $3 \times 2$ (3 rows, 2 columns).

**Answer:** **No, it is not possible to compute the determinant of $A$.**

**Justification:** Determinants are mathematically defined **only for square matrices** (where the number of rows equals the number of columns, $n \times n$). Since $A$ is a rectangular matrix ($3 \times 2$), its determinant does not exist.

### c) Matrix Product AB and Dimension

- Order of matrix $A$: $2 \times 3$
- Order of matrix $B$: $3 \times 4$

**Is product $AB$ possible?** **Yes.** The number of columns in $A$ (3) equals the number of rows in $B$ (3).

**Order of $AB$:** **$2 \times 4$**

### d) Market Revenue and Gross Profit via Matrix Algebra

Given sales matrix $S$ ($2 \times 3$):

$$
S = \begin{bmatrix} 10,000 & 2,000 & 18,000 \\ 6,000 & 20,000 & 8,000 \end{bmatrix}
$$

Selling price column vector $P$ ($3 \times 1$):

$$
P = \begin{bmatrix} 2.50 \\ 1.25 \\ 1.50 \end{bmatrix}
$$

Unit cost column vector $C$ ($3 \times 1$):

$$
C = \begin{bmatrix} 1.80 \\ 1.20 \\ 0.80 \end{bmatrix}
$$

#### 1. Total Revenue in Each Market

Revenue matrix $R = S \times P$:

$$
R = \begin{bmatrix} 10,000 & 2,000 & 18,000 \\ 6,000 & 20,000 & 8,000 \end{bmatrix} \begin{bmatrix} 2.50 \\ 1.25 \\ 1.50 \end{bmatrix}
$$

- **Market I Revenue:**
	$$
	R_1 = (10,000 \times 2.50) + (2,000 \times 1.25) + (18,000 \times 1.50) = 25,000 + 2,500 + 27,000 = 54,500\text{ Tk.}
	$$
- **Market II Revenue:**
	$$
	R_2 = (6,000 \times 2.50) + (20,000 \times 1.25) + (8,000 \times 1.50) = 15,000 + 25,000 + 12,000 = 52,000\text{ Tk.}
	$$

$$
R = \begin{bmatrix} 54,500 \\ 52,000 \end{bmatrix}
$$

#### 2. Gross Profit Calculation

Unit profit column vector $U = P - C$:

$$
U = \begin{bmatrix} 2.50 - 1.80 \\ 1.25 - 1.20 \\ 1.50 - 0.80 \end{bmatrix} = \begin{bmatrix} 0.70 \\ 0.05 \\ 0.70 \end{bmatrix}
$$

Gross Profit matrix $\Pi = S \times U$:

$$
\Pi = \begin{bmatrix} 10,000 & 2,000 & 18,000 \\ 6,000 & 20,000 & 8,000 \end{bmatrix} \begin{bmatrix} 0.70 \\ 0.05 \\ 0.70 \end{bmatrix}
$$

- **Market I Gross Profit:**
	$$
	\Pi_1 = (10,000 \times 0.70) + (2,000 \times 0.05) + (18,000 \times 0.70) = 7,000 + 100 + 12,600 = 19,700\text{ Tk.}
	$$
- **Market II Gross Profit:**
	$$
	\Pi_2 = (6,000 \times 0.70) + (20,000 \times 0.05) + (8,000 \times 0.70) = 4,200 + 1,000 + 5,600 = 10,800\text{ Tk.}
	$$
- **Total Gross Profit:**
	$$
	\text{Total Profit} = 19,700 + 10,800 = 30,500\text{ Tk.}
	$$

## Question 3

### a) Applications and Components of Linear Programming

#### Key Applications

1. **Production Mix:** Finding the profit-maximizing output combination subject to machine and labor constraints.
2. **Cost Minimization / Transportation:** Minimizing distribution expenses across supply chain networks.

#### Key Components

1. **Decision Variables:** Unknown quantities to be determined ($x_1, x_2, \dots$).
2. **Objective Function:** The mathematical expression to be maximized (e.g., Profit) or minimized (e.g., Cost).
3. **Constraints:** Structural inequalities representing resource limits, capacity, or demand requirements.
4. **Non-negativity Conditions:** Constraints ensuring real-world variables remain non-negative ($x_i \ge 0$).

### b) Graphical Method Limitations vs. Simplex Method Benefits

#### Limitations of Graphical Method

1. Limited to problems with at most two decision variables ($x_1, x_2$).
2. Inaccurate for determining non-integer or fractional coordinate intersections manually.

#### Benefits of Simplex Method

1. Solves linear programming problems involving any number of decision variables and constraints.
2. Provides dual values (shadow prices) for optimal resource valuation and sensitivity analysis.

### c) LPP Formulation and Optimization

Let:

- $x_1$ = number of days Factory A operates per week
- $x_2$ = number of days Factory B operates per week

#### Objective Function

Minimize total daily operational expense $Z$:

$$
\text{Minimize } Z = 1000x_1 + 800x_2
$$

#### Demand Constraints

1. **Best value commodity:** $6x_1 + 2x_2 \ge 12 \implies 3x_1 + x_2 \ge 6$
2. **Middle value commodity:** $2x_1 + 2x_2 \ge 8 \implies x_1 + x_2 \ge 4$
3. **Lower value commodity:** $4x_1 + 12x_2 \ge 24 \implies x_1 + 3x_2 \ge 6$
4. **Non-negativity:** $x_1 \ge 0, x_2 \ge 0$

#### Corner Point Evaluation of Feasible Region

Boundary line intersections:

1. $3x_1 + x_2 = 6$
2. $x_1 + x_2 = 4$
3. $x_1 + 3x_2 = 6$

Intersection points defining the boundary of the feasible region:

- **Point A:** Intersection of $x_1 = 0$ and $3x_1 + x_2 = 6 \implies (0, 6)$
- **Point B:** Intersection of $3x_1 + x_2 = 6$ and $x_1 + x_2 = 4$: Subtracting gives $2x_1 = 2 \implies x_1 = 1, x_2 = 3 \implies (1, 3)$
- **Point C:** Intersection of $x_1 + x_2 = 4$ and $x_1 + 3x_2 = 6$: Subtracting gives $2x_2 = 2 \implies x_2 = 1, x_1 = 3 \implies (3, 1)$
- **Point D:** Intersection of $x_2 = 0$ and $x_1 + 3x_2 = 6 \implies (6, 0)$

#### Objective Function Values at Corner Points

| Corner Point | $(x_1, x_2)$ | $Z = 1000x_1 + 800x_2$ (Tk.)             |
| :----------- | :----------: | :--------------------------------------- |
| A            |   $(0, 6)$   | $1000(0) + 800(6) = 4,800$               |
| **B**        | **$(1, 3)$** | **$1000(1) + 800(3) = 3,400$ (Minimum)** |
| C            |   $(3, 1)$   | $1000(3) + 800(1) = 3,800$               |
| D            |   $(6, 0)$   | $1000(6) + 800(0) = 6,000$               |

**Conclusion:** Minimum expense is **Tk. 3,400**, achieved when **Factory A operates for 1 day** and **Factory B operates for 3 days** per week.

## Question 4

### a) Physical Meaning of Derivative

The derivative of a function $y = f(x)$, denoted as $\frac{dy}{dx}$ or $f'(x)$, represents the **instantaneous rate of change** of $y$ with respect to $x$.

- **Geometrically:** It is the slope of the tangent line to the curve at a given point.
- **Economically:** It measures marginal values, such as marginal cost ($\frac{dC}{dq}$) or marginal revenue ($\frac{dR}{dq}$), indicating the rate at which total output changes when input changes by one unit.

### b) Differentiation Problems

#### i) $y = (e^x + 5x^2 + 1)^3$

Using Chain Rule $\frac{d}{dx}[u^n] = n u^{n-1} \cdot u'$:

$$
\frac{dy}{dx} = 3(e^x + 5x^2 + 1)^2 \cdot \frac{d}{dx}(e^x + 5x^2 + 1)
$$

$$
\frac{dy}{dx} = 3(e^x + 5x^2 + 1)^2 (e^x + 10x)
$$

#### ii) $y = \frac{5x^2 + 2}{x^3 + 1}$

Using Quotient Rule $\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}$:

$$
u = 5x^2 + 2 \implies u' = 10x
$$

$$
v = x^3 + 1 \implies v' = 3x^2
$$

$$
\frac{dy}{dx} = \frac{(10x)(x^3 + 1) - (5x^2 + 2)(3x^2)}{(x^3 + 1)^2}
$$

$$
\frac{dy}{dx} = \frac{10x^4 + 10x - (15x^4 + 6x^2)}{(x^3 + 1)^2} = \frac{-5x^4 - 6x^2 + 10x}{(x^3 + 1)^2}
$$

#### iii) $y = 2x^3 + x^2 + 2x^2 + 20x$

Simplify terms ($x^2 + 2x^2 = 3x^2$):

$$
y = 2x^3 + 3x^2 + 20x
$$

$$
\frac{dy}{dx} = 6x^2 + 6x + 20
$$

### c) Revenue and Profit Maximization

Given:

$$
C = \frac{1}{3}q^3 - 3q^2 - 7q + 16, \quad R = 21q - q^2
$$

#### 1. Revenue Maximization

$$
R(q) = 21q - q^2
$$

First-order condition ($\frac{dR}{dq} = 0$):

$$
\frac{dR}{dq} = 21 - 2q = 0 \implies 2q = 21 \implies q = 10.5\text{ units}
$$

Second-order condition:

$$
\frac{d^2 R}{dq^2} = -2 < 0 \quad \text{(Maximum verified)}
$$

Maximum Revenue:

$$
R(10.5) = 21(10.5) - (10.5)^2 = 220.5 - 110.25 = 110.25\text{ Tk.}
$$

#### 2. Profit Maximization

$$
\Pi(q) = R(q) - C(q) = (21q - q^2) - \left(\frac{1}{3}q^3 - 3q^2 - 7q + 16\right)
$$

$$
\Pi(q) = -\frac{1}{3}q^3 + 2q^2 + 28q - 16
$$

First-order condition ($\frac{d\Pi}{dq} = 0$):

$$
\frac{d\Pi}{dq} = -q^2 + 4q + 28 = 0 \implies q^2 - 4q - 28 = 0
$$

Using the quadratic formula $q = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:

$$
q = \frac{4 \pm \sqrt{(-4)^2 - 4(1)(-28)}}{2} = \frac{4 \pm \sqrt{16 + 112}}{2} = \frac{4 \pm \sqrt{128}}{2} = 2 + 4\sqrt{2} \approx 7.66\text{ units}
$$

Second-order condition:

$$
\frac{d^2 \Pi}{dq^2} = -2q + 4
$$

At $q = 7.66$:

$$
\frac{d^2 \Pi}{dq^2} = -2(7.66) + 4 = -11.32 < 0 \quad \text{(Maximum verified)}
$$

Maximum Profit:

$$
\Pi(7.66) = -\frac{1}{3}(7.66)^3 + 2(7.66)^2 + 28(7.66) - 16
$$

$$
\Pi(7.66) \approx -149.81 + 117.35 + 214.48 - 16 = 166.02\text{ Tk.}
$$

## Question 5

### a) Concepts Explanation

- **Perfect Competition:** A market structure featuring numerous small buyers and sellers, standardized products, perfect mobility of resources, zero market entry/exit barriers, and perfect information. Individual firms are price takers ($P = MR = AR$).
- **Consumer's Surplus:** The economic benefit measured by the total area between the demand curve and the market price line up to the quantity purchased. It represents the difference between total willingness to pay and total actual expenditure:
	$$
	CS = \int_0^{q_0} P_d(q) \, dq - P_0 q_0
	$$

### b) Integration Problems

#### i) $\int (x^4 - 2x + 3e^x) \, dx$

$$
\int (x^4 - 2x + 3e^x) \, dx = \frac{x^5}{5} - x^2 + 3e^x + C
$$

#### ii) $\int_1^2 (x^2 + 3x + 5) \, dx$

$$
\int_1^2 (x^2 + 3x + 5) \, dx = \left[ \frac{x^3}{3} + \frac{3x^2}{2} + 5x \right]_1^2
$$

At upper limit $x = 2$:

$$
\frac{2^3}{3} + \frac{3(2^2)}{2} + 5(2) = \frac{8}{3} + 6 + 10 = \frac{56}{3}
$$

At lower limit $x = 1$:

$$
\frac{1^3}{3} + \frac{3(1^2)}{2} + 5(1) = \frac{1}{3} + \frac{3}{2} + 5 = \frac{41}{6}
$$

Difference:

$$
\frac{56}{3} - \frac{41}{6} = \frac{112 - 41}{6} = \frac{71}{6} \approx 11.83
$$

### c) Consumer's Surplus and Producer's Surplus

Given:

- Demand: $P_d = 20 - 5q$
- Supply: $P_s = 4q + 8$

#### 1. Equilibrium Point $(q_0, P_0)$

$$
P_d = P_s \implies 20 - 5q = 4q + 8
$$

$$
9q = 12 \implies q_0 = \frac{4}{3}\text{ units}
$$

$$
P_0 = 20 - 5\left(\frac{4}{3}\right) = \frac{40}{3}\text{ Tk.}
$$

#### 2. Consumer's Surplus (CS)

$$
CS = \int_0^{4/3} (20 - 5q) \, dq - P_0 q_0
$$

$$
\int_0^{4/3} (20 - 5q) \, dq = \left[ 20q - \frac{5q^2}{2} \right]_0^{4/3} = 20\left(\frac{4}{3}\right) - \frac{5}{2}\left(\frac{16}{9}\right) = \frac{80}{3} - \frac{40}{9} = \frac{200}{9}
$$

$$
P_0 q_0 = \left(\frac{40}{3}\right)\left(\frac{4}{3}\right) = \frac{160}{9}
$$

$$
CS = \frac{200}{9} - \frac{160}{9} = \frac{40}{9} \approx 4.44\text{ Tk.}
$$

#### 3. Producer's Surplus (PS)

$$
PS = P_0 q_0 - \int_0^{4/3} (4q + 8) \, dq
$$

$$
\int_0^{4/3} (4q + 8) \, dq = \left[ 2q^2 + 8q \right]_0^{4/3} = 2\left(\frac{16}{9}\right) + 8\left(\frac{4}{3}\right) = \frac{32}{9} + \frac{32}{3} = \frac{128}{9}
$$

$$
PS = \frac{160}{9} - \frac{128}{9} = \frac{32}{9} \approx 3.56\text{ Tk.}
$$

## Question 6

### a) Differential Equations Concept

A **differential equation** is a mathematical equation relating an unknown function to one or more of its derivatives. In economics and business, differential equations model continuous growth dynamics, price adjustment models over time, continuous compounding, and total cost recovery from marginal functions.

### b) Solving Differential Equations

#### i) $\frac{dy}{dx} = \frac{x}{(2x^2 + 1)y}$

Separating variables:

$$
y \, dy = \frac{x}{2x^2 + 1} \, dx
$$

Integrating both sides:

$$
\int y \, dy = \int \frac{x}{2x^2 + 1} \, dx
$$

$$
\frac{y^2}{2} = \frac{1}{4} \ln(2x^2 + 1) + C_1
$$

$$
y^2 = \frac{1}{2} \ln(2x^2 + 1) + C
$$

#### ii) $\frac{dy}{dx} = 0.02x - 5$

Integrating both sides:

$$
y = \int (0.02x - 5) \, dx
$$

$$
y = 0.01x^2 - 5x + C
$$

#### iii) $\frac{dy}{dx} = e^x$

Integrating both sides:

$$
y = \int e^x \, dx
$$

$$
y = e^x + C
$$

### c) Total Cost and Average Cost Functions

Given marginal cost function:

$$
\frac{dC}{dq} = 100 - 10q + 0.1q^2
$$

Fixed cost $FC = 1000$ (when $q = 0$, $C(0) = 1000$).

#### 1. Total Cost Function $C(q)$

$$
C(q) = \int (100 - 10q + 0.1q^2) \, dq
$$

$$
C(q) = 100q - 5q^2 + \frac{0.1}{3}q^3 + K
$$

Since $C(0) = 1000 \implies K = 1000$.

Total Cost Function:

$$
C(q) = \frac{0.1}{3}q^3 - 5q^2 + 100q + 1000
$$

#### 2. Average Cost Function $AC(q)$

$$
AC(q) = \frac{C(q)}{q} = \frac{\frac{0.1}{3}q^3 - 5q^2 + 100q + 1000}{q}
$$

$$
AC(q) = \frac{0.1}{3}q^2 - 5q + 100 + \frac{1000}{q}
$$

---

# Set 2

## Question 1

### a) Standard Form of the Cost Equation

The standard form of a linear cost equation is written as:

$$
C(x) = v \cdot x + F \quad \text{or} \quad y = m \cdot x + c
$$

Where:

- $x$ = Quantity of output produced (units)
- $y$ or $C(x)$ = Total cost
- $v$ or $m$ = Variable cost per unit (marginal cost)
- $F$ or $c$ = Total fixed cost

### b) Conditions for Parallel and Perpendicular Straight Lines

Let two straight lines have marginal costs (slopes) $m_1$ and $m_2$:

- **Parallel Lines Condition:** The two lines are parallel if their slopes are equal:
	$$
	m_1 = m_2
	$$
- **Perpendicular Lines Condition:** The two lines are perpendicular if the product of their slopes equals $-1$:
	$$
	m_1 \cdot m_2 = -1 \quad \implies \quad m_2 = -\frac{1}{m_1}
	$$

### c) Cost Analysis for $2x - 3y + 5 = 0$

Given straight line equation:

$$
2x - 3y + 5 = 0
$$

Transform into standard cost function form $y = mx + c$ by solving for $y$:

$$
3y = 2x + 5 \implies y = \frac{2}{3}x + \frac{5}{3}
$$

From this cost equation $C(x) = \frac{2}{3}x + \frac{5}{3}$:

1. **Marginal Cost ($MC$):** Slope of the equation $m = \mathbf{\frac{2}{3}}$
2. **Fixed Cost ($FC$):** $y$-intercept $c = \mathbf{\frac{5}{3}}$
3. **Total Cost ($TC$) Function:** $\mathbf{y = \frac{2}{3}x + \frac{5}{3}}$

#### Variable Cost when $x = 100$ units

Variable cost function $VC(x) = v \cdot x = \frac{2}{3}x$

$$
VC(100) = \frac{2}{3} \times 100 = \mathbf{\frac{200}{3} \approx 66.67\text{ Tk.}}
$$

### d) Order Processing Cost Linear Model

Let:

- $x$ = Number of orders processed
- $y$ = Processing money / total cost (in Tk.)

Given data points $(x_1, y_1)$ and $(x_2, y_2)$:

- Point 1: $(100, 4000)$
- Point 2: $(200, 6000)$

#### Step 1: Find the slope / marginal cost (m)

$$
m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6000 - 4000}{200 - 100} = \frac{2000}{100} = 20
$$

- **Marginal Cost:** **Tk. 20 per order**

#### Step 2: Derive the relation between processing money and number of orders

Using point-slope formula $y - y_1 = m(x - x_1)$:

$$
y - 4000 = 20(x - 100)
$$

$$
y - 4000 = 20x - 2000
$$

$$
y = 20x + 2000
$$

- **Linear Relation:** $\mathbf{y = 20x + 2000}$

#### Step 3: Total cost for 400 orders

Substitute $x = 400$:

$$
y = 20(400) + 2000 = 8000 + 2000 = \mathbf{10,000\text{ Tk.}}
$$

## Question 2

### a) Properties and Applications of Determinants

#### Three Properties of Determinants

1. **Determinant of Transpose:** Transposing a matrix does not change its determinant: $|A^T| = |A|$.
2. **Row/Column Interchange:** Interchanging any two rows or columns changes the sign of the determinant.
3. **Scalar Multiplication:** Multiplying a single row or column of a matrix by a scalar $k$ multiplies the value of the determinant by $k$.

#### Applications

- Solving systems of linear equations using Cramer's Rule.
- Calculating matrix inverses ($A^{-1} = \frac{1}{|A|}\text{adj}(A)$).
- Testing singularity ($|A| = 0$) to verify if a system has a unique solution.

### b) System of Linear Equations via Cramer's Rule

Given system:

$$
\begin{aligned} 2x - 3y + z &= 7 \\ 2x + y - z &= 1 \\ 4x + 3z &= -11 \end{aligned}
$$

Writing system as matrix $AX = B$:

$$
A = \begin{bmatrix} 2 & -3 & 1 \\ 2 & 1 & -1 \\ 4 & 0 & 3 \end{bmatrix}, \quad B = \begin{bmatrix} 7 \\ 1 \\ -11 \end{bmatrix}
$$

#### Step 1: Calculate Determinant $|D|$

Expand $|A|$ along Row 3:

$$
|D| = 4 \begin{vmatrix} -3 & 1 \\ 1 & -1 \end{vmatrix} - 0 + 3 \begin{vmatrix} 2 & -3 \\ 2 & 1 \end{vmatrix}
$$

$$
|D| = 4(3 - 1) + 3(2 - (-6)) = 4(2) + 3(8) = 8 + 24 = \mathbf{32}
$$

#### Step 2: Calculate $|D_x|$

Replace Column 1 with $B$:

$$
D_x = \begin{bmatrix} 7 & -3 & 1 \\ 1 & 1 & -1 \\ -11 & 0 & 3 \end{bmatrix}
$$

Expand along Row 3:

$$
|D_x| = -11 \begin{vmatrix} -3 & 1 \\ 1 & -1 \end{vmatrix} - 0 + 3 \begin{vmatrix} 7 & -3 \\ 1 & 1 \end{vmatrix}
$$

$$
|D_x| = -11(3 - 1) + 3(7 + 3) = -11(2) + 3(10) = -22 + 30 = \mathbf{8}
$$

#### Step 3: Calculate $|D_y|$

Replace Column 2 with $B$:

$$
D_y = \begin{bmatrix} 2 & 7 & 1 \\ 2 & 1 & -1 \\ 4 & -11 & 3 \end{bmatrix}
$$

Expand along Row 1:

$$
|D_y| = 2 \begin{vmatrix} 1 & -1 \\ -11 & 3 \end{vmatrix} - 7 \begin{vmatrix} 2 & -1 \\ 4 & 3 \end{vmatrix} + 1 \begin{vmatrix} 2 & 1 \\ 4 & -11 \end{vmatrix}
$$

$$
|D_y| = 2(3 - 11) - 7(6 - (-4)) + 1(-22 - 4) = 2(-8) - 7(10) + 1(-26)
$$

$$
|D_y| = -16 - 70 - 26 = \mathbf{-112}
$$

#### Step 4: Calculate $|D_z|$

Replace Column 3 with $B$:

$$
D_z = \begin{bmatrix} 2 & -3 & 7 \\ 2 & 1 & 1 \\ 4 & 0 & -11 \end{bmatrix}
$$

Expand along Row 3:

$$
|D_z| = 4 \begin{vmatrix} -3 & 7 \\ 1 & 1 \end{vmatrix} - 0 - 11 \begin{vmatrix} 2 & -3 \\ 2 & 1 \end{vmatrix}
$$

$$
|D_z| = 4(-3 - 7) - 11(2 - (-6)) = 4(-10) - 11(8) = -40 - 88 = \mathbf{-128}
$$

#### Step 5: Solve for variables

$$
x = \frac{|D_x|}{|D|} = \frac{8}{32} = \mathbf{\frac{1}{4}}
$$

$$
y = \frac{|D_y|}{|D|} = \frac{-112}{32} = \mathbf{-\frac{7}{2}}
$$

$$
z = \frac{|D_z|}{|D|} = \frac{-128}{32} = \mathbf{-4}
$$

### c) Examples of Matrices

- **Row Matrix:** A matrix with only 1 row:
	$$
	\begin{bmatrix} 1 & 4 & 7 \end{bmatrix}_{1 \times 3}
	$$
- **Column Matrix:** A matrix with only 1 column:
	$$
	\begin{bmatrix} 2 \\ 5 \\ 9 \end{bmatrix}_{3 \times 1}
	$$
- **Square Matrix of order $3 \times 3$:** A matrix with 3 rows and 3 columns:
	$$
	\begin{bmatrix} 1 & 0 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 \end{bmatrix}_{3 \times 3}
	$$

### d) Matrix Application to Share Prices

Let prices of share types $x, y, z$ be represented by vector $P = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$.

From investor purchases:

- Investor A: $2x + 5y + 3z = 480$
- Investor B: $4x + 3y + 6z = 760$
- Investor C: $1x + 4y + 10z = 710$

Matrix system $AX = B$:

$$
\begin{bmatrix} 2 & 5 & 3 \\ 4 & 3 & 6 \\ 1 & 4 & 10 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 480 \\ 760 \\ 710 \end{bmatrix}
$$

#### Step 1: Find Inverse $A^{-1}$

$$
|A| = 2(30 - 24) - 5(40 - 6) + 3(16 - 3) = 2(6) - 5(34) + 3(13) = 12 - 170 + 39 = -119
$$

Cofactors of $A$:

$$
\begin{aligned} C_{11} &= +(30 - 24) = 6, & C_{12} &= -(40 - 6) = -34, & C_{13} &= +(16 - 3) = 13 \\ C_{21} &= -(50 - 12) = -38, & C_{22} &= +(20 - 3) = 17, & C_{23} &= -(8 - 5) = -3 \\ C_{31} &= +(30 - 9) = 21, & C_{32} &= -(12 - 12) = 0, & C_{33} &= +(6 - 20) = -14 \end{aligned}
$$

$$
\text{adj}(A) = \begin{bmatrix} 6 & -38 & 21 \\ -34 & 17 & 0 \\ 13 & -3 & -14 \end{bmatrix}
$$

#### Step 2: Compute $X = A^{-1}B$

$$
X = \frac{1}{-119} \begin{bmatrix} 6 & -38 & 21 \\ -34 & 17 & 0 \\ 13 & -3 & -14 \end{bmatrix} \begin{bmatrix} 480 \\ 760 \\ 710 \end{bmatrix}
$$

- **For $x$:**
	$$
	x = \frac{1}{-119} \left[ 6(480) - 38(760) + 21(710) \right] = \frac{1}{-119} [2880 - 28880 + 14910] = \frac{-11090}{-119} \approx \mathbf{93.19\text{ Tk.}}
	$$
- **For $y$:**
	$$
	y = \frac{1}{-119} \left[ -34(480) + 17(760) + 0(710) \right] = \frac{1}{-119} [-16320 + 12920] = \frac{-3400}{-119} \approx \mathbf{28.57\text{ Tk.}}
	$$
- **For $z$:**
	$$
	z = \frac{1}{-119} \left[ 13(480) - 3(760) - 14(710) \right] = \frac{1}{-119} [6240 - 2280 - 9940] = \frac{-5980}{-119} \approx \mathbf{50.25\text{ Tk.}}
	$$

## Question 3

### a) Applications of Linear Programming

Linear programming optimizes real-world operational problems such as product mix optimization, supply chain transportation cost minimization, portfolio asset allocation, and labor scheduling constraints.

### b) Graphical Method Limitations vs. Simplex Method Benefits

- **Graphical Method Limitations:** Limited strictly to 2 decision variables ($x, y$) and relies on visual estimation of intersections.
- **Simplex Method Benefits:** Solves linear optimization problems across arbitrary numbers of decision variables and constraints while generating dual values (shadow prices).

### c) Optimization via Simplex Method

Maximize: $Z = 4x + 6y$

Subject to constraints:

1. $x + 2y \le 8$
2. $2x + y \le 8$
3. $4x - 2y \le 2$
4. $x, y \ge 0$

#### Convert to Standard Form with Slack Variables $(s_1, s_2, s_3)$

$$
\begin{aligned} x + 2y + s_1 &= 8 \\ 2x + y + s_2 &= 8 \\ 4x - 2y + s_3 &= 2 \\ Z - 4x - 6y + 0s_1 + 0s_2 + 0s_3 &= 0 \end{aligned}
$$

#### Initial Simplex Tableau

$$
\begin{array}{c|ccccc|c|c} \text{Basic} & x & y & s_1 & s_2 & s_3 & \text{RHS} & \text{Ratio} \\ \hline s_1 & 1 & 2 & 1 & 0 & 0 & 8 & 8/2 = 4 \quad \text{(Pivot)} \\ s_2 & 2 & 1 & 0 & 1 & 0 & 8 & 8/1 = 8 \\ s_3 & 4 & -2 & 0 & 0 & 1 & 2 & - \\ \hline Z & -4 & -6 & 0 & 0 & 0 & 0 &  \end{array}
$$

Most negative indicator in $Z$-row is $-6$ (column $y$). Leaving variable is $s_1$ (minimum ratio $4$). Pivot element = **2** (Row 1, Column 2).

#### Iteration 1

Divide Row 1 by 2:

$$
R_1' = \left[ \frac{1}{2}, 1, \frac{1}{2}, 0, 0, 4 \right]
$$

Perform row operations:

- $R_2' = R_2 - 1(R_1') = \left[ \frac{3}{2}, 0, -\frac{1}{2}, 1, 0, 4 \right]$
- $R_3' = R_3 + 2(R_1') = \left[ 5, 0, 1, 0, 1, 10 \right]$
- $Z' = Z + 6(R_1') = \left[ -1, 0, 3, 0, 0, 24 \right]$

$$
\begin{array}{c|ccccc|c|c} \text{Basic} & x & y & s_1 & s_2 & s_3 & \text{RHS} & \text{Ratio} \\ \hline y & 1/2 & 1 & 1/2 & 0 & 0 & 4 & 4/(1/2) = 8 \\ s_2 & 3/2 & 0 & -1/2 & 1 & 0 & 4 & 4/(3/2) = 8/3 \quad \text{(Pivot)} \\ s_3 & 5 & 0 & 1 & 0 & 1 & 10 & 10/5 = 2 \quad \text{(Pivot)} \\ \hline Z & -1 & 0 & 3 & 0 & 0 & 24 &  \end{array}
$$

Most negative indicator in $Z$-row is $-1$ (column $x$). Leaving variable is $s_3$ (minimum ratio $2$). Pivot element = **5** (Row 3, Column 1).

#### Iteration 2

Divide Row 3 by 5:

$$
R_3'' = \left[ 1, 0, \frac{1}{5}, 0, \frac{1}{5}, 2 \right]
$$

Perform row operations:

- $R_1'' = R_1' - \frac{1}{2}(R_3'') = \left[ 0, 1, \frac{2}{5}, 0, -\frac{1}{10}, 3 \right]$
- $R_2'' = R_2' - \frac{3}{2}(R_3'') = \left[ 0, 0, -\frac{4}{5}, 1, -\frac{3}{10}, 1 \right]$
- $Z'' = Z' + 1(R_3'') = \left[ 0, 0, \frac{16}{5}, 0, \frac{1}{5}, 26 \right]$

#### Final Optimal Tableau

Since all $Z$-row indicators are $\ge 0$, optimal solution is reached.

- **Optimal Variables:** $x = \mathbf{2}, \quad y = \mathbf{3}$
- **Maximum Objective Value:** $Z_{\text{max}} = 4(2) + 6(3) = \mathbf{26}$

## Question 4

### a) Physical Meaning of Derivative

The derivative of a function $y = f(x)$ measures the instantaneous rate at which $y$ changes relative to $x$. Geometrically, it defines the slope of the tangent line at a point on the curve. In business applications, it yields marginal concepts such as marginal revenue, marginal cost, and elasticities.

### b) Differentiation Problems

#### i) $y = e^x + 2x + 1$

$$
\frac{dy}{dx} = e^x + 2
$$

#### ii) $y = 5 + x e^x$

Using the product rule on $x e^x$:

$$
\frac{dy}{dx} = 0 + \left( (1)e^x + x e^x \right) = e^x(1 + x)
$$

#### iii) $y = 10x^{-1} + x^3 + 2x^2 + 20$

$$
\frac{dy}{dx} = -10x^{-2} + 3x^2 + 4x = -\frac{10}{x^2} + 3x^2 + 4x
$$

### c) Profit Maximization and Specific Output Evaluation

Given:

- Cost: $C(x) = 100 + 0.015x^2$
- Revenue: $R(x) = 3x$

Profit function $\Pi(x) = R(x) - C(x)$:

$$
\Pi(x) = 3x - (100 + 0.015x^2) = -0.015x^2 + 3x - 100
$$

#### 1. Maximizing Quantity $(x)$

First-order condition ($\frac{d\Pi}{dx} = 0$):

$$
\frac{d\Pi}{dx} = -0.03x + 3 = 0 \implies 0.03x = 3 \implies x = \mathbf{100\text{ units}}
$$

Second-order condition check:

$$
\frac{d^2\Pi}{dx^2} = -0.03 < 0 \quad \text{(Verified maximum)}
$$

#### 2. Maximum Profit Amount

$$
\Pi(100) = -0.015(100)^2 + 3(100) - 100 = -150 + 300 - 100 = \mathbf{50\text{ Tk.}}
$$

#### 3. Profit when Output $x = 120$

$$
\Pi(120) = -0.015(120)^2 + 3(120) - 100
$$

$$
\Pi(120) = -0.015(14400) + 360 - 100 = -216 + 360 - 100 = \mathbf{44\text{ Tk.}}
$$

## Question 5

### a) Market Structure Comparison

- **Perfect Competition:** Market structure with infinite buyers and sellers trading identical, homogeneous products. Individual firms have no pricing power ($P = MR = AR$) and face zero barriers to entry/exit.
- **Monopoly:** Market structure with a single firm controlling the total supply of a unique product without close substitutes. The monopolist is a price setter facing a downward-sloping demand curve.

### b) Total and Average Cost from Marginal Cost

Given marginal cost:

$$
\frac{dC}{dq} = 100 - 10q + 0.1q^2
$$

Fixed cost $FC = 1000$ (i.e., $C(0) = 1000$).

#### Total Cost Function $C(q)$

$$
C(q) = \int (100 - 10q + 0.1q^2) \, dq = 100q - 5q^2 + \frac{0.1}{3}q^3 + K
$$

Since $C(0) = 1000 \implies K = 1000$.

$$
C(q) = \mathbf{\frac{0.1}{3}q^3 - 5q^2 + 100q + 1000}
$$

#### Average Cost Function $AC(q)$

$$
AC(q) = \frac{C(q)}{q} = \mathbf{\frac{0.1}{3}q^2 - 5q + 100 + \frac{1000}{q}}
$$

### c) Consumer's and Producer's Surplus

Given functions:

- Demand: $P = \frac{8}{Q + 1} - 2$
- Supply: $P = \frac{Q + 3}{2}$

#### Step 1: Equilibrium Point $(Q_0, P_0)$

$$
\frac{8}{Q + 1} - 2 = \frac{Q + 3}{2} \implies \frac{8}{Q + 1} = \frac{Q + 7}{2}
$$

$$
16 = (Q + 1)(Q + 7) \implies Q^2 + 8Q + 7 = 16
$$

$$
Q^2 + 8Q - 9 = 0 \implies (Q + 9)(Q - 1) = 0
$$

Since quantity $Q \ge 0$:

$$
Q_0 = \mathbf{1}
$$

$$
P_0 = \frac{1 + 3}{2} = \mathbf{2}
$$

#### Step 2: Consumer's Surplus (CS)

$$
CS = \int_0^1 \left( \frac{8}{Q + 1} - 2 \right) \, dQ - P_0 Q_0
$$

$$
\int_0^1 \left( \frac{8}{Q + 1} - 2 \right) \, dQ = \left[ 8 \ln(Q + 1) - 2Q \right]_0^1 = (8 \ln 2 - 2) - 0 = 8 \ln 2 - 2
$$

$$
P_0 Q_0 = 2(1) = 2
$$

$$
CS = 8 \ln 2 - 2 - 2 = 8 \ln 2 - 4 \approx 8(0.6931) - 4 = \mathbf{1.55\text{ Tk.}}
$$

#### Step 3: Producer's Surplus (PS)

$$
PS = P_0 Q_0 - \int_0^1 \left( \frac{Q + 3}{2} \right) \, dQ
$$

$$
\int_0^1 \left( \frac{1}{2}Q + \frac{3}{2} \right) \, dQ = \left[ \frac{Q^2}{4} + \frac{3}{2}Q \right]_0^1 = \frac{1}{4} + \frac{3}{2} = \frac{7}{4} = 1.75
$$

$$
PS = 2 - 1.75 = \mathbf{0.25\text{ Tk.}}
$$

## Question 6

### a) Definition of Differential Equations

A **differential equation** is an equation involving an unknown function and its derivatives with respect to one or more independent variables.

### b) Solving Differential Equations

#### i) $\frac{dy}{dx} = \frac{1}{(2x + 1)y}$

Separating variables:

$$
y \, dy = \frac{1}{2x + 1} \, dx
$$

Integrating both sides:

$$
\int y \, dy = \int \frac{1}{2x + 1} \, dx
$$

$$
\frac{y^2}{2} = \frac{1}{2} \ln|2x + 1| + C_1
$$

$$
\mathbf{y^2 = \ln|2x + 1| + C}
$$

#### ii) $\frac{dy}{dx} = 0.02y - 5$

Separating variables:

$$
\frac{dy}{0.02y - 5} = dx
$$

Integrating both sides:

$$
\frac{1}{0.02} \ln|0.02y - 5| = x + C_1
$$

$$
\ln|0.02y - 5| = 0.02x + C_2
$$

$$
0.02y - 5 = C e^{0.02x}
$$

$$
\mathbf{y = \frac{5 + C e^{0.02x}}{0.02} = 250 + C e^{0.02x}}
$$

#### iii) $\frac{dy}{dx} = e^{-y} e^x$

Separating variables:

$$
\frac{dy}{e^{-y}} = e^x \, dx \implies e^y \, dy = e^x \, dx
$$

Integrating both sides:

$$
\int e^y \, dy = \int e^x \, dx
$$

$$
\mathbf{e^y = e^x + C} \quad \implies \quad \mathbf{y = \ln(e^x + C)}
$$

### c) Continuous Compounding Doubling Time

Given:

- Principal $P = 10,000$
- Target Amount $A = 20,000$ (doubling)
- Annual rate $r = 4\% = 0.04$

Continuous compounding formula:

$$
A = P e^{r t}
$$

$$
20,000 = 10,000 e^{0.04 t}
$$

$$
2 = e^{0.04 t}
$$

Taking natural logarithm ($\ln$) on both sides:

$$
\ln 2 = 0.04 t
$$

$$
t = \frac{\ln 2}{0.04} \approx \frac{0.693147}{0.04} \approx \mathbf{17.33\text{ years}}
$$

It will take approximately **17.33 years** (or 17 years and 4 months) for the investment to double.

---

# Set 3

## Question 1

### a) Coordinates of Points Dividing the Line Segment

Given two points $A(4, 7)$ and $B(2, 4)$, with ratio $m:n = 3:5$.

#### 1. Internal Division

Using the section formula for internal division $P(x, y) = \left( \frac{m x_2 + n x_1}{m + n}, \frac{m y_2 + n y_1}{m + n} \right)$:

$$
x = \frac{3(2) + 5(4)}{3 + 5} = \frac{6 + 20}{8} = \frac{26}{8} = \frac{13}{4}
$$

$$
y = \frac{3(4) + 5(7)}{3 + 5} = \frac{12 + 35}{8} = \frac{47}{8}
$$

- **Internal Division Point:** $\mathbf{\left( \frac{13}{4}, \frac{47}{8} \right)}$ or **$(3.25, 5.875)$**

#### 2. External Division

Using the section formula for external division $Q(x, y) = \left( \frac{m x_2 - n x_1}{m - n}, \frac{m y_2 - n y_1}{m - n} \right)$:

$$
x = \frac{3(2) - 5(4)}{3 - 5} = \frac{6 - 20}{-2} = \frac{-14}{-2} = 7
$$

$$
y = \frac{3(4) - 5(7)}{3 - 5} = \frac{12 - 35}{-2} = \frac{-23}{-2} = \frac{23}{2}
$$

- **External Division Point:** $\mathbf{\left( 7, \frac{23}{2} \right)}$ or **$(7, 11.5)$**

### b) Unit Vector Parallel to Resultant Vector $\vec{R}$

Given vectors:

- $\vec{r}_1 = 2\hat{i} + 4\hat{j}$
- $\vec{r}_2 = -\hat{i} - 2\hat{j} + 3\hat{k}$

#### Step 1: Find Resultant Vector $\vec{R} = \vec{r}_1 + \vec{r}_2$

$$
\vec{R} = (2\hat{i} + 4\hat{j}) + (-\hat{i} - 2\hat{j} + 3\hat{k})
$$

$$
\vec{R} = (2 - 1)\hat{i} + (4 - 2)\hat{j} + 3\hat{k} = \mathbf{\hat{i} + 2\hat{j} + 3\hat{k}}
$$

#### Step 2: Magnitude of $\vec{R}$

$$
|\vec{R}| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \mathbf{\sqrt{14}}
$$

#### Step 3: Unit Vector $\hat{u}$ Parallel to $\vec{R}$

$$
\hat{u} = \frac{\vec{R}}{|\vec{R}|} = \mathbf{\frac{1}{\sqrt{14}}\hat{i} + \frac{2}{\sqrt{14}}\hat{j} + \frac{3}{\sqrt{14}}\hat{k}}
$$

## Question 2

### a) Definitions

- **Matrix:** A rectangular array of numbers, symbols, or expressions arranged in rows and columns.
- **Inverse Matrix:** For a square matrix $A$, its inverse matrix $A^{-1}$ satisfies $A \cdot A^{-1} = A^{-1} \cdot A = I$, where $I$ is the identity matrix. It exists only if $|A| \neq 0$.

### b) Leontief Input-Output Analysis

Given: Input coefficient matrix $A$:

$$
A = \begin{bmatrix} 0.2 & 0.3 & 0.2 \\ 0.4 & 0.1 & 0.2 \\ 0.1 & 0.3 & 0.2 \end{bmatrix}
$$

Final demand vector $d$:

$$
d = \begin{bmatrix} 10 \\ 5 \\ 6 \end{bmatrix}
$$

#### Step 1: Compute Technology Matrix $(I - A)$

$$
(I - A) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} - \begin{bmatrix} 0.2 & 0.3 & 0.2 \\ 0.4 & 0.1 & 0.2 \\ 0.1 & 0.3 & 0.2 \end{bmatrix} = \begin{bmatrix} 0.8 & -0.3 & -0.2 \\ -0.4 & 0.9 & -0.2 \\ -0.1 & -0.3 & 0.8 \end{bmatrix}
$$

#### Step 2: Determinant $|I - A|$

$$
|I - A| = 0.8 \begin{vmatrix} 0.9 & -0.2 \\ -0.3 & 0.8 \end{vmatrix} - (-0.3) \begin{vmatrix} -0.4 & -0.2 \\ -0.1 & 0.8 \end{vmatrix} + (-0.2) \begin{vmatrix} -0.4 & 0.9 \\ -0.1 & -0.3 \end{vmatrix}
$$

$$
|I - A| = 0.8(0.72 - 0.06) + 0.3(-0.32 - 0.02) - 0.2(0.12 - (-0.09))
$$

$$
|I - A| = 0.8(0.66) + 0.3(-0.34) - 0.2(0.21) = 0.528 - 0.102 - 0.042 = \mathbf{0.384}
$$

#### Step 3: Cofactor Matrix and Adjugate $\text{adj}(I - A)$

$$
\begin{aligned} C_{11} &= +(0.72 - 0.06) = 0.66, & C_{12} &= -(-0.32 - 0.02) = 0.34, & C_{13} &= +(0.12 + 0.09) = 0.21 \\ C_{21} &= -(-0.24 - 0.06) = 0.30, & C_{22} &= +(0.64 - 0.02) = 0.62, & C_{23} &= -(-0.24 - 0.03) = 0.27 \\ C_{31} &= +(0.06 + 0.18) = 0.24, & C_{32} &= -(-0.16 - 0.08) = 0.24, & C_{33} &= +(0.72 - 0.12) = 0.60 \end{aligned}
$$

$$
\text{adj}(I - A) = \begin{bmatrix} 0.66 & 0.30 & 0.24 \\ 0.34 & 0.62 & 0.24 \\ 0.21 & 0.27 & 0.60 \end{bmatrix}
$$

#### Step 4: Total Output Vector $X = (I - A)^{-1} d$

$$
X = \frac{1}{0.384} \begin{bmatrix} 0.66 & 0.30 & 0.24 \\ 0.34 & 0.62 & 0.24 \\ 0.21 & 0.27 & 0.60 \end{bmatrix} \begin{bmatrix} 10 \\ 5 \\ 6 \end{bmatrix}
$$

- **$X_1$ (Industry 1 Output):**
	$$
	X_1 = \frac{1}{0.384} [0.66(10) + 0.30(5) + 0.24(6)] = \frac{1}{0.384} [6.6 + 1.5 + 1.44] = \frac{9.54}{0.384} = \mathbf{24.84375}
	$$
- **$X_2$ (Industry 2 Output):**
	$$
	X_2 = \frac{1}{0.384} [0.34(10) + 0.62(5) + 0.24(6)] = \frac{1}{0.384} [3.4 + 3.1 + 1.44] = \frac{7.94}{0.384} = \mathbf{20.67708}
	$$
- **$X_3$ (Industry 3 Output):**
	$$
	X_3 = \frac{1}{0.384} [0.21(10) + 0.27(5) + 0.60(6)] = \frac{1}{0.384} [2.1 + 1.35 + 3.6] = \frac{7.05}{0.384} = \mathbf{18.359375}
	$$

### c) Monopoly Profit Maximization

Given:

- Demand function: $3q = 98 - 4p \implies 4p = 98 - 3q \implies p = 24.5 - 0.75q$
- Average Cost: $AC = 3q + 2$

#### Step 1: Functions

- **Total Revenue ($R$):**
	$$
	R = p \cdot q = (24.5 - 0.75q)q = 24.5q - 0.75q^2
	$$
- **Total Cost ($C$):**
	$$
	C = AC \cdot q = (3q + 2)q = 3q^2 + 2q
	$$
- **Profit ($\Pi$):**
	$$
	\Pi = R - C = (24.5q - 0.75q^2) - (3q^2 + 2q) = -3.75q^2 + 22.5q
	$$

#### Step 2: Optimization

First-order condition ($\frac{d\Pi}{dq} = 0$):

$$
\frac{d\Pi}{dq} = -7.5q + 22.5 = 0 \implies 7.5q = 22.5 \implies q = \mathbf{3\text{ units}}
$$

Second-order condition:

$$
\frac{d^2\Pi}{dq^2} = -7.5 < 0 \quad \text{(Maximum verified)}
$$

#### Step 3: Maximum Profit Value

$$
\Pi(3) = -3.75(3)^2 + 22.5(3) = -33.75 + 67.5 = \mathbf{33.75}
$$

## Question 3

### a) Differential Coefficient Definition

The **differential coefficient** (or derivative) of a function $y = f(x)$ with respect to $x$ is defined as the limit of the ratio of the change in $y$ ($\Delta y$) to the change in $x$ ($\Delta x$) as $\Delta x$ approaches zero:

$$
\frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

### b) Differentiation Problems

#### i) $y = e^{-2x} + 2x + 1$

$$
\frac{dy}{dx} = -2e^{-2x} + 2
$$

#### ii) $y = 5x + x \ln x$

Using product rule on $x \ln x$:

$$
\frac{dy}{dx} = 5 + \left( (1)\ln x + x \cdot \frac{1}{x} \right) = 5 + \ln x + 1 = \mathbf{6 + \ln x}
$$

#### iii) $y = 10x^4 + x^3 + 2x^2 + 20$

$$
\frac{dy}{dx} = \mathbf{40x^3 + 3x^2 + 4x}
$$

### c) Cost Calculations for $C = \frac{2}{3}x + \frac{35}{2}$

Given total cost function:

$$
C(x) = \frac{2}{3}x + \frac{35}{2}
$$

#### i) Cost when output $x = 10$ units

$$
C(10) = \frac{2}{3}(10) + \frac{35}{2} = \frac{20}{3} + 17.5 = 6.67 + 17.5 = \mathbf{\frac{145}{6} \approx 24.17}
$$

#### ii) Average Cost (AC) when output $x = 20$ units

$$
AC(x) = \frac{C(x)}{x} = \frac{2}{3} + \frac{35}{2x}
$$

$$
AC(20) = \frac{2}{3} + \frac{35}{2(40)} = \frac{2}{3} + \frac{35}{40} = \frac{2}{3} + \frac{7}{8} = \frac{16 + 21}{24} = \mathbf{\frac{37}{24} \approx 1.54}
$$

#### iii) Marginal Cost (MC) when output $x = 5$ units

$$
MC(x) = \frac{dC}{dx} = \frac{2}{3}
$$

Since $MC$ is constant:

$$
MC(5) = \mathbf{\frac{2}{3} \approx 0.67}
$$

## Question 4

### a) Consumer's Surplus and Producer's Surplus Concepts

- **Consumer's Surplus (CS):** The economic measure of consumer benefit, calculated as the area under the demand curve and above the equilibrium price line:
	$$
	CS = \int_0^{q_0} D(q) dq - P_0 q_0
	$$
- **Producer's Surplus (PS):** The economic measure of producer benefit, calculated as the area above the supply curve and below the equilibrium price line:
	$$
	PS = P_0 q_0 - \int_0^{q_0} S(q) dq
	$$

```
Price (P)
   ^
P_max| \
     |  \  Demand Curve D(q)
     |   \
 P_0 |----\------------ (Equilibrium Price)
     |   / |
     |  /  |
 P_min|/    | Supply Curve S(q)
     +----+-------------------> Quantity (q)
     0   q_0
```

### b) Indefinite Integrals

#### i) $\int (x^3 + 2x^{-1} + 1) \, dx$

$$
\int (x^3 + 2x^{-1} + 1) \, dx = \mathbf{\frac{x^4}{4} + 2 \ln|x| + x + C}
$$

#### ii) $\int (x e^x + 0.5x) \, dx$

Using integration by parts $\int x e^x dx = x e^x - e^x$:

$$
\int (x e^x + 0.5x) \, dx = \mathbf{x e^x - e^x + 0.25x^2 + C}
$$

### c) Market Surplus for $P_s = 1 + 0.02q$ and $P_d = 6 - 0.08q$

#### Step 1: Equilibrium Point $(q_0, P_0)$

$$
1 + 0.02q = 6 - 0.08q \implies 0.10q = 5 \implies q_0 = \mathbf{50\text{ million pounds}}
$$

$$
P_0 = 1 + 0.02(50) = \mathbf{2\text{ dollars per pound}}
$$

#### Step 2: Consumer's Surplus (CS)

$$
CS = \int_0^{50} (6 - 0.08q) \, dq - (2 \times 50)
$$

$$
\int_0^{50} (6 - 0.08q) \, dq = \left[ 6q - 0.04q^2 \right]_0^{50} = 6(50) - 0.04(2500) = 300 - 100 = 200
$$

$$
CS = 200 - 100 = \mathbf{100\text{ million dollars}}
$$

#### Step 3: Producer's Surplus (PS)

$$
PS = (2 \times 50) - \int_0^{50} (1 + 0.02q) \, dq
$$

$$
\int_0^{50} (1 + 0.02q) \, dq = \left[ q + 0.01q^2 \right]_0^{50} = 50 + 0.01(2500) = 50 + 25 = 75
$$

$$
PS = 100 - 75 = \mathbf{25\text{ million dollars}}
$$

## Question 5

### a) Definitions

- **Objective Function:** A linear mathematical expression (e.g., $Z = ax_1 + bx_2$) that specifies the goal to be maximized (profit) or minimized (cost).
- **Decision Variable:** Controllable mathematical variables ($x_1, x_2$) representing output quantities to be determined.
- **Constraint:** Linear inequalities or equations representing limits on available resources, labor capacity, or market demand.

### b) Applications of Linear Programming

Linear programming optimizes real-world resource allocation problems such as production planning, dietary cost minimization, dynamic asset management, and supply chain logistics.

### c) Optimization via Simplex Method

Maximize: $Z = x_1 + 3x_2$

Constraints:

1. $2x_1 + 4x_2 \le 50$
2. $x_1 + 4x_2 \le 38$
3. $x_1, x_2 \ge 0$

#### Standard Form with Slack Variables $(s_1, s_2)$

$$
\begin{aligned} 2x_1 + 4x_2 + s_1 &= 50 \\ x_1 + 4x_2 + s_2 &= 38 \\ Z - x_1 - 3x_2 + 0s_1 + 0s_2 &= 0 \end{aligned}
$$

#### Initial Tableau

$$
\begin{array}{c|cccc|c|c} \text{Basic} & x_1 & x_2 & s_1 & s_2 & \text{RHS} & \text{Ratio} \\ \hline s_1 & 2 & 4 & 1 & 0 & 50 & 50/4 = 12.5 \\ s_2 & 1 & 4 & 0 & 1 & 38 & 38/4 = 9.5 \quad \text{(Pivot)} \\ \hline Z & -1 & -3 & 0 & 0 & 0 &  \end{array}
$$

Pivot element = **4** (Row 2, Column 2).

#### Iteration 1

Divide Row 2 by 4:

$$
R_2' = \left[ \frac{1}{4}, 1, 0, \frac{1}{4}, 9.5 \right]
$$

Row operations:

- $R_1' = R_1 - 4(R_2') = \left[ 1, 0, 1, -1, 12 \right]$
- $Z' = Z + 3(R_2') = \left[ -\frac{1}{4}, 0, 0, \frac{3}{4}, 28.5 \right]$

$$
\begin{array}{c|cccc|c|c} \text{Basic} & x_1 & x_2 & s_1 & s_2 & \text{RHS} & \text{Ratio} \\ \hline s_1 & 1 & 0 & 1 & -1 & 12 & 12/1 = 12 \quad \text{(Pivot)} \\ x_2 & 1/4 & 1 & 0 & 1/4 & 9.5 & 9.5/(1/4) = 38 \\ \hline Z & -1/4 & 0 & 0 & 3/4 & 28.5 &  \end{array}
$$

Pivot element = **1** (Row 1, Column 1).

#### Iteration 2

Perform row operations:

- $R_2'' = R_2' - \frac{1}{4}(R_1') = \left[ 0, 1, -\frac{1}{4}, \frac{1}{2}, 6.5 \right]$
- $Z'' = Z' + \frac{1}{4}(R_1') = \left[ 0, 0, \frac{1}{4}, \frac{1}{2}, 31.5 \right]$

#### Final Optimal Solution

- **$x_1 = 12, \quad x_2 = 6.5$**
- **$Z_{\text{max}} = 12 + 3(6.5) = \mathbf{31.5}$**

## Question 6

### a) ACE Novelty Production Model Formulation and Solution

Let:

- $x_1$ = number of type-A souvenirs
- $x_2$ = number of type-B souvenirs

Given parameters:

- Machine I limit: 3 hours = 180 minutes
- Machine II limit: 5 hours = 300 minutes

Formulation:

$$
\text{Maximize } Z = 1.00x_1 + 1.20x_2
$$

Subject to:

1. $2x_1 + 1x_2 \le 180$ (Machine I minutes)
2. $1x_1 + 3x_2 \le 300$ (Machine II minutes)
3. $x_1, x_2 \ge 0$

#### Corner Point Method

Intersection of boundary lines:

$$
2x_1 + x_2 = 180 \implies x_2 = 180 - 2x_1
$$

$$
x_1 + 3(180 - 2x_1) = 300 \implies x_1 + 540 - 6x_1 = 300 \implies 5x_1 = 240 \implies x_1 = 48
$$

$$
x_2 = 180 - 2(48) = 84
$$

Feasible Corner Points:

1. $(0, 0) \implies Z = 0$
2. $(90, 0) \implies Z = 1.00(90) = \$90.00$
3. $(0, 100) \implies Z = 1.20(100) = \$120.00$
4. **$(48, 84) \implies Z = 1.00(48) + 1.20(84) = 48 + 100.80 = \mathbf{\$148.80}$**

**Optimal Decision:** ACE Novelty should produce **48 type-A souvenirs** and **84 type-B souvenirs** for a maximum profit of **\$148.80**.

### b) Optimization via Big-M Simplex Method

Minimize: $Z = 600X_1 + 500X_2$

Subject to:

1. $2X_1 + X_2 \ge 80$
2. $X_1 + 2X_2 \ge 60$
3. $X_1, X_2 \ge 0$

#### Standard Form with Surplus $(s_1, s_2)$ and Artificial Variables $(A_1, A_2)$

$$
\begin{aligned} 2X_1 + X_2 - s_1 + A_1 &= 80 \\ X_1 + 2X_2 - s_2 + A_2 &= 60 \\ \text{Maximize } Z' = -600X_1 - 500X_2 &- M A_1 - M A_2 \end{aligned}
$$

#### Tableau Iterations

System of equations after eliminating artificial variables from the $Z'$-row:

$$
Z' + (3M - 600)X_1 + (3M - 500)X_2 - M s_1 - M s_2 = 140M
$$

Intersection of constraint boundary lines:

$$
2X_1 + X_2 = 80 \implies X_2 = 80 - 2X_1
$$

$$
X_1 + 2(80 - 2X_1) = 60 \implies 3X_1 = 100 \implies X_1 = \frac{100}{3}
$$

$$
X_2 = 80 - 2\left(\frac{100}{3}\right) = \frac{40}{3}
$$

Corner Points Evaluation:

1. $(0, 80) \implies Z = 600(0) + 500(80) = 40,000$
2. $(60, 0) \implies Z = 600(60) + 500(0) = 36,000$
3. **$\left(\frac{100}{3}, \frac{40}{3}\right) \implies Z = 600\left(\frac{100}{3}\right) + 500\left(\frac{40}{3}\right) = 20,000 + 6,666.67 = \mathbf{26,666.67}$**

**Optimal Solution:**

- **$X_1 = \frac{100}{3} \approx 33.33$**
- **$X_2 = \frac{40}{3} \approx 13.33$**
- **$Z_{\text{min}} = \mathbf{\frac{80000}{3} \approx 26,666.67}$**

---

# Set 4

## Question 1

### a) Identification of Straight Line Equation

From the given choices: i) $\frac{x}{a^2} + \frac{y}{b^2} = 1$ ii) $y = mx^2 + c$ iii) $y^3 = mx + c$ iv) $a^2x + b^2y + c = 0$

- **Correct Equation:** **iv) $a^2x + b^2y + c = 0$**
- **Explanation:** A linear equation in two variables represents a straight line in a two-dimensional Cartesian coordinate system. The general form of a straight line is $Ax + By + C = 0$, where $A$ and $B$ are not both zero and the degree of both variables $x$ and $y$ is 1. Here, $a^2x + b^2y + c = 0$ is a first-degree linear equation in $x$ and $y$.
	- Option i) represents an ellipse equation frame rather than the standard intercept form $\frac{x}{a} + \frac{y}{b} = 1$.
	- Options ii) and iii) are non-linear (degree 2 and 3) curves.

### b) Cost Function Form and Transformation

#### 1. General Straight Line Cost Function

$$
y = mx + c \quad \text{or} \quad C(x) = VC \cdot x + FC
$$

where:

- $y$ or $C(x)$ = Total Cost
- $x$ = Units of output produced
- $m$ = Variable Cost per unit ($VC$)
- $c$ = Fixed Cost ($FC$)

#### 2. Transformation of $9x - 3y + 12 = 0$

$$
3y = 9x + 12 \implies y = 3x + 4
$$

Comparing with $y = mx + c$:

- **Cost Function Form:** $C(x) = 3x + 4$
- **Variable Cost ($VC$):** $3x$ (or $3$ per unit)
- **Marginal Cost ($MC$):** $\frac{dC}{dx} = \mathbf{3}$
- **Fixed Cost ($FC$):** $\mathbf{4}$

### c) Investment-Income Linear Relationship

Let:

- $x$ = Investment (in Tk.)
- $y$ = Annual Income (in Tk.)

#### Step 1: Points given $(x_1, y_1)$ and $(x_2, y_2)$

- Point 1: $(10,000, 50,000)$
- Point 2: $(20,000, 2,000,000)$

Using two-point line formula:

$$
\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}
$$

$$
\frac{y - 50,000}{x - 10,000} = \frac{2,000,000 - 50,000}{20,000 - 10,000}
$$

$$
\frac{y - 50,000}{x - 10,000} = \frac{1,950,000}{10,000} = 195
$$

$$
y - 50,000 = 195(x - 10,000)
$$

$$
y = 195x - 1,950,000 + 50,000
$$

- **Linear Relationship Equation:** $\mathbf{y = 195x - 1,900,000}$

#### Step 2: Determine annual return for investment $x = 65,000$

$$
y = 195(65,000) - 1,900,000
$$

$$
y = 12,675,000 - 1,900,000 = \mathbf{Tk.\ 10,775,000}
$$

## Question 2

### a) Applications of Matrix

Matrix algebra is applied in:

1. **Economic Input-Output Analysis:** Modeling inter-industry dependencies (Leontief models).
2. **Business Operations & Inventory Control:** Calculating total costs, profits, and multi-market revenue distributions across product lines.

### b) Determinant Evaluation of Matrix A

Given matrix $A$:

$$
A = \begin{bmatrix} 2 & 3 \\ 3 & 1 \\ 1 & 0 \end{bmatrix}
$$

- **Answer:** **No, it is not possible.**
- **Justification:** Determinants can **only** be calculated for **square matrices** (where the number of rows equals the number of columns, i.e., $n \times n$). Matrix $A$ has dimensions $3 \times 2$ (a rectangular matrix), so its determinant is undefined.

### c) Matrix Product AB and Order

Given:

- Matrix $A$ order = $2 \times 3$
- Matrix $B$ order = $3 \times 4$

#### 1. Possibility of Product AB

- **Yes, it is possible**. Matrix multiplication $A \cdot B$ is defined because the number of columns in $A$ ($3$) equals the number of rows in $B$ ($3$).

#### 2. Order of AB

- **Order of $AB$ = $2 \times 4$**

### d) Multi-Market Revenue and Gross Profit via Matrix Algebra

Given sales volume matrix $S$ ($2 \times 3$):

$$
S = \begin{bmatrix} 10,000 & 2,000 & 18,000 \\ 6,000 & 20,000 & 8,000 \end{bmatrix}
$$

Selling Price Vector $P$ ($3 \times 1$):

$$
P = \begin{bmatrix} 2.50 \\ 1.25 \\ 1.50 \end{bmatrix}
$$

Unit Cost Vector $C$ ($3 \times 1$):

$$
C = \begin{bmatrix} 1.80 \\ 1.20 \\ 0.80 \end{bmatrix}
$$

#### Step 1: Total Revenue Matrix $R = S \cdot P$

$$
R = \begin{bmatrix} 10,000(2.50) + 2,000(1.25) + 18,000(1.50) \\ 6,000(2.50) + 20,000(1.25) + 8,000(1.50) \end{bmatrix}
$$

$$
R = \begin{bmatrix} 25,000 + 2,500 + 27,000 \\ 15,000 + 25,000 + 12,000 \end{bmatrix} = \begin{bmatrix} 54,000 \\ 52,000 \end{bmatrix}
$$

- **Total Revenue in Market I:** **Tk. 54,000**
- **Total Revenue in Market II:** **Tk. 52,000**
- **Combined Total Revenue:** **Tk. 106,000**

#### Step 2: Unit Profit Vector $U = P - C$

$$
U = \begin{bmatrix} 2.50 - 1.80 \\ 1.25 - 1.20 \\ 1.50 - 0.80 \end{bmatrix} = \begin{bmatrix} 0.70 \\ 0.05 \\ 0.70 \end{bmatrix}
$$

#### Step 3: Total Gross Profit Matrix $G = S \cdot U$

$$
G = \begin{bmatrix} 10,000(0.70) + 2,000(0.05) + 18,000(0.70) \\ 6,000(0.70) + 20,000(0.05) + 8,000(0.70) \end{bmatrix}
$$

$$
G = \begin{bmatrix} 7,000 + 100 + 12,600 \\ 4,200 + 1,000 + 5,600 \end{bmatrix} = \begin{bmatrix} 19,700 \\ 10,800 \end{bmatrix}
$$

- **Gross Profit in Market I:** **Tk. 19,700**
- **Gross Profit in Market II:** **Tk. 10,800**
- **Total Combined Gross Profit:** **Tk. 30,500**

## Question 3

### a) Applications and Components of Linear Programming

- **Components:**
	1. **Decision Variables:** Unknown quantities to be optimized (e.g., production units $x_1, x_2$).
	2. **Objective Function:** Linear mathematical formula targeted for maximization (profit) or minimization (cost).
	3. **Constraints:** Resource limits expressed as linear inequalities.
	4. **Non-negativity Constraints:** Conditions requiring physical output variables to be non-negative ($x_i \ge 0$).
- **Applications:** Optimal production scheduling, transport routing, blended portfolio selection, and labor assignment.

### b) Graphic Method Limitations vs. Simplex Method Benefits

- **Limitations of Graphical Method:**
	- Restricted primarily to **two decision variables** (3 variables maximum using 3D spatial plots).
	- Cannot solve real-world complex problems involving dozens or hundreds of decision variables.
- **Benefits of Simplex Method:**
	- Systematically handles **multivariable decision problems** of arbitrary size.
	- Algorithmic design provides precise corner-point evaluations efficiently and indicates alternate optimal, unbounded, or infeasible solution states.

### c) Factory Cost Minimization LPP Formulation

Let:

- $x_1$ = Number of days Factory A operates
- $x_2$ = Number of days Factory B operates

#### Objective Function

$$
\text{Minimize } Z = 1000x_1 + 800x_2
$$

#### Constraints

1. **Best value grade demand:** $6x_1 + 2x_2 \ge 12$
2. **Middle value grade demand:** $2x_1 + 2x_2 \ge 8$
3. **Lower value grade demand:** $4x_1 + 12x_2 \ge 24$
4. **Non-negativity:** $x_1, x_2 \ge 0$

#### Graphical / Corner Point Solution

Simplified constraint lines:

- Line 1: $3x_1 + x_2 = 6 \implies (2, 0)$ and $(0, 6)$
- Line 2: $x_1 + x_2 = 4 \implies (4, 0)$ and $(0, 4)$
- Line 3: $x_1 + 3x_2 = 6 \implies (6, 0)$ and $(0, 2)$

Intersection points of feasible boundary:

1. $(0, 6) \implies Z = 1000(0) + 800(6) = \text{Tk.\ 4,800}$
2. Intersection of Line 1 and Line 2: $3x_1 + x_2 = 6$ and $x_1 + x_2 = 4 \implies 2x_1 = 2 \implies x_1 = 1, x_2 = 3$, so $Z = 1000(1) + 800(3) = \mathbf{\text{Tk.\ 3,400}}$
3. Intersection of Line 2 and Line 3: $x_1 + x_2 = 4$ and $x_1 + 3x_2 = 6 \implies 2x_2 = 2 \implies x_2 = 1, x_1 = 3$, so $Z = 1000(3) + 800(1) = \text{Tk.\ 3,800}$
4. $(6, 0) \implies Z = 1000(6) + 800(0) = \text{Tk.\ 6,000}$

- **Optimal Operational Strategy:** Run **Factory A for 1 day** and **Factory B for 3 days**.
- **Minimum Daily Expense:** **Tk. 3,400** per week requirements.

## Question 4

### a) Physical Meaning of Derivative

The physical/geometric meaning of derivative $\frac{dy}{dx}$ of a function $y = f(x)$ represents the **instantaneous rate of change** of $y$ relative to $x$. Geometrically, it corresponds to the **slope of the tangent line** to the curve $y = f(x)$ at any given point.

### b) Differentiation Problems

#### i) $y = (e^x + 5x^2 + 1)^3$

Using chain rule:

$$
\frac{dy}{dx} = 3(e^x + 5x^2 + 1)^2 \cdot \frac{d}{dx}(e^x + 5x^2 + 1)
$$

$$
\frac{dy}{dx} = \mathbf{3(e^x + 5x^2 + 1)^2 (e^x + 10x)}
$$

#### ii) $y = 5\sqrt{x} + x e^x$

Rewriting $5\sqrt{x} = 5x^{1/2}$ and applying product rule on $x e^x$:

$$
\frac{dy}{dx} = 5 \left(\frac{1}{2}x^{-1/2}\right) + \left( (1)e^x + x e^x \right)
$$

$$
\frac{dy}{dx} = \mathbf{\frac{5}{2\sqrt{x}} + e^x(1 + x)}
$$

#### iii) $y = 2x^{-3} + x^3 + 2x^{\frac{1}{2}} + 20x$

Applying power rule:

$$
\frac{dy}{dx} = 2(-3x^{-4}) + 3x^2 + 2\left(\frac{1}{2}x^{-1/2}\right) + 20
$$

$$
\frac{dy}{dx} = \mathbf{-6x^{-4} + 3x^2 + x^{-1/2} + 20} = \mathbf{-\frac{6}{x^4} + 3x^2 + \frac{1}{\sqrt{x}} + 20}
$$

### c) Revenue and Profit Maximization

Given:

- Total Cost $C = \frac{1}{3}q^3 - 3q^2 - 7q + 16$
- Revenue $R = 21q - q^2$

#### Step 1: Maximize Revenue $(R)$

$$
R(q) = 21q - q^2
$$

$$
\frac{dR}{dq} = 21 - 2q = 0 \implies 2q = 21 \implies q = \mathbf{10.5\text{ units}}
$$

$$
\frac{d^2R}{dq^2} = -2 < 0 \quad \text{(Maximum verified)}
$$

- **Output for Maximum Revenue:** **$10.5$ units**
- **Maximum Revenue:** $R(10.5) = 21(10.5) - (10.5)^2 = 220.5 - 110.25 = \mathbf{110.25}$

#### Step 2: Maximize Profit $(\Pi)$

$$
\Pi = R - C = (21q - q^2) - \left(\frac{1}{3}q^3 - 3q^2 - 7q + 16\right)
$$

$$
\Pi = -\frac{1}{3}q^3 + 2q^2 + 28q - 16
$$

First derivative:

$$
\frac{d\Pi}{dq} = -q^2 + 4q + 28 = 0
$$

$$
q^2 - 4q - 28 = 0
$$

Using quadratic formula:

$$
q = \frac{-(-4) \pm \sqrt{(-4)^2 - 4(1)(-28)}}{2(1)} = \frac{4 \pm \sqrt{16 + 112}}{2} = \frac{4 \pm \sqrt{128}}{2} = \frac{4 \pm 11.3137}{2}
$$

Taking positive root ($q > 0$):

$$
q = \frac{15.3137}{2} \approx \mathbf{7.6568\text{ units}}
$$

Second derivative check:

$$
\frac{d^2\Pi}{dq^2} = -2q + 4 = -2(7.6568) + 4 = -11.3136 < 0 \quad \text{(Maximum verified)}
$$

- **Output for Maximum Profit:** **$7.66$ units**
- **Maximum Profit Amount:**
	$$
	\Pi(7.6568) = -\frac{1}{3}(7.6568)^3 + 2(7.6568)^2 + 28(7.6568) - 16
	$$
	$$
	\Pi \approx -149.62 + 117.25 + 214.39 - 16 = \mathbf{166.02}
	$$

## Question 5

### a) Terms Explanation

- **Perfect Competition:** A market structure characterized by a large number of buyers and sellers, homogeneous products, free entry/exit, perfect information, and where individual firms act as price takers.
- **Consumer's Surplus:** The economic benefit/gain enjoyed by consumers when they pay a market equilibrium price lower than the maximum price they were willing to pay.

### b) Integrals

#### i) $\int (x^4 - 2x + 3e^x) \, dx$

$$
\int (x^4 - 2x + 3e^x) \, dx = \mathbf{\frac{x^5}{5} - x^2 + 3e^x + C}
$$

#### ii) $\int_2^3 (x^2 + 3x + 5) \, dx$

$$
\int (x^2 + 3x + 5) \, dx = \left[ \frac{x^3}{3} + \frac{3x^2}{2} + 5x \right]_2^3
$$

Upper limit ($x=3$):

$$
\frac{27}{3} + \frac{27}{2} + 15 = 9 + 13.5 + 15 = 37.5
$$

Lower limit ($x=2$):

$$
\frac{8}{3} + \frac{12}{2} + 10 = \frac{8}{3} + 6 + 10 = \frac{56}{3} \approx 18.67
$$

$$
\text{Definite Integral Value} = 37.5 - \frac{56}{3} = \frac{75}{2} - \frac{56}{3} = \frac{225 - 112}{6} = \mathbf{\frac{113}{6} \approx 18.83}
$$

### c) Consumer's & Producer's Surplus under Pure Competition

Given:

- Demand function: $P = 20 - 5Q$
- Supply function: $P = 4Q + 8$

#### Step 1: Equilibrium Quantity $(Q_0)$ and Price $(P_0)$

$$
20 - 5Q = 4Q + 8 \implies 9Q = 12 \implies Q_0 = \frac{12}{9} = \mathbf{\frac{4}{3} \approx 1.333}
$$

$$
P_0 = 4\left(\frac{4}{3}\right) + 8 = \frac{16}{3} + 8 = \mathbf{\frac{40}{3} \approx 13.333}
$$

#### Step 2: Consumer's Surplus (CS)

$$
CS = \int_0^{4/3} (20 - 5Q) \, dQ - \left(P_0 \cdot Q_0\right)
$$

$$
\int_0^{4/3} (20 - 5Q) \, dQ = \left[ 20Q - \frac{5}{2}Q^2 \right]_0^{4/3} = 20\left(\frac{4}{3}\right) - \frac{5}{2}\left(\frac{16}{9}\right) = \frac{80}{3} - \frac{40}{9} = \frac{200}{9}
$$

$$
P_0 \cdot Q_0 = \frac{40}{3} \cdot \frac{4}{3} = \frac{160}{9}
$$

$$
CS = \frac{200}{9} - \frac{160}{9} = \mathbf{\frac{40}{9} \approx 4.44}
$$

#### Step 3: Producer's Surplus (PS)

$$
PS = (P_0 \cdot Q_0) - \int_0^{4/3} (4Q + 8) \, dQ
$$

$$
\int_0^{4/3} (4Q + 8) \, dQ = \left[ 2Q^2 + 8Q \right]_0^{4/3} = 2\left(\frac{16}{9}\right) + 8\left(\frac{4}{3}\right) = \frac{32}{9} + \frac{96}{9} = \frac{128}{9}
$$

$$
PS = \frac{160}{9} - \frac{128}{9} = \mathbf{\frac{32}{9} \approx 3.56}
$$

## Question 6

### a) Differential Equations Explanation

A **differential equation** is a mathematical equation that relates one or more unknown functions and their derivatives with respect to independent variables. They model rates of growth, decay, and dynamic economic relationships (e.g., $\frac{dy}{dx} = f(x, y)$).

### b) Solving Differential Equations

#### i) $\frac{dy}{dx} = \frac{x}{(2x^2 + 1)y}$

Separating variables:

$$
y \, dy = \frac{x}{2x^2 + 1} \, dx
$$

Integrating both sides:

$$
\int y \, dy = \int \frac{x}{2x^2 + 1} \, dx
$$

$$
\frac{y^2}{2} = \frac{1}{4} \ln|2x^2 + 1| + C_1
$$

$$
\mathbf{y^2 = \frac{1}{2}\ln|2x^2 + 1| + C}
$$

#### ii) $\frac{dy}{dx} = 0.02x - 5$

Separating variables:

$$
dy = (0.02x - 5) \, dx
$$

Integrating both sides:

$$
y = \int (0.02x - 5) \, dx
$$

$$
\mathbf{y = 0.01x^2 - 5x + C}
$$

#### iii) $\frac{dy}{dx} = e^{-y}$

Separating variables:

$$
e^y \, dy = dx
$$

Integrating both sides:

$$
\int e^y \, dy = \int dx
$$

$$
\mathbf{e^y = x + C} \quad \implies \quad \mathbf{y = \ln(x + C)}
$$

### c) Cost Function Derivation from Marginal Cost

Given marginal cost function:

$$
\frac{dC}{dq} = 100 - 10q + 0.1q^2
$$

Fixed Cost ($FC$) = $1000$ when $q = 0$.

#### Step 1: Total Cost Function $(C)$

$$
C(q) = \int \left(100 - 10q + 0.1q^2\right) \, dq
$$

$$
C(q) = 100q - 5q^2 + \frac{0.1}{3}q^3 + K
$$

Since $C(0) = FC = 1000 \implies K = 1000$:

- **Total Cost Function:**
	$$
	\mathbf{C(q) = 1000 + 100q - 5q^2 + \frac{1}{30}q^3}
	$$

#### Step 2: Average Cost Function $(AC)$

$$
AC(q) = \frac{C(q)}{q}
$$

- **Average Cost Function:**
	$$
	\mathbf{AC(q) = \frac{1000}{q} + 100 - 5q + \frac{1}{30}q^2}
	$$
