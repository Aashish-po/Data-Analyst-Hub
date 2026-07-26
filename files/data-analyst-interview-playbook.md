# The Data Analyst Interview Playbook

**Tags: Interview Prep, Strategy**

---

The data analyst interview is not one interview. It's three or four different assessments stacked inside a hiring process — and most candidates prepare for only one of them.

They practice SQL, walk into the case study round unprepared, and lose the offer to someone who interviewed less technically but communicated their thinking more clearly.

Here's how each round works, what it's actually testing, and where most candidates lose ground.

---

## Round 1: The SQL Screen

**What it tests**: Can you think in sets? Do you understand how databases actually process queries?

The SQL screen eliminates most candidates quickly. The problems are not hard in the algorithmic sense — there's no dynamic programming, no graph traversal. The bar is: can you write correct, efficient SQL under mild time pressure without Google?

What typically appears:

- **Window functions**: ROW_NUMBER() to find the most recent record per group, RANK() for leaderboard-style problems, LAG()/LEAD() for period-over-period comparisons, running totals with SUM() OVER.
- **Self-joins**: Finding pairs, comparing a row to itself in a different context (e.g., users who made a purchase within 30 days of registration).
- **Funnel analysis**: Multi-step conversion rates using conditional aggregation (CASE WHEN inside COUNT or SUM).
- **Deduplication**: Identifying and removing duplicate rows, often with a CTE and ROW_NUMBER partitioned by a key.

**The most common failure mode**: Candidates who know SELECT and GROUP BY but have never practiced window functions. This ends the interview in round one regardless of how strong the rest of their profile is.

**Preparation approach**: LeetCode SQL Medium difficulty is the floor. Practice specifically on window function problems until they feel mechanical. You should not be thinking about syntax — only about the logic.

---

## Round 2: The Take-Home or Python Round

**What it tests**: Can you work with real, messy data? Can you ask the right questions before you start coding?

This round comes in two forms. A live coding session in a shared notebook, or a 24–48 hour take-home where you return a report or notebook.

For live sessions, the dataset is usually intentionally messy. Nulls in unexpected columns. Columns that are clearly misencoded. Duplicate rows. The interviewer is watching how you handle ambiguity — do you assume, or do you investigate and document your assumptions?

For take-homes, the deliverable matters as much as the analysis. A notebook with narrative cells explaining *why* you made each analytical decision is stronger than a notebook with only code. A concise executive summary at the top — two or three bullet points with the key findings — demonstrates communication instinct.

**The most common failure mode**: Treating the take-home as a technical exercise rather than a communication exercise. The audience for the output is a business stakeholder, not another data scientist. Findings that require statistical knowledge to interpret are findings that didn't get communicated.

---

## Round 3: The Case Study

This is the round where strong SQL candidates lose offers to weaker technical candidates who structure their thinking better.

The case study presents a vague business problem: "Our user retention has dropped 15% over the last two months — walk us through how you'd investigate this." There's no dataset. There's no query to write. The interviewer wants to see how you think.

**The structure that works**:

**Clarify before you hypothesise.** What does "retention" mean here — 7-day, 30-day, did the definition change? Is the 15% drop in absolute numbers or relative? Does it affect all user segments or a specific cohort? Which geography, platform, or product area?

These questions are not stalling. They're the job. Analysts who jump to hypotheses before clarifying the metric are the analysts who run three weeks of analysis on the wrong thing.

**Generate hypotheses systematically.** Once the question is clear, think in categories: data quality issues (is this a tracking bug?), product changes (did something ship?), external factors (competitor, seasonality), segment-specific (is it new users or existing?). List them before prioritising.

**Prioritise by impact and diagnosability.** Not every hypothesis deserves a week of analysis. Which ones can be ruled out quickly? Which ones, if true, would explain the magnitude of the drop? Start there.

**Define what you'd look at.** Specific tables, specific queries, specific segments. Don't say "I'd look at the data." Say "I'd run a retention cohort by acquisition week to see if the drop is concentrated in recent cohorts, which would suggest an onboarding change rather than a product change."

**The most common failure mode**: Jumping to solutions before diagnosing. Candidates who say "I'd improve the onboarding experience" when asked how they'd investigate a retention drop have skipped the entire diagnostic process. That's not analysis — that's guessing.

---

## Round 4: The Behavioural Round

Often underweighted by candidates who spend all their preparation time on technical skills.

Data analyst behavioural questions have a specific shape:

- "Tell me about a time you had to communicate a finding that stakeholders didn't want to hear."
- "Describe a situation where the data didn't support the direction leadership wanted to go."
- "How have you handled a project where the requirements changed mid-analysis?"

The underlying question is always the same: **can you work with ambiguity, push back when necessary, and communicate clearly across technical and non-technical audiences?**

Prepare three or four situations from past work or projects where you made an analytical decision under uncertainty, communicated something complex to a non-technical person, or caught a data quality issue before it caused a problem. Structure each using the situation–action–result format, keeping the technical detail minimal and the reasoning visible.

---

## The Stage Most Candidates Under-Prepare

The case study. Consistently.

Technical preparation is measurable — you can track LeetCode problems solved, you can tell when your SQL gets faster. Case study preparation is harder to quantify, so it gets deprioritised.

The fix: practice with a partner, or practice out loud alone. Record yourself walking through a case study problem. Listen back. If your reasoning sounds like a list of random thoughts rather than a structured investigation, keep practicing.

The case study is where analytical thinking becomes visible. That's the skill that differentiates senior analysts from juniors — not SQL fluency.

---

## Preparation Timeline (4 Weeks to Interview-Ready)

**Week 1**: SQL fundamentals and joins. Close every gap in basic aggregation and filtering. Practice daily, 45 minutes minimum.

**Week 2**: Window functions exclusively. ROW_NUMBER, RANK, LAG, LEAD, SUM OVER. Five problems per day until they're mechanical.

**Week 3**: Python and pandas. EDA workflow — load, assess quality, explore distributions, find relationships, visualise. Run two complete end-to-end mini-analyses on public datasets.

**Week 4**: Case studies. One per day. Practice structured diagnosis: clarify → hypothesise by category → prioritise → define data approach. Do this out loud.

---

## Takeaway

Every stage of the data analyst interview tests a different competency. SQL tests set-based thinking. The take-home tests communication as much as analysis. The case study tests structured reasoning under ambiguity. The behavioural round tests whether you can work with people.

Prepare for all four. The SQL round is the entry fee. The case study is where offers are won or lost.

---

*Tags: Interview Prep · Strategy · SQL · Data Analytics*
