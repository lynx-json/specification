# Link Hint

## Name

`http://lynx-json.org/link`

## Meaning

A `link` hint describes a value that represents a hyperlink.

## Related Hints

None

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MUST have an `href` property for remote content or a `data` property for inline content.
- MAY have a `rel` property whose value specifies the relationship between the document containing the link and the destination resource, as described in [RFC 5988](../../../references/#rfc-5988).
- MAY have a `follow` property whose value must be a positive number representing the number of milliseconds the user agent should wait before following the link on behalf of the user.
- MAY contain other properties.

### `href` present

If the value has an `href` property:

- `href` MUST be a valid [URI](../../../#uri).
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
  whose value MUST be `utf-8` or `base64`. If not present, `encoding` 
  is `utf-8`.
- MUST NOT have an `href` property.

## Examples

### `href` present

```json
{
  "title": "Fletch",
  "href": "http://www.example.com/movies/fletch",
  "spec": {
    "hints": [ "link" ],
    "children": [
        {
            "name": "title",
            "hints": [ "label", "text" ]
        }
    ]
  }
}
```

### `data` present

#### UTF-8 String

```json
{
  "data": "# Review of Fletch\n##Pros\n\nToo many to list.\n##Cons\n\nNone!",
  "type": "text/markdown",
  "spec": {
    "hints": [ "link" ]
  }
}
```

#### Base64 String

```json
{
  "data": "WW91IHRhbGtpbmcgdG8gbWU/IC0tIFRheGkgRHJpdmVy",
  "encoding": "base64",
  "type": "text/plain",
  "spec": {
    "hints": [ "link" ]
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
      "Fasten your seatbelts, it's going to be a bumpy night. -- Bette Davis, All About Eve",
      "I'll have what she's having. -- Estelle Reiner, When Harry Met Sally",
      "Plastics. -- Walter Brooke, The Graduate"
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
    "hints": [ "link" ]
  }
}
```

## Authoring Rules

None

## User Agent Rules

- The user agent MUST provide the user with a control to interact with the hyperlink in order to follow it.
- If `href` is present, when the user follows the hyperlink, then the user agent MUST fetch the target identified by the `href` using the default retrieval action for the protocol (e.g. GET for HTTP).
- If `href` is present, the user agent SHOULD display or make the `href` accessible to the user so he/she can consider its value prior to following the hyperlink.
- If the link contains a `follow` property, the user agent MUST wait the specified number of milliseconds and then MUST follow the hyperlink.

## User Agent Considerations

- The user agent must anticipate that a value described by a `link` hint may not contain visible content.
- The user agent must anticipate that a value described by a `link` hint may contain other properties that are also described by a specification.
