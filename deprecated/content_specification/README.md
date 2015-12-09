# Specifications

A specification is a JSON object that describes a JSON value.

## Format Rules

### Specification Object

MAY have any number of properties. This document defines some properties (e.g. `hints`, `children`, etc.). Authors may also define [extended properties](#extending-specifications).

### Specification URL

A specification URL is a reference to a remote specification object. The value MUST be an [absolute or relative URL](#url) and MUST NOT contain a [URI fragment](#uri).

## Examples

### Specification Object

```json
{
  "value": {
    "title": "Fletch"
  },
  "spec": {
    "hints": [ "object" ],
    "children": [
      {
        "name": "title",
        "hints": [ "title", "text" ]
      }
    ]
  }
}
```

### Specification URL

```json
{
  "value": {
    "title": "Fletch"
  },
  "spec": "http://www.example.com/specs/object"
}
```

## User Agent Rules

If the `spec` property value is a specification URL, then the user agent MUST fetch the remote specification object using the default retrieval action for the protocol (e.g. GET for HTTP).

## User Agent Considerations

A user agent should ignore any specification property that it does not understand.
