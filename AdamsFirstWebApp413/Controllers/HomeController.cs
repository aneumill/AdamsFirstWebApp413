using AdamsFirstWebApp413.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdamsFirstWebApp413.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("CalcGrade")]
        public IActionResult CalcGrade ()
        {
            return View();
        }

        [HttpPost("CalcGrade")]
        public IActionResult CalcGrade(CalcGradeModel model)
        {
            return View(); 
        }
    }
}
