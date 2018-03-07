# Banner Hint

## Name

`http://lynx-json.org/banner`

## Meaning

A `banner` hint describes a value that introduces a realm.

## Related Hints

- `[ "banner", "header", "container" ]`

## Synonyms

None

## Format Rules

If the value is present, it must comply with the following rules:

- MUST be an object.
- MUST have a `for` property, whose value MUST comply with the rules defined
  for [realm URI](../../../realm/).
- MAY have a `primaryColor` property, whose value describes the primary color
  to be used for styling documents in the banner's realm. If present, the value
  MUST be a six-digit, [hexadecimal web color](../../references/index.md#rfc-3986).
- MAY have a `secondaryColor` property, whose value describes the secondary
  color to be used for styling documents in the banner's realm. If present, the
  value MUST be a six-digit, [hexadecimal web color](../../references/index.md#rfc-3986).

## Example

```json
{
  "banner": {
    "label": "Example.com",
    "for": "http://example.com/",
    "primaryColor": "#E91E63",
    "secondaryColor": "#FFEB3B"
  },
  "spec": {
    "hints": [ "container" ],
    "children": [
        {
            "name": "banner",
            "hints": [ "banner", "header", "container" ],
            "children": [
              {
                "name": "label",
                "hints": [ "label", "text" ]
              }
            ]
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

None

## User Agent Considerations

The user agent should consider using the primary and secondary colors to display documents within the realm specified by the `for` property. In particular, the user agent may display the banner itself with a background color matching its `primaryColor`.
