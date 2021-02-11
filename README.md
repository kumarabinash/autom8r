# Autom8r

## Usage:

### Installation
```
npm install autom8r -g
```

### Usage

Create a config file `.autom8r` in your project root or any of its parent folder

Example:

```json
{
  "setTestEnv": {
    "type": "replaceFile",
    "operations": [
      {
        "source": "/Users/kumar/Documents/dev/myProjectData/db.test.json",
        "destination": "/Users/kumar/Documents/dev/myProject/db.json"
      },
      {
        "source": "/Users/userName/Documents/dev/myProjectData/testEnv",
        "destination": "/Users/userName/Documents/dev/myProject/.env"
      }

    ]
  },
  "anotherTask": {
    "type": "...",
    "operations": []
  }
}
```

### Running a task

`autom8r run setTestEnv`

This will replace the file content of destinations mentioned above with the respective sources

### List all your tasks from .autom8r file

`autom8r list`

Finds all the tasks defined in the nearest .autom8r file from its parent tree

## Task Types

#### `replaceFile`

Replaces destination file's content with source file's content

**Example:**

.autom8r file:

```js
{
  "setTestEnv": {
    "type": "replaceFile",
    "operations": [
      {
        "source": "/Users/userName/Documents/dev/myProjectData/db.test.json",
        "destination": "/Users/userName/Documents/dev/myProject/db.json"
      },
      {
        "source": "/Users/userName/Documents/dev/myProjectData/testEnv",
        "destination": "/Users/userName/Documents/dev/myProject/.env"
      }

    ]
  }
}

```

`autom8r run setTestEnv`


#### `deleteFile`

Deletes given provided under source

**Example:**

.autom8r file:

```js
{
  "deleteLogFiles": {
    "type": "deleteFile",
    "operations": [
      {
        "source": "/Users/userName/Documents/dev/myProjectData/log/test.log"
      },
      {
        "source": "/Users/userName/Documents/dev/myProjectData/log/development.log"
      }
    ]
  }
}
```

`autom8r run deleteLogFiles`

#### Issues

Please add issues below:
[https://github.com/kumarabinash/autom8r/issues](https://github.com/kumarabinash/autom8r/issues)
