# Value/Spec Pairs

Lynx is built on a simple JSON object that provides a value (data) and specification (metadata), called a "value/spec pair", so that a user agent may effectively display the object to a user.

## Format Rules

A value/spec pair:
- MUST be a JSON object
- MUST have a `value` property whose value MAY be any [JSON](#json) value.
- MUST have a `spec` property whose value MUST be a [specification object](#specification) or a [specification URL](#specification-url).
- If the value\spec pair is a document:
  - it MAY have a `baseURI` property. If present, the value MUST be an absolute URI to be used for relative URI resolution. For more information, see [Section 5.1.1 "Base URI Embedded in Content" in RFC 3986](#rfc-3986).
  - it MAY have a `realm` property. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).

## Examples

### Document

```json
{
  "baseURI": "http://www.example.com",
  "realm": "http://www.example.com/movies",
  "value": {
    "title": "What About Bob?",
  },
  "spec": "http://www.example.com/specs/movie"
}
```

### Value

```json
{
  "value": {
    "title": "Groundhog Day"  
  },
  "spec": "http://www.example.com/specs/movie"
}
```
