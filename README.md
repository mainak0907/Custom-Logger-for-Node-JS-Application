# Custom-Logger-for-Node-JS-Application
Large-scale organizations make use of loggers to keep track of the logs and analyze them.

Winston logger for custom logging in Node JS, which records the logs, and pushes them to MongoDB, where Filtering and Visualization can be applied in MongoDB as well as multi-server log collection using https://betterstack.com/logs.

This logger code can be added to any project to make the development and debugging process efficient 

## Why do we need a separate logger on top of console.log() in Node JS?

Console.log() only logs the messages to the console. But what if, we had to store all the logs into a file, transport it over the internet, operate on them, filter them, and visualize them? Then Console.log() won't help in such situations. 
A custom logging Library is handy for organizations to keep track of the logs in the large codebase, filter them by priority, and visualize them in the Cloud.

<img width="279" alt="image" src="https://github.com/mainak0907/Custom-Logger-for-Node-JS-Application/assets/88925745/b09d9bca-1a35-4a2d-8dea-a50cd1f3cd29">

Logging Levels -

<img width="203" alt="image" src="https://github.com/mainak0907/Custom-Logger-for-Node-JS-Application/assets/88925745/c8824fa4-d615-4a01-b8ad-4b2124ef0cd7">

## Collecting Logs from Multiple Servers

But may be insufficient for distributed applications running on multiple servers since looking at the logs of a single server may no longer be enough to locate and diagnose problems.

A widely employed solution in such cases is to collect the logs from individual servers and centralize them in one place so that it's easy to get a complete picture of any issue. There are several solutions for aggregating logs such as the open-source Elasticsearch, Logstash, and Kibana (ELK) stack  but a reliable setup can be convoluted especially if you're opting for a self-hosted solution.

The simplest, and often more cost-effective way to centralize logs is to use a cloud-based service. Most services offer log filtering, alerting, and an option for unlimited log storage which could help with spotting long-term trends.
