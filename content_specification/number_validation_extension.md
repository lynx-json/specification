# Number

The `number` property describes the validity of a number input.

## Format Rules

The `number` property is OPTIONAL. If present, it MUST be an an object or array of objects matching the following rules:

- If present, it MUST have a `message` property whose value MUST be a [same-document reference](#same-document-reference) to the content to display when the input value fails validation.
- MAY have a `min` property. If present, the value MUST be a number.
- MAY have a `max` property. If present, the value MUST be a number.
- MAY have a `step` property. If present, the value MUST be a positive number.

## Examples

### Number Validation Object

```json
{
  "name": "fletchViewings",
  "input": true,
  "validation":{
    "number": {
      "message": "#fletchViewingsError",
      "min": 10
    }
  }
}
```

### Number Validation Array

```json
{
  "name": "fletchRating",
  "input": true,
  "validation":{
    "number": [
      {
        "message": "#fletchRatingTooLowError",
        "min": 95
      },
      {
        "message": "#fletchRatingTooHighError",
        "max": 100
      },
      {
        "message": "#fletchRatingStepError",
        "step": 1
      }
    ]
  }
}
```

## User Agent Rules

The user agent MAY ignore the `number` property, otherwise it MUST comply with the following rules:

- If the input value is `null`, `undefined`, or `""`, then the input passes validation.
- If the input value is not numeric, then it fails validation.
- If the `min` property is present and its value is greater than the input value, then the input fails validation.
- If the `max` property is present and its value is less than the input value, then the input fails validation.
- If the `step` property is present and the input value is not evenly divisible by the `step` value, then the input fails validation.
- If the input fails validation, then the user agent MUST set the `visibility` of the content identified by the `message` property to `visible`.
