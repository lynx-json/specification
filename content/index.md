# Content

The content of all documents defined by this media type are extensions of [JSON](#json) and MUST comply with the rules of that media type. All usages of the JSON keywords "string", "number", "object", "array", "true", "false", "null", and "value" refer to the concepts in the JSON specification unless otherwise stated. The word "property" is used to refer to the concept of "pair", "name/value pair", or "member" in the JSON specification. The word "integer" is used to refer to a JSON "number" with no fractional part. The phrase "container value" is used to refer to objects and arrays. The phrase "simple value" is used to refer to strings, numbers, `true`, `false`, or `null`.

## Value/Spec Pairs

Lynx is built on a simple JSON object that conveys a value (data) and a specification (metadata). This object is called a "value/spec pair". A user agent uses the information conveyed in the value/spec pair to effectively display the information to a user.

## Format Rules

A value/spec pair:

- MUST be a JSON object
- MUST have a `value` property whose value MAY be any [JSON](#json) value.
- MUST have a `spec` property whose value MUST be a [specification object](#specifications) or a URL to a remote specification object.

A Lynx document MUST start with a value/spec pair. If a value/spec pair is a document:

  - it MAY have a `base` property. If present, the value MUST be an absolute URI to be used to represent the URI of the document for relative URI resolution. For more information, see [Section 5.1.1 "Base URI Embedded in Content" in RFC 3986](#rfc-3986).
  - it SHOULD have a `realm` property. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).

If the value of the `value` property is an object, the value/spec pair MAY be condensed by
replacing the `value` property with all of the properties of the object.

## Examples

### Value/Spec Pair

```json
{
  "value": {
    "title": "Groundhog Day",
    "rating": 8.1
  },
  "spec": "http://www.example.com/specs/movie-summary"
}
```

### Condensed Value/Spec Pair

```json
{
  "title": "Groundhog Day",
  "rating": 8.1,
  "spec": "http://www.example.com/specs/movie-summary"
}
```

### Document

```json
{
  "base": "http://www.example.com/movies/what-about-bob/title",
  "realm": "http://www.example.com/movies/titles",
  "value": "What About Bob?",
  "spec": "/specs/movies/title"
}
```

## User Agent Rules

If the `spec` property value is a specification URL, then the user agent MUST fetch the remote specification object using the default retrieval action for the protocol (e.g. GET for HTTP).

If the user agent encounters a relative URI it MUST resolve an absolute URI using the process defined in [Section 5 "Reference Resolution" in RFC 3986](#rfc-3986). For example, the `spec` property in the document above would resolve to `http://www.example.com/specs/movies/title`.
