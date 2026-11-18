---
{"dg-publish":true,"permalink":"/study/3rd-semester/finance/chapter-2-time-value-of-money/","title":"Chapter 2 - Time Value of Money","tags":["study","managerial-finance","time-value-of-money","annuity","amortization"],"created":"2026-11-16T18:33:20.390+06:00","updated":"2026-11-18T21:52:39.799+06:00","dg-note-properties":{"title":"Chapter 2 - Time Value of Money","subject":"Managerial Finance","semester":"3rd Semester","source":"BBA chapter-2 Time Value of Money.pptx","tags":["study","managerial-finance","time-value-of-money","annuity","amortization"]}}
---


# Chapter 2: Time Value of Money

> [!info] About this note
> Rewritten from the 59-slide deck (Md. Hasan Uddin, Assistant Professor, PSTU) for studying. It follows the deck's order and covers **every slide** (see the [[Study/3rd Semester/Finance/Chapter 2 Time Value of Money#Slide coverage map\|#Slide coverage map]] at the end). Amounts are in **taka (Tk)** unless a slide used **$**. I re-calculated every worked example and exercise; the slide errors I found are in [[Study/3rd Semester/Finance/Chapter 2 Time Value of Money#Slide errors found\|#Slide errors found]]. Callouts titled **Added**, **Memory aid**, **Check** and **Self-test** are mine unless they say "from the slides". The slide deck is in `24-25 Session sheets/`. The factor tables are typed out in section 5 instead of copied as pictures.

## Objective and learning objectives (slides 1 and 2)

> [!abstract] Chapter objective (from the slides)
> Explain the concept of **compounding and discounting** and give examples of real-life applications.

After this chapter you should be able to (from the slides):

1. Explain the meaning of the time value of money and the importance of the **timing of cash flows** in making financial decisions.
2. Calculate the **present value and future value of lump sums**.
3. Identify the different types of **annuities** and calculate the PV and FV of both an **ordinary annuity** and an **annuity due**, and calculate the relevant annuity payments.
4. Solve for the **interest rate** implied by a given set of PV and FV cash flows.
5. Apply time value of money techniques to solve basic problems facing financial managers.
6. Discuss the basics of **loan amortization**.

