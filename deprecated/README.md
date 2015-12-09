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

## File Extensions

- `.lnx` => `application/lynx+json`
