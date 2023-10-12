int number=int.Parse(Console.ReadLine());

for (int i = 1; i <=number; i++)
{
	for (int j = 1; j <=number; j++)
	{
		for (int k = 0; k <=number; k++)
		{
			int result = i * k * j;
			if(result == number)
			{
                Console.WriteLine($"{i}{j}{k}");
            }
		}
	}
}
