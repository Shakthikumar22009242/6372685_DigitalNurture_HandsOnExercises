using NUnit.Framework;
using CalculatorApp;

namespace CalculatorApp.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void Init()
        {
            calculator = new Calculator();
            TestContext.WriteLine("SetUp completed");
        }

        [TearDown]
        public void Cleanup()
        {
            TestContext.WriteLine("TearDown completed");
        }

        [Test]
        public void Add_AddsTwoNumbers_ReturnsSum()
        {
            int result = calculator.Add(2, 3);
            Assert.That(result, Is.EqualTo(5));
        }

        [TestCase(1, 2, 3)]
        [TestCase(-1, -1, -2)]
        [TestCase(0, 0, 0)]
        public void Add_WithDifferentInputs_ReturnsExpected(int a, int b, int expected)
        {
            int result = calculator.Add(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void Subtract_SubtractsTwoNumbers_ReturnsDifference()
        {
            int result = calculator.Subtract(5, 3);
            Assert.That(result, Is.EqualTo(2));
        }

        [Test]
        public void Multiply_MultipliesTwoNumbers_ReturnsProduct()
        {
            int result = calculator.Multiply(4, 3);
            Assert.That(result, Is.EqualTo(12));
        }

        [Test]
        public void Divide_DividesTwoNumbers_ReturnsQuotient()
        {
            int result = calculator.Divide(10, 2);
            Assert.That(result, Is.EqualTo(5));
        }

        [Test]
        public void Divide_ByZero_ThrowsDivideByZeroException()
        {
            Assert.Throws<DivideByZeroException>(() => calculator.Divide(10, 0));
        }

        [Test]
        [Ignore("This test is ignored as a demonstration")]
        public void IgnoredTest()
        {
            Assert.Fail("This test should be ignored.");
        }
    }
}
