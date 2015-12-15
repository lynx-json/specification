# Content Hint

## Name

http://lynx-json.org/content

## Meaning

A `content` hint describes a value that contains or references content that is to be considered a part of the containing representation (embedded).

## Related Hints

The `content` hint MUST NOT be used with a `container` hint.

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MUST have an `src` property for remote content or a `data` property for inline content.
- SHOULD have an `alt` property for alternate text to be displayed if the content cannot be displayed or if the user cannot view it.
- MAY have a `scope` property whose value specifies the content realm intended for display. If present, the value MUST comply with the rules defined for [realm URI](#realm-uri).

### `src` present

If the value has an `src` property:

- the `src` property MUST be a valid [URI](#uri).
- the value MAY have a `type` property whose value must be a valid [media type name](#media-type-name) to indicate the expected media type of the content.
- the value MUST NOT have `data` or `encoding` properties.

### `data` present

If the value has a `data` property:

- the `data` property MUST be a string representing the content to be embedded.
- the value MUST have a `type` property whose value must be a valid [media type name](#media-type-name) to indicate the media type of the content encoded in the `data` property.
- the value MAY have an `encoding` property whose value MUST be `utf-8` or `base64`. If not present, the value is `utf-8`.
- the value MUST NOT have an `src` property.

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

## Authoring Rules

None

## Authoring Considerations

None

## User Agent Rules

If the user agent is unable to display the content, it MUST display a link to the content, with the text of the `alt` property, if present.

### Input

If the specification describing the value has an `input` property, the user agent MUST provide the user with a control to supply the content.

## User Agent Considerations

The user agent must anticipate that a `content` object may contain no visible content.
