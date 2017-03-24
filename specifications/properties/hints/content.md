# Content Hint

## Name

`http://lynx-json.org/content`

## Meaning

A `content` hint describes a value that contains or references content that is to be considered a part of the containing representation (embedded).

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MAY have an `src` property for remote content or a `data` property for inline content.
- SHOULD have an `alt` property for alternate text to be displayed if the content cannot be displayed or if the user cannot view it.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](../../../realm/).
- MAY have a `rel` property whose value specifies the relationship between the document containing the content and the destination resource, as described in [RFC 5988](../../../references/#rfc-5988).
- MUST NOT contain any other properties that are described by a specification.
- MAY contain other properties that are not described by a specification.

### `src` present

If the value has an `src` property:

- `src` MUST be a valid [URI](../../../#uri).
- MAY have a `type` property whose value must be a valid 
  [media type name](../../../references/#rfc-6838) to indicate the expected 
  media type of the content.
- MUST NOT have `data` or `encoding` properties.

### `data` present

If the value has a `data` property:

- MUST have a `type` property whose value must be a valid 
  [media type name](../../../references/#rfc-6838) to indicate the media type of
  the content encoded in the `data` property.
- if `type` is `application/json` or a variant of `application/json`, 
  `data` MAY be an object or an array; otherwise, `data` MUST be a string 
  representing the content to be embedded.
- if `data` is a string, MAY have an `encoding` property 
  whose value MUST be `utf-8` or `base64`. If not present, the `encoding` 
  is `utf-8`.
- MUST NOT have an `src` property.

## Examples

### `src` present

```json
{
  "src": "http://www.example.com/fletch-movie-review.pdf",
  "alt": "Movie Review of Fletch",
  "spec": {
    "hints": [ "content" ]
  }
}
```

### `data` present

#### UTF-8 String

```json
{
  "data": "# Review of Fletch\n##Pros\n\nToo many to list.\n##Cons\n\nNone!",
  "type": "text/markdown",
  "alt": "Movie Review of Fletch",
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### Base64 String

```json
{
  "data": "WW91IHRhbGtpbmcgdG8gbWU/IC0tIFRheGkgRHJpdmVy",
  "encoding": "base64",
  "type": "text/plain",
  "alt": "Movie Quote",
  "spec": {
    "hints": [ "content" ]
  }
}
```

#### JSON Content

```json
{
  "data": {
    "base": "http://example.com/",
    "realm": "http://example.com/movie-quotes/",
    "value": [
      "There's no crying in baseball! -- Tom Hanks, A League of Their Own",
      "Mrs. Robinson, you're trying to seduce me. Aren't you? -- Dustin Hoffman, The Graduate",
      "Donny you're out of your element! -- John Goodman, The Big Lebowski"
    ],
    "spec": {
      "hints": [ "list", "container" ],
      "children": {
        "hints": [ "text" ]
      }
    }
  },
  "type": "application/lynx+json",
  "spec": {
    "hints": [ "content" ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

- If the user agent is unable to display the content, it MUST display a link to the content, with the text of the `alt` property, if present.
- If the type of the content is not in the range `text/*`, then the user agent SHOULD consider the value of the `alt` property to be the text content for the value.

### Input

If the specification describing the value has an `input` property, the user agent MUST provide the user with a control to supply the content.

## User Agent Considerations

The user agent must anticipate that a `content` object may contain no visible content.
