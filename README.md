<h1 align="center"> first-serverless </h1>

### What is that ?

This is my first time trying [serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).

### How to use it

After download, just run:
```
echo '{ "a": <FIRST_NUMBER>, "b": <SECOND_NUMBER> }' | sls invoke local -f <FUNCTION>
```

Functions:
- sum
- subtract

##### Examples

Command:
```
echo '{ "a": 3, "b": 2 }' | sls invoke local -f sum
```
Result:
```
{
    "statusCode": 200,
    "body": {
        "message": "The sum of 3 and 2 is 5"
    }
}
```

<br>
<hr>
<br>

Command:
```
echo '{ "a": 3, "b": 4 }' | sls invoke local -f subtract
```
Result:
```
{
    "statusCode": 200,
    "body": {
        "message": "The subtraction of 3 and 4 is -1"
    }
}
```
