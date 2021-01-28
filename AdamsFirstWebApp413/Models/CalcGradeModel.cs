using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AdamsFirstWebApp413.Models
{
    public class CalcGradeModel
    {
        [Required, Range(0,100)]
        public float iAssignmentGrade { get; set; }
        [Required, Range(0, 100)]
        public float iGroupProjectGrade { get; set; }
        [Required, Range(0, 100)]
        public float iQuizGrade { get; set; }
        [Required, Range(0, 100)]
        public float iExamGrade  { get; set; }
        [Required, Range(0, 100)]
        public float iIntexGrade { get; set; }

    }
}
