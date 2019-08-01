<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190730195437 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE degree (id INT AUTO_INCREMENT NOT NULL, level_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, code VARCHAR(10) DEFAULT NULL, INDEX IDX_A7A36D635FB14BA7 (level_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE school (id INT AUTO_INCREMENT NOT NULL, country_id INT DEFAULT NULL, level_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, description LONGTEXT DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, city VARCHAR(255) NOT NULL, INDEX IDX_F99EDABBF92F3E70 (country_id), INDEX IDX_F99EDABB5FB14BA7 (level_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, code VARCHAR(3) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE student (id INT AUTO_INCREMENT NOT NULL, degree_id INT DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, date_ofbirth DATETIME NOT NULL, avatar VARCHAR(255) DEFAULT NULL, year_of_graduation DATETIME DEFAULT NULL, INDEX IDX_B723AF33B35C5756 (degree_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE degree ADD CONSTRAINT FK_A7A36D635FB14BA7 FOREIGN KEY (level_id) REFERENCES level (id)');
        $this->addSql('ALTER TABLE school ADD CONSTRAINT FK_F99EDABBF92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE school ADD CONSTRAINT FK_F99EDABB5FB14BA7 FOREIGN KEY (level_id) REFERENCES level (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF33B35C5756 FOREIGN KEY (degree_id) REFERENCES degree (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF33B35C5756');
        $this->addSql('ALTER TABLE school DROP FOREIGN KEY FK_F99EDABBF92F3E70');
        $this->addSql('DROP TABLE degree');
        $this->addSql('DROP TABLE school');
        $this->addSql('DROP TABLE country');
        $this->addSql('DROP TABLE student');
    }
}
