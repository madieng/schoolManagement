<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Level;

class LevelFixtures extends Fixture
{
    public const REFERENCE_LEVEL = 'LEVEL_%s';

    public function load(ObjectManager $manager)
    {
        $levels = [
            'PRI' => 'Primaire',
            'ELE' => 'Elémentaire',
            'COL' => 'Collége',
            'LYC' => 'Lycée'
        ];
        foreach ($levels as $code => $label) {
            $level = new Level();
            $level->setLabel($label);
            $manager->persist($level);
            $this->addReference(
                sprintf(self::REFERENCE_LEVEL, $code),
                $level
            );
        }

        $manager->flush();
    }
}
