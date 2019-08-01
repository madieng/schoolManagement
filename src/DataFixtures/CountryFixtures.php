<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Country;

class CountryFixtures extends Fixture
{
    public const REFERENCE_COUNTRY = 'COUNTRY_%s';

    public function load(ObjectManager $manager)
    {
        $country = new Country();
        $country
            ->setLabel('Sénégal')
            ->setCode('SN');
        $manager->persist($country);

        $this->addReference(
            sprintf(self::REFERENCE_COUNTRY, 'SN'),
            $country
        );

        $manager->flush();
    }
}
