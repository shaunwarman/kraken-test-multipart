#### Run
```
git clone https://github.com/shaunwarman/kraken-test-multipart.git

npm install

NODE_ENV=development node .
```

#### Test
Navigate to http://localhost:8000/ in your browser. Then click the button to submit the form data. You should see the following logged to console:
```
Form data: {"cmd":"my_command","email":"test@test.com","item_name":"Multipart Item","item_number":"1234"}
```
