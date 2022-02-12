# appointments api

### Project structure

```
.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   ├── configuration
│   ├── hooks
│   ├── index.tsx
│   ├── pages
│   ├── resources
│   ├── routes
│   │   └── index.tsx
│   ├── styles
│   │   └── global.ts
│   └── utils
├── tsconfig.json
└── yarn.lock
```

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Environment variables](#environment-variables)

## Requirements

- yarn
- node

## Installation

> 🚨 attention make sure the `.env` exists
>> you can create with command "`cp .env.example .env`"

```shell
# clone the repository and access the directory.
$ git clone git@github.com:appointments-io/appointments-web.git web && cd web

# download dependencies
$ yarn

# run the application
$ yarn start
```
## Environment variables

| **Descrição** | **Parameter**       | **Default values**        |
|---------------|---------------------|---------------------------|
| Back-end url  | `REACT_APP_API_URL` | http://localhost:8080/api |

> these variables are defined in: [**.env**](./.env.example)