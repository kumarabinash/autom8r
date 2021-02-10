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

## Task Types

### `replaceFile`

Replaces destination file's content with source file's content

# Project Roadmap:

New Task Types:
  - delete # can be used to clean up logs, other temporary files
  - history # last run command
  - undo # revert last command

