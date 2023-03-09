using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace week_09
{
    internal class student
    {
        private int id;
        private string name;
        private double mark;

        public int Id
        {
            get { return id; }
            set { id = value; } 
        }

        public string Name
        {
            get { return name; }    
            set { name = value; }   
        }
        public double Mark
        {
            get { return mark; }    
            set { mark = value; }
        }

        public student(int Id, string Name, double Mark) //encapsulate for private attribute
        {
            this.Id = Id;
            this.Name = Name;
            this.Mark = Mark;
        }

        public override string ToString()
        {
            return "ID: " + Id + "\nName: " + Name + "\nMark: " + Mark;
        }
    }
}
