# Emblem Hint

## Name

`http://lynx-json.org/emblem`

## Meaning

An `emblem` hint describes a value providing a symbolic representation of another value.

## Related Hints

- `[ "emblem", "text" ]`
- `[ "emblem", "content" ]`

## Format Rules

None

## Examples

### Text

```json
{
  "value": {
    "emblem": {
      "value": "🐶",
      "spec": {
        "hints": [
          "emblem",
          "text"
        ]
      }
    },
    "animal": {
      "value": "Dog",
      "spec": {
        "hints": [
          "text"
        ]
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
        "src": "./dog-image.jpg",
        "type": "image/jpeg",
        "alt": "An Image of a Dog",
        "height": 40,
        "width": 40
      },
      "spec": {
        "hints": [
          "emblem",
          "image",
          "content"
        ]
      }
    },
    "animal": {
      "value": "Dog",
      "spec": {
        "hints": [
          "text"
        ]
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

None

## User Agent Rules

None

## User Agent Considerations

None
