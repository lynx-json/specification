# Array

An `array` hint describes a value that should be interpreted as an array.

## Format Rules

The value MAY be `undefined`, `null`, `[]`, or a non-empty array.

### Input

If the specification having an `array` hint has a `children` property value with an `input` property, then the array value is considered to be an array of inputs.

## Example

### Non-Input

```json
{
  "title": "Top Quotes",
  "quotes": [
    "Print this!",
    "Act like you don't give a crap and you fit right in.",
    "You know if you shoot me, you're liable to lose all of those humanitarian awards."
  ],
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      },
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

### Input

```json
{
  "characters": [
    "Ty Webb",
    "Al Czervik",
    "Carl Spackler"
  ],
  "spec": {
    "hints": [ "form" ],
    "children": [
      {
        "name": "characters",
        "hints": [ "array" ],
        "children": {
            "hints": [ "text" ],
            "input": true
        }
      }
    ]
  }
}
```

## User Agent Rules

If the array value is considered to be an array of inputs, the user agent MUST provide the user with controls to add values to the array and remove values from the array.

## User Agent Considerations

- The user agent must anticipate that an array may contain simple content (text), complex content (objects, arrays, links, etc.), or a mixture of both.
- A user agent must anticipate that a value described by an `array` hint may contain any length and combination of values, including repeated values.
