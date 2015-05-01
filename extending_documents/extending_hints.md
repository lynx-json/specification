# Hint Extensions

While sufficient for describing the most basic characteristics of values, the hints defined in this document are not sufficient to meaningfully describe all values. Authors will find benefit in defining hints to describe the values in their domain.

## Format Rules

- MUST conform to the rules defined for [hint objects](#hint-object).
- MUST document the name of the hint. The name MUST be an absolute URI.
- SHOULD document the meaning of the hint and its relationship to a less specific hint, if applicable. When this relationship is identified, the two hints MUST always be present together in a `hints` array in proper order.
- SHOULD document the JSON value(s) the hint can describe and any relevant format rules.
- SHOULD document rules or considerations for how user agents process, interpret, and convey the value.

## Example

The following is an example of the documentation that an author could use to define an extended hint:

> ### Rating Hint
>
> #### Name
> http://example.com/rating
>
> #### Meaning
> The rating hint is used to describe values that represent how
> happy a person is with a product or service.
>
> #### Related Hint
> The rating hint is more specific than the `text` hint in Lynx.
>
> #### Format Rules
> - MUST be a number with a value from 1 to 5 (inclusive).
> - If a fractional component is present and is not equal to 0.5,
> then the fractional component should be rounded to the
> nearest 0.5.
>
> #### Example
> ```json
> {
>   "title": "Good Will Hunting",
>   "averageReview": 4.5,
>   "spec": {
>     "hints": [ "object" ],
>     "children": [
>       {
>         "name": "title",
>         "hints": [ "title", "text" ]
>       },
>       {
>         "name": "averageReview",
>         "hints": [
>           "http://example.com/rating",
>           "text"
>         ]
>       }
>     ]
>   }
> }
> ```
>
> #### User Agent Considerations
> A user agent with a graphical user interface should consider
> using a more graphical representation to convey the rating to
> the user. For example, it is very common to use a graphical
> meter comprised of 5 stars where the number of filled stars
> represents the rating value.


## Authoring Considerations

When defining an extended hint, authors are strongly encouraged to relate the new hint to a [base hint](#base-hints). Doing so will ensure that the value can still be conveyed by user agents that understand Lynx hints even if they do not understand the extended hint.
