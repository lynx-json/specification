# Introduction

This document defines a new hypertext media type designed to represent and describe documents and the connections among them, with enough semantic detail to allow the development of client applications without imposing strict display constraints or unnecessary coupling between clients and servers. By reducing display constraints and coupling, developers have more freedom to create client applications that take better advantage of the unique characteristics of each platform and device.

## Conventions Used in This Document ##

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](#rfc-2119).

## Terminology

<dl>
<dt><a name="json">JSON</a></dt>
<dd>Refers to a the media type JSON <a href="#rfc-4627">RFC 4627</a>.</dd>
<dt><a name="uri">URI</a></dt>
<dd>Refers to a URI as defined in <a href="#rfc-3986">RFC 3986</a>.</dd>
<dt><a name="url">URL</a></dt>
<dd>Refers to a URL as defined in <a href="#rfc-3986">RFC 3986</a>.</dd>
<dt><a name="urn">URN</a></dt>
<dd>Refers to a URN as defined in <a href="#rfc-3986">RFC 3986</a>.</dd>
<dt><a name="same-document-reference">Same-Document Reference</a></dt>
<dd>Refers to a same-document reference as defined in section 4.4 of <a href="#rfc-3986">RFC 3986</a>.</dd>
<dt><a name="media-type-name">Media Type Name</a></dt>
<dd>Refers to a media type name as defined in <a href="#rfc-6838">RFC 6838</a>.</dd>
<dt><a name="base-hint">Base Hint</a></dt>
<dd>Refers to one of the following hints: `object`, `link`, `form`, `submit`, `array`, `media`, and `text`.</dd>
<dt><a name="display">Display</a></dt>
<dd>The conveyance of a value to a user in a manner appropriate for the user agent and the user.</dd>
<dt><a name="resource">Resource</a></dt>
<dd>See Section 5.2.1.1 "Resources and Resource Identifiers", [[Fielding Dissertation](#fielding-dissertation)])</dd>
<dt><a name="representation">Representation</a></dt>
<dd>See Section 5.2.1.2 "Representations", [[Fielding Dissertation](#fielding-dissertation)])</dd>
</dl>

## Compliance

An implementation is "non-compliant" if it fails to satisfy one or more of the MUST or REQUIRED level requirements. An implementation that satisfies all of the MUST or REQUIRED and all of the SHOULD level requirements is said to be "unconditionally compliant"; an implementation that satisfies all of the MUST level requirements but not all of the SHOULD level requirements is said to be "conditionally compliant."

## Registration Status

The registration status of this media type is as follows:

- application/lynx+json (unregistered)

## Parameters

### content

The `content` parameter indicates whether the body of a message contains a value or a specification.

- The parameter is OPTIONAL. The default value is `value`.
- If present, the value MUST be either `value` or `spec`.

#### Example

```
GET /spec/movie HTTP/1.1
Accept: application/lynx+json;content=spec

```

### spec

The `spec` parameter describes the value in the body of a message.

- The parameter is OPTIONAL.
- If present, its value MUST be either a specification JSON object or a specification URL.
- If the value of the `content` parameter is `spec`, then this parameter MUST NOT be present.

#### Examples

```
HTTP/1.1 200 OK
Content-Type: application/lynx+json;spec="{ "hints": ["text"] }"

"Hello, World!"
```

```
HTTP/1.1 200 OK
Content-Type: application/lynx+json;spec="http://example.com/specs/text"

"Hello, World!"
```

### baseURI
- The parameter is OPTIONAL.
- If present, its value MUST be an absolute URI to be used for relative URI resolution. For more information, see [Section 5.1.2 "Base URI from the Encapsulating Entity" in RFC 3986](#rfc-3986).

#### Example

```
HTTP/1.1 200 OK
Content-Type: application/lynx+json;baseURI="http://example.com/";spec="./specs/text"

"Hello, World!"
```

### realm

- The parameter is OPTIONAL.
- If present, its value MUST comply with the rules defined for [Realm URI](#realm-uri).

#### Example

```
HTTP/1.1 200 OK
Content-Type: application/lynx+json;spec="./specs/array-of-text";realm="http://example.com/text-examples"

[ "Hello, World!" ]
```

## File Extensions

- `.lnx` => `application/lynx+json`
- `.lnxs` => `application/lynx+json;content=spec`
