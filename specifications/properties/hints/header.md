# Header Hint

## Name

`http://lynx-json.org/header`

## Meaning

A `header` hint describes a value that introduces other content.

## Related Hints

- `[ "header", "container" ]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "header": {
    "label": "Review of Fletch"
  },
  "description": "Fletch is fantastic!",
  "spec": {
    "hints": [ "container" ],
    "children": [
        {
            "name": "header",
            "hints": [ "header", "container" ],
            "children": [
              {
                "name": "label",
                "hints": [ "label", "text" ]
              }
            ]
        },
      {
"name": "description",
"hints": [ "text" ]
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

In order for a header to effectively introduce content, the user agent should display the header in a way that accomplishes that goal. For example, in print, a header often stands on its own line and is often followed by a rule.
