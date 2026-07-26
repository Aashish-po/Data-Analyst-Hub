# Avoiding Chartjunk: Design Rules for Data Visuals

**May 2025 · 7 min read · Tags: Visualization, Best Practices, Design**

---

Edward Tufte introduced the term "chartjunk" in 1983. Forty years later, PowerPoint decks are still full of it — 3D bar charts, gradient fills, decorative icons, gridlines on gridlines, and legends placed so far from the data they describe that readers give up and skim to the next slide.

Chartjunk is anything on a chart that doesn't carry information. It doesn't just fail to help — it actively degrades comprehension. The eye spends energy processing visual noise before it reaches the signal.

The fix is not aesthetic. It's principled. Here's the framework.

---

## The Data-Ink Ratio

Tufte's central idea: maximise the ratio of data-ink to total ink on the chart.

Data-ink is ink (or pixels) that would change the data if removed. Everything else is non-data-ink — gridlines, borders, backgrounds, decorative elements, redundant labels.

The principle isn't minimalism for its own sake. It's that every non-data element competes with the data for attention. Remove the competition, and the data wins.

In practice, this means: before adding anything to a chart, ask whether removing it would change what the reader learns. If the answer is no, don't add it.

---

## The Seven Rules

### Rule 1: Remove Gridlines, or Reduce Them Dramatically

Heavy gridlines turn charts into graph paper. If you need gridlines at all — and for simple bar charts, you often don't — use a single light grey horizontal line at meaningful intervals. Never use vertical gridlines unless the x-axis value at a specific point is genuinely critical to read.

The default gridline settings in Excel and Google Sheets are too heavy. Change them on every chart, every time.

---

### Rule 2: Never Use 3D

3D charts distort perception. A 3D bar chart makes bars at the back appear shorter than equally-valued bars at the front because of perspective foreshortening. A 3D pie chart makes the front slice appear larger than the back slice.

There is no data story that requires a third spatial dimension on a standard chart. The third dimension in your data should be encoded as colour, size, or a separate small-multiple chart — never as literal depth.

Delete 3D from your chart options at the application level if your tool allows it.

---

### Rule 3: Use Colour Intentionally, Not Decoratively

Colour is a data encoding channel. When it's used decoratively — different colours for each bar in a single-series chart — it implies categorical differences that don't exist. The reader's brain looks for the pattern that the colour is suggesting. Finding none, they become confused or distrustful.

Use colour to encode meaning:

- A single accent colour to highlight the bar you're talking about
- A sequential scale (light to dark) for quantitative intensity
- A diverging scale for values above and below a midpoint
- Distinct hues only for genuinely categorical data

If all your categories are the same colour, they read as the same type of thing — which is usually accurate.

One critical note: 8% of men and 0.5% of women have red-green colour vision deficiency. A red/green encoding for good/bad is inaccessible to a substantial portion of your audience. Use blue/orange as the default alternative.

---

### Rule 4: Label Directly, Avoid Legends Where Possible

A legend requires the reader's eye to travel from the data to the legend, decode the colour, return to the data, and repeat for every category. Every trip costs attention.

Direct labelling — placing the category name adjacent to the line, bar, or data point it describes — eliminates this cost entirely. For line charts with multiple series, label the end of each line. For bar charts, label the bars directly if space allows.

Legends are acceptable when direct labels would overlap or when the chart is being used in a format where it will be read carefully rather than scanned. In most presentation and dashboard contexts, direct labelling is superior.

---

### Rule 5: Axes Must Be Honest

Bar charts must start at zero. This is not a preference — it's a requirement. A bar chart encodes value as the length of the bar. If the axis doesn't start at zero, the bar length no longer represents the data accurately, and comparisons between bars are distorted.

Line charts have more flexibility. Because a line chart encodes change over time through slope rather than bar length, the y-axis can be truncated to show meaningful variation that would be invisible at the full scale. But the axis range must be visible and accurate — never hidden or misleading.

Never manually adjust an axis range to exaggerate a trend you want to emphasise. This is the most common form of visual dishonesty in data work.

---

### Rule 6: One Message Per Chart

A chart that tries to show everything shows nothing clearly. If you have three findings, make three charts.

The title of a chart should be the finding, not the description. "Revenue by Quarter" is a description. "Q4 Revenue Fell 18% Despite Record Unit Sales" is a finding. The reader who skims the title of the second version still leaves with information.

Write the title first. If you can't write a one-sentence finding title, the chart doesn't have a point yet.

---

### Rule 7: Align to a Grid

Misaligned charts, uneven spacing, inconsistent font sizes, and varying chart dimensions create visual noise even when the individual charts are clean. Readers register misalignment as carelessness before they process the content.

In dashboards and reports, set consistent chart dimensions, use identical fonts throughout, and align elements to an underlying grid. The visual coherence signals that the analysis itself is coherent — which shapes how the reader approaches the findings.

---

## The Edit Pass

Every chart deserves one editing pass with a single question per element:

- **This axis label** — does it need to be here, or does the chart title make it redundant?
- **This gridline** — does it help a reader read a specific value, or is it just there by default?
- **This legend** — can I label the data directly instead?
- **This colour** — is it encoding something, or is it decorative?
- **This border** — does the chart need a box around it, or does the background colour create enough separation?

Remove anything that fails the test. The chart that remains will communicate faster, read more cleanly, and make the analysis look more considered — because considered analysis produces charts that don't need decoration to look authoritative.

---

## Takeaway

Chartjunk is not a style preference. It's a comprehension tax. Every unnecessary element on a chart is something the reader has to process before reaching the data.

Maximise the data-ink ratio. Label directly. Use colour with intent. Start bar charts at zero. Give every chart one message and a title that states it.

The goal is not a beautiful chart. The goal is a chart where the data speaks without competition.

---

*Tags: Visualization · Best Practices · Design · Edward Tufte*
