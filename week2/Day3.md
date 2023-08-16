
# Summary of Day3

## Async JS (part 2)

- recap
- Web applications: Asynchronous JavaScript is the backbone of the modern web.
## Promises
- Promises are special objects built into JS that get returned immediately when we make
a call to a web browser API/feature (e.g. fetch)

- Promises act as a placeholder for the data we expect to get back from the web
browser

- `then` method and functionality to call on completion
- Any code we want to run on the returned data must also be saved on the promise
object Added using `.then` method to the hidden property `onFulfilment`
- Promise objects will automatically trigger the attached function to run (with its
input being the returned data
## [DELIVERABLE](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%203/tasks.md)
# Question 1:
```js
const executeInSequenceWithCBs = (tasks, callback) => {
  const results = []
  
  const runTask = async (index) => {
    return new Promise((resolve) => {
      tasks[index]((message) => {
        results[index] = message
        resolve()
      })
    })
  }

  const executeTasks = async () => {
    for (let i = 0; i < tasks.length; i++) {
      await runTask(i)
    }
    callback(results)
  }

  executeTasks()
}
```
Question 2:
```js

const executeInParallelWithPromises = async (apis) => {
  const promises = apis.map(async (api) => {
    const response = await fetch(api.apiUrl);
    const apiData = await response.json();
    return {
      apiName: api.apiName,
      apiUrl: api.apiUrl,
      apiData: apiData,
    };
  });

  return Promise.all(promises);
};
```
Question 3:
```js

const executeInSequenceWithPromises = (apis) => {
  const apiResults = []

  for (let i = 0; i < apis.length; i++) {
    const api = apis[i]

    const promise = fetch(api.apiUrl).then((response) => {
      return response.json()
    })

    promise.then((apiData) => {
      apiResults.push({
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        apiData: apiData,
      })
    })
  }
  return apiResults;
}

