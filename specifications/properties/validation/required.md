# Required Validation Constraint Value

## Name

http://lynx-json.org/validation/required

## Meaning

The required validation constraint value expresses a required constraint for an input value.

## Format Rules

A required validation constraint value MUST be a required validation constraint object that complies with the following rules:

- MUST comply with the [validation constraint object](#validation-constraint-object) rules.

## Examples

```json
{
  "actor": null,
  "actorRequiredError": "The value is required.",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "actor",
        "input": true,
        "validation": {
          "required": {
            "invalid": "actorRequiredError"
          }
        }
      },
      {
        "name": "actorRequiredError",
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

The user agent MAY ignore the `required` property, otherwise it MUST comply with the following rules:

- If the input value is `undefined`, `null`, `""`, or `[]`, then the validation state of the constraint is `invalid`; otherwise, the validation state of the constraint is `valid`.

## User Agent Considerations

None
