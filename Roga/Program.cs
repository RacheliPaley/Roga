using Roga;
using System;
using System.Collections.Generic;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string csvFilePath = "dataSet.csv";

        // Generate the dataset and save it as a CSV file
        GenerateDataset(csvFilePath);

        // Read the dataset from the CSV file
        List<Person> dataset = ReadDataset(csvFilePath);

        // Calculate the average age of all people in the dataset
        double averageAge = CalculateAverageAge(dataset);
        Console.WriteLine($"Average age of all people: {averageAge}");

        // Calculate the total number of people weighing between 120lbs and 140lbs
        int peopleCount = CountPeopleInWeightRange(dataset, 120, 140);
        Console.WriteLine($"Total number of people weighing between 120lbs and 140lbs: {peopleCount}");

        // Calculate the average age of people weighing between 120lbs and 140lbs
        double averageAgeInRange = CalculateAverageAgeInWeightRange(dataset, 120, 140);
        Console.WriteLine($"Average age of people weighing between 120lbs and 140lbs: {averageAgeInRange}");
        Console.ReadKey();
    }

    static void GenerateDataset(string filePath)
    {
        Random random = new Random();
        List<string> dataset = new List<string>();

        for (int i = 0; i < 1000; i++)
        {
            string firstName = GetRandomFirstName();
            string lastName = GetRandomLastName();
            int age = random.Next(18, 71);
            int weight = random.Next(100, 201);
            string gender = GetRandomGender();

            dataset.Add($"{firstName},{lastName},{age},{weight},{gender}");
        }

        File.WriteAllLines(filePath, dataset);
    }

    static List<Person> ReadDataset(string filePath)
    {
        List<Person> dataset = new List<Person>();

        foreach (string line in File.ReadAllLines(filePath))
        {
            string[] data = line.Split(',');

            string firstName = data[0];
            string lastName = data[1];
            int age = int.Parse(data[2]);
            int weight = int.Parse(data[3]);
            string gender = data[4];

            dataset.Add(new Person(firstName, lastName, age, weight, gender));
        }

        return dataset;
    }

    static double CalculateAverageAge(List<Person> dataset)
    {
        double totalAge = 0;
        int count = 0;

        foreach (Person person in dataset)
        {
            totalAge += person.Age;
            count++;
        }

        return totalAge / count;
    }

    static int CountPeopleInWeightRange(List<Person> dataset, int minWeight, int maxWeight)
    {
        int count = 0;

        foreach (Person person in dataset)
        {
            if (person.Weight >= minWeight && person.Weight <= maxWeight)
            {
                count++;
            }
        }

        return count;
    }

    static double CalculateAverageAgeInWeightRange(List<Person> dataset, int minWeight, int maxWeight)
    {
        double totalAge = 0;
        int count = 0;

        foreach (Person person in dataset)
        {
            if (person.Weight >= minWeight && person.Weight <= maxWeight)
            {
                totalAge += person.Age;
                count++;
            }
        }

        return totalAge / count;
    }

    static string GetRandomFirstName()
    {
        // Code to generate a random first name
        // ...

        return "John"; // Replace with actual random name generation code
    }

    static string GetRandomLastName()
    {
        // Code to generate a random last name
        // ...

        return "Doe"; // Replace with actual random name generation code
    }

    static string GetRandomGender()
    {
        // Code to generate a random gender
        // ...

        return "Male"; // Replace with actual random gender generation code
    }
}

