<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\School;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Level;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SchoolFixtures extends Fixture implements DependentFixtureInterface
{
    public const REFERENCE_SCHOOL = 'SCHOOL_%s';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 50; $i++) {
            $levels = [
                'PRI',
                'ELE',
                'COL',
                'LYC'
            ];
            $school = new School();
            $school
                ->setLabel('Ecole ' . $faker->name)
                ->setCreatedAt($faker->dateTimeBetween('-30 years', '-5 years'))
                ->setDescription($faker->paragraph(mt_rand(5, 10)))
                ->setAddress($faker->address)
                ->setCity($faker->city)
                ->setCountry(
                    $this->getReference(
                        sprintf(CountryFixtures::REFERENCE_COUNTRY, 'SN')
                    )
                )
                ->setLevel(
                    $this->getReference(
                        sprintf(LevelFixtures::REFERENCE_LEVEL, $levels[mt_rand(0, 3)])
                    )
                );
            $manager->persist($school);
            $this->addReference(
                sprintf(self::REFERENCE_SCHOOL, $i),
                $school
            );
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            LevelFixtures::class
        ];
    }
}
