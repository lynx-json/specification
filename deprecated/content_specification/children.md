# Children

The `children` property of a specification describes the properties of an object or the items in an array.

## Format Rules

### Properties of an Object

- If present, MUST be an array.
- Each item MUST be a [specification](#specification) or a [specification URL](#specification-object-url).
- Each item MUST include a `name` property.

### Items in an Array

If present, MUST be a [specification](#specification) or a [specification URL](#specification-object-url).

## Examples

### Properties of an Object

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

### Items in an Array

```json
{
  "quotes": [],
  "spec": {
    "children": [
      {
        "name": "quotes",
        "hints": [ "array" ],
        "children": {
          "hints": [ "text" ]
        }
      }
    ]
  }
}
```

## User Agent Rules

If an object contains a `spec` property, the user agent MUST use that specification instead of the specification defined in `children`.


