# Card Hint

## Name

`http://lynx-json.org/card`

## Meaning

A `card` hint describes a value that is a container of other values that should be interpreted as a small amount of discrete information about a subject that has more depth.

## Related Hints

- `[ "card", "container" ]`

## Synonyms

None

## Format Rules

None

## Example

```json
{
  "spec": {
    "hints": [ "card", "container" ],
    "children": {
      "hints": [ "text" ]
    }
  },
  "value": [
    "Clark Griswold\n1326 West Kenneth Road\nAurora, IL 60502"
  ]
}
```

## Authoring Rules

None

## Authoring Considerations

Put content on a `card` when it requires more attention from the user. A card should usually contain interactive controls to enable the user to get more information about the subject of the card.

## User Agent Rules

None

## User Agent Considerations

The user agent should display the card in a way that emphasizes the card relative to the other content — preferably in a way that is reminiscent of a physical card.
