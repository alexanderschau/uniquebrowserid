# Unique Browser ID
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/alexanderschau/uniquebrowserid)

This package creates a unique ID for every browser, which you can use to bind JWTs to a clients browser. This helps to prevent token thiefs 🔒.
> **Note**: This project is still under developement. Many features are following in future.
## Installation and Usage
You can install this package using npm:
```shell
npm install uniquebrowserid
```
Example usage:
```js
import UID from 'uniquebrowserid';

const myid = new UID().completeID();
```
### Usage with JSON Web Tokens
Client side:
```js
import UID from 'uniquebrowserid';

const oneTimeID = new UID().generateOneTimeID("randomStringKey");
```
This will generate a TOTP key, which will be hashed with the unique ID of the browser. The generated ID will be valid for 30 seconds.

Server side:
```js
import UID from 'uniquebrowserid';

if ( new UID().checkOneTimeID("OneTimeID", "original ID", "randomStringKey") ){
    //one time ID is valid
};
```
This will check the send ID and returns a boolean value.
## Contribute
Everyone is invited to participate in this project. Feel free to create Issues and Pull Requests 😀. A detailed contribution guide will follow in the future.

---
If you want to get the latest information on this project follow me on [dev.to](https://dev.to/alexanderschau).