# Children Specification Property

## Name

`http://lynx-json.org/children`

## Meaning

The `children` property is used to provide a specification, or an array of specifications, to describe the values in a container value (object or array). If the `children` property is an array of specifications, then it also describes the order of the items in the container.

## Format Rules

If all of the values in a container value have the same meaning and traits, then a single specification object may be used to describe them all. Otherwise, they must be described individually.

### Single Specification

If present, the `children` property MUST be a [specification](#specifications) or the URL of a specification.

### Array of Specifications

- Each item MUST be a [specification](#specifications) or the URL of a specification.
- Each specification MUST have a `name` property.

## Examples

### Properties of an Object

```json
{
  "actor": "Chevy Chase",
  "rating": "PG",
  "title": "Fletch",
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "title",
        "hints": [ "http://example.com/movie-title", "text" ]
      },
      {
        "name": "rating",
        "hints": [ "http://example.com/mpaa-rating", "text" ]
      },
      {
        "name": "actor",
        "hints": [ "http://example.com/actor", "text" ]
      }
    ]
  }
}
```

### Items in an Array with Same Meaning

```json
{
  "value": [
    "G",
    "PG",
    "PG-13",
    "R"
  ],
  "spec": {
    "hints": [ "container" ],
    "children": {
      "hints": [ "http://example.com/mpaa-rating", "text" ]
    }
  }
}
```

### Items in an Array with Different Meanings

```json
{
  "value": [
    "Fletch"
    "PG",
    "Chevy Chase"
  ],
  "spec": {
    "hints": [ "container" ],
    "children": [
      {
        "name": "0",
        "hints": [ "http://example.com/movie-title", "text" ]
      },
      {
        "name": "1",
        "hints": [ "http://example.com/mpaa-rating", "text" ]
      },
      {
        "name": "2",
        "hints": [ "http://example.com/actor", "text" ]
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

If a value in a container is a value/spec pair, then the user agent MUST use the specification object of the value/spec pair instead of the specification object found in the `children` property value.

### Order of Values

If the container value is an object and the `children` property is a specification, then the order of the values in the container is undefined.

If the container value is an array and the `children` property is a specification, then the order of the values in the container is their natural order.

If the `children` property is an array of specifications, then the user agent MUST use the order of the specifications in the `children` property to determine the order of the values (ignoring their natural order if the container value is an array).

## User Agent Considerations

None
