## Just a test project with Webpack

Steps:

### 1. create a folder for a test project
```
mkdir test_project
```
```
cd test_project
```

### 2. Clone the project
```
git@github.com:vzgm/wbtest2.git
```

### 3. Install the Webpack
```
npm install webpack -g
```

### 4. Install plugins
```
npm install
OR npm update
```

### 5. Run the Webpack

Open the terminal. It will be used by webpack in watching mode.

```
webpack
```

### 6. Run the Node static server

Open the terminal. It will be used by static server.

```
static --port 8888 -H
```
Open URL http://127.0.0.1:8888/public/index.html in a browser.

