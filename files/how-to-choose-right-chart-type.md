# How to Choose the Right Chart Type

**Tags: Visualization, Best Practices**

---

Most analysts default to bar charts. Not because bar charts are always right — but because they're safe. Safe choices produce forgettable dashboards.

The chart you choose is an argument. It says: *this is the relationship that matters, and this is the best way to see it.* Choosing wrong doesn't just look bad — it actively misleads. An audience reads the chart before they read the label.

Here's the decision framework that cuts through the noise.

---

## The Core Principle: Match the Chart to the Question

This sounds obvious. It isn't practiced. Most people choose charts based on what data they have. The correct approach: start with the question you're answering, then select the chart that makes the answer immediately visible.

Ask yourself: **What is the reader supposed to take away in the first three seconds?**

That single constraint eliminates most chart-type debates.

---

## The Four Question Types — and the Charts That Serve Them

### 1. Comparison: How do values differ across categories?

**Use: Bar chart (horizontal or vertical)**

Bar charts are the workhorse of comparison. Vertical bars for time (months, quarters). Horizontal bars for categories with long names or when you have more than six items — rotating labels on vertical bars is always a mistake.

Avoid pie charts here. Humans are poor at comparing angles and areas. A bar chart showing five segments is always clearer than a pie showing five slices.

**When to break this rule**: Grouped bar charts become unreadable beyond three groups. Switch to a small-multiple approach or a dot plot.

---

### 2. Trend: How does a value change over time?

**Use: Line chart**

Line charts communicate change and direction. The slope is the message. If values are not connected — discrete events rather than a continuous series — use a bar chart instead, because the line implies continuity that doesn't exist.

Common mistake: using a line chart with too many series. Three to four lines is typically the maximum before the chart becomes a spaghetti plot. If you need more, consider indexing to a baseline (100 = start) so trajectories are comparable regardless of scale.

---

### 3. Relationship: Do two variables correlate?

**Use: Scatter plot**

Scatter plots reveal correlation, clusters, and outliers simultaneously. They're underused in business analytics because they feel "statistical" — which is exactly why they signal analytical depth when used correctly.

Add a trend line when the correlation direction is the point. Label outliers directly on the chart rather than describing them in accompanying text.

Avoid using scatter plots when you have fewer than 20 data points — the pattern isn't reliable enough to be meaningful, and the chart will look sparse.

---

### 4. Distribution: How is a variable spread across its range?

**Use: Histogram or box plot**

Histograms show frequency across bins — useful for seeing whether a distribution is normal, skewed, bimodal, or heavy-tailed. Box plots (or violin plots) are better when comparing distributions across groups.

This is the most neglected chart type in business analytics. Reporting only the mean hides everything interesting about a distribution. Session duration, transaction values, load times — these almost always have long tails that the average conceals.

---

## Special Cases Worth Knowing

**Heatmap**: Use when you have two categorical dimensions and a continuous value. Week vs. hour of day and activity level is the classic example. The human eye reads colour gradients quickly for dense matrices — better than any table or grouped bar chart.

**Waterfall chart**: Use for decomposition — showing how a starting value reaches an ending value through additions and subtractions. Finance teams overuse these; analysts underuse them for things like user funnel drop-off or budget variance analysis.

**Small multiples**: When you want to compare the same chart across many segments, replicate the chart at small size rather than overlaying everything on one chart. Works exceptionally well for regional comparisons or cohort breakdowns.

---

## What to Actively Avoid

**3D charts**: They introduce a third visual dimension that carries no data. They distort perception and exist purely for decoration. Remove them from your toolkit entirely.

**Dual-axis charts**: Two Y-axes create apparent correlations that may not exist. Readers don't know which axis to trust. Use two separate charts if two scales are genuinely required.

**Donut charts**: A pie chart with a hole. The hole doesn't add information. If you're using this, use a bar chart.

**Truncated Y-axes**: Starting a bar chart at a value other than zero exaggerates differences. This is a common dark pattern in media. Don't do it accidentally; don't do it deliberately.

---

## The Pre-Publish Checklist

Before any chart goes into a report or dashboard, run it through these four questions:

1. **Can someone read the takeaway in under five seconds without me explaining it?**
2. **Is every element on this chart carrying information, or is some of it decoration?**
3. **Would a different chart type make the answer more obvious?**
4. **Am I showing the right level of detail for this audience?**

If the answer to question one is no, the chart needs work — not more labels, but a different structure.

---

## Takeaway

The best chart is the one that makes the answer self-evident. That means starting with the question, not the data. It means knowing which question type (comparison, trend, relationship, distribution) maps to which visual form. And it means the discipline to cut anything that doesn't carry meaning.

A chart that requires explanation has already failed. Build the explanation into the structure.

---

*Tags: Visualization · Best Practices · Data Analytics*
