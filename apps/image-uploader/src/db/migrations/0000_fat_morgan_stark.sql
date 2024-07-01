CREATE TABLE IF NOT EXISTS "images" (
	"id" text PRIMARY KEY NOT NULL,
	"size" integer NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(1055) NOT NULL,
	"iamgeId" text,
	"user" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"social_handle" varchar(256) NOT NULL,
	"job_role" varchar(256) NOT NULL,
	"company" varchar(256) NOT NULL,
	"gender" varchar(50) DEFAULT 'male',
	"current_location" varchar(256) NOT NULL,
	"bg_image" varchar(256),
	"avatar" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images" ADD CONSTRAINT "images_iamgeId_images_id_fk" FOREIGN KEY ("iamgeId") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images" ADD CONSTRAINT "images_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_avatar_images_id_fk" FOREIGN KEY ("avatar") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
