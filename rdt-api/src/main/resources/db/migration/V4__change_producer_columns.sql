ALTER TABLE producer
    ADD COLUMN state TEXT,
    ADD COLUMN city TEXT,
    ADD COLUMN complement TEXT,
    ADD COLUMN instagram TEXT,
    ADD COLUMN bio_phrase TEXT,
    ADD COLUMN bio_title TEXT,
    ADD COLUMN bio TEXT,
    ADD COLUMN products_title TEXT,
    ADD COLUMN products_subtitle TEXT,
    DROP COLUMN banner_url;