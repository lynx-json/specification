# Specifications

A specification is a [JSON](../#json) object that describes a [JSON](../#json) value. The media type for a specification object is `application/lynx-spec+json`.

## Format Rules

A specification object MAY have any number of [properties](./properties/index.md). This document defines the properties in the Lynx vocabulary (e.g. `hints`, `children`, etc.). Authors may also define extended properties in their own vocabularies.

## Example

```json
{
  "value": "Fletch",
  "spec": {
    "hints": [ "label", "text" ]
  }
}
```
