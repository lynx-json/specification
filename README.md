# Introduction

This document defines a new hypertext media type `application/lynx+json` (a Lynx document), and a related metadata media type `application/lynx-spec+json` (a Lynx specification), designed to represent and describe documents and the connections among them, with enough semantic detail to allow the development of client applications without imposing strict display constraints or unnecessary coupling between clients and servers. By reducing display constraints and coupling, developers have more freedom to create client applications that take better advantage of the unique characteristics of each platform and device.

## Authors

- Dan Mork [dan@humanstuff.com](mailto:dan@humanstuff.com)
- Anson Goldade [anson@goldade.us](mailto:anson@goldade.us)
- John Howes [john@humanstuff.com](mailto:john@humanstuff.com)

## Acknowledgements

We would like to thank the following people for their contributions to this document.

- Dale Sande
- Arun Batchu
- Joe McRae
- Mark Brose

## Conventions Used in This Document

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](./references/index.md#rfc-2119).

## Terminology

### JSON

Refers to the media type JSON as defined in [RFC 4627](./references/index.md#rfc-4627).

### URI

Refers to a URI as defined in [RFC 3986](./references/index.md#rfc-3986).

### URL

Refers to a URL as defined in [RFC 3986](./references/index.md#rfc-3986).

### URN

Refers to a URN as defined in [RFC 3986](./references/index.md#rfc-3986).

### Media Type Name

Refers to a media type name as defined in [RFC 6838](./references/index.md#rfc-6838).

### Base Hint

Refers to one of the following hints: `container`, `link`, `form`, `submit`, `content`, and `text`.

### Display

The conveyance of a value to a user in a manner appropriate for the user agent and the user.

### Resource

See Section 5.2.1.1 "Resources and Resource Identifiers" in the [Fielding Dissertation](./references/index.md#fielding-dissertation).

### Representation

See Section 5.2.1.2 "Representations" in the [Fielding Dissertation](./references/index.md#fielding-dissertation).

## Compliance

An implementation is "non-compliant" if it fails to satisfy one or more of the MUST or REQUIRED level requirements. An implementation that satisfies all of the MUST or REQUIRED and all of the SHOULD level requirements is said to be "unconditionally compliant"; an implementation that satisfies all of the MUST level requirements but not all of the SHOULD level requirements is said to be "conditionally compliant."

## Parameters for `application/lynx+json`

### base

- The parameter is OPTIONAL.
- If present, its value MUST be an absolute URI to be used for relative URI resolution. For more information, see [Section 5.1.2 "Base URI from the Encapsulating Entity" in RFC 3986](./references/index.md#rfc-3986).

#### Example

```json
HTTP/1.1 200 OK
Content-Type: application/lynx+json;base="http://example.com/greetings/hello-world"

{
  "value": "Hello, World!",
  "spec": "http://example.com/specs/greeting"
}

```

### realm

- The parameter is OPTIONAL.
- If present, its value MUST comply with the rules defined for [Realm URI](./realm/index.md).

#### Example

```json
HTTP/1.1 200 OK
Content-Type: application/lynx+json;realm="http://example.com/entrance/greeter"

{
  "value": "Hello, World!",
  "spec": "http://example.com/specs/greeting"
}

```

## Parameters for `application/lynx-spec+json`

None

## Interpretation of URI Fragments for `application/lynx+json`

TODO: provide documentation for how the user agent interprets fragments. This may be here or it may be here or it may be in the "process for displaying content" or another section.

## Interpretation of URI Fragments for `application/lynx-spec+json`

URI fragments MUST be ignored.

## Registration Status

The registration status of this media type is as follows:

- `application/lynx+json` (unregistered)
- `application/lynx-spec+json` (unregistered)

## File Extensions

- `.lnx` => `application/lynx+json`
- `.lnxs` => `application/lynx-spec+json`

## Documents

While a JSON document may begin with an object or an array, a Lynx document MUST begin with a [value/spec pair](./content/index.md).
