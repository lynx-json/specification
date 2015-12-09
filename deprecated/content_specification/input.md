# Input

The `input` property of a specification describes how a value should be used to collect input from the user.

## Format Rules
The `input` property is OPTIONAL.

- MAY be `true` or MAY be an object.
- If the value is an object, it MAY have a `name` property.

## Example

```json
{
  "rating": "PG",
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "rating",
        "input": true,
        "hints": [ "urn:com:example:mpaa-rating", "text" ]
      }
    ]
  }
}
```
