using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace Learning.Function
{
    public static class BlogReminder
    {
        
        [FunctionName("BlogReminder")]
        public static void Run([TimerTrigger("*/5 * * * * *"),Disable()]TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");
        }
    }
}
