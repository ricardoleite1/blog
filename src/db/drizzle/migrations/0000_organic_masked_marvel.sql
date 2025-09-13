CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`excert` text NOT NULL,
	`content` text NOT NULL,
	`cover_image_url` text NOT NULL,
	`published` integer NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);