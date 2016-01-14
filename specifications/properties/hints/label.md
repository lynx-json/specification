# Label Hint

## Name

`http://lynx-json.org/label`

## Meaning

A `label` hint describes a value that represents a distinguishing name for another value.

## Related Hints

- `[ "label", "text" ]`
- `[ "label", "content" ]`
- `[ "label", "container" ]`

## Synonyms

- `title`

## Format Rules

None

## Examples

### Text

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

### Content

```json
{
  "value": {
    "label": {
      "value": {
        "src": "./title.jpg",
        "type": "image/jpeg",
        "alt": "First Name"
      },
      "spec": {
        "hints": [
          "label",
          "content"
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

### Container

```json
{
  "value": {
    "label": {
      "value": {
        "heading": {
          "value": "The Hateful Eight",
          "spec": {
            "hints": [ "text" ]
          }
        },
        "subHeading": {
          "value": "No One Comes Up Here Without a Damn Good Reason",
          "spec": {
            "hints": [ "text" ]
          }
        }
      },
      "spec": {
        "hints": [
          "label",
          "container"
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

If the user agent encounters content with a hint of `label` that has a base hint of `container`, then the user agent MUST consider the value of the label to be the sum of all of its `text` and `content` descendants. In the "Container" example above, the user agent would consider the label to be "The Hateful Eight" and "No One Comes Up Here Without a Damn Good Reason".

## User Agent Considerations

- Consider displaying `label` content more prominently.
- Consider allowing users to select or navigate to content based on its relationship to a label.
