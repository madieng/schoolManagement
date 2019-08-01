<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use App\Entity\Degree;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class DegreeFixtures extends Fixture implements DependentFixtureInterface
{
    public const REFERENCE_DEGREE = 'DEGREE_%s';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $levels = [
            'PRI',
            'ELE',
            'COL',
            'LYC'
        ];
        for ($i = 0; $i < 100; $i++) {
            $degree = new Degree();
            $degree
                ->setLabel($faker->word)
                ->setCode('DREG' . $i)
                ->setLevel(
                    $this->getReference(
                        sprintf(LevelFixtures::REFERENCE_LEVEL, $levels[mt_rand(0, 3)])
                    )
                );
            $manager->persist($degree);

            $this->addReference(
                sprintf(self::REFERENCE_DEGREE, $i),
                $degree
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
