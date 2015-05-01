# Validation

The `validation` property of a specification describes the validity of form input values.

## Format Rules

If the `input` property is present, the `validation` property is OPTIONAL. Otherwise, the `validation` property MUST NOT be present.

## Example

```json
{
  "name": "actor",
  "input": true,
  "validation": {}
}
```

## User Agent Rules

- The user agent SHOULD ensure that validity has been evaluated for all inputs before submitting the form.
- If any inputs are invalid, the user agent MUST take the action prescribed by the validation property.
- The user agent MUST allow a user to submit a form even if inputs are invalid.
