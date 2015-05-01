# Required

The `required` property indicates that an input value is required.

## Format Rules

- The `required` property is OPTIONAL.
- If present, it MUST have a `message` property whose value MUST be a [same-document reference](#same-document-reference) to the content to display when the input value fails validation.

## Example

```json
{
  "name": "actor",
  "input": true,
  "validation": {
    "required": {
      "message": "#actorRequired"
    }
  }
}
```

## User Agent Rules

The user agent MAY ignore the `required` property, otherwise it MUST comply with the following rules:

- If the input value is `null`, `undefined`, `""`, or `[]`, then the input fails validation.
- If the input fails validation, then the user agent MUST set the `visibility` of the content identified by the `message` property to `visible`.
