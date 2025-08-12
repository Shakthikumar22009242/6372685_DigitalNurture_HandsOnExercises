using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IO;

namespace CustomModelDemo.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exceptionMessage = $"[{DateTime.Now}] Exception: {context.Exception.Message}";

            // Log to file in project root
            File.AppendAllText("logs.txt", exceptionMessage + Environment.NewLine);

            context.Result = new ObjectResult("An unexpected error occurred.")
            {
                StatusCode = 500
            };
        }
    }
}
