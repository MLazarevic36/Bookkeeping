

INSERT INTO companies VALUES (1, 'Data Drill')

INSERT INTO employees VALUES (1, 'Radnicka 15', 'Aleksa', '02029292962531', 'Milanovic', 1)
INSERT INTO employees VALUES (2, 'Tolstojeva 2', 'Stefan', '1872592376290', 'Zoric', 1)
INSERT INTO employees VALUES (3, 'Balzakova 36', 'Pavle', '3606464929752', 'Mikic', 1)

INSERT INTO users VALUES (1, '$2y$12$FDhzPVA3m4YEF8kvqS5dOuvo7cswS3UrWEh7VhjoF7aT1mLJ2.LOC', 'ADMIN', 'admin', null);
INSERT INTO users VALUES (2, '$2y$12$FDhzPVA3m4YEF8kvqS5dOuvo7cswS3UrWEh7VhjoF7aT1mLJ2.LOC', 'USER', 'user1', 1);
INSERT INTO users VALUES (3, '$2y$12$FDhzPVA3m4YEF8kvqS5dOuvo7cswS3UrWEh7VhjoF7aT1mLJ2.LOC', 'USER', 'user2', 2);
INSERT INTO users VALUES (4, '$2y$12$FDhzPVA3m4YEF8kvqS5dOuvo7cswS3UrWEh7VhjoF7aT1mLJ2.LOC', 'USER', 'user3', 3);

INSERT INTO conto_plans VALUES (1, 1)

INSERT INTO contos VALUES (1, 'UPISANI A NEUPLAĆENI KAPITAL', '00', 'ACTIVE', 'SYNTHETIC', 1)

INSERT INTO conto_classes VALUES (1, '0', 'UPISANI A NEUPLAĆENI KAPITAL I STALNA IMOVINA')
INSERT INTO conto_classes VALUES (2, '1', 'ZALIHE I STALNA SREDSTVA NAMENJENA PRODAJI')
INSERT INTO conto_classes VALUES (3, '2', 'KRATKOROČNA POTRAŽIVANJA I PLASMANI, NOVČANA SREDSTVA I AKTIVNA VREMENSKA RAZGRANIČENjA')
INSERT INTO conto_classes VALUES (4, '3', 'KAPITAL')
INSERT INTO conto_classes VALUES (5, '4', 'DUGOROČNA REZERVISANJA, OBAVEZE I PASIVNA VREMENSKA RAZGRANIČENJA')
INSERT INTO conto_classes VALUES (6, '5', 'RASHODI')
INSERT INTO conto_classes VALUES (7, '6', 'PRIHODI')
INSERT INTO conto_classes VALUES (8, '7', 'OTVARANJE I ZAKLJUČAK RAČUNA STANJA I USPEHA')
INSERT INTO conto_classes VALUES (9, '8', 'OBRAČUN TROŠKOVA I UČINAKA')

INSERT INTO conto_groups VALUES (1, '00', 'UPISANI A NEUPLAĆENI KAPITAL', 1)
INSERT INTO conto_groups VALUES (2, '01', 'NEMATERIJALNA IMOVINA', 1)
INSERT INTO conto_groups VALUES (3, '02', 'NEKRETNINE, POSTROJENJA I OPREMA', 1)
INSERT INTO conto_groups VALUES (4, '03', 'BIOLOŠKA SREDSTVA', 1)
INSERT INTO conto_groups VALUES (5, '04', 'DUGOROČNI FINANSIJSKI PLASMAN', 1)
INSERT INTO conto_groups VALUES (6, '05', 'DUGOROČNA POTRAŽIVANJA', 1)

INSERT INTO conto_sub_groups VALUES (1, '000', 'Upisane a neuplaćene akcije', 1)
INSERT INTO conto_sub_groups VALUES (2, '001', 'Upisani a neuplaćeni udeli i ulozi', 1)
INSERT INTO conto_sub_groups VALUES (3, '010', 'Ulaganja u razvoj', 2)
INSERT INTO conto_sub_groups VALUES (4, '011', 'Koncesije, patenti, licence, robne i uslužne marke', 2)
INSERT INTO conto_sub_groups VALUES (5, '012', 'Softver i ostala prava', 2)
INSERT INTO conto_sub_groups VALUES (6, '013', 'Gudvil', 2)
INSERT INTO conto_sub_groups VALUES (7, '014', 'Ostala nematerijalna imovina', 2)
INSERT INTO conto_sub_groups VALUES (8, '015', 'Nematerijalna imovina u pripremi', 2)
INSERT INTO conto_sub_groups VALUES (9, '016', 'Avansi za nematerijalnu imovinu', 2)
INSERT INTO conto_sub_groups VALUES (10, '019', 'Ispravka vrednosti nematerijalne imovine', 2)
INSERT INTO conto_sub_groups VALUES (11, '020', 'Poljoprivredno i ostalo zemljište', 3)
INSERT INTO conto_sub_groups VALUES (12, '021', 'Građevinsko zemljište', 3)
INSERT INTO conto_sub_groups VALUES (13, '022', 'Građevinski objekti', 3)
INSERT INTO conto_sub_groups VALUES (14, '023', 'Postrojenja i oprema', 3)
INSERT INTO conto_sub_groups VALUES (15, '024', 'Investicione nekretnine', 3)
INSERT INTO conto_sub_groups VALUES (16, '025', 'Ostale nekretnine, postrojenja i oprema', 3)
INSERT INTO conto_sub_groups VALUES (17, '026', 'Nekretnine, postrojenja i oprema u pripremi', 3)
INSERT INTO conto_sub_groups VALUES (18, '027', 'Ulaganja na tuđim nekretninama, postrojenjima i opremi', 3)
INSERT INTO conto_sub_groups VALUES (19, '028', 'Avansi za nekretnine, postrojenja i opremue', 3)
INSERT INTO conto_sub_groups VALUES (20, '029', 'Ispravka vrednosti nekretnina, postrojenja i opreme', 3)


