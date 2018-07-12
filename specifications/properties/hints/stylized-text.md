# Stylized Text Hint

## Name

`stylized-text`

## Meaning

A `stylized-text` hint describes a value that defines text
that should be formatted to include inline italics, bold, underline, or strikethrough text spans.

## Related Hints

- `[ "stylized-text", "text" ]`

## Synonyms

None

## Format Rules

None

## Examples

### Italics
```json
{
  "value": "Don't put the *emphasis* on the *wrong* syllable — put the *emphasis* on the *right* syllable.",
  "spec": {
    "hints": [ "stylized-text", "text" ]
  }
}
```

### Bold

```json
{
  "value": "**First Name**: Timothy",
  "spec": {
    "hints": [ "stylized-text", "text" ]
  }
}
```

### Bold and Italics

```json
{
  "value": "***Pay Attention***",
  "spec": {
    "hints": [ "stylized-text", "text" ]
  }
}
```

### Strikethrough

```json
{
  "value": "--Never mind--",
  "spec": {
    "hints": [ "stylized-text", "text" ]
  }
}
```

### Underline

```json
{
  "value": "__Title__",
  "spec": {
    "hints": [ "stylized-text", "text" ]
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
