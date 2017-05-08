# Footer Hint

## Name

`http://lynx-json.org/footer`

## Meaning

A `footer` hint describes a value that concludes other content.

## Related Hints

- `[ "footer", "container" ]`

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
  "footer": {
    "copyright": "Copyright © 1985"
  },
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
      },
      {
          "name": "footer",
          "hints": [ "footer", "container" ],
          "children": [
            {
              "name": "copyright",
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

In order for a footer to effectively conclude content, the user agent should display the footer in a way that accomplishes that goal. For example, in print, a footer often stands on its own line and is often preceded by a rule.
