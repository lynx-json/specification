# Hints Specification Property

## Name

`http://lynx-json.org/hints`

## Meaning

The `hints` property of a specification describes the meaning of a value.

## Format Rules

- The `hints` property is REQUIRED when referring to a value that does not have its own `spec` property. Otherwise, the `hints` property is OPTIONAL.
- MUST be an array of strings.
- MUST be ordered from more specific to less specific.
- SHOULD end with a [base hint](../../../#base-hint).

## Example

```json
{
  "name": "Irwin M. Fletcher",
  "spec":{
    "hints": [ "container" ],
    "children": [
      {
        "name": "name",
        "hints": [
          "http://www.example.com/character-name",
          "text"
        ]
      }
    ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

- The user agent MUST process hints in order from more specific to less specific. The user agent MUST find the most specific hint that it understands and process the value based on that understanding.
- If the user agent does not understand any hints it SHOULD ignore the value.
- SHOULD understand all of the [base hints](../../../#base-hint).

## User Agent Considerations

None
