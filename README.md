# Base64 Browser

Encode and decode UTF-8 strings.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "text": "Hello!"
}

## Expected output fields (JSON)

{
  "encoded": "SGVsbG8h",
  "roundTrip": "Hello!"
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
