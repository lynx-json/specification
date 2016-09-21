# Number Validation Constraint Value

## Name

`http://lynx-json.org/validation/number`

## Meaning

The number validation constraint value expresses a numerical constraint or an array of numerical constraints for an input value.

## Format Rules

A number validation constraint value MUST be a number validation constraint object or an array of number validation constraint objects that complies with the following rules:

- MUST comply with the [validation constraint object](/specifications/properties/validation/index.md#validation-constraint-object) rules.
- MAY have a `min` property. If present, the value MUST be a number.
- MAY have a `max` property. If present, the value MUST be a number.
- MAY have a `step` property. If present, the value MUST be a positive number.

## Examples

### Number Validation Constraint Object

```json
{
  "rating": null,
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "rating",
        "input": true,
        "validation": {
          "number": {
            "invalid": "ratingError",
            "min": 1,
            "max": 5
          }
        }
      }
    ]
  }
}
```

### Array of Number Validation Constraint Objects

```json
{
  "rating": null,
  "ratingMinError": "The value must be 1 or more.",
  "ratingMaxError": "The value must be 5 or less.",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "rating",
        "input": true,
        "validation": {
          "number": [
            {
              "invalid": "ratingMinError",
              "min": 1
            },
            {
              "invalid": "ratingMaxError",
              "max": 5
            }
          ]
        }
      },
      {
        "name": "ratingMinError",
        "hints": [ "text" ]
      },
      {
        "name": "ratingMaxError",
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

The user agent MAY ignore the `number` property, otherwise it MUST comply with the following rules for each number validation constraint object in its value:

- If the input value is `undefined`, `null`, or `""`, then the validation state of the constraint is `valid` and the following tests should not be performed.
- If the input value is not numeric, then the validation state of the constraint is `invalid`.
- If the `min` property is present and its value is greater than the input value, then the validation state of the constraint is `invalid`.
- If the `max` property is present and its value is less than the input value, then the input fails validation.
- If the `step` property is present and the input value is not evenly divisible by the `step` value, then the validation state of the constraint is `invalid`.
- If the previous tests have not determined the validation state of the constraint to be `invalid`, then the validation state of the constraint is `valid`.

## User Agent Considerations

None
