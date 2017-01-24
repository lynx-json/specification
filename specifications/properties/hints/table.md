# Table Hint

## Name

`http://lynx-json.org/table`

## Meaning

A `table` hint describes a `list` of values that are comparable to each other in some way.

## Related Hints

- `[ "table", "list", ... ]`

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST contain only `header` or `group` values.

## Example

```json
{
  "spec": {
    "hints": [ "table", "list", "container" ]
  },
  "value": [
    {
      "spec": {
        "hints": [ "header", "container" ],
        "children": {
          "hints": [ "text" ]
        }
      },
      "value": [
        "Rank",
        "Movie",
        "Inflation Adjusted Gross"
      ]
    },
    {
      "spec": {
        "hints": [ "group", "container" ],
        "children": {
          "hints": [ "text" ]
        }
      },
      "value": [
        1,
        "How the Grinch Stole Christmas",
        "$406,213,839"
      ]
    },
    {
      "spec": {
        "hints": [ "group", "container" ],
        "children": {
          "hints": [ "text" ]
        }
      },
      "value": [
        2,
        "Despicable Me 2",
        "$381,646,568"
      ]
    },
  ]
}

```

## Authoring Rules

None

## Authoring Considerations

Use a `table` hint when values in a list are comparable to each other.

## User Agent Rules

None

## User Agent Considerations

The user agent should display the table in a way that allows easy comparison of
values. This is usually accomplished by organizing the table into rows and columns.