> [!warning] Not worked on the slides
> Objective 4 (solving for the interest rate) is listed but no slide works an example. I added one in [[Study/3rd Semester/Finance/Chapter 2 Time Value of Money#Added solving for the rate or the number of years\|#Added solving for the rate or the number of years]].

## The big picture (read this first)

```mermaid
flowchart LR
    A["Why money has<br/>a time value"] --> B["Interest:<br/>simple vs compound"]
    B --> C["Terms and<br/>formula sheet"]
    C --> D["Lump sum<br/>FV and PV"]
    D --> E["Annuities<br/>ordinary and due"]
    E --> F["Uneven<br/>cash flows"]
    F --> G["Compounding<br/>frequency"]
    G --> H["Perpetuity"]
    H --> I["Loan<br/>amortization"]
```

> [!tip] Note in one sentence
> A taka today is worth more than a taka later because it can be invested, so every cash flow is **moved to the same date** with $(1+r)^n$: **compounding** pushes it forward (present value to future value), **discounting** pulls it back (future value to present value).

---

## Key terms cheat sheet

| Term | Meaning in one line |
|---|---|
| Time value of money (TVM) | A taka received today is worth more than a taka received later, because today's taka can earn a return |
| Time preference theory | Preferring a certain amount of money now to the same amount later: consumption, uncertainty, investment opportunity, inflation |
| Interest | Money paid or earned for the use of money; the cost of using money |
| Simple interest | Interest on the **original principal only** |
| Compound interest | Interest on the principal **and on the interest already earned** |
| Cash flow | Cash incoming and outgoing in an organization |
| Cash inflow | A receipt of cash from an investment; a future cash or profit receipt from an asset |
| Cash outflow | A payment of cash for expenses or investment |
| Future value (FV), terminal value | The value at a future time of a present amount or a series of payments, at a given interest rate; includes principal **and** interest |
| Present value (PV) | Today's value of a future cash flow or series of cash flows |
| Compounding | The process of converting **present value into future value** |
| Discounting | The process of finding the present value of future cash flows; the **reverse** of compounding |
| Annuity | Equal payments at regular intervals for a specified number of periods |
| Ordinary annuity | Payments at the **end** of each period |
| Annuity due | Payments at the **beginning** of each period |
| Perpetuity | Equal payments that continue **forever** |
| Nominal rate | The stated annual rate (for example 8%) |
| Amortization schedule | Table showing exactly how a loan is repaid: each payment split into interest and principal, and the balance left |
| FVIF, PVIF, FVIFA, PVIFA | Table factors for the FV of Tk 1, PV of Tk 1, FV of an annuity of Tk 1, PV of an annuity of Tk 1 |

> [!tip] Other names for the interest rate (from the slides)
> Discount rate, cost of capital, opportunity cost of capital, required return. The slide calls the interest rate the **"exchange rate" between earlier money and later money**.

---

## 1. Why money has a time value (slides 3 to 8)

**Opening question:** would you rather have $1 million now or $1 million 10 years from now? Of course everyone prefers the money now. This shows there is an **inherent monetary value attached to time**.

### What is the time value of money? (slide 4)

- A dollar (or taka) received **today** is worth more than a dollar received **tomorrow**.
- This is because a dollar received today **can be invested to earn interest or profit**.
- The amount earned depends on the **rate of return** that can be earned on the investment.
- So the time value of money **quantifies the value of a dollar or taka through time**.

### Time preference theory (slides 5 to 7)

Would you prefer **Tk 1,000 today or Tk 1,000 one year from now**? Common sense says take it today. Preferring a certain amount of money now to the same amount at some future time is called **time preference theory**. There are four arguments behind it:

| Argument | Idea | Slide example |
|---|---|---|
| Consumption | People by nature prefer current consumption to future consumption. If you hold back from consuming now, you will obviously want some compensation | No compensation is offered for waiting, so take Tk 1,000 today |
| Uncertainty | The future is always uncertain. If uncertainty about cash flows enters the analysis, a **risk premium** must be added as compensation | No premium is offered, so Tk 1,000 today is preferable |
| Investment opportunity | Money has an **opportunity cost**. Money taken today can be invested in a profitable sector and earn a return | At 8%, Tk 1,000 today becomes **Tk 1,080** in a year (Tk 1,000 invested + Tk 80 return), which you give up by waiting |
| Inflation | The **most important** argument (the slide's words). Purchasing power falls over time because of inflation | You cannot buy as many goods after one year with Tk 1,000 as you can today |

### Uses of TVM (slide 8)

TVM is used in **all aspects of finance**: bond valuation, stock valuation, accept/reject decisions for project management, financial analysis of firms, and many others.

---

## 2. The concept of interest (slides 9 to 13)

Change the offer: **Tk 1,000 today or Tk 1,090 after one year**. Now you cannot decide at a glance like in the first example, because you are getting some compensation for giving up current consumption. You have to **analyze both alternatives** to decide.

The extra **Tk 90 is the cost of money, called interest**. (Added: Tk 90 on Tk 1,000 is a 9% return for one year; you compare this with what else you could earn.)

**The interest rate:** money paid or earned for the use of money is called interest; it is the cost of using money. Interest is of **two types: simple and compound**.

### Simple interest (slide 11)

Simple interest is paid (earned) on only the **original principal** borrowed (lent). Its dollar amount depends on three variables: the original amount, the interest rate per period, and the number of periods.

$$SI = P_0 \times r \times n$$

$SI$ = simple interest in taka, $P_0$ = principal at time 0, $r$ = interest rate per time period, $n$ = number of years.

> [!example] From the slides
> Deposit Tk 100 at 8% simple interest for 3 years: $SI = 100 \times 0.08 \times 3 =$ **Tk 24**.

### Compound interest (slides 12 and 13)

Compound interest is paid or earned on **any previous interest earned, as well as on the principal**. The basic difference: simple interest is charged on the principal only, compound interest is charged on the principal **and** on the previous interest.

> [!example] From the slides: Tk 100 at 8% compound for 3 years
> | Year | Balance at start | Interest (8%) | Balance at end |
> |---|---|---|---|
> | 1 | 100.00 | $100 \times 0.08 \times 1 = 8.00$ | 108.00 |
> | 2 | 108.00 | $108 \times 0.08 \times 1 = 8.64$ | 116.64 |
> | 3 | 116.64 | $116.64 \times 0.08 \times 1 = 9.3312$ | 125.9712 |
>
> Total interest = **Tk 25.9712**, against Tk 24 under simple interest.

| | Simple interest | Compound interest |
|---|---|---|
| Interest is charged on | Principal only | Principal **plus** earlier interest |
| Growth | Straight line | Accelerating |
| Tk 100, 8%, 3 years | Tk 24.00 | Tk 25.97 |

> [!tip] Memory aid (added)
> **Simple = same interest every year. Compound = interest on interest.**

---

## 3. Basic terminology (slides 14 and 17)

- **Cash flow:** cash incoming and outgoing in an organization.
- **Cash inflow:** a receipt of cash from an investment; a future cash or profit receipt from an asset.
- **Cash outflow:** a payment or disbursement of cash for expenses or investment.
- **Compounding:** the process of determining the value of a cash flow or series of cash flows from **present value to future value**. It converts present value into future value.
- **Discounting:** the process of finding the **present value of a future cash flow** or series of cash flows. It is the **reverse of compounding** and converts future value into present value.

```
   Present value  ---- compounding (x (1+r)^n) ---->  Future value
   Present value  <--- discounting (/ (1+r)^n) -----  Future value
```

---

## 4. Formula sheet (slides 19 to 21)

Slide 19 says every TVM problem is one of **three cash-flow patterns**, and slide 20 gives the formulas for each:

| Pattern | Real-life example (from slide 19) | Future value | Present value |
|---|---|---|---|
| 1. One fixed sum, one payment | Tk 100,000 in an **FDR** | $FV_n = PV\,(1+r)^n$ | $PV = \dfrac{FV_n}{(1+r)^n}$ |
| 2a. Ordinary annuity | Tk 10,000 a year for 5 years (**DPS**) | $FVA_n = PMT\left[\dfrac{(1+r)^n-1}{r}\right]$ | $PVA_n = PMT\left[\dfrac{1-\frac{1}{(1+r)^n}}{r}\right]$ |
| 2b. Annuity due | same, paid at the start | $FVAD_n = FVA_n \times (1+r)$ | $PVAD_n = PVA_n \times (1+r)$ |
| 3. Uneven (fluctuating) cash flows | Tk 10,000, 20,000, 5,000 (investment returns) | $FV = \sum CF_t\,(1+r)^{n-t}$ | $PV = \sum \dfrac{CF_t}{(1+r)^t}$ |
| 4. Perpetuity | Consol bond | n/a | $PV_p = \dfrac{PMT}{r}$ |

**If interest is compounded $m$ times a year** (slide 21), replace $r$ with $r/m$ and $n$ with $mn$. Slide 22 lists the values of $m$: annually = 1, semiannually = 2, quarterly = 4, monthly = 12 (and the slide-23 exercise adds bimonthly = 6, daily = 365, weekly = 52, fortnightly = 24).

| Pattern | Future value | Present value |
|---|---|---|
| Single sum | $PV_0\left(1+\dfrac{r}{m}\right)^{mn}$ | $\dfrac{FV_n}{\left(1+\frac{r}{m}\right)^{mn}}$ |
| Ordinary annuity (payments at the **end** of each period) | $PMT\left\{\dfrac{\left(1+\frac{r}{m}\right)^{mn}-1}{\frac{r}{m}}\right\}$ | $PMT\left\{\dfrac{1-\frac{1}{\left(1+\frac{r}{m}\right)^{mn}}}{\frac{r}{m}}\right\}$ |
| Annuity due (payments at the **beginning** of each period) | ordinary FV $\times\left(1+\dfrac{r}{m}\right)$ | ordinary PV $\times\left(1+\dfrac{r}{m}\right)$ |

When interest is compounded once a year, $m = 1$ and these collapse to the simple forms above.

> [!tip] Memory aid (added)
> - **Up** the timeline = multiply by $(1+r)$. **Back** down = divide.
> - **Due = ordinary × (1 + r)**: each payment comes one period earlier, so it earns one extra period of interest.
> - Table shortcut: $FV = PV \times FVIF_{r,n}$ and $PV = FV \times PVIF_{r,n}$; for annuities use $FVIFA$ and $PVIFA$.

---

## 5. Lump sum: future value (slides 15 to 17, 22 to 23)

**Future value (terminal value)** is the value at some future time of a present amount or a series of payments, at a given interest rate. It includes **both the principal and the interest**.

For simple interest the slide builds the formula in steps:

$$FV_n = P_0 + SI = P_0 + P_0(r)(n) = P_0\,[1 + (r)(n)]$$

and for compound interest:

$$FV_n = PV\,(1+r)^n \qquad\text{or, with the table:}\qquad FV_n = PV\,(FVIF_{r,n})$$

> [!example] From the slides: Tk 100 deposited at 5% a year, balance after 5 years
> - By equation: $FV_5 = 100(1+0.05)^5 =$ **Tk 127.63**
> - By table: $FV_n = 100 \times FVIF_{5\%,5} = 100 \times 1.2763 = 127.63$

> [!example] From the slides: Tk 100 at 8% for 10 years
> $FV_{10} = 100(1.08)^{10} = 100(2.1589) =$ **Tk 215.89**. The slide says to keep **at least four decimals** of the factor when using the formula by hand.

### Future value interest factor table (slide 16)

$FVIF_{i,n} = (1+i)^n$: the FV of **Tk 1** after $n$ periods at $i$% per period, rounded to three decimals. **Note:** this table starts with row $n=0$, which is different from most FV-of-1 tables. Here $n$ = number of periods in which the interest is compounded, and $i$ = interest rate per period, with interest added and compounded at the end of each period.

| n | i=1% | i=2% | i=3% | i=4% | i=5% | i=6% | i=8% | i=10% | i=12% |
|---|---|---|---|---|---|---|---|---|---|
| 0 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 |
| 1 | 1.010 | 1.020 | 1.030 | 1.040 | 1.050 | 1.060 | 1.080 | 1.100 | 1.120 |
| 2 | 1.020 | 1.040 | 1.061 | 1.082 | 1.103 | 1.124 | 1.166 | 1.210 | 1.254 |
| 3 | 1.030 | 1.061 | 1.093 | 1.125 | 1.158 | 1.191 | 1.260 | 1.331 | 1.405 |
| 4 | 1.041 | 1.082 | 1.126 | 1.170 | 1.216 | 1.262 | 1.360 | 1.464 | 1.574 |
| 5 | 1.051 | 1.104 | 1.159 | 1.217 | 1.276 | 1.338 | 1.469 | 1.611 | 1.762 |
| 6 | 1.062 | 1.126 | 1.194 | 1.265 | 1.340 | 1.419 | 1.587 | 1.772 | 1.974 |
| 7 | 1.072 | 1.149 | 1.230 | 1.316 | 1.407 | 1.504 | 1.714 | 1.949 | 2.211 |
| 8 | 1.083 | 1.172 | 1.267 | 1.369 | 1.477 | 1.594 | 1.851 | 2.144 | 2.476 |
| 9 | 1.094 | 1.195 | 1.305 | 1.423 | 1.551 | 1.689 | 1.999 | 2.358 | 2.773 |
| 10 | 1.105 | 1.219 | 1.344 | 1.480 | 1.629 | 1.791 | 2.159 | 2.594 | 3.106 |
| 11 | 1.116 | 1.243 | 1.384 | 1.539 | 1.710 | 1.898 | 2.332 | 2.853 | 3.479 |
| 12 | 1.127 | 1.268 | 1.426 | 1.601 | 1.796 | 2.012 | 2.518 | 3.138 | 3.896 |

> [!abstract]- Added: the other three factor tables (PVIF, FVIFA, PVIFA), computed by me
> The slides use these factors (0.7835, 6.105, 3.993) but only print the FVIF table. Same rates, rounded to three decimals.
>
> **PVIF** = $1/(1+i)^n$, used as $PV = FV \times PVIF$
>
> | n | i=1% | i=2% | i=3% | i=4% | i=5% | i=6% | i=8% | i=10% | i=12% |
> |---|---|---|---|---|---|---|---|---|---|
> | 1 | 0.990 | 0.980 | 0.971 | 0.962 | 0.952 | 0.943 | 0.926 | 0.909 | 0.893 |
> | 2 | 0.980 | 0.961 | 0.943 | 0.925 | 0.907 | 0.890 | 0.857 | 0.826 | 0.797 |
> | 3 | 0.971 | 0.942 | 0.915 | 0.889 | 0.864 | 0.840 | 0.794 | 0.751 | 0.712 |
> | 4 | 0.961 | 0.924 | 0.888 | 0.855 | 0.823 | 0.792 | 0.735 | 0.683 | 0.636 |
> | 5 | 0.951 | 0.906 | 0.863 | 0.822 | 0.784 | 0.747 | 0.681 | 0.621 | 0.567 |
> | 6 | 0.942 | 0.888 | 0.837 | 0.790 | 0.746 | 0.705 | 0.630 | 0.564 | 0.507 |
> | 7 | 0.933 | 0.871 | 0.813 | 0.760 | 0.711 | 0.665 | 0.583 | 0.513 | 0.452 |
> | 8 | 0.923 | 0.853 | 0.789 | 0.731 | 0.677 | 0.627 | 0.540 | 0.467 | 0.404 |
> | 9 | 0.914 | 0.837 | 0.766 | 0.703 | 0.645 | 0.592 | 0.500 | 0.424 | 0.361 |
> | 10 | 0.905 | 0.820 | 0.744 | 0.676 | 0.614 | 0.558 | 0.463 | 0.386 | 0.322 |
> | 11 | 0.896 | 0.804 | 0.722 | 0.650 | 0.585 | 0.527 | 0.429 | 0.350 | 0.287 |
> | 12 | 0.887 | 0.788 | 0.701 | 0.625 | 0.557 | 0.497 | 0.397 | 0.319 | 0.257 |
>
> **FVIFA** = $[(1+i)^n-1]/i$, used as $FVA = PMT \times FVIFA$
>
> | n | i=1% | i=2% | i=3% | i=4% | i=5% | i=6% | i=8% | i=10% | i=12% |
> |---|---|---|---|---|---|---|---|---|---|
> | 1 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 | 1.000 |
> | 2 | 2.010 | 2.020 | 2.030 | 2.040 | 2.050 | 2.060 | 2.080 | 2.100 | 2.120 |
> | 3 | 3.030 | 3.060 | 3.091 | 3.122 | 3.153 | 3.184 | 3.246 | 3.310 | 3.374 |
> | 4 | 4.060 | 4.122 | 4.184 | 4.246 | 4.310 | 4.375 | 4.506 | 4.641 | 4.779 |
> | 5 | 5.101 | 5.204 | 5.309 | 5.416 | 5.526 | 5.637 | 5.867 | 6.105 | 6.353 |
> | 6 | 6.152 | 6.308 | 6.468 | 6.633 | 6.802 | 6.975 | 7.336 | 7.716 | 8.115 |
> | 7 | 7.214 | 7.434 | 7.662 | 7.898 | 8.142 | 8.394 | 8.923 | 9.487 | 10.089 |
> | 8 | 8.286 | 8.583 | 8.892 | 9.214 | 9.549 | 9.897 | 10.637 | 11.436 | 12.300 |
> | 9 | 9.369 | 9.755 | 10.159 | 10.583 | 11.027 | 11.491 | 12.488 | 13.579 | 14.776 |
> | 10 | 10.462 | 10.950 | 11.464 | 12.006 | 12.578 | 13.181 | 14.487 | 15.937 | 17.549 |
> | 11 | 11.567 | 12.169 | 12.808 | 13.486 | 14.207 | 14.972 | 16.645 | 18.531 | 20.655 |
> | 12 | 12.683 | 13.412 | 14.192 | 15.026 | 15.917 | 16.870 | 18.977 | 21.384 | 24.133 |
>
> **PVIFA** = $[1-(1+i)^{-n}]/i$, used as $PVA = PMT \times PVIFA$
>
> | n | i=1% | i=2% | i=3% | i=4% | i=5% | i=6% | i=8% | i=10% | i=12% |
> |---|---|---|---|---|---|---|---|---|---|
> | 1 | 0.990 | 0.980 | 0.971 | 0.962 | 0.952 | 0.943 | 0.926 | 0.909 | 0.893 |
> | 2 | 1.970 | 1.942 | 1.913 | 1.886 | 1.859 | 1.833 | 1.783 | 1.736 | 1.690 |
> | 3 | 2.941 | 2.884 | 2.829 | 2.775 | 2.723 | 2.673 | 2.577 | 2.487 | 2.402 |
> | 4 | 3.902 | 3.808 | 3.717 | 3.630 | 3.546 | 3.465 | 3.312 | 3.170 | 3.037 |
> | 5 | 4.853 | 4.713 | 4.580 | 4.452 | 4.329 | 4.212 | 3.993 | 3.791 | 3.605 |
> | 6 | 5.795 | 5.601 | 5.417 | 5.242 | 5.076 | 4.917 | 4.623 | 4.355 | 4.111 |
> | 7 | 6.728 | 6.472 | 6.230 | 6.002 | 5.786 | 5.582 | 5.206 | 4.868 | 4.564 |
> | 8 | 7.652 | 7.325 | 7.020 | 6.733 | 6.463 | 6.210 | 5.747 | 5.335 | 4.968 |
> | 9 | 8.566 | 8.162 | 7.786 | 7.435 | 7.108 | 6.802 | 6.247 | 5.759 | 5.328 |
> | 10 | 9.471 | 8.983 | 8.530 | 8.111 | 7.722 | 7.360 | 6.710 | 6.145 | 5.650 |
> | 11 | 10.368 | 9.787 | 9.253 | 8.760 | 8.306 | 7.887 | 7.139 | 6.495 | 5.938 |
> | 12 | 11.255 | 10.575 | 9.954 | 9.385 | 8.863 | 8.384 | 7.536 | 6.814 | 6.194 |

### Exercises (slide 23)

> [!question] Exercise 1 (from the slides)
> Future value of Tk 500 after 10 years at 15%.
> $FV_n = PV_0(1+r/m)^{mn}$ with $m = 1$: $FV_{10} = 500(1+0.15/1)^{1\times10} =$ **Tk 2,022.78** (the slide shows 2,022.77; rounding).

> [!question] Exercise 2 (from the slides)
> Mr. Talha deposits Tk 10,000 at 8% compound interest for 10 years. Amount if compounded semiannually ($m=2$), quarterly (4), monthly (12), bimonthly (6), daily (365), weekly (52), fortnightly (24)?
> The slide solves only semiannual: $FV_{10} = 10{,}000(1+0.08/2)^{2\times10} =$ **Tk 21,911.23**. I worked out the rest:

| Compounding | $m$ | Amount after 10 years |
|---|---|---|
| Annual | 1 | Tk 21,589.25 |
| Semiannual | 2 | **Tk 21,911.23** (from the slide) |
| Quarterly | 4 | Tk 22,080.40 |
| Bimonthly (every 2 months) | 6 | Tk 22,138.07 |
| Monthly | 12 | Tk 22,196.40 |
| Fortnightly | 24 | Tk 22,225.82 |
| Weekly | 52 | Tk 22,241.73 |
| Daily | 365 | Tk 22,253.46 |

> [!tip] What the table shows (added)
> More frequent compounding always gives more, but with **diminishing returns**: going from annual to semiannual adds Tk 322, while going from weekly to daily adds only Tk 12.

---

## 6. Lump sum: present value (slides 18, 24 to 25)

Sometimes we need to go the **opposite way**: we know the future value of a deposit at $i$ percent for $n$ years but not the principal, the original investment, which is also called the **present value** ($PV_0 = P_0$). Present value is today's value of a future cash flow or series of cash flows.

$$PV = \frac{FV_n}{(1+r)^n} \qquad\text{or, with the table:}\qquad PV = FV_n\,(PVIF_{r,n})$$

> [!example] From the slides: PV of Tk 127.63 received at the end of 5 years at 5% compounding
> - By equation: $PV = \dfrac{127.63}{(1+0.05)^5} =$ **Tk 100**
> - By table: $127.63 \times PVIF_{5\%,5} = 127.63 \times 0.7835 = 100$ (the slide writes the factor as "FVIF" by mistake; it is the **PVIF**)

> [!example] From the slides: what is Tk 100 received 5 years from now worth today at 10%?
> 1. Write the formula: $PV = \dfrac{FV_5}{(1+r/m)^{mn}}$
> 2. Insert the numbers: $PV = \dfrac{100}{(1+0.10)^{1\times5}}$
> 3. Solve: **PV = Tk 62.09**

> [!question] Exercise 1 (from the slides)
> PV of Tk 2,023 received 10 years from now at a 15% discount rate: $PV = \dfrac{2{,}023}{(1+0.15)^{1\times10}} \approx$ **Tk 500** (exactly 500.05).

> [!question] Exercise 2 (from the slides)
> Mr. Saadman will get Tk 100,000 five years from now. Discount rate 8%. What is the PV? What is the PV if received at the end of 10 and 15 years?
> - 5 years: $\dfrac{100{,}000}{(1.08)^5} =$ **Tk 68,058.32**
> - 10 years: **Tk 46,319.35** (worked out by me; the slide leaves it unanswered)
> - 15 years: **Tk 31,524.17** (same)

> [!tip] Memory aid (added)
> The **later** the money arrives, the **smaller** its present value: 68,058 → 46,319 → 31,524.

---

## 7. Annuities (slides 26 to 38)

An **annuity** is a cash-flow stream in which the cash flows are all **equal** and occur at **regular intervals**: a series of payments of an equal amount at a fixed interval for a specified number of periods. It can occur at either the beginning or the end of each period. Annuities can be a fixed amount, an amount that grows at a constant rate, or an amount that grows at various rates; **the slides focus on fixed amounts**.

Annuities are classified by the timing of cash flows into the **ordinary annuity** and the **annuity due**.

| | Ordinary annuity | Annuity due |
|---|---|---|
| Payments occur | **End** of each period | **Beginning** of each period |
| FV | $PMT\left[\frac{(1+r)^n-1}{r}\right]$ | ordinary FV $\times (1+r)$ |
| PV | $PMT\left[\frac{1-(1+r)^{-n}}{r}\right]$ | ordinary PV $\times (1+r)$ |
| Table form | $PMT \times FVIFA_{r,n}$ / $PMT \times PVIFA_{r,n}$ | same, then $\times(1+r)$ |

**Timelines for 3 payments of $100 at rate $i$%** (slides 28 and 29):

```
Ordinary annuity (end of period)        Annuity due (beginning of period)

Time:   0     1      2      3           Time:   0      1      2      3
              $100   $100   $100                $100   $100   $100
```

### Future value of an ordinary annuity (slides 30 to 33)

> [!example] From the slides: Tk 1,000 at the end of each year for 5 years at 10% (Prime Bank Ltd.)
> The bank gives 10% annual compound interest. How much will you have after five years?
>
> ```
> End of year:     0      1      2      3      4      5
>                         1000   1000   1000   1000   1000
> Compounded:             4 yrs  3 yrs  2 yrs  1 yr   none
> ```

The deposit at the end of year 1 is compounded for the next **4** years, and the later deposits for 3, 2, 1 and **0** years. I worked out the pieces:

| Deposit at end of year | 1 | 2 | 3 | 4 | 5 | Total |
|---|---|---|---|---|---|---|
| Years compounded | 4 | 3 | 2 | 1 | 0 | |
| Value at year 5 (Tk) | 1,464.10 | 1,331.00 | 1,210.00 | 1,100.00 | 1,000.00 | **6,105.10** |

Shortcut formula (slides 32 and 33), where $FVA_n$ = future value of the annuity after $n$ periods, $PMT$ = periodic payment, $r$ = interest rate, $n$ = number of years:

$$FVA_5 = PMT\left[\frac{(1+r)^{mn}-1}{r}\right] = 1000\left[\frac{(1+0.10)^{1\times5}-1}{0.10}\right] = 1000(6.1051) = \textbf{Tk 6,105.10}$$

Table form: $FVA_n = PMT \times FVIFA_{r,n} = 1000 \times FVIFA_{10\%,5} = 1000 \times 6.105 = $ **Tk 6,105**.

### Future value of an annuity due (slide 34)

Payments come at the **start** of each period. The first deposit is compounded for **5** years and the later ones for 4, 3, 2 and 1 year, so the formula is rearranged:

$$FVAD_n = PMT\left[\frac{(1+r)^n-1}{r}\right](1+r) \qquad\text{or}\qquad FVAD_n = PMT\,(FVIFA_{r,n})\,(1+r)$$

> [!example] Added: same Prime Bank deposits, but at the start of each year
> $6{,}105.10 \times 1.10 =$ **Tk 6,715.61**. The slides give only the formula.

### Present value of an ordinary annuity (slides 35 to 37)

> [!example] From the slides: withdraw Tk 1,000 a year for 5 years from an account earning 8%
> The cash flows of Tk 1,000 a year for five years are withdrawals from a savings account earning 8% compound annual interest. How much must you deposit **now** (time 0) so you end with a zero balance after the last Tk 1,000 withdrawal?
>
> $$PVA_n = PMT\left[\frac{1-\frac{1}{(1+r)^n}}{r}\right] = 1000\left[\frac{1-\frac{1}{(1.08)^5}}{0.08}\right] = 1000(3.9927) = \textbf{Tk 3,992.7}$$
>
> Step by step (slide 37): $(1.08)^5 = 1.4693280768$ → $1/1.4693280768 = 0.680583197$ → $1 - 0.680583197 = 0.319416803$ → $0.319416803 / 0.08 = 3.9927100375$ → $\times 1000 =$ **3,992.71**.
>
> Table check: $PVA_n = PMT \times PVIFA_{8\%,5} = 1000 \times 3.993 =$ **Tk 3,993**.
>
> Meaning: you must deposit **Tk 3,992.7** to withdraw Tk 1,000 at the end of each year for the next five years.

### Present value of an annuity due (slide 38)

Receipts are at the **beginning** of each period, so again rearrange the formula:

$$PVAD_n = PMT\left[\frac{1-\frac{1}{(1+r)^n}}{r}\right](1+r) \qquad\text{or}\qquad PVAD_n = PMT\,(PVIFA_{r,n})\,(1+r)$$

> [!example] Added: same withdrawals, but at the start of each year
> $3{,}992.71 \times 1.08 =$ **Tk 4,312.13**.

---

## 8. Uneven cash flow streams (slides 39 to 44)

An uneven cash-flow stream is a series of cash flows in which the **amount varies** from one period to the next. A cash-flow stream is a finite set of payments an investor will receive or invest over time.

- **PV of the stream** = the **sum of the present values** of each individual cash flow.
- **FV of the stream** = the **sum of the future values** of the individual cash flows. It can also be found by taking the PV of the stream and finding the FV of that lump sum at the appropriate rate for the appropriate number of periods.

The slides use **Joe's investment: $100 the first year, $300 the second, $500 the third and $1,000 the fourth; interest rate 10%.**

### Present value (slides 40 and 41)

```
Time:    0       1       2       3       4          r = 10%
                $100    $300    $500   $1000
PV:      ?  <--  ?   <-- ?   <-- ?   <-- ?
```

$$PV = \sum_{t=0}^{n}\frac{CF_t}{(1+r)^t} = \frac{100}{(1+.1)^1}+\frac{300}{(1+.1)^2}+\frac{500}{(1+.1)^3}+\frac{1000}{(1.1)^4}$$

| Year | Cash flow | Discount factor | PV |
|---|---|---|---|
| 1 | 100 | $1/1.1$ | 90.91 |
| 2 | 300 | $1/1.1^2$ | 247.93 |
| 3 | 500 | $1/1.1^3$ | 375.66 |
| 4 | 1,000 | $1/1.1^4$ | 683.01 |
| | | **Total** | **1,397.51** |

### Future value (slides 43 and 44)

Joe has the same stream and wants to know what it will be worth at the **end of the fourth year**.

```
Time:    0       1       2       3       4          i = 10%
                $100    $300    $500   $1000
                 |       |       |       |
                 +-3 yrs-+-2 yrs-+-1 yr--+-0 yrs-> FV = ?
```

$$FV = \sum CF_t\,(1+r)^{n-t} = 100(1.1)^{4-1}+300(1.1)^{4-2}+500(1.1)^{4-3}+1000(1.1)^{4-4}$$

$$FV = 133.10 + 363.00 + 550.00 + 1000 = \textbf{\$2{,}046.10}$$

> [!tip] Check (added, and the idea comes from slide 42)
> The FV of a stream is also the **FV of its PV**: $1{,}397.51 \times (1.1)^4 = 2{,}046.10$. Both routes agree, which is a good self-check.

---

## 9. Compounding frequency (slides 45 to 51)

**Compounding** refers to the frequency with which interest is computed and added to the principal balance. The more frequent the compounding, the higher the interest earned. The slides cover three ideas: discrete vs continuous intervals, nominal vs effective yields, and semiannual and other compounding periods.

- **Discrete compounding:** you can **count** the number of compounding periods per year (once a year, twice a year, quarterly, monthly, daily).
- **Continuous compounding:** results when there is an **infinite** number of compounding periods.

| | Future value | Present value |
|---|---|---|
| Discrete ($m$ times a year) | $PV_0\left(1+\dfrac{r}{m}\right)^{mn}$ | $\dfrac{FV_n}{\left(1+\frac{r}{m}\right)^{mn}}$ |
| Continuous | $PV_0\, e^{rn}$ | $\dfrac{FV_n}{e^{rn}}$ |

Here $r$ = annual interest rate, $m$ = number of compounding periods per year, $n$ (or $t$) = time in years, and $e = 2.71828$ (a constant).

### Discrete compounding in detail (slides 49 to 51)

Up to now we assumed interest is paid **annually**, which is the easiest way to understand TVM. Now consider other compounding periods.

> [!example] From the slides: Tk 100 at a nominal (stated) 8% a year, interest paid semiannually
> $FV_1 = 100\left(1+\dfrac{0.08}{2}\right)^2 =$ **Tk 108.16**

The general formula for FV after $n$ years when interest is paid $m$ times a year is $FV_n = PV_0\left(1+\frac{r}{m}\right)^{mn}$.

> [!example] From the slides: interest paid quarterly, Tk 100, stated rate 8%, one year
> $FV_1 = 100\left(1+\dfrac{0.08}{4}\right)^{4\times1} = 100(1.02)^4 =$ **Tk 108.24**

**Present (discounted) value:** when interest is compounded more than once a year, the PV formula changes in the same way. Instead of dividing by $(1+i)^n$, divide by $\left(1+\frac{r}{m}\right)^{mn}$:

$$PV_0 = \frac{FV_n}{\left(1+\frac{r}{m}\right)^{mn}}$$

where $FV_n$ = future cash flow at the end of year $n$, $m$ = number of times a year interest is compounded, $r$ = the discount rate.

> [!example] From the slides: PV of Tk 100 to be received at the end of 3 years, nominal discount rate 8% compounded quarterly
> $PV_0 = \dfrac{100}{(1+0.08/4)^{4\times3}} = \dfrac{100}{(1.02)^{12}} =$ **Tk 78.85**

### Continuous compounding (slides 46 to 48)

The FV at the end of $n$ years of an initial deposit $PV_0$ compounded continuously at rate $r$ is $FV_n = PV_0\,e^{rn}$. By the same token the PV of a cash flow received at the end of $n$ years is $PV_0 = FV_n / e^{rn}$.

> [!example] From the slides: your bank pays 3% a year; you deposit $100
> What is the FV in one year if interest is compounded quarterly? Continuously?
> - Quarterly: $FV = 100\left(1+\dfrac{0.03}{4}\right)^4 =$ **$103.03**
> - Continuous: $FV = 100\,e^{0.03} =$ **$103.05**

> [!info] Added: nominal vs effective rate
> Slide 45 lists "nominal versus effective yields" but does not define them. The **nominal** rate is the stated annual rate (8%). The **effective annual rate** is what you really earn after compounding:
> $$EAR = \left(1+\frac{r}{m}\right)^m - 1$$
> 8% compounded quarterly gives $1.02^4 - 1 =$ **8.24%**. 12% compounded monthly gives **12.68%**.

---

## 10. Perpetuities (slides 52 to 54)

A perpetuity is a stream of **equal payments expected to continue forever**. Its present value is found by

$$PV_p = \frac{Payment}{interest\ rate} = \frac{PMT}{i}$$

> [!example] From the slides: consol bond (Problem 4-11, Charles P. Jones)
> Each consol promises to pay Tk 100 a year in perpetuity. What is each bond worth if the opportunity cost (discount) rate is 5%?
> $PV_p = \dfrac{100}{0.05} =$ **Tk 2,000**.

> [!example] From the slides: Dhaka Tobacco Ltd.
> The company makes and sells a popular chewing tobacco and receives about **Tk 20,000 a year** after all expenses, including taxes. British American Tobacco (BAT) recently offered to buy the product for **Tk 160,000**. Dhaka Tobacco's discount rate is **10%**. Should they sell if they think the product's life is (a) 15 years, (b) indefinitely long?
>
> | Assumption | Calculation | PV | Decision |
> |---|---|---|---|
> | (a) Life of **15 years** (annuity) | $20{,}000 \times \frac{1-1.1^{-15}}{0.10} = 20{,}000 \times 7.60608$ | **Tk 152,121.59** | PV < 160,000, so **sell** |
> | (b) **Indefinitely** (perpetuity) | $20{,}000 / 0.10$ | **Tk 200,000** | PV > 160,000, so **do not sell** |

Step by step for (a), following slide 54 and using the corrected arithmetic: $(1+0.10)^{15} = 4.1772481694$ → $1/4.1772481694 = 0.2393920494$ → $1 - 0.2393920494 = 0.7606079506$ → $/\,0.10 = 7.606079506$ → $\times\,20{,}000 =$ **152,121.59**.

The slide's reasoning: in (a) the present value of the future returns is **less than** BAT's offer, so Dhaka Tobacco should **sell**. In (b) the present value is **higher** than BAT's offer, so it should **not sell**.

> [!tip] Memory aid (added)
> Decision rule: **sell if the offer is more than the present value of what you give up; keep if it is less.** The answer flips with the assumed life of the product, which is why the life estimate matters.

---

## 11. Loan amortization (slides 55 to 59)

An **amortization table** shows how a loan balance is systematically **reduced to zero** over its life. For each loan payment, the table reports the loan balance **before and after** the payment and the **principal and interest components** of the payment. It is a schedule showing precisely how a loan will be repaid, giving the required payment on each payment date and a breakdown into interest and repayment of principal.

Borrowers often need to know the **total interest paid in given years** because interest payments may be a **tax-deductible expense**; **principal payments are not tax deductible**.

> [!example] From the slides: $20,000 loan, 5 years, 12% a year, monthly payments
> What is the amortization schedule for the first three months?
>
> **Step 1: find the monthly payment** by solving the PV-of-annuity formula for $PMT$, using $r = 12\%/12 = 1\%$ per month and $N = 5 \times 12 = 60$:
> $$20{,}000 = PMT\left[\frac{1-(1.01)^{-60}}{0.01}\right] \;\Rightarrow\; PMT = \frac{20{,}000}{44.955} = \textbf{\$444.89}$$
>
> **Step 2, each month:**
> - **Interest portion** = $r \times$ beginning-of-month loan balance (month 1: $0.01 \times 20{,}000 = \$200.00$)
> - **Principal portion** = loan payment $-$ interest ($444.89 - 200.00 = \$244.89$). The total monthly payment consists of both interest and principal, so the principal part is found by subtracting the interest part.
> - **End-of-month balance** = beginning balance $-$ principal paid ($20{,}000 - 244.89 = \$19{,}755.11$)

| Month | Beginning balance ($) | Payment ($) | Interest ($) | Principal ($) | End balance ($) |
|---|---|---|---|---|---|
| 1 | 20,000.00 | 444.89 | 200.00 | 244.89 | 19,755.11 |
| 2 | 19,755.11 | 444.89 | 197.55 | 247.34 | 19,507.77 |
| 3 | 19,507.77 | 444.89 | 195.08 | 249.81 | 19,257.96 |
| 58 | 1,308.41 | 444.89 | 13.08 | 431.81 | 876.60 |
| 59 | 876.61 | 444.89 | 8.77 | 436.12 | 440.49 |
| 60 | 440.49 | 444.89 | 4.40 | 440.49 | 0.00 |

> [!tip] What to notice (added)
> The payment stays **constant**, but the **interest part shrinks** every month (because the balance shrinks) and the **principal part grows**. The balance reaches exactly zero at the last payment.

---

## Added: solving for the rate or the number of years

Learning objective 4 asks you to solve for the **implied interest rate**, but the slides do not work an example. Rearrange the lump-sum formula:

$$r = \left(\frac{FV}{PV}\right)^{1/n} - 1 \qquad\qquad n = \frac{\ln(FV/PV)}{\ln(1+r)}$$

> [!example] Added
> Tk 1,000 grows to Tk 1,469.33 in 5 years: $r = (1.46933)^{1/5} - 1 =$ **8%**. At 8%, money doubles in $\ln 2 / \ln 1.08 \approx$ **9.01 years**.

---

## Slide errors found

> [!warning] Check (my corrections)
> - **Slide 25, Saadman:** the working shows `1000005` instead of **100,000**, and the answer printed (68,058.56) is slightly off. Correct value: $100{,}000/1.08^5 =$ **68,058.32**.
> - **Slide 54, Dhaka Tobacco (a):** the subtraction line prints 0.7606077506 where it should be **0.7606079506**, and the final multiplication is also printed wrongly (152,121.12). The correct answer is **152,121.59**. The decision (sell) is unchanged.
> - **Slide 56:** the PV formula is printed without the division by $r$. It should be $PV = PMT\left[\frac{1-(1+r)^{-N}}{r}\right]$.
> - **Slide 18:** the table method is written with "FVIF" but it is a **PVIF** calculation (127.63 × 0.7835).
> - **Slide 41:** the total 1,397.497 adds the rounded values; the exact total is **1,397.514**. Use either, but know why they differ.
> - **Slide 23, exercise 1:** 2,022.77 should be **2,022.78** (rounding).
> - **Slide 57:** rows 58 to 60 look like they were carried from an unrounded spreadsheet; if you roll the table forward with the rounded $444.89$ the balances differ by a few cents (for example 1,308.32 instead of 1,308.41 at month 58). Not an exam issue.

---

## Slide coverage map

| Slides | Content | Section in this note |
|---|---|---|
| 1 to 2 | Chapter objective, learning objectives | Objective and learning objectives |
| 3 to 4 | The question of $1 million now or later; what TVM is | 1 |
| 5 to 7 | Time preference theory: consumption, uncertainty, investment opportunity, inflation | 1 |
| 8 | Uses of TVM | 1 |
| 9 to 10 | Concept of interest, other names for the rate, two types | 2 |
| 11 | Simple interest | 2 |
| 12 to 13 | Compound interest and its table | 2 |
| 14 | Cash flow, inflow, outflow | 3 and key terms |
| 15 to 16 | Future value, equation and table method, FVIF table | 5 |
| 17 | Compounding and discounting | 3 |
| 18 | Present value | 6 |
| 19 | Three cash-flow patterns (FDR, DPS, investment returns) | 4 |
| 20 to 21 | Formula tables, general formulas with $m$ | 4 |
| 22 to 23 | FV of a lump sum and exercises | 5 |
| 24 to 25 | PV of a lump sum and exercises | 6 |
| 26 to 29 | Annuity definition, types, timelines, ordinary vs due | 7 |
| 30 to 34 | FV of ordinary annuity and annuity due | 7 |
| 35 to 38 | PV of ordinary annuity and annuity due | 7 |
| 39 to 41 | Uneven cash flows: PV | 8 |
| 42 to 44 | Uneven cash flows: FV | 8 |
| 45 to 48 | Compounding, discrete vs continuous | 9 |
| 49 to 51 | Semiannual and other periods: FV and PV | 9 |
| 52 | Perpetuities | 10 |
| 53 to 54 | Dhaka Tobacco example | 10 |
| 55 to 59 | Amortization table, example, schedule | 11 |

---

## Self-test questions

> [!question]- 1. Why does a taka today beat a taka next year even if there is no inflation?
> Because of the other arguments in time preference theory: current consumption is preferred, the future is uncertain (needs a risk premium), and today's money can be invested to earn a return (opportunity cost).

> [!question]- 2. What is the difference between compounding and discounting?
> Compounding converts present value to future value (forward). Discounting converts future value to present value (backward). Discounting is the reverse of compounding.

> [!question]- 3. Find the FV of Tk 2,000 for 4 years at 6% compounded annually.
> $2{,}000 \times 1.06^4 =$ **Tk 2,524.95**.

> [!question]- 4. Find the PV of Tk 50,000 due in 3 years at 9%.
> $50{,}000 / 1.09^3 =$ **Tk 38,609.17**.

> [!question]- 5. You are offered Tk 100 now or Tk 105 in a year, and you can earn 8% elsewhere. Which do you take?
> PV of 105 = $105/1.08 =$ **Tk 97.22**, which is less than 100. Take the **Tk 100 now**.

> [!question]- 6. You deposit Tk 5,000 a year for 6 years at 12%. Find the FV if deposits are at the end of each year, and at the start.
> Ordinary: $5{,}000 \times 8.1152 =$ **Tk 40,575.95**. Due: $\times 1.12 =$ **Tk 45,445.06**.

> [!question]- 7. Find the PV of Tk 5,000 a year for 6 years at 12% (ordinary annuity, then annuity due).
> Ordinary: $5{,}000 \times 4.1114 =$ **Tk 20,557.04**. Due: $\times 1.12 =$ **Tk 23,023.88**.

> [!question]- 8. A bond pays Tk 3,000 a year forever. At 12%, what is it worth?
> $3{,}000 / 0.12 =$ **Tk 25,000**.

> [!question]- 9. What is the effective annual rate of 12% compounded monthly, and why is it higher than 12%?
> $(1.01)^{12} - 1 =$ **12.68%**. Interest is added 12 times a year, so later interest is earned on earlier interest.

> [!question]- 10. A Tk 100,000 loan is repaid in 5 equal yearly payments at 10%. Find the payment and the split in year 1.
> $PMT = 100{,}000 / 3.7908 =$ **Tk 26,379.75**. Year-1 interest = $0.10 \times 100{,}000 =$ **Tk 10,000**; principal = $26{,}379.75 - 10{,}000 =$ **Tk 16,379.75**; balance after year 1 = **Tk 83,620.25**.

> [!question]- 11. In an amortization table, what happens to the interest and principal parts over time, and which is tax deductible?
> The payment is constant; interest falls and principal rises as the balance falls. **Interest** is tax deductible; principal is not.

> [!question]- 12. Why is an annuity due worth more than an ordinary annuity with the same payments?
> Every payment comes one period earlier, so each earns (FV) or avoids discounting for (PV) one extra period: the value is multiplied by $(1+r)$.

> [!question]- 13. What are the two types of interest, and what is the difference?
> **Simple** interest is earned on the original principal only. **Compound** interest is earned on the principal and on the interest already earned.

> [!question]- 14. Dhaka Tobacco earns Tk 20,000 a year, discount rate 10%. BAT offers Tk 160,000. When should it sell?
> If the product lasts 15 years, PV = **Tk 152,121.59**, which is below 160,000, so **sell**. If it lasts indefinitely, PV = $20{,}000/0.10 =$ **Tk 200,000**, which is above 160,000, so **do not sell**.
