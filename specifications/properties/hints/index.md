# Hints Specification Property

## Name

`http://lynx-json.org/hints`

## Meaning

The `hints` property of a specification describes the meaning of a value.

## Format Rules

The `hints` property is REQUIRED when referring to a value that does not have its own `spec` property. Otherwise, the `hints` property is OPTIONAL. If present, it MUST comply with the rules below for a [hint array](#hint-array).

### Hint Object

- MUST have a `name` property to identify the hint. If a `name` value is unqualified, it MUST be assumed to be in the `http://lynx-json.org/` namespace. For example, a value of `text` MUST be considered to be `http://lynx-json.org/text`.
- MAY have a `documentation` property. If present, its value MUST be a [URL](#url) defining the location of human-readable documentation for the hint.

### Hint Array

- MUST be ordered from more specific to less specific.
- MAY contain a string instead of a hint object. If a string value is present, it is assumed to be a hint object with a name equal to the string value. For example, a hint of `"text"` is equivalent of `{ "name": "text" }`.
- SHOULD end with a [base hint](#base-hint).

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
          {
            "name": "http://www.example.com/character-name",
            "documentation": "http://www.example.com/hints/character-name"
          },
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
- SHOULD understand all of the [base hints](#base-hint).

## User Agent Considerations

None
