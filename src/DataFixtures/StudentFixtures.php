<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use App\Entity\Student;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class StudentFixtures extends Fixture implements DependentFixtureInterface
{
    public const REFERENCE_STUDENT = 'STUDENT_%s';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $genres = ['male', 'female'];
        for ($i = 0; $i < 5000; $i++) {
            $genre = $genres[mt_rand(0, 1)];
            $firstname = $faker->firstName($genre);
            $lastname = $faker->name($genre);
            $name = $firstname . '+' . $lastname;
            $color = str_replace('#', '', $faker->hexcolor);
            $student = new Student();
            $student
                ->setFirstname($firstname)
                ->setLastname($name)
                ->setEmail($faker->email)
                ->setDateOfbirth($faker->dateTimeBetween('-18 years', '-6 years'))
                ->setAvatar(
                    'https://ui-avatars.com/api/?background=fff&color=' . $color . '&name=' . $name
                )
                ->setYearOfGraduation(
                    $faker->dateTimeBetween('-8 years')
                )
                ->setDegree(
                    $this->getReference(
                        sprintf(DegreeFixtures::REFERENCE_DEGREE, mt_rand(0, 99))
                    )
                );

            $manager->persist($student);
            $this->addReference(
                sprintf(self::REFERENCE_STUDENT, $i),
                $student
            );
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            DegreeFixtures::class
        ];
    }
}
