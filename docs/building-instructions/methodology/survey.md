# Survey

## Calculating statistical significance

To calculate the confidence level, interval, and margin of error for the survey, you would typically use statistical methods that involve sampling distributions and standard errors. Here’s a general approach to these calculations:

### Confidence level

Confidence level is chosen by the researcher and reflects how sure you want to be about the estimates you make from your sample. Common confidence levels are 90%, 95%, and 99%.

### Margin of error

Margin of error is a measure of the accuracy of the survey's results and is calculated by multiplying the standard error (SE) of the estimate with the critical value `z` that corresponds to the chosen confidence level.

```math
\text{MoE} = z \cdot \sqrt{\left(\frac{p̂(1-p̂)}{n}\right) }
```

Where:

- `z` is the z-score corresponding to the confidence level (see table)
- `p̂` is the sample proportion
- `n` is the sample size

| z    | Confidence level |
| ---- | ---------------- |
| 1.28 | 80%              |
| 1.64 | 90%              |
| 1.96 | 95%              |
| 2.33 | 98%              |
| 2.58 | 99%              |

### Confidence interval

This is a range of values that is likely to contain the population parameter (in this case, the true proportion of the population that would answer in a certain way). The confidence interval is calculated as:

```math
\text{CI} = \text{sample proportion} \pm \text{MoE}
```

```math
\text{CI} = p̂ \pm z \cdot \sqrt{\left(\frac{p̂(1-p̂)}{n}\right) }
```

### Example

You have a sample size `n` of 200 developers.

You would need to calculate the sample proportion `p̂` for each response option on the Likert scale for each question.

Choose your confidence level, we will use 95% for this example.

You can calculate the confidence interval and margin of error for the whole survey if you are looking at a composite score (e.g., an average of all the questions) or you can calculate it for each question individually. Calculating for each question individually is more common because it allows you to see the variation in responses for each aspect of the software being evaluated.

In question 1, 100 developers chose answered 4 on the Likert scale. The sample proportion `p̂` for this response is: 

```math
p̂ = \frac{100}{n} = \frac{100}{200} = 0.5
```

The margin of error for this response is:

```math
\begin{align*}
z &= 1.96 \\
\text{MoE} &= 1.96 \cdot \sqrt{\left(\frac{0.5(1-0.5)}{200}\right) } = 0.0692964646 &\approx 0.69 \\
\end{align*}
```

The confidence interval (CI) for this response is:

```math
\begin{align*}
\text{CI} &= 0.5 \pm 0.069 \\
\text{CI} &= (0.431, 0.569)
\end{align*}
```


It’s important to note that if you want to generalize the survey results to all 2000 developers, you need to ensure that your sample is representative of the population. If the sample is biased, then the confidence interval and margin of error may not accurately reflect the true population parameters.

Lastly, to calculate these statistics, you can use statistical software or online calculators. If you provide the sample proportion (p) for a question or a composite score, I can help you calculate the margin of error and confidence interval for that specific case.

## Dictionary

**Sample proprtion**: `p̂` is the sample proportion (the number of respondents choosing a particular option divided by the total number of respondents)
