namespace week_09
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the number of students: ");
            int numStudents = int.Parse(Console.ReadLine());

            student[] studentArray = new student[numStudents];

            for (int i = 0; i < numStudents; i++)
            {
                Console.WriteLine("\nEnter information for student " + (i + 1));

                Console.Write("ID: ");
                int id = int.Parse(Console.ReadLine());

                Console.Write("Name: ");
                string name = Console.ReadLine();

                Console.Write("Mark: ");
                double mark = double.Parse(Console.ReadLine());

                studentArray[i] = new student(id, name, mark);
            }

            Console.WriteLine("\nStudent information:");
            for (int i = 0; i < numStudents; i++)
            {
                Console.WriteLine("\nStudent " + (i + 1));
                Console.WriteLine(studentArray[i]);
            }

        }
    }
}