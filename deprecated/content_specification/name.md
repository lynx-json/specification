# Name

The `name` property of a specification identifies the property value that the specification describes.

## Format Rules

- If the specification describes a property value then `name` is REQUIRED.
- If present, the value must be the name of a property (which MAY be `undefined`).

## Example

```json
{
  "actor": "Chevy Chase",
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "actor",
        "hints": [ "text" ]
      }
    ]
  }
}
```
