using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Roga
{
    internal class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int Weight { get; set; }
        public string Gender { get; set; }

        public Person(string firstName, string lastName, int age, int weight, string gender)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Weight = weight;
            Gender = gender;
        }
    }
}
