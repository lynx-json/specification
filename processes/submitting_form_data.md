# Process for Submitting Form Data

When a [submit control](/specifications/properties/hints/submit.md) is invoked, the user agent MUST prepare a form data set, encode the form data set into a representation, and submit the representation.

## Preparing a Form Data Set

To prepare a form data set:

- Let _form data set_ be an empty set.
- Let _form_ be the nearest ancestor of the submit control's value, if it exists.
- If _form_ does not exist, stop preparing a form data set.
- Let _inputs_ be the descendant values of the _form's_ value (in depth-first order) that are described by an [`input` specification property](/specifications/properties/input.md).

For each _input_ in _inputs_:

- Let _result_ be a tuple having _name_ and _value_ components.
  - Let _name_ be the value of the _input_ specification property's `name` property, if it exists. Otherwise, let _name_ be the `name` of the input value, if it exists. Otherwise, let _name_ be the `name` of the input value's first named ancestor.
  - Let _value_ be a tuple having _data_ and _type_ components.
    - For `text` inputs, let _data_ be the value's JSON value (as defined in [RFC 4627, Section 2.1](/references/#rfc-4627)) if the value is not `null` or `undefined`; otherwise, let _data_ be an empty string. Let _type_ be an empty string.
    - For `content` inputs, let _data_ and _type_ be the value of the `content` value's `data` and `type` properties.
- Append _result_ to _form data set_.

## Encoding a Form Data Set

### URL Encoding

When the value of the `submit` value's `enctype` property is `application/x-www-form-urlencoded`, the form data set MUST be encoded as follows:

- Let _result_ be an empty string.
- For each _tuple_ in the _form data set_:
  - Encode the _name_ component according to [URL Character Encoding](#url-character-encoding) and append to _result_.
  - Append the character '=' (U+003D) to _result_.
  - If the _value_ component's _type_ is an empty string, encode its _data_ component according to [URL Character Encoding](#url-character-encoding) and append to _result_; otherwise, continue to the next step.
  - If the current _tuple_ is not the last, append the character '&' (U+0026) to _result_.
- Let the _content type_ of _result_ be `application/x-www-form-urlencoded`.

#### URL Character Encoding

Encode all characters that are not in the "unreserved" set of [RFC 3986, Section 2.3](/references/#rfc-3986), according to the rules of percent encoding documented in [RFC 3986, Sections 2.1 and 2.4](/references/#rfc-3986).

### Multipart Form Encoding

When the value of the `submit` value's `enctype` property is `multipart/form-data`, the form data set MUST be encoded according to the rules of [RFC 2388](/references/#rfc-2388) as follows:

- This section uses the concepts _boundary_, _field_, _field name_, _field value_, and _field content type_ as defined in [RFC 2388, Section 4.1](/references/#rfc-2388). Each _tuple_ in the _form data set_ is correlated to these concepts as follows:
  - The _name_ component correlates to _field name_. The _field name_ MUST be encoded as UTF-8.
  - The _data_ component of the _value_ component correlates to _field value_.
  - The _type_ component of the _value_ component correlates to _field content type_. If the _field content type_ is an empty string, the resulting part MUST NOT have a Content-Type header specified, and the _field value_ MUST be encoded as UTF-8.
- Let _result_ be an empty sequence of bytes.
- For each _tuple_ in the _form data set_, encode and append each _tuple_ to _result_ according to the rules above and [RFC 2388, Section 4.1](/references/#rfc-2388).
- Let the _content type_ of _result_ be `multipart/form-data; boundary={boundary}`, where `{boundary}` is the value of _boundary_.

### Other Encodings

Other encodings may be supported through extensions to this specification. If the user agent does not understand the `submit` value's `enctype`, it MUST encode the form data set using [Multipart Form Encoding](#multipart-form-encoding).

## Submitting Encoded Data

### HTTP and HTTPS

If the method is `GET`, `DELETE`, or any other method that does not support an entity-body, submit the encoded data as follows:

- Let _result_ be the encoded form data set.
- Let _method_ be the `submit` value's `method` property value.
- Let _URL_ be the submit value's `action` property value.
- Let the _query component_ of the _URL_ be _result_.
- Send an HTTP message, let its method be _method_, and let its retrieval URL be _URL_.

If the method is `POST`, `PUT`, or another method that supports an entity-body, submit the encoded data as follows:

- Let _result_ be the encoded form data set.
- Let _method_ be the `submit` value's `method` property value.
- Let _URL_ be the submit value's `action` property.
- Let the URL's _query component_ be empty.
- Send an HTTP message, let its method be _method_, let its retrieval URL be _URL_, let its "Content-Type" header be the content type of _result_, and let its entity body be _result_.

### Other Schemes

For other schemes, user agents should act in a manner analogous to that defined in [HTML, Section 4.10.22.3](/references/#html).
