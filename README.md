# What is this?
Simple express cors middleware

## Usage
`cors([options])`

Options (optional):

```
cors({
  origin: string, //defaults to "*"
  methods: string, //defaults to "GET, POST, PUT, PATCH, DELETE and OPTIONS"
  headers: string, //defaults to "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  credentials: string, //defaults to false,
  maxAge: string //defaults to 86400 (24 hours)
})
```

# Example
```
var express = require("express");
var app = express();

app.use(cors()); //to enable all domains

...
```