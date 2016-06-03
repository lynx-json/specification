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
        ],
        "children": [
          { "name": "heading" },
          { "name": "subHeading" }
        ]
      }
    },
    "synopsis": {
      "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

The user agent should consider the text content of the value described by the `label` hint to be the distinguishing name. For example, in the "Container" section above, the user agent would consider the distinguishing name to be:

  The Hateful Eight  
  No One Comes Up Here Without a Damn Good Reason

## User Agent Considerations

- Consider displaying `label` content more prominently.
- Consider allowing users to select or navigate to content based on its relationship to a label.
