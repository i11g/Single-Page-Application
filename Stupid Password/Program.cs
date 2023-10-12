int number=int.Parse(Console.ReadLine());

for (int first = 2; first <=number; first+=2)
{
	for (int second = 1; second <= number; second += 2)
	{
		Console.WriteLine($"{first}{second}{first * second}");
	}
}
