# Unique Browser ID
This package creates a unique ID for every browser, which you can use to bind JWTs to a clients browser. This helps to prevent token thiefs 🔒.
> **Note**: This project is still under developement. Many features are following in future.
## Installation and Usage
You can install this package using npm:
```shell
npm install uniquebrowserid
```
Example usage:
```js
import UID from 'uniquebrowserid'

const myid = new UID().completeID()
```
## Future plans
To make it easier for every developer to bind unique browser IDs to json web tokens, we want to create a front- and backend endpoint, so developers just have call a class for more security.

To keep yourself up to date follow me on [dev.to](https://dev.to/alexanderschau).
## Contribute
Everyone is invited to participate in this project. Feel free to create Issues and Pull Requests 😀. A detailed contribution guide will follow in the future.