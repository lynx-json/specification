# Objects

This section extends a JSON object to provide metadata so that a user agent may effectively display the object to a user.

## Format Rules

- MUST be described by a specification, either by its own `spec` property, by the [`children`](#children) property of its container's specification, or by a [`spec`](#spec) media type parameter.
- If `spec` is present, the value MUST be a [specification](#specification) or a [specification URL](#specification-url).
- If the object is a document, it MAY have a `baseURI` property. If present, the value MUST be an absolute URI to be used for relative URI resolution. For more information, see [Section 5.1.1 "Base URI Embedded in Content" in RFC 3986](#rfc-3986).
- If the object is a document, it MAY have a `realm` property. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).

## Examples

### Object

```json
{
  "title": "Groundhog Day",
  "spec": "http://www.example.com/specs/movie"
}
```

### Document

```json
{
  "title": "What About Bob?",
  "baseURI": "http://www.example.com",
  "realm": "http://www.example.com/movies",
  "spec": "http://www.example.com/specs/movie"
}
```

## User Agent Considerations

The user agent must anticipate that an object may contain additional properties (a title, text, objects, arrays, links, etc.).
