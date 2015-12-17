# Text Validation Constraint Value

## Name

http://lynx-json.org/validation/text

## Meaning

The text validation constraint value expresses a text constraint or an array of text constraints for an input value.

## Format Rules

A text validation constraint value MUST be a text validation constraint object or an array of text validation constraint objects that complies with the following rules:

- MUST comply with the [validation constraint object](#validation-constraint-object) rules.
- MAY have a `minLength` property. If present, the value of the property MUST be a nonnegative integer.
- MAY have a `maxLength` property. If present, the value of the property MUST be a nonnegative integer.
- MAY have a `pattern` property. If present, the value of the property MUST be a string representing a valid JavaScript regular expression as defined in [ECMA 262, Section 15.10](#ecma-262).

## Examples

### Text Validation Constraint Object

```json

  "actor": null,
  "actorPatternError": "The value must be 'Chevy Chase' or 'Bill Murray'.",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "actor",
        "input": true,
        "validation": {
          "text": {
            "invalid": "actorPatternError",
            "pattern": "Chevy Chase|Bill Murray"
          }
        }
      },
      {
        "name": "actorPatternError",
        "hints": [ "text" ]
      }
    ]
  }
}
```

### Array of Text Validation Constraint Objects

```json
{
  "actor": null,
  "actorMinLengthError": "The value must be 2 or more characters.",
  "actorMaxLengthError": "The name must be 100 or fewer characters.",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "actor",
        "input": true,
        "validation": {
          "text": [
            {
              "invalid": "actorMinLengthError",
              "minLength": 2
            },
            {
              "invalid": "actorMaxLengthError",
              "maxLength": 100
            }
          ]
        }
      },
      {
        "name": "actorMinLengthError",
        "hints": [ "text" ]
      },
      {
        "name": "actorMaxLengthError",
        "hints": [ "text" ]
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

// TODO: remove "ignore" and decide on wording

The user agent MAY ignore the `text` property, otherwise it MUST comply with the following rules for each text validation constraint object in its value:

- If the input value is `undefined`, `null`, or `""`, then the validation state of the constraint is `valid` and the following tests should not be performed.
- If the `minLength` property is present and its value is greater than the length of the input value, then the validation state of the constraint is `invalid`.
- If the `maxLength` property is present and its value is less than the length of the input value, then the validation state of the constraint is `invalid`.
- If the `pattern` property is present, the user agent MUST compile the regular expression specified in its value with the global, ignoreCase, and multiline options disabled and test the input value for a match. If the pattern does not start with ‘^’, it is implied. If the pattern does not end with ‘$’, it is implied. If the input value does not match the regular expression, then the validation state of the constraint is `invalid`.
- If the previous tests have not determined the validation state of the constraint to be `invalid`, then the validation state of the constraint is `valid`.

## User Agent Considerations

None
