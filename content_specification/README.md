# Specifications

A specification describes a JSON value.

## Format Rules

### Specification

MAY have any number of properties. This document defines some properties (e.g. `hints`, `children`, etc.). Authors may also define [extended properties](#extending-specifications).

### Specification URL

A specification URL is used to refer to a remote specification. The value MUST be an [absolute or relative URL](#url) and MUST NOT contain a [URI fragment](#uri).

## Examples

### Specification Object

```json
{
  "title": "Fletch",
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
  "title": "Fletch",
  "spec": "http://www.example.com/specs/object"
}
```

## User Agent Rules

If the `spec` property value is a specification URL, then the user agent MUST fetch the remote specification using the default retrieval action for the protocol (e.g. GET for HTTP). The media type to be used for retrieval is `application/lynx+json;content=spec`.

## User Agent Considerations

A user agent should ignore any specification property that it does not understand.
