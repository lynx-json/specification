# Label Hint

## Name

http://lynx-json.org/label

## Meaning

A `label` hint describes a value that represents a distinguishing name for another value.

## Related Hints

- `[ "label", "text" ]`
- `[ "label", "content" ]`

## Synonyms

- `title`

## Format Rules

None

## Examples

```json
{
  "value": {
    "label": {
      "value": "First Name",
      "spec": {
        "hints": [
          "label",
          "text"
        ]
      }
    },
    "firstName": {
      "value": "",
      "spec": {
        "hints": [
          "text"
        ],
        "labeledBy": "label"
      }
    }
  },
  "spec": {
    "hints": [ "container" ]
  }
}
```

## Authoring Rules

None

## Authoring Considerations

- Consider labeling content to help the user to identify the content.

## User Agent Rules

None

## User Agent Considerations

- Consider displaying `label` content more prominently.
- Consider allowing users to select or navigate to content based on its relationship to a label.
