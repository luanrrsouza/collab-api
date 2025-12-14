import { UserProfile } from "../types/UserProfile";
import db from "../db/connection";

export async function userAlreadyExists(email: String) {
  return db.oneOrNone("SELECT * FROM users WHERE email=$1", [email]);
}

export async function onboarding(onboardingData: UserProfile) {
  return db.oneOrNone(
    "INSERT INTO userProfile (BIO, AVATAR_URL, STACK, SOCIAL_MEDIAS) VALUES ($1,$2,$3,$4) RETURNING *",
    [
      onboardingData.bio,
      onboardingData.avatarUrl,
      onboardingData.stack,
      onboardingData.socialMedias,
    ]
  );
}
