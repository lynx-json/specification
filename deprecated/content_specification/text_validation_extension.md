# Text

The `text` property describes the validity of a text input.

## Format Rules

The `text` property is OPTIONAL. If present, it MUST be an an object or array of objects matching the following rules:

- MUST have a `message` property whose value MUST be a [same-document reference](#same-document-reference) to the content to display when the input value fails validation.
- MAY have a `minLength` property. If present, the value of the property MUST be a nonnegative integer.
- MAY have a `maxLength` property. If present, the value of the property MUST be a nonnegative integer.
- MAY have a `pattern` property. If present, the value of the property MUST be a string representing a valid JavaScript regular expression as defined in [ECMA 262, Section 15.10](#ecma-262).

## Examples

### Text Validation Object

```json
{
  "name": "actor",
  "input": true,
  "validation":{
    "text": {
      "message": "#actorPatternError",
      "pattern": "Chevy Chase|Bill Murray"
    }
  }
}
```

### Text Validation Array

```json
{
  "name": "actor",
  "input": true,
  "validation":{
    "text": [
      {
        "message": "#actorMinLengthError",
        "minLength": 2
      },
      {
        "message": "#actorPatternError",
        "pattern": "Chevy Chase|Bill Murray"
      }
    ]
  }
}
```

## User Agent Rules

The user agent MAY ignore the `text` property, otherwise it MUST comply with the following rules:

- If the input value is `null`, `undefined`, or `""`, then the input passes validation.
- If the `minLength` property is present and its value is greater than the length of the input value, then the input fails validation.
- If the `maxLength` property is present and its value is less than the length of the input value, then the input fails validation.
- If the `pattern` property is present, the user agent MUST compile the regular expression specified in its specified value with the global, ignoreCase, and multiline options disabled and match against the full input value (If the pattern does not start with ‘^’, it is implied. If the pattern does not end with ‘$’, it is implied). If the input value does not match the regular expression, then the input fails validation.
- If the input fails validation, then the user agent MUST set the `visibility` of the content identified by the `message` property to `visible`.
