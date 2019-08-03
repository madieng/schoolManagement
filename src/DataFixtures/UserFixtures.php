<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $genres = ['male', 'female'];
        for ($i = 0; $i < 200; $i++) {
            $genre = $genres[mt_rand(0, 1)];
            $firstname = $faker->firstName($genre);
            $lastname = $faker->name($genre);
            $name = $firstname . '+' . $lastname;
            $color = str_replace('#', '', $faker->hexcolor);

            $user = new User();
            $user
                ->setFirstname($firstname)
                ->setLastname($name)
                ->setEmail($faker->email)
                ->setPassword($this->encoder->encodePassword($user, 'passer'))
                ->setDateOfbirth($faker->dateTimeBetween('-18 years', '-6 years'))
                ->setAvatar(
                    'https://ui-avatars.com/api/?background=fff&color=' . $color . '&name=' . $name
                )
                ->setYearOfGraduation(
                    $faker->dateTimeBetween('-8 years')
                );
            $manager->persist($user);
        }

        $manager->flush();
    }
}
