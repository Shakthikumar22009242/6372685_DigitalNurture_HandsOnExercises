namespace EmployeeCrudDemo.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Salary { get; set; }
        public bool Permanent { get; set; }
        public string Department { get; set; } = string.Empty;
        public List<string> Skills { get; set; } = new List<string>();
        public DateTime DateOfBirth { get; set; }
    }
}
